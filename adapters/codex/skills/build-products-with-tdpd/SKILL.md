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

For agentic work, read `.tdpd/core/AGENTIC_ASSURANCE.md`. Require `FID-###`, completion-before-quality evidence, immutable run provenance, repair telemetry, and `VER-###` independence proportionate to risk. Never let the actor that synthesized or weakened an oracle approve its own release from that evidence alone.

For cross-session, multi-agent, or multimodal work, read `.tdpd/core/CONTEXT_EVIDENCE_CONTROL.md`. Require an acknowledged `CTX-###`, publish material claims to `EVD-###`, record adaptive `COM-###` interventions, and preserve native artifacts plus transformation provenance in `MME-###`. Consensus and textual summaries do not replace gate evidence.

For material decisions, read `.tdpd/core/DECISION_EVIDENCE.md` and require `DVE-###` to distinguish affirmative support, exclusion of alternatives, contradictions, and uncertainty.

Before final scenarios or Red, read `.tdpd/core/SPECIFICATION_ARCHITECTURE_ASSURANCE.md`. Require measurable quality/workload contracts, an approved architecture plan, security and failure challenge, and a current Specification Lock. Use `.tdpd/core/DEVELOPMENT_COUNCIL.md` when explicit development roles help; the profile may run through one agent, multiple agents, or humans. Every build/test attempt produces a case-level `TRUN-###` and required missing/skipped/error results block Green.
