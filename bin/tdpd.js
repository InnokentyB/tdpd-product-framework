#!/usr/bin/env node

import { cp, mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
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
    else if (arg === "--adapter" || arg === "--target") {
      if (!args[index + 1]) throw new Error(`${arg} requires a value`);
      options[arg.slice(2)] = args[index + 1];
      index += 1;
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  return options;
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
  if (options.command !== "init" || !options.adapter) {
    throw new Error("Usage: tdpd init --adapter <name> [--target <directory>] [--force]\n       tdpd list");
  }
  await install(options.adapter, options.target ?? process.cwd(), options.force);
}

main().catch((error) => {
  process.stderr.write(`tdpd: ${error.message}\n`);
  process.exitCode = 1;
});
