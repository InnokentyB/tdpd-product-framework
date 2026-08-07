# Operating Workflow

## Modes

- **Shape:** validate the problem and highest-risk assumption; select the smallest useful slice.
- **Plan:** create the deterministic specification, scenarios, test matrix, architecture boundary, delivery plan, and UAT plan without implementation.
- **Deliver:** prove red, implement to green, verify proportionately, and hand over for UAT.
- **Audit:** inspect evidence at every gate and recommend the shortest recovery path without changing files unless asked.

## Product loop

1. Frame the problem separately from the proposed solution.
2. Classify assumptions across desirability, usability, feasibility, viability, and safety.
3. Select the smallest slice that can disprove the riskiest assumption.
4. Reconcile sources and specify deterministic externally visible behavior.
5. Write happy, negative, interruption, and recovery scenarios proportionate to risk.
6. Obtain human approval for material architecture boundaries and tradeoffs.
7. Implement e2e tests and prove the intended red state.
8. Implement the smallest coherent production change to green.
9. Verify UX, accessibility, authorization, hostile input, data integrity, observability, rollback, and documentation impact as applicable.
10. Run human UAT and convert gaps into decisions, rules, or scenarios.

## Risk scaling

- **Tiny/local:** apply relevant lenses silently; use concise scenarios, focused checks, and a UAT note.
- **Material user-facing/API/data:** report council findings, architecture boundary, traceability, red/green evidence, and UAT.
- **High risk:** add threat model, authorization matrix, migration/rollback plan, observability, release guardrails, and explicit security/data approval.
