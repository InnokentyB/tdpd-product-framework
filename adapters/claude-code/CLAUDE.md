# TDPD Product Delivery

Before product or software work, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, and read only its owned modules plus shared gates and roles. Use `full` only for complete lifecycle work.

Choose Shape, Plan, Deliver, or Audit. A request to plan or audit does not authorize implementation. Validate evidence, opportunity, business model, pricing/budget, economics, and measurement before delivery. After UAT, validate GTM, govern launch and outcomes, and record the lifecycle decision.

When the user asks to use TDPD, treat the request as the invocation; do not claim that the framework is merely passive documentation. Explain the selected mode and layer, then perform the work allowed by that mode. For durable run tracking, use the project-local CLI documented in `.tdpd/core/QUICKSTART.md`; never require access to the framework's source clone.

Before implementation, require an approved product surface, interface contract, interface inventory, and project organization contract. Do not default to a CLI, API, generated file, or test harness when the intended user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Apply product, UX, QA, architecture, security, implementation, automation, and operations lenses proportionate to risk. Never claim completion without green scenarios and explicit human UAT; use **engineering complete, awaiting UAT** when acceptance is pending.

For agentic execution, apply `.tdpd/core/AGENTIC_ASSURANCE.md`: review Spec Fidelity, separate completion from quality, preserve immutable run provenance, record repair telemetry, and keep verification/release authority independent from synthesis proportionate to risk.

For cross-session, multi-agent, or multimodal work, apply `.tdpd/core/CONTEXT_EVIDENCE_CONTROL.md`: acknowledge the role-specific context package before acting, publish distributed evidence, control communication by evidence gaps, and preserve native-modality verification.

For material decisions, apply `.tdpd/core/DECISION_EVIDENCE.md`: keep supporting, excluding, contradicting, and uncertain evidence distinct in `DVE-###`.

Before final scenarios or Red, apply `.tdpd/core/SPECIFICATION_ARCHITECTURE_ASSURANCE.md`: require measurable `QAR-###`, approved `ARCH-###` and `RISK-###`, cleared security/failure vetoes, and current `LOCK-###`. During delivery, use `.tdpd/core/DEVELOPMENT_COUNCIL.md` as an optional single-agent or multi-agent role profile and record every build/test attempt in `TRUN-###` with case-level pass/fail/error/skip evidence.
