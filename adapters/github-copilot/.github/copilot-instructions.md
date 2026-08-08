# TDPD Product Delivery

For product and software changes, read `.tdpd/core/METHOD.md`, `.tdpd/core/CONTEXT.md`, `.tdpd/core/GATES.md`, `.tdpd/core/WORKFLOW.md`, and `.tdpd/core/ROLES.md`.

Choose Shape, Plan, Deliver, or Audit based on the request. Planning and auditing do not authorize implementation. Build the AnalystCraft evidence chain before committing the specification. For delivery, define observable user scenarios and prove their e2e tests fail for the intended missing behavior before writing production code. Keep `S → F/C/G/A/R → DL → PROB → RULE → SCN → E2E/MANUAL → WORK/HANDOFF → UAT` traceability.

Scale product, UX, QA, architecture, security, implementation, automation, and operations reviews to risk. Never claim TDPD completion without green executable scenarios and explicit human UAT; report **engineering complete, awaiting UAT** when acceptance is pending.
