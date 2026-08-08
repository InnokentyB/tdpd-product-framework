---
name: build-products-with-tdpd
description: Run source-grounded end-to-end product creation with the AnalystCraft evidence workflow and Test-Driven Product Development (TDPD), from source collection, source maps, context packs, findings, and decision logs through deterministic specification, user scenarios, executable e2e tests, implementation governance, release, and human UAT. Use when Codex needs to consolidate product context, preserve decision traceability, shape an idea, plan an MVP, build or change a user-facing product, coordinate product/UX/QA/architecture/security/development roles, recover a stalled project, or audit delivery readiness and provenance.
---

# Build Products with TDPD

Read `.tdpd/core/METHOD.md`, `.tdpd/core/CONTEXT.md`, `.tdpd/core/GATES.md`, `.tdpd/core/WORKFLOW.md`, and `.tdpd/core/ROLES.md`. Use templates from `.tdpd/templates/`. Build the AnalystCraft evidence chain `Source map → System Context Pack → Review Findings → Decision Log` before committing the specification; scale artifact size to the task but never omit provenance, unsupported assumptions, or unresolved contradictions.

Select **Shape**, **Plan**, **Deliver**, or **Audit** from the request. Do not infer implementation permission from planning or audit work. In Deliver mode, obtain approval for material architecture boundaries, implement executable user scenarios first, prove the intended red state, implement the smallest coherent change to green, verify proportionately, and hand over for human UAT.

Maintain `S → F/C/G/A/R → DL → PROB → RULE → SCN → E2E/MANUAL → WORK/HANDOFF → UAT`. Scale the role council to risk and use veto only with evidence, a blocked gate, and a clearing condition. Never claim TDPD completion without green executable scenarios and explicit human UAT; otherwise report **engineering complete, awaiting UAT**.
