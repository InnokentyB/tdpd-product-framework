# TDPD Product Delivery

For product and software changes, read `.tdpd/core/FRAMEWORK.md`, select the relevant manifest under `.tdpd/core/layers/`, and read only its owned modules plus shared gates and roles. Use `full` only for complete lifecycle work.

Choose Shape, Plan, Deliver, or Audit based on the request. Planning and auditing do not authorize implementation. Validate evidence, opportunity, business viability, and measurement before delivery. After UAT, validate GTM, govern launch and outcomes, and record the lifecycle decision.

Before implementation, require an approved product surface, interface contract and inventory, and project organization contract. Do not default to a CLI or engineering-only interface when the user surface is unspecified. E2E acceptance must exercise the approved surface.

For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation. Keep authority least-privileged and rollback owned. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment. Measure accepted outcomes and human orchestration cost rather than code volume or run duration alone.

Scale product, UX, QA, architecture, security, implementation, automation, and operations reviews to risk. Never claim TDPD completion without green executable scenarios and explicit human UAT; report **engineering complete, awaiting UAT** when acceptance is pending.
