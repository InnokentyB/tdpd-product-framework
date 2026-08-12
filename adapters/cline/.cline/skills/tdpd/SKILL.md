---
name: tdpd
description: Apply the TDPD Product Framework to shape, plan, deliver, or audit products and software. Use for product ideas, requirements, UX and interface design, architecture, implementation, E2E testing, UAT, launch, operations, or whenever the user says TDPD.
---

# TDPD for Cline

Start the substantive response with:

`TDPD ACTIVE | mode: <Shape|Plan|Deliver|Audit> | layer: <product-business|design-requirements|implementation-delivery|launch-operations|full>`

This line is required activation evidence, including when using a small model.

## Load the contract

1. Read `.tdpd/core/FRAMEWORK.md`.
2. Select the smallest relevant manifest under `.tdpd/core/layers/`.
3. Read that manifest's owned modules plus `.tdpd/core/GATES.md`, `.tdpd/core/ROLES.md`, and `.tdpd/core/LAYER_CONTRACTS.md`.
4. Use `full` only when the request spans the complete lifecycle.

## Respect mode authority

- **Shape:** validate the problem and riskiest assumptions; do not implement.
- **Plan:** create approved contracts, requirements, scenarios, architecture, and UAT plan; do not implement.
- **Deliver:** require valid entry contracts, prove surface-level E2E tests red, implement to green, then request human UAT.
- **Audit:** report failed gates and recovery path; do not change files unless separately asked.

## Hard Input gate

Before implementation require:

- approved product surface (`SURF-###`);
- interface contract and inventory;
- deterministic specification and scenarios;
- approved project organization (`PROJ-###`) and architecture;
- passed Experience, Requirements, and Engineering readiness.

If the intended surface is unspecified, block and request the decision. **Do not default to a CLI**, API, generated file, or test harness for convenience. E2E acceptance must exercise the approved user surface; supporting API or CLI tests do not replace it.

## Completion

Maintain source and decision traceability. Route contract conflicts to the owning layer. Report exact gate evidence. Without explicit human acceptance, state **engineering complete, awaiting UAT**.
