import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const exec = promisify(execFile);
const cli = resolve("bin/tdpd.js");

test("lists every supported adapter", async () => {
  const { stdout } = await exec(process.execPath, [cli, "list"]);
  for (const adapter of ["codex", "claude-code", "cursor", "windsurf", "github-copilot", "universal"]) {
    assert.match(stdout, new RegExp(`^${adapter}$`, "m"));
  }
});

test("installs shared core and every platform adapter", async () => {
  const cases = {
    codex: ".codex-plugin/plugin.json",
    "claude-code": "CLAUDE.md",
    cursor: ".cursor/rules/tdpd.mdc",
    windsurf: ".windsurf/rules/tdpd.md",
    "github-copilot": ".github/copilot-instructions.md",
    universal: "AGENTS.md"
  };

  for (const [adapter, instructionFile] of Object.entries(cases)) {
    const target = await mkdtemp(join(tmpdir(), `tdpd-${adapter}-`));
    try {
      await exec(process.execPath, [cli, "init", "--adapter", adapter, "--target", target]);
      assert.match(await readFile(join(target, ".tdpd/core/METHOD.md"), "utf8"), /original method by Innokenty Bodrov/);
      assert.ok((await readFile(join(target, instructionFile), "utf8")).length > 20);
    } finally {
      await rm(target, { recursive: true, force: true });
    }
  }
});

test("refuses to overwrite an existing installation", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-conflict-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    await assert.rejects(
      exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]),
      (error) => error.stderr.includes("Refusing to overwrite existing files")
    );
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("starts a manual run and reports its durable status", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-manual-run-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const { stdout: startOutput } = await exec(process.execPath, [cli, "start", "--mode", "manual", "--target", target]);
    assert.match(startOutput, /Started manual TDPD run/);

    const state = JSON.parse(await readFile(join(target, ".tdpd/state/run-state.json"), "utf8"));
    assert.equal(state.schemaVersion, 1);
    assert.equal(state.mode, "manual");
    assert.equal(state.status, "active");
    assert.equal(state.currentGate, "context");
    assert.equal(state.gates.context, "in_progress");
    assert.equal(state.gates.problem, "not_started");
    assert.equal(state.gates.output, "not_started");

    const { stdout: statusOutput } = await exec(process.execPath, [cli, "status", "--target", target]);
    assert.match(statusOutput, /Mode: manual/);
    assert.match(statusOutput, /Context: in_progress/);
    assert.match(statusOutput, /Problem: not_started/);
    assert.match(statusOutput, /Output\/UAT: not_started/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs the complete AnalystCraft evidence layer", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-context-layer-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const expected = [
      ".tdpd/core/CONTEXT.md",
      ".tdpd/templates/source-map.md",
      ".tdpd/templates/system-context-pack.md",
      ".tdpd/templates/review-findings.md",
      ".tdpd/templates/decision-log.md",
      ".tdpd/templates/traceability-matrix.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
    assert.match(await readFile(join(target, ".tdpd/core/CONTEXT.md"), "utf8"), /Source map → System Context Pack → Review Findings → Decision Log/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("starts an orchestrated run without claiming an automated runtime", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-orchestrated-run-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "codex", "--target", target]);
    await exec(process.execPath, [cli, "start", "--mode", "orchestrated", "--target", target]);
    const state = JSON.parse(await readFile(join(target, ".tdpd/state/run-state.json"), "utf8"));
    assert.equal(state.mode, "orchestrated");
    assert.equal(state.runtime, "manual-controller");
    assert.deepEqual(state.workUnits, []);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("refuses to replace an existing run state", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-run-conflict-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    await exec(process.execPath, [cli, "start", "--mode", "manual", "--target", target]);
    await assert.rejects(
      exec(process.execPath, [cli, "start", "--mode", "manual", "--target", target]),
      (error) => error.stderr.includes("Run state already exists")
    );
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("audits a valid installation and rejects corrupt state", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-audit-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "github-copilot", "--target", target]);
    await exec(process.execPath, [cli, "start", "--mode", "manual", "--target", target]);
    const { stdout } = await exec(process.execPath, [cli, "audit", "--target", target]);
    assert.match(stdout, /Audit passed/);

    await writeFile(join(target, ".tdpd/state/run-state.json"), "{ broken", "utf8");
    await assert.rejects(
      exec(process.execPath, [cli, "audit", "--target", target]),
      (error) => error.stderr.includes("run-state.json is not valid JSON")
    );
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});
