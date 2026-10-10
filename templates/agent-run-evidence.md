# Agent Run Evidence

Use this record for an agentic work unit whose decisions, tool calls, or side effects contribute evidence to a TDPD gate. A technically successful request is not sufficient evidence that the product outcome is correct.

## Run identity

- Trace ID:
- Work unit / scenario:
- Owner:
- Environment:
- Started at:
- Completed at:

## Versioned execution contract

| Surface | Version or durable reference |
|---|---|
| Agent configuration | |
| Model and provider | |
| System instructions / prompt template | |
| Tool or MCP contracts | |
| Authorization policy | |
| Autonomy Contract (`AUT-###`) | |
| Execution Readiness (`ER-###`) | |
| Evaluation criteria / test set | |
| Input and context artifacts | |
| Specification baseline / hash | |
| Dataset and input hashes / protected references | |
| Runtime, quantization, and generation parameters | |

## Execution path

| Step | Evidence and context references | Decision or action | Tool and validated arguments reference | Authorization or approval | Side effect / idempotency key | Validation | Status |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## Outcome and acceptance

- Completion state: `STARTED | RUNTIME_FAILED | OUTPUT_MISSING | PARSE_FAILED | SCHEMA_FAILED | ARTIFACTS_MISSING | PLACEHOLDER | QUALITY_ELIGIBLE`
- Technical outcome: `PASS | FAIL | INCOMPLETE`
- Incomplete evidence or reason:
- Outcome checks:
- Human correction or escalation:
- UAT record:

Missing provenance for a decision, tool call, authorization, side effect, or outcome check makes the run `INCOMPLETE`, not `PASS`. An incomplete high-risk action must stop. A safe action may continue only inside an explicitly reduced authority envelope.

## Privacy, access, and retention

- Sensitive content captured:
- Redaction or classification applied:
- Hashes or durable references used instead of raw content:
- Access policy:
- Retention policy:

Keep debugging traces separate from compact audit records when their access or retention requirements differ.

## Operational measures

- Steps and retries:
- Clarification loops:
- Synthesis passes:
- Specification returns:
- Test/oracle rewrites and owner:
- Deterministic repairs:
- Return reasons: specification / architecture / implementation / test-oracle / environment / changed decision
- First-pass cost, time, and tokens:
- Total accepted-outcome cost, time, and tokens:
- Repair multiplier (only from comparable observed costs):
- Reached Green without human re-steering: yes / no / not measured
- Successful autonomous run duration:
- Human interruptions:
- Owner minutes:
- Duplicate tool calls:
- Tool failures:
- Time and cost:
- Escalations:
- Human corrections:
- Outcome-check failures:
- First-pass UAT verdict:
- Rollbacks and escaped defects:
- Cost of accepted outcome:
- Regression Memory records (`REG-###`):
- Spec Fidelity review (`FID-###`):
- Verification Independence record (`VER-###`):
