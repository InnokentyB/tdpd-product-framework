# Design and Requirements

This module converts approved intent into an externally observable delivery contract without choosing new product strategy.

## Design the experience and service

Describe actors, jobs, journey, entry points, information, actions, feedback, permissions, empty/loading/error/success states, interruption, recovery, accessibility, responsive behavior, operator workflow, and support boundary. Remove steps or concepts that do not contribute to the intended job. For `MATERIAL` and `HIGH` reliance/harm, explicitly cover edge or excluded users, opt-out, consent/comprehension where applicable, cancellation, recovery, support, and escalation.

## Approve the product surface

Record `SURF-###` before architecture or implementation: the primary user surface, secondary and operator surfaces, usage context, devices/input methods, explicitly excluded surfaces, alternatives, evidence, tradeoffs, and human approval. The chosen surface must fit the user's job rather than implementation convenience.

If the product surface is unspecified, stop and request a product decision. The agent **must not default to a CLI**, API, generated file, or test harness merely because it is cheaper to implement. Those are valid primary surfaces only when explicitly intended and approved.

Create an interface contract and inventory for the approved surface. Cover journeys, navigation, screens/interactions, content hierarchy, feedback, and every relevant initial, empty, loading, slow, error, permission, success, interruption, and recovery state. Link perceptual judgments to manual UAT.

## Specify deterministic behavior

Give every material rule a stable `RULE-###`. Define initial state, trigger, visible outcome, persistence/side effects, data ownership, units, validation, limits, idempotency, retries, timeout, concurrency, dependency behavior, and pass/fail condition.

Separate functional rules from quality attributes such as accessibility, performance, reliability, privacy, security, compatibility, localization, auditability, maintainability, and operability. Assign manual judgment explicitly when automation cannot honestly decide quality.

## Define boundaries and architecture input

Record components, interfaces, trust boundaries, data contracts, identity and authorization, source of truth, integration failure modes, migrations, compatibility, retention, observability, rollout, and rollback. Material architecture tradeoffs require human approval before production implementation.

Record `PROJ-###` for project organization: stack and versions, repository/module boundaries, dependency direction, required install/dev/build/test/start commands, configuration, environments, CI, deployment, secrets, data lifecycle, observability, documentation, fixtures, and rollback. The structure must support the approved product surface and its E2E boundary.

## Create acceptance scenarios

Map rules to user scenarios covering the happy path and relevant empty, invalid, unauthorized, duplicate, repeated, slow, partial-failure, interruption, quota, migration, and recovery paths. For `MATERIAL` and `HIGH`, include the seeded edge-user, opt-out, cancellation, recovery, support/escalation, and guardrail scenarios identified by `RH-###`; assign delayed effects to monitoring or manual review when they cannot be tested honestly before launch. Every scenario identifies its approved surface. Convert automatable scenarios into boundary-level e2e tests through that surface; a CLI or API test does not prove a web, mobile, desktop, or conversational experience. Keep perceptual or strategic judgment as manual UAT.

## Pass the three Input readiness checks

### Experience readiness

The product surface is approved; primary journeys, interface inventory, navigation, states, accessibility, responsive behavior, and manual UAT judgments are explicit. Any `MATERIAL` or `HIGH` reliance/harm contract has corresponding edge-user, exit, recovery, support, escalation, and guardrail coverage.

### Requirements readiness

Behavior and quality attributes are deterministic, sources and decisions are traceable, contradictions and non-goals are visible, and every material rule maps to an acceptance scenario.

### Engineering readiness

Architecture and project organization are approved; commands, environments, module boundaries, security/data constraints, observability, deployment, compatibility, and rollback are defined sufficiently for implementation without invention.

## Exit quality

The layer is ready to hand off only when Experience readiness, Requirements readiness, and Engineering readiness all pass. Every material requirement traces to evidence or an authorized decision, scenarios exercise the approved user surface or are explicitly manual, and implementation can proceed without inventing product behavior, interface form, or project conventions.
