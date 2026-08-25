# TDPD Quick Start

TDPD works through two complementary interfaces:

1. **Natural-language work** — ask the connected agent to Shape, Plan, Deliver, or Audit a product initiative with TDPD.
2. **Local run tracking** — use the installed CLI to create durable state, inspect gates, and audit framework integrity.

## Start with the agent

Examples:

- `Shape this product idea with TDPD.`
- `Plan this feature in the design-requirements layer. Do not implement it.`
- `Deliver this approved specification through the implementation-delivery layer.`
- `Audit this repository against the launch-operations gates.`

The platform adapter in the project root tells the agent how to load the framework. Planning and auditing do not authorize production changes. Delivery is not complete until executable scenarios are green and a responsible human accepts the result through UAT.

Before delivery, the agent must obtain an explicit product-surface decision and complete the interface and project organization contracts. If the intended surface is unclear, clarify or block the Input gate; do not let implementation convenience silently turn a graphical product into a CLI.

If agent work may change external systems or production state, complete `templates/autonomy-contract.md` before Input passes. After Red, complete `templates/execution-readiness.md` before implementation begins. Material UAT rejects, rollbacks, and escaped defects go to `templates/regression-memory.md` instead of disappearing into chat or an unversioned prompt.

## Track a run locally

Run these commands from the installed project's root:

```bash
node ./.tdpd/bin/tdpd.js layers
node ./.tdpd/bin/tdpd.js start --mode manual --layer design-requirements
node ./.tdpd/bin/tdpd.js status
node ./.tdpd/bin/tdpd.js audit --layer design-requirements
```

Omit `--layer` to run the complete lifecycle. A run is not started automatically during installation because selecting its scope is a product decision.

The CLI tracks and validates the process. The agent performs the substantive work and maintains the evidence, decisions, scenarios, delivery records, and handoffs.
