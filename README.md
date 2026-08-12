# TDPD Product Framework

A platform-independent product framework with four connected but independently adoptable layers.

**Test-Driven Product Development (TDPD) is an original method by Innokenty Bodrov.** User scenarios become executable end-to-end tests before production implementation. A delivery is complete only after those tests pass and a responsible human accepts the result through UAT.

## What is included

- `core/FRAMEWORK.md` — four-layer architecture and composition rules.
- `core/layers/` — Product & Business, Design & Requirements, Implementation & Delivery, and Launch & Operations manifests.
- `core/` — independently owned methods plus shared evidence, gates, roles, traceability, orchestration, and recovery.
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
codex | claude-code | cline | cursor | windsurf | github-copilot | universal
```

The installer creates `.tdpd/` with the shared method, templates, quick-start guide, and a project-local CLI, then copies the selected platform adapter. It refuses to overwrite existing files. Use `--force` only after reviewing the reported conflicts.

After installation, no source clone is needed. From the target project run:

```bash
node ./.tdpd/bin/tdpd.js start --mode manual --layer product-business
node ./.tdpd/bin/tdpd.js status
```

Or invoke the framework through the agent in natural language: “Shape this product idea with TDPD.” See `.tdpd/core/QUICKSTART.md` in the installed project.

Run `node ./bin/tdpd.js list` to see supported adapters.

### Cline in VS Code

Install with `--adapter cline`. The adapter adds an always-on workspace rule and a project skill. Invoke `/tdpd` in Cline to force activation. A correctly activated response starts with `TDPD ACTIVE | mode: ... | layer: ...`. Confirm the rule and skill are enabled in Cline's Rules/Skills panel; in a multi-root workspace, open the installed project as the primary workspace folder.

## Select a layer

```bash
node ./bin/tdpd.js layers
node ./bin/tdpd.js start --mode manual --layer design-requirements --target /path/to/project
node ./bin/tdpd.js audit --layer implementation-delivery --target /path/to/project
```

Available layers are `product-business`, `design-requirements`, `implementation-delivery`, and `launch-operations`. Omit `--layer` to compose the complete lifecycle. Layers exchange versioned contracts through `templates/layer-handoff.md` and may consume equivalent artifacts produced by another process.

The Design & Requirements layer blocks implementation until three checks pass:

- **Experience readiness:** the intended product surface and interface are explicit and approved.
- **Requirements readiness:** behavior, quality attributes, scenarios, and traceability are deterministic.
- **Engineering readiness:** project organization, architecture, commands, environments, delivery, and operations are defined.

An agent must never select a CLI, API, or other engineering-only surface merely because the intended interface is missing. E2E acceptance exercises the approved product surface.

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

The complete lifecycle reports eleven gates, but a standalone layer reports only the gates it owns. Cross-layer changes travel as evidence-backed handoffs rather than silent downstream rewrites.

## Distribution

The source repository is public and installable from a local clone. Publishing to npm and granting reuse rights require an explicit licensing decision.
