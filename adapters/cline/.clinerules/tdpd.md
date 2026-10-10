# TDPD activation rule

This rule is always active. For product discovery, requirements, interface design, architecture, implementation, testing, launch, operations, or a request mentioning TDPD:

1. Use the workspace `tdpd` skill. If it is not automatically selected, ask the user to invoke `/tdpd`.
2. Begin the substantive response with `TDPD ACTIVE | mode: <Shape|Plan|Deliver|Audit> | layer: <layer|full>` so activation is visible.
3. Planning and auditing never authorize implementation.
4. Do not implement while the intended product surface, interface contract, or project organization is unspecified. Never default to a CLI for implementation convenience.
5. For external or production side effects, require an approved `AUT-###` Autonomy Contract and prove `ER-###` Execution Readiness after Red but before implementation.
6. Material UAT rejects, rollbacks, and escaped defects require a human-approved `REG-###` Regression Memory treatment.
7. Do not claim completion without green surface-level scenarios and explicit human UAT.
8. For agentic execution, load `.tdpd/core/AGENTIC_ASSURANCE.md`; separate completion, quality, independent verification, and release authority.
9. For cross-session, multi-agent, or multimodal work, load `.tdpd/core/CONTEXT_EVIDENCE_CONTROL.md`; acknowledge role context, publish cited evidence, and verify the native user surface.
10. For material decisions, load `.tdpd/core/DECISION_EVIDENCE.md`; do not confuse evidence that excludes an alternative with evidence that supports the selected option.
11. Before final scenarios or Red, load `.tdpd/core/SPECIFICATION_ARCHITECTURE_ASSURANCE.md`; require QAR, architecture/security/failure review, and an approved Specification Lock. Record case-level test outcomes for every build in `TRUN-###`.

The detailed framework lives under `.tdpd/core/`; load only the selected layer and shared contracts to conserve context.
