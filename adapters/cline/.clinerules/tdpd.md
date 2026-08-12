# TDPD activation rule

This rule is always active. For product discovery, requirements, interface design, architecture, implementation, testing, launch, operations, or a request mentioning TDPD:

1. Use the workspace `tdpd` skill. If it is not automatically selected, ask the user to invoke `/tdpd`.
2. Begin the substantive response with `TDPD ACTIVE | mode: <Shape|Plan|Deliver|Audit> | layer: <layer|full>` so activation is visible.
3. Planning and auditing never authorize implementation.
4. Do not implement while the intended product surface, interface contract, or project organization is unspecified. Never default to a CLI for implementation convenience.
5. Do not claim completion without green surface-level scenarios and explicit human UAT.

The detailed framework lives under `.tdpd/core/`; load only the selected layer and shared contracts to conserve context.
