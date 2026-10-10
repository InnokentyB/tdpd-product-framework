# Decision Evidence

Decision Evidence makes the rationale behind a material `DL-###` decision inspectable without confusing support for a choice with rejection of an alternative. Use a `DVE-###` record when a decision changes product intent, requirements, architecture, risk, acceptance, launch, or lifecycle state.

## Evidence roles

Assign every decision-relevant claim exactly one role for the decision under review:

- **supporting** — affirmative evidence for the selected option under a named selection criterion;
- **excluding** — evidence against a rejected alternative; it does not automatically support the selected option;
- **contradicting** — evidence that weakens the selected option, its assumptions, or its expected outcome;
- **uncertain** — missing, inaccessible, ambiguous, stale, or inconclusive evidence that could change the decision.

The role is contextual, not intrinsic to a source. The same source may support one decision and contradict another. Record an atomic claim and exact locator; never label an entire document as supporting or contradicting.

## Decision contract

Each `DVE-###` must identify:

- linked `DL-###`, accountable decision-maker, date, status, and Context Baseline;
- decision question, selected option, alternatives, and explicit selection criteria;
- atomic evidence items with source/decision IDs, locators, modality, role, confidence, freshness, authority, and affected criterion;
- material contradictions and uncertainties, their disposition, owner, and review date;
- explanation of why the supporting evidence is sufficient for the decision's reversibility and reliance/harm level;
- downstream rules, scenarios, tests, work units, UAT, launch, and outcome records affected by change.

Counts and confidence scores are diagnostic. They do not authorize a decision, cancel a contradiction, or replace source-quality review. One authoritative contradiction may outweigh many weak supporting items.

## Multimodal and derived evidence

Link native evidence through `MME-###`. A transcript, OCR result, caption, crop, embedding, or model explanation remains a derived representation and must retain its native locator and transformation provenance. Verify important visual, auditory, temporal, interface, and accessibility claims in the modality in which the user experiences them.

## Verification

Before a decision passes its owning gate, an actor independent from the decision synthesis should check:

1. every material rationale claim has a readable locator or is marked uncertain;
2. supporting and excluding roles are not conflated;
3. contradicting evidence is retained and dispositioned, not hidden by aggregation;
4. alternatives use the same declared criteria where comparable;
5. decision status and downstream traceability match the current baseline;
6. a material evidence change marks the `DVE-###`, linked `DL-###`, and affected artifacts `STALE` until impact review.

For automated or small-model workflows, validate structure deterministically before semantic review. A model may propose roles, but the accountable human retains authority for material classification disputes and the decision itself.

## Gate effects

- **Context:** material decisions have current `DVE-###` records linked to atomic evidence and the Context Baseline.
- **Input:** supporting evidence covers every load-bearing selection criterion; contradictions and uncertainty are resolved, bounded, or explicitly escalated.
- **Red/Green:** tests verify the observable consequences of the decision, not the claimed importance of its sources.
- **Output and later gates:** UAT and production outcomes may confirm, weaken, or contradict the decision and trigger impact review.

## Method boundary

Decision Evidence improves traceability and explanation. It does not prove causality, make feature-importance scores faithful, turn absence into evidence, or transfer decision authority from the responsible human.
