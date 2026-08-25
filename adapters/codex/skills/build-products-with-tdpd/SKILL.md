---
name: build-products-with-tdpd
description: "Run the modular TDPD Product Framework as one or more independent but connected layers: Product & Business, Design & Requirements, Implementation & Delivery, and Launch & Operations. Use for source-grounded opportunity/business validation, requirements and architecture, test-first implementation and UAT, GTM/launch/operations, outcome learning, layer handoffs, or full lifecycle product creation and audit."
---

# Build Products with TDPD

Read `.tdpd/core/FRAMEWORK.md`, select the smallest relevant layer manifest under `.tdpd/core/layers/`, then read its owned modules plus `.tdpd/core/GATES.md`, `.tdpd/core/ROLES.md`, and `.tdpd/core/LAYER_CONTRACTS.md`. Use `full` only when the request spans the complete lifecycle. A standalone layer accepts external inputs that satisfy its entry contract and must not silently rewrite upstream decisions.

Select **Shape**, **Plan**, **Deliver**, or **Audit** from the request. Do not infer implementation permission from planning or audit work. In Deliver mode, obtain approval for material architecture boundaries, implement executable user scenarios first, prove the intended red state, implement the smallest coherent change to green, verify proportionately, and hand over for human UAT.

Before Deliver mode, require an approved product surface (`SURF-###`), interface contract and inventory, and project organization contract (`PROJ-###`). If the surface is unspecified, stop at the Input gate; do not default to a CLI, API, generated file, or test harness. E2E acceptance must exercise the approved user surface.

When agent execution may cause external or production side effects, require an approved `AUT-###` Autonomy Contract before Input passes and an `ER-###` Execution Readiness record after Red but before implementation. Keep action identity auditable, authority least-privileged, blast radius bounded, and rollback owned. Convert every material UAT reject, rollback, or escaped defect into a human-approved `REG-###` Regression Memory treatment. Report accepted-outcome and human-orchestration measures; do not use code volume or run duration alone as success.

Use `templates/layer-handoff.md` at boundaries. Maintain provenance and traceability across consumed and produced contracts. Route downstream discoveries back as evidence-backed change requests to the owning layer. Scale the role council to risk and report the selected layer, entry status, exit status, and unresolved handoffs.
