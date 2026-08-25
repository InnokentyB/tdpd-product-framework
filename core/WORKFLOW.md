# Operating Workflow

This document describes `full` composition. For independent adoption, start with [FRAMEWORK.md](FRAMEWORK.md), select a layer manifest in `core/layers/`, and satisfy only that layer's entry and exit contracts.

## Modes

- **Shape:** validate the problem and highest-risk assumption; select the smallest useful slice.
- **Plan:** approve the product surface, create the interface and project organization contracts, deterministic specification, scenarios, test matrix, architecture boundary, delivery plan, and UAT plan without implementation.
- **Deliver:** prove red, implement to green, verify proportionately, and hand over for UAT.
- **Audit:** inspect evidence at every gate and recommend the shortest recovery path without changing files unless asked.

## Product loop

1. Frame the context-collection objective and inventory sources.
2. Build source-linked context, expose findings, record decisions, and assess readiness.
3. Frame the problem separately from the proposed solution.
4. Map current alternatives and rank assumptions across desirability, usability, feasibility, viability, compliance/trust, and adoption.
5. Run the cheapest credible experiments with thresholds declared before observing results.
6. Record a human opportunity decision: proceed, proceed with constraints, revise, or stop.
7. Validate buyer, value exchange, pricing or budget commitment, economic ranges, and capacity; record the commercial decision.
8. Select the smallest product bet within its investment and economic boundaries and kill criteria.
9. Freeze the measurement contract, metric definitions, and instrumentation plan.
10. Approve the primary product surface and explicitly exclude unintended substitutes such as an implementation-convenient CLI.
11. Create the interface contract and inventory; cover journeys, navigation, feedback states, accessibility, responsive behavior, and manual UAT judgments.
12. Specify deterministic externally visible behavior traced to evidence and decisions.
13. Define project organization, runtime commands, environments, CI/deployment, operability, and rollback.
14. When agent work can cause external or production side effects, approve the Autonomy Contract: identity, allowed actions, least privilege, blast radius, approval boundaries, stop signals, rollback, and recovery owner.
15. Pass Experience, Requirements, Engineering, and applicable Autonomy readiness.
16. Write happy, negative, interruption, and recovery scenarios through the approved surface proportionate to risk.
17. Obtain human approval for material architecture boundaries and tradeoffs.
18. Implement e2e tests and prove the intended red state.
19. Prove Execution Readiness: sandbox, tools, test/staging environment, observability, stop conditions, and rollback work under the approved autonomy boundary.
20. Implement the smallest coherent production change to green.
21. Verify UX, accessibility, authorization, hostile input, data integrity, billing, observability, rollback, and documentation impact as applicable.
22. Run human UAT and convert material rejection, rollback, or escaped-defect evidence into Regression Memory.
23. Record accepted-outcome measures including human interruptions, owner time, first-pass UAT, rollback, escaped defects, and cost where available.
24. Validate GTM readiness: segment, offer, channel, decision motion, onboarding, activation, support, cost, capacity, and commercial operations.
25. Launch to a bounded audience with validated instrumentation, support, monitoring, and rollback readiness.
26. Observe acquisition, conversion, activation, retention, outcomes, guardrails, reliability, support load, and economics against baseline.
27. Record a human lifecycle decision: iterate, scale, hold, roll back, or sunset; return to the earliest affected gate.

## Risk scaling

- **Tiny/local:** apply relevant lenses silently; use concise scenarios, focused checks, and a UAT note.
- **Material user-facing/API/data:** report council findings, architecture boundary, traceability, red/green evidence, and UAT.
- **High risk:** add threat model, authorization matrix, migration/rollback plan, observability, release guardrails, and explicit security/data approval.

## Execution layer

For delegated or concurrent work, apply [ORCHESTRATION.md](ORCHESTRATION.md) and [RECOVERY.md](RECOVERY.md). Execution mechanics remain subordinate to TDPD gates: they may produce evidence, but they do not redefine product acceptance.
