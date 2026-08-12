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
| Evaluation criteria / test set | |
| Input and context artifacts | |

## Execution path

| Step | Evidence and context references | Decision or action | Tool and validated arguments reference | Authorization or approval | Side effect / idempotency key | Validation | Status |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## Outcome and acceptance

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
- Duplicate tool calls:
- Tool failures:
- Time and cost:
- Escalations:
- Human corrections:
- Outcome-check failures:
