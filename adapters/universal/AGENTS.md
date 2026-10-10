# TDPD Product Delivery

For product and software work, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, then read only its owned modules plus shared gates and roles. Use `full` only when the request spans the complete lifecycle.

Select Shape, Plan, Deliver, or Audit mode from the request. Planning and auditing do not authorize implementation. Build evidence; validate opportunity, buyer, value exchange, pricing/budget, economics, and measurement before delivery. After UAT, validate GTM readiness, govern launch and production outcomes, and record the lifecycle decision. Keep end-to-end traceability.

Before implementation, require an approved product surface, interface contract and inventory, and project organization contract. Do not default to a CLI or another engineering interface when the user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Scale the role council to risk. Treat secrets, authorization, migrations, billing, destructive operations, production data, and relevant failing tests as hard stops. Do not claim TDPD completion without green executable scenarios and explicit human UAT acceptance; otherwise report **engineering complete, awaiting UAT**.

For agentic execution, apply `.tdpd/core/AGENTIC_ASSURANCE.md`: review Spec Fidelity, separate completion from quality, preserve immutable run provenance, record repair telemetry, and keep verification/release authority independent from synthesis proportionate to risk.

For cross-session, multi-agent, or multimodal work, apply `.tdpd/core/CONTEXT_EVIDENCE_CONTROL.md`: require an acknowledged role-specific Context Package, publish distributed claims to the Evidence Ledger, select evidence-seeking interventions instead of fixed debate, and verify native visual/audio/video/interface evidence through the experienced product surface.

For material decisions, apply `.tdpd/core/DECISION_EVIDENCE.md`: require `DVE-###` and never treat evidence that only rejects an alternative as affirmative support for the selected option.

Before final scenarios or Red, apply `.tdpd/core/SPECIFICATION_ARCHITECTURE_ASSURANCE.md`: measurable `QAR-###`, approved architecture and security/failure review, and `LOCK-###` are mandatory. Use `.tdpd/core/DEVELOPMENT_COUNCIL.md` for optional role execution. Record each build/test attempt as `TRUN-###`; missing, skipped, errored, or infrastructure-failed required checks never count as Green.
