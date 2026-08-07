# TDPD Product Framework

A platform-independent framework for creating products from a business problem to tested delivery and human acceptance.

**Test-Driven Product Development (TDPD) is an original method by Innokenty Bodrov.** User scenarios become executable end-to-end tests before production implementation. A delivery is complete only after those tests pass and a responsible human accepts the result through UAT.

## What is included

- `core/` — canonical workflow, delivery gates, role council, and traceability contract.
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

## Suggested prompts

- “Turn this product idea into a TDPD plan.”
- “Deliver this feature through the complete TDPD workflow.”
- “Audit this repository against TDPD gates.”
- “Resume this stalled product from its earliest failed gate.”

## Status model

Every initiative reports five gates: Problem, Input, Red, Green, and Output/UAT. Passing tests means engineering may be complete; it does not prove product value. Until a responsible human accepts the result, report **engineering complete, awaiting UAT**.

## Distribution

The package is currently private and installable from a local clone. Publishing to npm or a public Git host requires an explicit licensing and distribution decision.
