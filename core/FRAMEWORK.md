# Layered Product Framework

The framework is four independently adoptable layers connected by explicit handoff contracts and a shared evidence/governance spine.

| Layer | Primary question | Entry contract | Exit contract |
|---|---|---|---|
| Product & Business | Should we invest, for whom, and under what economics? | source-grounded decision context | approved product bet and commercial boundaries |
| Design & Requirements | What observable system and experience must exist? | approved bet or bounded design problem | deterministic, traceable, architecture- and autonomy-approved delivery contract |
| Implementation & Delivery | Can we produce and accept the required behavior safely? | approved scenarios, tests, architecture boundary, and applicable authority envelope | readiness/red/green evidence, accepted-outcome measures, regression decisions, and human UAT verdict |
| Launch & Operations | Can we reach users, operate safely, and create sustained outcomes? | accepted product plus commercial/measurement contracts | lifecycle decision and learning returned upstream |

## Independence rules

- A layer may run alone when its entry contract is supplied by another process.
- A layer may not silently recreate or override upstream decisions; it records a finding or change request.
- Every layer owns its internal workflow, artifacts, gates, and decision-maker.
- Inter-layer communication uses durable handoffs; informal chat is not the contract.
- Shared evidence, decisions, traceability, role governance, and veto rules apply to every layer.
- `full` composes all four layers but is not the only valid operating mode.

## Composition

The normal path is:

`Product & Business → Design & Requirements → Implementation & Delivery → Launch & Operations`

Feedback may return to the earliest affected layer. Operations can request a requirements change; delivery can expose an infeasible design; design can expose an invalid product assumption. A downstream layer reports the evidence and affected contract but does not silently rewrite upstream intent.

Read [LAYER_CONTRACTS.md](LAYER_CONTRACTS.md) for handoff semantics and the files in [layers/](layers/) for layer ownership.
