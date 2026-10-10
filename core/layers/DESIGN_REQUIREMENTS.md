# Design & Requirements Layer

## Mission

Turn an approved product bet or bounded change request into a deterministic, testable, observable, and architecture-approved delivery contract.

## Owned modules

- `core/DESIGN_REQUIREMENTS.md`
- `core/SPECIFICATION_ARCHITECTURE_ASSURANCE.md`
- the specification and scenario portions of `core/METHOD.md`

## Gate

Input

## Entry contract

Approved problem/scope or another authoritative design request, actors, constraints, evidence/decision provenance, success and measurement contract, and a decision owner.

## Exit contract

- user journey and visible states;
- approved product surface decision, interface contract, and interface inventory;
- deterministic functional rules and measurable `QAR-###` quality requirements, including workload/capacity and verification or monitoring paths where applicable;
- data, permissions, integrations, failure, recovery, accessibility, and observability requirements;
- `ARCH-###` architecture plan, ADRs, fitness functions, and material tradeoffs approved by a human;
- `RISK-###` security and failure challenge with blocking vetoes cleared and residual risks explicitly owned;
- current approved `LOCK-###` before final acceptance-scenario drafting;
- user scenarios and e2e/manual acceptance matrix;
- change and migration implications;
- approved project organization, runtime commands, environments, and delivery conventions;
- approved `AUT-###` Autonomy Contract when agent execution may cause external or production side effects;
- passed Experience, Requirements, and Engineering readiness checks;
- `FID-###` Spec Fidelity verdict covering completeness, consistency, unambiguity, verifiability, and adversarial interpretations;
- acknowledged `CTX-###`, sufficient `EVD-###`, and `MME-###` native-artifact traceability when cross-session, distributed, or multimodal evidence applies;
- adoption readiness decision when a team or model route expands beyond a bounded pilot;
- handoff to Implementation & Delivery.

## Independent uses

Requirements audit, UX/service design, architecture input, legacy specification recovery, API/data contract design, or scenario/test planning.
