# End-to-End Traceability Matrix

| Source | Context/finding | Decision | Problem | Rule | Scenario | Test/manual check | Work/handoff | UAT | Status |
|---|---|---|---|---|---|---|---|---|---|
| S001 | F001 / C001 | DL-001 | PROB-001 | RULE-001 | SCN-001 | E2E-001 | WORK-001 | UAT-001 | planned |

## Coverage checks

- Every factual context entry has a readable source locator or is explicitly `NO SOURCE`.
- Every material finding is resolved by a decision or remains visibly blocking.
- Every material rule traces to evidence or an authorized decision.
- Every scenario traces to a rule and every automated test traces to a scenario.
- Every decision lists downstream artifacts invalidated by change.
- Every UAT verdict traces to the original problem and exercised scenarios.
