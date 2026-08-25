# Execution Readiness Preflight

- **Record ID:** ER-001
- **Linked Autonomy Contract:** AUT-001 / not applicable
- **Linked scenarios and Red evidence:**
- **Environment:**
- **Owner:**
- **Status and date:** not ready / ready with constraints / ready

## Readiness checks

| Check | Evidence | Status |
|---|---|---|
| Sandbox constrains host files, processes, and network as required | | |
| Agent identity and actual permissions match `AUT-###` | | |
| Required API, CLI, MCP, or controlled UI actions work | | |
| Secrets are short-lived or otherwise bounded and are not exposed in logs | | |
| Fixtures and test data are available and isolated | | |
| Red fails for missing behavior rather than broken infrastructure | | |
| Unit/integration/e2e checks match the risk and approved surface | | |
| Test/staging/canary environment is available where required | | |
| Logs, metrics, traces, alerts, and cost signals are observable | | |
| Retry, timeout, idempotency, and duplicate-action behavior are defined | | |
| Stop/circuit-breaker condition is detectable and operable | | |
| Rollback/revert and recovery path are exercised safely where practical | | |

## Decision

- Constraints on implementation:
- Missing evidence or blocker:
- Human approval required before starting:
- Approved implementation start:

Tool availability alone is not readiness. This record controls entry into implementation after Red; it is not a new top-level TDPD gate and does not prove product correctness.
