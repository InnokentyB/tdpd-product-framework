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
  for (const adapter of ["codex", "claude-code", "cline", "cursor", "windsurf", "github-copilot", "universal"]) {
    assert.match(stdout, new RegExp(`^${adapter}$`, "m"));
  }
});

test("lists the four independent framework layers", async () => {
  const { stdout } = await exec(process.execPath, [cli, "layers"]);
  for (const layer of ["product-business", "design-requirements", "implementation-delivery", "launch-operations"]) {
    assert.match(stdout, new RegExp(`^${layer}$`, "m"));
  }
});

test("installs shared core and every platform adapter", async () => {
  const cases = {
    codex: ".codex-plugin/plugin.json",
    "claude-code": "CLAUDE.md",
    cline: ".clinerules/tdpd.md",
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

test("installs Cline auto-activation and an explicit slash-command skill", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-cline-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "cline", "--target", target]);
    const rule = await readFile(join(target, ".clinerules/tdpd.md"), "utf8");
    const skill = await readFile(join(target, ".cline/skills/tdpd/SKILL.md"), "utf8");

    assert.match(rule, /always active/i);
    assert.match(rule, /TDPD ACTIVE/);
    assert.match(skill, /^name: tdpd$/m);
    assert.match(skill, /TDPD ACTIVE \| mode:/);
    assert.match(skill, /Do not default to a CLI/i);
    assert.match(skill, /\.tdpd\/core\/FRAMEWORK\.md/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs a self-contained local CLI and prints actionable next steps", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-local-cli-"));
  try {
    const { stdout } = await exec(process.execPath, [cli, "init", "--adapter", "claude-code", "--target", target]);
    const localCli = join(target, ".tdpd/bin/tdpd.js");

    assert.ok((await readFile(localCli, "utf8")).length > 100, "local CLI should be installed");
    assert.match(stdout, /Next:/);
    assert.match(stdout, /\.tdpd\/bin\/tdpd\.js start --mode manual/);

    await exec(process.execPath, [localCli, "start", "--mode", "manual", "--layer", "design-requirements", "--target", target]);
    const { stdout: statusOutput } = await exec(process.execPath, [localCli, "status", "--target", target]);
    assert.match(statusOutput, /Layers: design-requirements/);
    const { stdout: auditOutput } = await exec(process.execPath, [localCli, "audit", "--layer", "design-requirements", "--target", target]);
    assert.match(auditOutput, /Audit passed for design-requirements/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs layer manifests and handoff contracts", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-layer-manifests-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const expected = [
      ".tdpd/core/FRAMEWORK.md",
      ".tdpd/core/LAYER_CONTRACTS.md",
      ".tdpd/core/layers/PRODUCT_BUSINESS.md",
      ".tdpd/core/layers/DESIGN_REQUIREMENTS.md",
      ".tdpd/core/layers/IMPLEMENTATION_DELIVERY.md",
      ".tdpd/core/layers/LAUNCH_OPERATIONS.md",
      ".tdpd/templates/layer-handoff.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("requires an approved product surface and project organization before implementation", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-interface-contract-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "claude-code", "--target", target]);
    const expected = [
      ".tdpd/templates/product-surface-decision.md",
      ".tdpd/templates/interface-contract.md",
      ".tdpd/templates/interface-inventory.md",
      ".tdpd/templates/project-contract.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 300, `${file} should be installed`);
    }

    const design = await readFile(join(target, ".tdpd/core/DESIGN_REQUIREMENTS.md"), "utf8");
    assert.match(design, /must not default to a CLI/i);
    assert.match(design, /Experience readiness/);
    assert.match(design, /Requirements readiness/);
    assert.match(design, /Engineering readiness/);

    const gates = await readFile(join(target, ".tdpd/core/GATES.md"), "utf8");
    assert.match(gates, /An unspecified product surface blocks the gate/i);

    const scenarios = await readFile(join(target, ".tdpd/templates/scenario-matrix.md"), "utf8");
    assert.match(scenarios, /Approved surface/);

    const adapter = await readFile(join(target, "CLAUDE.md"), "utf8");
    assert.match(adapter, /Do not default to a CLI/i);
  } finally {
    await rm(target, { recursive: true, force: true });
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
    assert.equal(state.gates.opportunity, "not_started");
    assert.equal(state.gates.business, "not_started");
    assert.equal(state.gates.output, "not_started");
    assert.equal(state.gates.gtm, "not_started");
    assert.equal(state.gates.launch, "not_started");
    assert.equal(state.gates.outcome, "not_started");

    const { stdout: statusOutput } = await exec(process.execPath, [cli, "status", "--target", target]);
    assert.match(statusOutput, /Mode: manual/);
    assert.match(statusOutput, /Context: in_progress/);
    assert.match(statusOutput, /Problem: not_started/);
    assert.match(statusOutput, /Opportunity: not_started/);
    assert.match(statusOutput, /Business: not_started/);
    assert.match(statusOutput, /Output\/UAT: not_started/);
    assert.match(statusOutput, /Gtm: not_started/);
    assert.match(statusOutput, /Launch: not_started/);
    assert.match(statusOutput, /Outcome: not_started/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs the complete business model and go-to-market layer", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-business-gtm-layer-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const expected = [
      ".tdpd/core/BUSINESS_GTM.md",
      ".tdpd/templates/buyer-map.md",
      ".tdpd/templates/business-model.md",
      ".tdpd/templates/pricing-experiment.md",
      ".tdpd/templates/unit-economics.md",
      ".tdpd/templates/channel-plan.md",
      ".tdpd/templates/sales-motion.md",
      ".tdpd/templates/onboarding-activation.md",
      ".tdpd/templates/gtm-readiness.md",
      ".tdpd/templates/commercial-decision.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
    const business = await readFile(join(target, ".tdpd/core/BUSINESS_GTM.md"), "utf8");
    assert.match(business, /User value → Buyer value → Willingness to pay → Acquisition → Activation → Retention → Sustainable delivery/);
    assert.match(business, /Proceed, Proceed with constraints, Revise, or Stop/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs the complete outcomes and learning layer", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-outcomes-layer-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const expected = [
      ".tdpd/core/OUTCOMES.md",
      ".tdpd/templates/measurement-contract.md",
      ".tdpd/templates/metric-dictionary.md",
      ".tdpd/templates/instrumentation-map.md",
      ".tdpd/templates/launch-plan.md",
      ".tdpd/templates/outcome-observation.md",
      ".tdpd/templates/outcome-review.md",
      ".tdpd/templates/lifecycle-decision.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
    const outcomes = await readFile(join(target, ".tdpd/core/OUTCOMES.md"), "utf8");
    assert.match(outcomes, /Baseline → Launch → Observe → Compare → Explain → Decide/);
    assert.match(outcomes, /Iterate, Scale, Hold, Roll back, or Sunset/);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});

test("installs the complete opportunity and validation layer", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-opportunity-layer-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    const expected = [
      ".tdpd/core/OPPORTUNITY.md",
      ".tdpd/templates/opportunity-brief.md",
      ".tdpd/templates/assumption-register.md",
      ".tdpd/templates/alternatives-map.md",
      ".tdpd/templates/experiment-contract.md",
      ".tdpd/templates/observation-log.md",
      ".tdpd/templates/opportunity-decision.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
    const opportunity = await readFile(join(target, ".tdpd/core/OPPORTUNITY.md"), "utf8");
    assert.match(opportunity, /Assumption → Hypothesis → Cheapest credible test → Evidence → Decision/);
    assert.match(opportunity, /pass, fail, and inconclusive/i);
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
      ".tdpd/templates/context-baseline.md",
      ".tdpd/templates/reliance-harm-assessment.md",
      ".tdpd/templates/traceability-matrix.md"
    ];
    for (const file of expected) {
      assert.ok((await readFile(join(target, file), "utf8")).length > 100, `${file} should be installed`);
    }
    assert.match(await readFile(join(target, ".tdpd/core/CONTEXT.md"), "utf8"), /Source map → System Context Pack → Review Findings → Decision Log/);
    assert.match(await readFile(join(target, ".tdpd/core/CONTEXT.md"), "utf8"), /previous Green/i);
    assert.match(await readFile(join(target, ".tdpd/templates/context-baseline.md"), "utf8"), /CURRENT \/ STALE \/ BLOCKED/);
    assert.match(await readFile(join(target, ".tdpd/templates/reliance-harm-assessment.md"), "utf8"), /LOW \/ MATERIAL \/ HIGH/);
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

test("starts and audits one layer independently", async () => {
  const target = await mkdtemp(join(tmpdir(), "tdpd-layer-run-"));
  try {
    await exec(process.execPath, [cli, "init", "--adapter", "universal", "--target", target]);
    await exec(process.execPath, [cli, "start", "--mode", "manual", "--layer", "implementation-delivery", "--target", target]);
    const state = JSON.parse(await readFile(join(target, ".tdpd/state/run-state.json"), "utf8"));
    assert.deepEqual(state.selectedLayers, ["implementation-delivery"]);
    assert.equal(state.currentGate, "red");
    assert.deepEqual(Object.keys(state.gates), ["red", "green", "output"]);

    await rm(join(target, ".tdpd/core/BUSINESS_GTM.md"));
    const { stdout } = await exec(process.execPath, [cli, "audit", "--layer", "implementation-delivery", "--target", target]);
    assert.match(stdout, /implementation-delivery/);
    await assert.rejects(
      exec(process.execPath, [cli, "audit", "--target", target]),
      (error) => error.stderr.includes("missing .tdpd/core/BUSINESS_GTM.md")
    );
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
