# Operating Workflow

This document describes `full` composition. For independent adoption, start with [FRAMEWORK.md](FRAMEWORK.md), select a layer manifest in `core/layers/`, and satisfy only that layer's entry and exit contracts.

## Modes

- **Shape:** validate the problem and highest-risk assumption; select the smallest useful slice.
- **Plan:** approve the product surface; create the deterministic functional specification, measurable QARs, architecture/risk plan, Specification Lock, scenarios, test matrix, project organization, delivery plan, and UAT plan without implementation.
- **Deliver:** prove red, implement to green, verify proportionately, and hand over for UAT.
- **Audit:** inspect evidence at every gate and recommend the shortest recovery path without changing files unless asked.

## Product loop

1. Frame the context-collection objective and inventory sources.
2. Build source-linked context, expose findings, record decisions, and assess readiness. For cross-session or delegated work, compile and acknowledge a role-specific `CTX-###` package.
3. Frame the problem separately from the proposed solution.
4. Map current alternatives and rank assumptions across desirability, usability, feasibility, viability, compliance/trust, and adoption.
5. Run the cheapest credible experiments with thresholds declared before observing results.
6. Record a human opportunity decision: proceed, proceed with constraints, revise, or stop.
7. Validate buyer, value exchange, pricing or budget commitment, economic ranges, and capacity; record the commercial decision.
8. Select the smallest product bet within its investment and economic boundaries and kill criteria.
9. Freeze the measurement contract, metric definitions, and instrumentation plan.
10. Approve the primary product surface and explicitly exclude unintended substitutes such as an implementation-convenient CLI.
11. Create the interface contract and inventory; cover journeys, navigation, feedback states, accessibility, responsive behavior, and manual UAT judgments.
12. Specify deterministic externally visible functional behavior traced to evidence and decisions. Preserve native multimodal artifacts and transformations in `MME-###` when text alone would lose product meaning.
13. Define measurable `QAR-###` quality requirements, representative and boundary workloads, budgets, overload/recovery behavior, pre-release checks, and production monitoring.
14. Create `ARCH-###`: drivers, candidate approaches, boundaries, data/trust/deployment topology, scaling, failure/degraded modes, migration/rollback, ADRs, and architecture fitness functions. Obtain human approval for material tradeoffs.
15. Run `RISK-###` security and architecture/failure challenge; clear blocking vetoes and explicitly assign material residual risk.
16. Define project organization, runtime commands, environments, CI/deployment, operability, and rollback.
17. When agent work can cause external or production side effects, approve the Autonomy Contract: identity, allowed actions, least privilege, blast radius, approval boundaries, stop signals, rollback, and recovery owner.
18. Review Spec Fidelity and approve `LOCK-###` only when goal, functional, quality, architecture, risk, surface, and project readiness pass.
19. Only after Specification Lock, write final happy, negative, security, quality, load/failure, interruption, and recovery scenarios through the approved surface proportionate to risk.
20. Name synthesis, oracle, verification, merge, and release authorities; establish proportionate independence. For distributed evidence, open `EVD-###` and use adaptive `COM-###` challenge, clarification, evidence-seeking, routing, or stop decisions instead of fixed debate.
21. Implement e2e and applicable QAR/risk/fitness tests and prove the intended red state.
22. Prove Execution Readiness: sandbox, tools, test/staging environment, observability, stop conditions, and rollback work under the approved autonomy boundary.
23. Implement the smallest coherent production change to green while recording completion and repair evidence.
24. For every build, write `TRUN-###` with required suites, every case verdict, diagnostics, environment, timing, linked contracts, failure classification, owner, action, and retest lineage.
25. Verify UX, accessibility, authorization, hostile input, architecture fitness, load/capacity, dependency and partial failures, data integrity, billing, observability, recovery, rollback, and documentation impact as applicable. Verify requirements in the modality experienced by the user.
26. Run human UAT and convert material rejection, rollback, or escaped-defect evidence into Regression Memory.
27. Record accepted-outcome measures including completion state, clarification/repair loops, human interruptions, owner time, first-pass UAT, rollback, escaped defects, and cost where available.
28. Validate GTM readiness: segment, offer, channel, decision motion, onboarding, activation, support, cost, capacity, and commercial operations.
29. Launch to a bounded audience with validated instrumentation, support, monitoring, human comprehension, and rollback readiness.
30. Observe acquisition, conversion, activation, retention, outcomes, guardrails, reliability, capacity, support load, and economics against baseline.
31. Record a human lifecycle decision: iterate, scale, hold, roll back, or sunset; return to the earliest affected gate.

## Risk scaling

- **Tiny/local:** apply relevant lenses silently; use concise scenarios, focused checks, and a UAT note.
- **Material user-facing/API/data:** report council findings, architecture boundary, traceability, red/green evidence, and UAT.
- **High risk:** add threat model, authorization matrix, migration/rollback plan, observability, release guardrails, and explicit security/data approval.

## Execution layer

For delegated or concurrent work, apply [ORCHESTRATION.md](ORCHESTRATION.md), [CONTEXT_EVIDENCE_CONTROL.md](CONTEXT_EVIDENCE_CONTROL.md), and [RECOVERY.md](RECOVERY.md). Execution mechanics remain subordinate to TDPD gates: they may produce evidence, but they do not redefine product acceptance.
