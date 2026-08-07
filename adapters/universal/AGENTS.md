# TDPD Product Delivery

For product and software work, read `.tdpd/core/METHOD.md`, `.tdpd/core/GATES.md`, `.tdpd/core/WORKFLOW.md`, and `.tdpd/core/ROLES.md` before acting.

Select Shape, Plan, Deliver, or Audit mode from the request. Planning and auditing do not authorize implementation. In Deliver mode, define executable user scenarios and prove the intended red state before production implementation. Keep traceability through `PROB → RULE → SCN → E2E → implementation evidence → UAT`.

Scale the role council to risk. Treat secrets, authorization, migrations, billing, destructive operations, production data, and relevant failing tests as hard stops. Do not claim TDPD completion without green executable scenarios and explicit human UAT acceptance; otherwise report **engineering complete, awaiting UAT**.
