# Delivery Gates

Gates are owned by independent layers:

- Product & Business: Context, Problem, Opportunity, Business.
- Design & Requirements: Input.
- Implementation & Delivery: Red, Green, Output/UAT.
- Launch & Operations: GTM, Launch, Outcome.

The full workflow composes them in that order. A standalone layer evaluates only its owned gates against its entry contract.

## Context gate

Require a source map, atomic context pack, review findings, decision log, current `CB-###` Context Baseline, and traceability matrix proportionate to the task. Every factual statement has a readable locator or is marked `NO SOURCE`; material contradictions and gaps are unresolved visibly or closed by an authorized `DL-###` decision. Context readiness is Ready or Partially ready with no critical blocker for the next gate. No artifact required by the next gate may remain `STALE`.

## Problem gate

Require an actor, real job or pain, current workaround, desired outcome, and observable success signal. Record a proportionate `RH-###` Reliance & Harm preflight covering dependency, practical ability to exit, consequence severity and duration, reversibility, and support/recovery. Distinguish the expressed request from the underlying need. If value or the risk classification is unclear, run discovery or a cheap experiment before building.

## Opportunity gate

Require a source-grounded opportunity, alternatives map, ranked assumption register, proportionate experiments with predeclared pass/fail/inconclusive rules, preserved observations, and a human `OPP-DEC-###` decision. For `MATERIAL` or `HIGH` reliance/harm, require direct contextual evidence for load-bearing user assumptions, explicit edge/excluded-user coverage, immediate and delayed consequence analysis, and guardrail signals. Proceeding work has an investment boundary, residual uncertainty, and kill criteria. Stated interest alone does not establish behavioral demand.

## Business gate

Require explicit user, buyer, approver, and operator roles; a source-grounded value exchange; behavioral willingness-to-pay or budget evidence; pricing/billing integrity requirements; ranged unit economics including labor, support, and capacity; and a human `COM-DEC-###` with acquisition/delivery cost boundaries and kill criteria.

## Input gate

Require all three readiness checks:

- **Experience readiness:** an approved `SURF-###` product surface decision, interface contract and inventory, primary journeys, navigation, feedback states, accessibility/responsive expectations, and manual UAT criteria. For `MATERIAL` or `HIGH` reliance/harm, include applicable opt-out, consent/comprehension, cancellation, recovery, support, and escalation paths plus edge-user scenarios.
- **Requirements readiness:** a current Context Baseline, reconciled evidence, deterministic behavior and quality attributes, testable acceptance criteria, explicit non-goals, and traceability from every material rule to a source or authorized decision and acceptance scenario. A previous Green cannot satisfy this check after its baseline changes until impact is reviewed.
- **Engineering readiness:** approved material architecture and `PROJ-###` project organization covering stack, module boundaries, commands, environments, security/data constraints, CI/deployment, observability, compatibility, and rollback.

An unspecified product surface blocks the gate. Do not silently choose a CLI, API, generated file, or test harness as the product interface. Acceptance scenarios and E2E tests must exercise the approved user surface; record unresolved ambiguity as a finding, not a silent choice.

## Red gate

Require executable user scenarios that fail for the intended missing behavior. Infrastructure, fixture, selector, credential, or environment failures do not count.

## Green gate

Require target e2e tests and proportionate broader checks to pass. Clear authorization, security, data-integrity, migration, payment, destructive-operation, and rollback vetoes.

## Output gate

Require human UAT against the original problem in realistic use. Without this, report **engineering complete, awaiting UAT**.

## GTM gate

Require an explicit initial segment, positioning, offer, channel, observable sales/decision stages, contracting/billing readiness when applicable, onboarding to a defined activation event, support ownership, measurement from reach through activation, capacity boundaries, and pause/rollback/kill triggers.

## Launch gate

Require accepted UAT, validated decision-critical instrumentation, bounded audience/exposure, operational and support owners, monitoring, communications, applicable privacy/legal/billing/migration readiness, rollback triggers and path, and a scheduled outcome review.

## Outcome gate

Require production observations compared with a frozen measurement contract, visible data-quality and attribution limitations, guardrail and operational evidence, and a human `LIFE-DEC-###` decision to Iterate, Scale, Hold, Roll back, or Sunset. Return learning to the earliest affected gate.

## Traceability

Use stable IDs for non-trivial work:

`CB → S → F/C/G/A/R → DL → PROB/RH → OPP/ASM/EXP/OBS/OPP-DEC → BIZ/PRICE-EXP/COM-DEC → MEAS → RULE → SCN → E2E/MANUAL → WORK/HANDOFF → UAT → GTM → LAUNCH → OUT-OBS/OUT-REV → LIFE-DEC`

Every material rule maps to a scenario or explicit manual check. Every test maps to user value or a necessary safety constraint.
