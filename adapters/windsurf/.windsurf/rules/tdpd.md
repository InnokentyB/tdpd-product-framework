# TDPD Product Delivery

For product and development work, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, and read only its owned modules plus shared gates and roles. Use `full` only for complete lifecycle work.

Select Shape, Plan, Deliver, or Audit. Do not implement from a planning or audit request. Validate evidence, opportunity, business viability, and measurement before delivery. After UAT, validate GTM, govern launch and outcomes, and record the lifecycle decision.

Before implementation, require an approved product surface, interface contract and inventory, and project organization contract. Do not default to a CLI or engineering-only interface when the user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Apply the role council proportionate to risk. Completion requires green executable scenarios and explicit human UAT; otherwise report **engineering complete, awaiting UAT**.
