# Recovery Protocol

Recovery preserves traceability and prevents a failed agent run from becoming lost context.

## Failure classes

- **Transient:** rate limit, temporary network or service failure; retry may help.
- **Deterministic:** test, build, validation, or contract failure; change the work, not the retry count.
- **Blocked:** missing decision, permission, dependency, credential, or external state.
- **Stalled:** no meaningful progress or repeated equivalent output.
- **Corrupt state:** unreadable, contradictory, or unsafe coordination data.

## Recovery sequence

1. Stop additional dependent dispatch.
2. Preserve the workspace, logs, partial artifacts, checks, and last known state.
3. Classify the failure and record evidence using `templates/recovery-record.md`.
4. Retry transient failures with backoff and a fixed maximum. Never endlessly retry deterministic failures.
5. For a stall, reduce scope, rebuild context from durable artifacts, or switch the worker/harness when available.
6. For a blocker, pause and request the smallest missing human decision or external change.
7. Quarantine corrupt state; do not silently repair it while continuing execution.
8. Resume from the earliest affected dependency or TDPD gate and record the result.

## Safety rules

- Never discard partial work solely because the run failed.
- Never mark a unit passed from an agent's self-assessment alone.
- Never advance Green while relevant checks fail.
- Never advance Output/UAT without an explicit human verdict.
- Bound retries and record every attempt so costs and repeated failures remain visible.
