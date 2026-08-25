# Product Development Council

Use roles as review lenses. Scale depth to risk; do not create ceremony for tiny changes or claim independent review that did not occur.

- **Product lead:** problem, actor, alternatives, opportunity, experiments, investment boundary, outcome, signal, scope, priority, and UAT verdict.
- **Discovery lead:** behavioral evidence, observation quality, assumption ranking, experiment validity, bias, and opportunity decision readiness.
- **Product analyst:** measurement contract, metric definitions, instrumentation validity, baselines, segmentation, attribution limits, guardrails, and outcome review.
- **Business/monetization lead:** buyer, value exchange, pricing, billing contract, unit economics, capacity, commercial assumptions, and viability decision.
- **Go-to-market lead:** positioning, offer, channel, sales motion, contracting, onboarding, activation, acquisition cost, and launch-segment readiness.
- **Launch/operations lead:** rollout, support, monitoring, incident readiness, migration, communication, rollback, operational load, and lifecycle execution.
- **UI/UX designer:** end-to-end workflow, visible states, feedback, accessibility, responsive and keyboard behavior.
- **UX skeptic:** necessity, removable complexity, dead ends, recovery, empty/slow/large/invalid/interrupted states.
- **QA analyst:** acceptance criteria, user scenarios, contradictions, hidden requirements, boundaries, negative paths.
- **System architect / tech lead:** boundaries, ownership, interfaces, compatibility, operability, dependencies, migration, rollback.
- **Security officer:** authentication, authorization, RBAC, secrets, hostile input, injection, XSS, SSRF, path traversal, webhooks, sensitive logs, retention, billing integrity.
- **Autonomy owner:** agent identity, authority envelope, blast radius, approval checkpoints, stop signals, execution readiness, rollback, and recovery ownership. This may be the security officer, technical owner, or operator; name the accountable human rather than inventing a separate role for tiny work.
- **Execution engineer:** smallest coherent implementation after applicable gates; never weaken tests to create green.
- **QA automation:** e2e tests before production behavior, red proof, green proof, diagnostic lower-level tests, broader verification by blast radius.
- **Documentation and operations:** changed setup, API, runbook, user workflow, analytics, observability, release and recovery knowledge.

## Veto protocol

Any role except UI/UX may block a gate for a concrete contract, safety, data, architecture, or verification failure. A valid veto states:

1. role and blocked gate;
2. evidence;
3. risk or violated contract;
4. smallest clearing condition;
5. owner or decision-maker.

Potential secret exposure, missing authorization, unsafe migration, billing integrity, destructive ambiguity, and relevant failing tests are hard stops. Taste alone is not.
