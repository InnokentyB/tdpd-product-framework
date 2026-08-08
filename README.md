# TDPD Product Framework

A platform-independent, source-grounded framework for creating products from evidence and business problems to tested delivery and human acceptance.

**Test-Driven Product Development (TDPD) is an original method by Innokenty Bodrov.** User scenarios become executable end-to-end tests before production implementation. A delivery is complete only after those tests pass and a responsible human accepts the result through UAT.

## What is included

- `core/` — AnalystCraft context/evidence workflow, canonical TDPD workflow, delivery gates, role council, orchestration, recovery, and traceability contracts.
- `templates/` — reusable product brief, specification, scenario matrix, architecture decision, delivery evidence, and UAT record.
- `adapters/` — instructions for Codex, Claude Code, Cursor, Windsurf, GitHub Copilot, and generic agents.
- `bin/tdpd.js` — dependency-free installer for adding the framework to another project.

## Install into a project

From this repository:

```bash
node ./bin/tdpd.js init --adapter codex --target /path/to/project
```

Available adapters:

```text
codex | claude-code | cursor | windsurf | github-copilot | universal
```

The installer creates `.tdpd/` with the shared method and templates, then copies the selected platform adapter. It refuses to overwrite existing files. Use `--force` only after reviewing the reported conflicts.

Run `node ./bin/tdpd.js list` to see supported adapters.

## Run a delivery

Start a local, human-controlled run:

```bash
node ./bin/tdpd.js start --mode manual --target /path/to/project
node ./bin/tdpd.js status --target /path/to/project
node ./bin/tdpd.js audit --target /path/to/project
```

Use `--mode orchestrated` when a single controller will delegate isolated work units. This records the execution mode and contracts; it does not pretend to provide an automated daemon, queue, or merge service.

The orchestration design is informed by [Orchestrated Coding](https://github.com/vnovick/orchestrated-coding). See [`PRIOR_ART.md`](PRIOR_ART.md) for the boundary and attribution.

## Suggested prompts

- “Turn this product idea into a TDPD plan.”
- “Deliver this feature through the complete TDPD workflow.”
- “Audit this repository against TDPD gates.”
- “Resume this stalled product from its earliest failed gate.”

## Status model

Every initiative reports six gates: Context, Problem, Input, Red, Green, and Output/UAT. Context uses the AnalystCraft chain `Source map → System Context Pack → Review Findings → Decision Log`. Passing tests means engineering may be complete; it does not prove product value. Until a responsible human accepts the result, report **engineering complete, awaiting UAT**.

## Distribution

The source repository is public and installable from a local clone. Publishing to npm and granting reuse rights require an explicit licensing decision.
