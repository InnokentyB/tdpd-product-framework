# TDPD Product Delivery

Before product or software work, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, and read only its owned modules plus shared gates and roles. Use `full` only for complete lifecycle work.

Choose Shape, Plan, Deliver, or Audit. A request to plan or audit does not authorize implementation. Validate evidence, opportunity, business model, pricing/budget, economics, and measurement before delivery. After UAT, validate GTM, govern launch and outcomes, and record the lifecycle decision.

When the user asks to use TDPD, treat the request as the invocation; do not claim that the framework is merely passive documentation. Explain the selected mode and layer, then perform the work allowed by that mode. For durable run tracking, use the project-local CLI documented in `.tdpd/core/QUICKSTART.md`; never require access to the framework's source clone.

Before implementation, require an approved product surface, interface contract, interface inventory, and project organization contract. Do not default to a CLI, API, generated file, or test harness when the intended user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Apply product, UX, QA, architecture, security, implementation, automation, and operations lenses proportionate to risk. Never claim completion without green scenarios and explicit human UAT; use **engineering complete, awaiting UAT** when acceptance is pending.
