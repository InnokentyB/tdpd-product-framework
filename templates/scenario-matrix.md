# Scenario and Test Matrix

| Scenario | Rule | Approved surface | Actor / initial state | Action | Observable result | Side effect | Level | Status |
|---|---|---|---|---|---|---|---|---|
| SCN-001 | RULE-001 | SURF-001 / web |  |  |  |  | E2E | planned |

Levels: `E2E`, `SUPPORTING`, or `MANUAL`. Statuses: `planned`, `red`, `green`, `blocked`, `accepted`.

An E2E scenario must exercise the approved user surface. Lower-level CLI, API, or direct-storage checks may support diagnosis, but do not replace acceptance through a web, mobile, desktop, conversational, or other approved interface.
