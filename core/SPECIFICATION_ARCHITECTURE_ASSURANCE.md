# Specification and Architecture Assurance

This module makes functional intent, quality attributes, architecture, security, and failure resilience explicit before acceptance scenarios become a delivery contract. It strengthens the Design & Requirements layer without adding a fifth product layer or changing the canonical six-step TDPD method.

## 1. Goal readiness

Before detailed specification, require an approved problem, actor, desired outcome, observable success signal, scope, non-goals, decision owner, and applicable reliance/harm classification. An implementation request or solution label is not a sufficient goal.

If any load-bearing element is unknown or contradictory, keep the work in discovery or mark it `BLOCKED`. Agents may draft exploratory questions and provisional traces, but they must not publish final `SCN-###` acceptance scenarios or enter Red.

## 2. Functional readiness

Every material behavior has a stable `RULE-###` defining actor and authority, initial state, trigger, observable response, persisted state or side effect, data ownership, validation and units, idempotency, timeout/retry/concurrency semantics, dependency failure behavior, recovery, and a deterministic pass/fail condition.

Resolve or explicitly block open product decisions. A rule that depends on an unspecified product surface, data contract, permission model, lifecycle, or source of truth is not ready.

## 3. Quality-attribute readiness

Use `QAR-###` for every material non-functional or quality requirement. Each record states:

- stakeholder and business or safety rationale;
- source/decision and affected surface/component;
- operating environment and workload profile;
- stimulus, expected response, and measurable response budget;
- baseline, target, tolerance, measurement window, and units;
- degradation, overload, failure, and recovery behavior;
- pre-release test, manual assessment, and production monitoring obligations;
- owner, verifier, evidence location, and review/expiry condition.

Consider performance and capacity, availability, reliability, resilience, security, privacy, accessibility, compatibility, localization, auditability, maintainability, operability, observability, data integrity, retention, recovery, cost, and energy where relevant. Do not include every category mechanically; explain why a category is applicable, not applicable, or unknown.

For performance and scale, define representative and boundary workloads: concurrent actors, request/event rate, data volume and growth, payload size, burst shape, dependency behavior, warm/cold state, test duration, environment parity, and resource/cost ceiling. A latency number without workload and environment is not testable.

Every material `QAR-###` maps to at least one of:

- deterministic pre-release check;
- load, stress, soak, fault, security, accessibility, compatibility, or recovery test;
- named manual UAT or expert review;
- production metric, SLO/guardrail, alert, and response owner.

## 4. Architecture planning

Create `ARCH-###` before final scenario approval. Derive architecture from approved functional rules, QARs, constraints, existing system evidence, and migration reality. The plan records:

- architectural drivers and ranked quality attributes;
- current-state constraints and reusable project patterns;
- system context, containers/services, components/modules, and dependency direction;
- interfaces, data ownership, lifecycle, source of truth, consistency, and integration contracts;
- identity, authorization, trust boundaries, secrets, privacy, retention, and audit requirements;
- deployment topology, scaling model, capacity assumptions, observability, support, and incident boundaries;
- failure modes, degraded operation, recovery, migration, compatibility, rollout, and rollback;
- candidate approaches, decision criteria, tradeoffs, rejected alternatives, and ADR links;
- architecture fitness functions and evidence required before Green and release.

Do not select monolith, modular monolith, microservices, event-driven, serverless, layered, hexagonal, CQRS, or another style by fashion. Compare only credible candidates against the actual drivers and record the human decision for material tradeoffs.

## 5. Security and failure challenge

Run `RISK-###` after an architecture candidate exists and before Specification Lock. A Security Officer reviews hostile input, authentication, authorization/RBAC, tenant isolation, secrets, injection, XSS, SSRF, path traversal, webhooks, supply chain, sensitive logs, retention, privacy, billing/quota integrity, and abuse cases as applicable.

An Architecture and Failure Skeptic attempts to break the proposed system at its seams:

- unavailable, slow, inconsistent, duplicated, reordered, or malicious dependencies;
- partial writes, stale reads, retries, concurrency, race conditions, and idempotency failures;
- overload, hot partitions, unbounded queues, memory/disk exhaustion, and cost amplification;
- schema/version drift, migration interruption, rollback incompatibility, and data corruption;
- observability blind spots, alert fatigue, missing ownership, and unrehearsed recovery;
- cascading failure, single points of failure, correlated failure, and unsafe degraded modes.

Each risk has likelihood, impact, affected QAR/rule, detection, prevention, mitigation, residual risk, owner, verification method, and disposition. A valid veto names the blocked readiness check and smallest clearing condition. Material residual risk requires explicit human acceptance.

## 6. Specification Lock

Record `LOCK-###` only when all applicable checks pass:

1. `goalReady` — problem, outcome, scope, non-goals, signal, and owner are approved;
2. `functionalReady` — material rules are deterministic and traced;
3. `qualityReady` — material QARs have measurable budgets and verification/monitoring paths;
4. `architectureReady` — architecture drivers, boundaries, data/security/deployment/failure decisions, fitness functions, and human approvals are complete;
5. `riskReady` — security and failure review is complete; blockers are cleared and residual risks accepted by authority;
6. `surfaceReady` — intended user boundary and interface contract are approved;
7. `projectReady` — repository, commands, environments, CI/deployment, observability, and rollback are defined.

Until the lock is `APPROVED`, final scenario drafting, Red, and implementation are blocked. Exploratory scenarios may reveal specification gaps, but they remain `DRAFT` and cannot authorize delivery.

A material change to the goal, rule, QAR, architecture, risk disposition, surface, or Context Baseline marks the lock and dependent scenarios/tests `STALE`. Impact review returns to the earliest affected readiness check.

## Gate effects

- **Input:** requires an approved current `LOCK-###`; scores or document presence alone are insufficient.
- **Red:** scenarios and tests cite the locked baseline and include applicable QAR and risk cases.
- **Green:** architecture fitness functions, security checks, recovery checks, and required QAR verification pass with per-build evidence.
- **Output:** UAT evaluates observable behavior and named manual qualities; residual risks remain visible.
- **Launch/Outcome:** production SLOs, guardrails, incidents, capacity, support load, and cost can invalidate the corresponding QAR or architecture decision.

## Method boundary

This module does not claim that documentation makes a system safe or scalable. It ensures that quality, architecture, security, and failure assumptions become reviewable decisions with evidence rather than implementation-time invention.
