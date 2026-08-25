# Autonomy Contract

- **Contract ID:** AUT-001
- **Linked scope / specification / ADR:**
- **Accountable human owner:**
- **Approval status and date:** draft / approved / revoked
- **Applies to environments:** local / test / staging / production

## Identity and authority

- Agent or service identity:
- How agent actions remain distinguishable and auditable:
- Allowed actions and resources:
- Forbidden actions and resources:
- Least-privilege and just-in-time access:
- Credential source, lifetime, rotation, and revocation:
- Data, filesystem, and network boundaries:

## Risk boundary

- Maximum blast radius:
- Bounded users, records, traffic, spend, or duration:
- Destructive, billing, migration, publication, communication, or access changes:
- Mandatory human approval checkpoints:
- Conditions that require escalation rather than inference:

## Control and recovery

- Observable stop signals:
- Circuit breaker / kill mechanism:
- Idempotency and duplicate-action protection:
- Staging/canary or graduated-promotion path:
- Rollback or revert mechanism:
- Recovery owner and response expectation:
- Evidence retained for audit:

## Invalidation

- Contract expires or must be re-approved when:
- Downstream artifacts invalidated by a material authority change:

If this contract is missing, unapproved, expired, or revoked, agent execution is limited to an isolated environment without external or production side effects.
