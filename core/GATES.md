# Delivery Gates

## Problem gate

Require an actor, real job or pain, current workaround, desired outcome, and observable success signal. If value is unclear, run discovery or a cheap experiment before building.

## Input gate

Require reconciled sources, deterministic behavior, testable acceptance criteria, explicit non-goals, and approval of material architecture choices. Record unresolved ambiguity as a decision.

## Red gate

Require executable user scenarios that fail for the intended missing behavior. Infrastructure, fixture, selector, credential, or environment failures do not count.

## Green gate

Require target e2e tests and proportionate broader checks to pass. Clear authorization, security, data-integrity, migration, payment, destructive-operation, and rollback vetoes.

## Output gate

Require human UAT against the original problem in realistic use. Without this, report **engineering complete, awaiting UAT**.

## Traceability

Use stable IDs for non-trivial work:

`PROB → RULE → SCN → E2E → implementation evidence → UAT`

Every material rule maps to a scenario or explicit manual check. Every test maps to user value or a necessary safety constraint.
