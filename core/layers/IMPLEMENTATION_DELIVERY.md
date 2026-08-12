# Implementation & Delivery Layer

## Mission

Produce the approved behavior safely, prove executable scenarios red then green, and obtain human UAT without changing upstream intent silently.

## Owned modules

- implementation and UAT portions of `core/METHOD.md`
- `core/ORCHESTRATION.md`
- `core/RECOVERY.md`

## Gates

Red → Green → Output/UAT

## Entry contract

Versioned rules, user scenarios, test matrix, architecture boundary, owned surfaces, security/data constraints, migration/rollback constraints, and human escalation points.

## Exit contract

- red evidence for missing behavior;
- implementation and review handoffs;
- green target and broader verification evidence;
- unresolved and accepted risks;
- release/deploy status;
- explicit human UAT verdict;
- handoff to Launch & Operations or a return request upstream.

## Independent uses

Implementation of an externally designed feature, delivery recovery, test-first change, technical remediation, or UAT package production.
