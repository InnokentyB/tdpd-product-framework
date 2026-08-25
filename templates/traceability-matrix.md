# End-to-End Traceability Matrix

| Context Baseline | Source/context | Decision/problem | Opportunity | Business/commercial | Surface/interface/project/autonomy | Measurement | Rule/scenario/test/readiness | Work/run/UAT/regression | GTM/launch | Outcome | Lifecycle decision | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CB-001 | S001 / F001 / C001 | DL-001 / PROB-001 / RH-001 | OPP-001 / EXP-001 / OPP-DEC-001 | BIZ-001 / PRICE-EXP-001 / COM-DEC-001 | SURF-001 / UI-001 / PROJ-001 / AUT-001 | MEAS-001 / MET-001 | RULE-001 / SCN-001 / E2E-001 / ER-001 | WORK-001 / RUN-001 / UAT-001 / REG-001 | GTM / LAUNCH-001 | OUT-REV-001 | LIFE-DEC-001 | CURRENT |

## Coverage checks

- Every factual context entry has a readable source locator or is explicitly `NO SOURCE`.
- Every material finding is resolved by a decision or remains visibly blocking.
- Every material rule traces to evidence or an authorized decision.
- Every product bet traces to an opportunity decision with behavioral evidence or explicit constrained risk acceptance.
- Every problem has a proportionate Reliance & Harm assessment; `MATERIAL` and `HIGH` obligations trace to evidence, scenarios, guardrails, and recovery or monitoring owners.
- Every commercial requirement traces to buyer/value, pricing/budget, economics, and a commercial decision.
- Every scenario traces to a rule and every automated test traces to a scenario.
- Every scenario and E2E test identifies and exercises the approved product surface.
- Every external or production side effect traces to an approved Autonomy Contract and Execution Readiness record.
- Every decision lists downstream artifacts invalidated by change.
- Every source-heavy trace names its Context Baseline; affected rows become `STALE` when a material source or decision changes.
- Every UAT verdict traces to the original problem and exercised scenarios.
- Every material reject, rollback, or escaped defect traces to a Regression Memory treatment and owner.
- Every launch traces to accepted UAT, validated measurement, a bounded audience, and rollback criteria.
- Every lifecycle decision traces to production outcome and guardrail evidence or an explicit missing-evidence decision.
