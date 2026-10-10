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

Current approved `LOCK-###`; versioned rules and `QAR-###`; user scenarios and test matrix; approved `ARCH-###`, `RISK-###`, fitness functions, owned surfaces, security/data/failure/migration/rollback constraints, human escalation points, and an approved `AUT-###` Autonomy Contract when external or production side effects are allowed.

## Exit contract

- red evidence for missing behavior;
- passed `ER-###` Execution Readiness evidence before autonomous implementation;
- immutable run provenance and a completion-before-quality record;
- acknowledged role context and `COM-###` communication trace when delegated actors pool distributed evidence;
- native-modality verification linked to `MME-###` for non-text product outcomes;
- `VER-###` Verification Independence evidence naming synthesis, oracle, verification, merge, release, and UAT authority;
- clarification, resynthesis, repair, and accepted-outcome telemetry where observable;
- implementation and review handoffs;
- green target and broader verification evidence;
- one immutable `TRUN-###` per build/attempt with suite and case outcomes, diagnostics, linked requirements/risks, failure disposition, and retest lineage;
- accepted-outcome and human-orchestration measures;
- unresolved and accepted risks;
- release/deploy status;
- explicit human UAT verdict;
- `REG-###` Regression Memory decision for every material reject, rollback, or escaped defect;
- handoff to Launch & Operations or a return request upstream.

## Independent uses

Implementation of an externally designed feature, delivery recovery, test-first change, technical remediation, or UAT package production.
