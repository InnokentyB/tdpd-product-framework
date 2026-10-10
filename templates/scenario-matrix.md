# Scenario and Test Matrix

- **Specification Lock (`LOCK-###`):**
- **Lock status:** APPROVED / STALE / BLOCKED
- **Draft authority:** final acceptance scenarios require a current approved lock

| Scenario | Rule / QAR / Risk / RH | Approved surface | Actor / initial state | Action / stimulus | Observable result / quality budget | Side effect / guardrail / recovery | Test kind | Status |
|---|---|---|---|---|---|---|---|---|
| SCN-001 | RULE-001 / RH-001 | SURF-001 / web |  |  |  |  | E2E | planned |

Levels: `E2E`, `SUPPORTING`, or `MANUAL`. Statuses: `planned`, `red`, `green`, `blocked`, `accepted`.

An E2E scenario must exercise the approved user surface. Lower-level CLI, API, or direct-storage checks may support diagnosis, but do not replace acceptance through a web, mobile, desktop, conversational, or other approved interface.

Do not mark a scenario `READY` when `LOCK-###` is absent, blocked, or stale. Include applicable load, security, dependency-failure, degraded-mode, migration, recovery, and architecture-fitness scenarios; link production-only qualities to their monitoring and owner.
