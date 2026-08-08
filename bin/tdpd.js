#!/usr/bin/env node

import { cp, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const adaptersRoot = join(root, "adapters");

async function adapters() {
  return (await readdir(adaptersRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

async function filesUnder(path) {
  const result = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name);
    if (entry.isDirectory()) result.push(...await filesUnder(full));
    else result.push(full);
  }
  return result;
}

function parse(args) {
  const options = { command: args[0], force: false };
  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--force") options.force = true;
    else if (arg === "--adapter" || arg === "--target" || arg === "--mode") {
      if (!args[index + 1]) throw new Error(`${arg} requires a value`);
      options[arg.slice(2)] = args[index + 1];
      index += 1;
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  return options;
}

function targetDirectory(target) {
  const targetRoot = resolve(target ?? process.cwd());
  if (!existsSync(targetRoot)) throw new Error(`Target must be an existing directory: ${targetRoot}`);
  return targetRoot;
}

async function readState(targetRoot) {
  const statePath = join(targetRoot, ".tdpd", "state", "run-state.json");
  if (!existsSync(statePath)) throw new Error(`No TDPD run state found in ${targetRoot}. Run 'tdpd start' first.`);
  try {
    return JSON.parse(await readFile(statePath, "utf8"));
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error("run-state.json is not valid JSON");
    throw error;
  }
}

async function start(mode, target) {
  if (!new Set(["manual", "orchestrated"]).has(mode)) {
    throw new Error("--mode must be 'manual' or 'orchestrated'");
  }
  const targetRoot = targetDirectory(target);
  const frameworkRoot = join(targetRoot, ".tdpd");
  if (!existsSync(join(frameworkRoot, "core", "METHOD.md"))) {
    throw new Error(`TDPD is not initialized in ${targetRoot}. Run 'tdpd init' first.`);
  }
  const stateDirectory = join(frameworkRoot, "state");
  const statePath = join(stateDirectory, "run-state.json");
  if (existsSync(statePath)) throw new Error(`Run state already exists: ${statePath}`);

  const now = new Date().toISOString();
  const state = {
    schemaVersion: 1,
    mode,
    runtime: "manual-controller",
    status: "active",
    currentGate: "context",
    gates: {
      context: "in_progress",
      problem: "not_started",
      input: "not_started",
      red: "not_started",
      green: "not_started",
      output: "not_started"
    },
    workUnits: [],
    blockers: [],
    createdAt: now,
    updatedAt: now
  };
  await mkdir(stateDirectory, { recursive: true });
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
  process.stdout.write(`Started ${mode} TDPD run in ${targetRoot}\n`);
}

function labelGate(gate) {
  return gate === "output" ? "Output/UAT" : `${gate[0].toUpperCase()}${gate.slice(1)}`;
}

async function status(target) {
  const targetRoot = targetDirectory(target);
  const state = await readState(targetRoot);
  process.stdout.write(`TDPD run: ${state.status}\nMode: ${state.mode}\nRuntime: ${state.runtime}\nCurrent gate: ${labelGate(state.currentGate)}\n`);
  for (const gate of ["context", "problem", "input", "red", "green", "output"]) {
    process.stdout.write(`${labelGate(gate)}: ${state.gates?.[gate] ?? "missing"}\n`);
  }
  process.stdout.write(`Work units: ${Array.isArray(state.workUnits) ? state.workUnits.length : "invalid"}\n`);
}

async function audit(target) {
  const targetRoot = targetDirectory(target);
  const required = [
    ".tdpd/core/METHOD.md",
    ".tdpd/core/CONTEXT.md",
    ".tdpd/core/GATES.md",
    ".tdpd/core/WORKFLOW.md",
    ".tdpd/core/ROLES.md",
    ".tdpd/core/ORCHESTRATION.md",
    ".tdpd/core/RECOVERY.md",
    ".tdpd/templates/work-unit.md",
    ".tdpd/templates/handoff.md",
    ".tdpd/templates/run-state.yaml",
    ".tdpd/templates/dependency-map.yaml",
    ".tdpd/templates/recovery-record.md",
    ".tdpd/templates/source-map.md",
    ".tdpd/templates/system-context-pack.md",
    ".tdpd/templates/review-findings.md",
    ".tdpd/templates/decision-log.md",
    ".tdpd/templates/traceability-matrix.md"
  ];
  const issues = required.filter((file) => !existsSync(join(targetRoot, file))).map((file) => `missing ${file}`);
  const state = await readState(targetRoot);
  const gateNames = ["context", "problem", "input", "red", "green", "output"];
  const gateStatuses = new Set(["not_started", "in_progress", "passed", "blocked"]);
  if (state.schemaVersion !== 1) issues.push("unsupported state schemaVersion");
  if (!["manual", "orchestrated"].includes(state.mode)) issues.push("invalid run mode");
  if (!gateNames.includes(state.currentGate)) issues.push("invalid currentGate");
  if (!state.gates || gateNames.some((gate) => !gateStatuses.has(state.gates[gate]))) issues.push("invalid gate status map");
  if (!Array.isArray(state.workUnits)) issues.push("workUnits must be an array");
  if (!Array.isArray(state.blockers)) issues.push("blockers must be an array");
  if (issues.length) throw new Error(`Audit failed:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  process.stdout.write(`Audit passed for ${targetRoot}\n`);
}

async function install(adapter, target, force) {
  const available = await adapters();
  if (!available.includes(adapter)) {
    throw new Error(`Unknown adapter '${adapter}'. Available: ${available.join(", ")}`);
  }

  const targetRoot = resolve(target);
  if (!existsSync(targetRoot) || !(await stat(targetRoot)).isDirectory()) {
    throw new Error(`Target must be an existing directory: ${targetRoot}`);
  }

  const sources = [
    { source: join(root, "core"), destination: join(targetRoot, ".tdpd", "core") },
    { source: join(root, "templates"), destination: join(targetRoot, ".tdpd", "templates") },
    { source: join(adaptersRoot, adapter), destination: targetRoot }
  ];

  const conflicts = [];
  for (const item of sources) {
    for (const sourceFile of await filesUnder(item.source)) {
      const destinationFile = join(item.destination, relative(item.source, sourceFile));
      if (existsSync(destinationFile)) conflicts.push(relative(targetRoot, destinationFile));
    }
  }

  if (conflicts.length && !force) {
    throw new Error(`Refusing to overwrite existing files:\n${conflicts.map((file) => `- ${file}`).join("\n")}\nReview them, then rerun with --force if replacement is intended.`);
  }

  for (const item of sources) {
    await mkdir(item.destination, { recursive: true });
    await cp(item.source, item.destination, { recursive: true, force });
  }

  process.stdout.write(`Installed TDPD with '${adapter}' into ${targetRoot}\n`);
}

async function main() {
  const options = parse(process.argv.slice(2));
  if (options.command === "list") {
    process.stdout.write(`${(await adapters()).join("\n")}\n`);
    return;
  }
  if (options.command === "start") {
    await start(options.mode, options.target);
    return;
  }
  if (options.command === "status") {
    await status(options.target);
    return;
  }
  if (options.command === "audit") {
    await audit(options.target);
    return;
  }
  if (options.command !== "init" || !options.adapter) {
    throw new Error("Usage:\n  tdpd init --adapter <name> [--target <directory>] [--force]\n  tdpd start --mode <manual|orchestrated> [--target <directory>]\n  tdpd status [--target <directory>]\n  tdpd audit [--target <directory>]\n  tdpd list");
  }
  await install(options.adapter, options.target ?? process.cwd(), options.force);
}

main().catch((error) => {
  process.stderr.write(`tdpd: ${error.message}\n`);
  process.exitCode = 1;
});
