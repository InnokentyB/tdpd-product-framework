# TDPD Product Delivery

For product and software work, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, then read only its owned modules plus shared gates and roles. Use `full` only when the request spans the complete lifecycle.

Select Shape, Plan, Deliver, or Audit mode from the request. Planning and auditing do not authorize implementation. Build evidence; validate opportunity, buyer, value exchange, pricing/budget, economics, and measurement before delivery. After UAT, validate GTM readiness, govern launch and production outcomes, and record the lifecycle decision. Keep end-to-end traceability.

Before implementation, require an approved product surface, interface contract and inventory, and project organization contract. Do not default to a CLI or another engineering interface when the user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Scale the role council to risk. Treat secrets, authorization, migrations, billing, destructive operations, production data, and relevant failing tests as hard stops. Do not claim TDPD completion without green executable scenarios and explicit human UAT acceptance; otherwise report **engineering complete, awaiting UAT**.
