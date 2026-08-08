# Delivery Gates

## Context gate

Require a source map, atomic context pack, review findings, decision log, and traceability matrix proportionate to the task. Every factual statement has a readable locator or is marked `NO SOURCE`; material contradictions and gaps are unresolved visibly or closed by an authorized `DL-###` decision. Context readiness is Ready or Partially ready with no critical blocker for the next gate.

## Problem gate

Require an actor, real job or pain, current workaround, desired outcome, and observable success signal. If value is unclear, run discovery or a cheap experiment before building.

## Input gate

Require reconciled evidence, deterministic behavior, testable acceptance criteria, explicit non-goals, and approval of material architecture choices. Every material rule traces to a source-grounded context entry or an authorized decision. Record unresolved ambiguity as a finding, not a silent choice.

## Red gate

Require executable user scenarios that fail for the intended missing behavior. Infrastructure, fixture, selector, credential, or environment failures do not count.

## Green gate

Require target e2e tests and proportionate broader checks to pass. Clear authorization, security, data-integrity, migration, payment, destructive-operation, and rollback vetoes.

## Output gate

Require human UAT against the original problem in realistic use. Without this, report **engineering complete, awaiting UAT**.

## Traceability

Use stable IDs for non-trivial work:

`S → F/C/G/A/R → DL → PROB → RULE → SCN → E2E/MANUAL → WORK/HANDOFF → UAT`

Every material rule maps to a scenario or explicit manual check. Every test maps to user value or a necessary safety constraint.
