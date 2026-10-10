# Architecture, Security, and Failure Review

- **Review ID:** RISK-001
- **Architecture plan:** ARCH-001
- **Specification Lock:** LOCK-001
- **Reviewers / independence:**
- **Threat/failure model boundary:**
- **Verdict:** PASS / CONSTRAINED / BLOCKED

| Risk | Threat/failure scenario | Likelihood | Impact | RULE/QAR/ADR | Detection | Prevention | Mitigation/recovery | Verification | Residual risk | Owner | Disposition |
|---|---|---|---|---|---|---|---|---|---|---|---|
| RSK-001 |  |  |  |  |  |  |  |  |  |  | open / mitigated / accepted / rejected |

## Required challenge areas

- hostile and malformed input;
- authentication, authorization, RBAC, tenant isolation, and privilege escalation;
- secrets, dependencies/supply chain, injection, XSS, SSRF, paths/files, webhooks, logs, privacy, retention, billing/quota, and abuse;
- dependency timeout/unavailability/inconsistency, retries, duplication, ordering, concurrency, race conditions, and partial writes;
- overload, queues, hot partitions, resource exhaustion, cascading failure, single/correlated failure, and cost amplification;
- migration interruption, schema/version drift, rollback incompatibility, corruption, backup and restore;
- observability blind spots, alerting, support ownership, incident response, and recovery rehearsal.

## Vetoes and approval

- Blocking vetoes and smallest clearing conditions:
- Material residual risks requiring human acceptance:
- Accepted by / date:
