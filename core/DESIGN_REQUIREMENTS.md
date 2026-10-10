# Design and Requirements

This module converts approved intent into an externally observable delivery contract without choosing new product strategy.

Apply [SPECIFICATION_ARCHITECTURE_ASSURANCE.md](SPECIFICATION_ARCHITECTURE_ASSURANCE.md). Final acceptance scenarios and Red remain blocked until a current `LOCK-###` confirms goal, functional, quality, architecture, risk, surface, and project readiness.

## Design the experience and service

Describe actors, jobs, journey, entry points, information, actions, feedback, permissions, empty/loading/error/success states, interruption, recovery, accessibility, responsive behavior, operator workflow, and support boundary. Remove steps or concepts that do not contribute to the intended job. For `MATERIAL` and `HIGH` reliance/harm, explicitly cover edge or excluded users, opt-out, consent/comprehension where applicable, cancellation, recovery, support, and escalation.

## Approve the product surface

Record `SURF-###` before architecture or implementation: the primary user surface, secondary and operator surfaces, usage context, devices/input methods, explicitly excluded surfaces, alternatives, evidence, tradeoffs, and human approval. The chosen surface must fit the user's job rather than implementation convenience.

If the product surface is unspecified, stop and request a product decision. The agent **must not default to a CLI**, API, generated file, or test harness merely because it is cheaper to implement. Those are valid primary surfaces only when explicitly intended and approved.

Create an interface contract and inventory for the approved surface. Cover journeys, navigation, screens/interactions, content hierarchy, feedback, and every relevant initial, empty, loading, slow, error, permission, success, interruption, and recovery state. Link perceptual judgments to manual UAT.

## Specify deterministic behavior

Give every material rule a stable `RULE-###`. Define initial state, trigger, visible outcome, persistence/side effects, data ownership, units, validation, limits, idempotency, retries, timeout, concurrency, dependency behavior, and pass/fail condition.

Separate functional rules from quality attributes such as accessibility, performance, reliability, privacy, security, compatibility, localization, auditability, maintainability, and operability. Assign manual judgment explicitly when automation cannot honestly decide quality.

Record every material quality attribute as `QAR-###`. For performance, load, and scale include workload, concurrency/rate, data volume/growth, environment, duration, dependency state, percentile/window, resource/cost ceiling, overload behavior, recovery, pre-release test, and production monitoring. A target without its operating conditions is not deterministic.

## Plan and approve architecture

Record components, interfaces, trust boundaries, data contracts, identity and authorization, source of truth, integration failure modes, migrations, compatibility, retention, observability, rollout, and rollback. Material architecture tradeoffs require human approval before production implementation.

Create `ARCH-###` from the approved rules, QARs, constraints, and current-system evidence. Compare credible candidates against explicit drivers; document system/context, modules/services, data and trust boundaries, deployment/scaling, failure and degraded modes, migration/rollback, ADRs, and executable architecture fitness functions.

Run `RISK-###` with a Security Officer and Architecture/Failure Skeptic. Challenge hostile input, privilege boundaries, dependency and partial failures, concurrency, overload, cascading failure, resource/cost exhaustion, schema drift, migration interruption, observability blind spots, and recovery. Clear vetoes or obtain explicit human acceptance of material residual risk before locking the specification.

Record `PROJ-###` for project organization: stack and versions, repository/module boundaries, dependency direction, required install/dev/build/test/start commands, configuration, environments, CI, deployment, secrets, data lifecycle, observability, documentation, fixtures, and rollback. The structure must support the approved product surface and its E2E boundary.

When implementation may perform external or production side effects, record `AUT-###`. Define a distinct auditable agent identity where supported, allowed and forbidden actions, least-privilege and time-bounded access, secret handling, data and network boundaries, blast radius, approval checkpoints, stop signals, rollback mechanism, and recovery owner. If this contract is absent or unapproved, constrain implementation to an isolated environment without those side effects.

## Lock the specification

Record `LOCK-###`. `goalReady`, `functionalReady`, `qualityReady`, `architectureReady`, `riskReady`, `surfaceReady`, and `projectReady` must all pass. Before approval, scenarios may be exploratory drafts only; they cannot authorize Red or implementation. A material baseline, rule, QAR, architecture, risk, surface, or project change marks the lock and dependent acceptance artifacts `STALE`.

## Create acceptance scenarios

Map rules to user scenarios covering the happy path and relevant empty, invalid, unauthorized, duplicate, repeated, slow, partial-failure, interruption, quota, migration, and recovery paths. For `MATERIAL` and `HIGH`, include the seeded edge-user, opt-out, cancellation, recovery, support/escalation, and guardrail scenarios identified by `RH-###`; assign delayed effects to monitoring or manual review when they cannot be tested honestly before launch. Every scenario identifies its approved surface. Convert automatable scenarios into boundary-level e2e tests through that surface; a CLI or API test does not prove a web, mobile, desktop, or conversational experience. Keep perceptual or strategic judgment as manual UAT.

## Pass the three Input readiness checks

### Experience readiness

The product surface is approved; primary journeys, interface inventory, navigation, states, accessibility, responsive behavior, and manual UAT judgments are explicit. Any `MATERIAL` or `HIGH` reliance/harm contract has corresponding edge-user, exit, recovery, support, escalation, and guardrail coverage.

### Requirements readiness

The goal, behavior, and quality attributes are deterministic; sources and decisions are traceable; contradictions and non-goals are visible; every material QAR has a verification or monitoring path; and the current `LOCK-###` authorizes final scenario drafting.

### Engineering readiness

Architecture and project organization are approved; drivers, alternatives, tradeoffs, fitness functions, commands, environments, module boundaries, security/data constraints, failure modes, observability, deployment, compatibility, and rollback are defined sufficiently for implementation without invention. `RISK-###` has no unresolved blocking veto.

Where autonomous external or production actions are in scope, the Autonomy Contract is approved and traceable. It does not authorize implementation beyond the accepted scope or remove human UAT.

## Exit quality

The layer is ready to hand off only when Experience readiness, Requirements readiness, and Engineering readiness all pass, plus Autonomy readiness when applicable, and `LOCK-###` is current and approved. Every material requirement traces to evidence or an authorized decision, scenarios exercise the approved user surface or are explicitly manual, and implementation can proceed without inventing product behavior, quality budgets, architecture, failure behavior, project conventions, or authority.
