# Layer Contracts

Use `templates/layer-handoff.md` for every boundary crossing.

## Contract fields

Every handoff identifies:

- producer and consumer layer;
- artifact versions and source/decision IDs;
- approved scope, constraints, non-goals, and accepted risks;
- blocking and non-blocking findings;
- entry criteria satisfied and evidence;
- explicit decisions requested from the consumer;
- invalidation conditions and upstream owner;
- handoff status: proposed, accepted, accepted-with-constraints, rejected, or superseded.

## Change protocol

1. The consumer validates its entry contract without assuming missing content.
2. If a required field is absent or contradictory, the consumer records a finding and rejects or conditionally accepts the handoff.
3. A downstream discovery that changes upstream intent becomes a change request with evidence.
4. The upstream decision-maker accepts, rejects, or supersedes the relevant decision.
5. Traceability identifies every downstream artifact invalidated by the change.

## Independence and compatibility

A standalone layer may use externally produced artifacts if they satisfy its entry contract. It does not require the upstream layer's internal templates or process. Contract version and provenance are required so multiple teams or tools can interoperate without sharing implementation details.
