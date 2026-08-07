import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
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
