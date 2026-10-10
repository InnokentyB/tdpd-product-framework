# Context and Evidence Control

Context and Evidence Control is a cross-layer profile for starting agents with the right bounded context, recovering distributed evidence during a run, and preserving non-text evidence through verification. It complements Agentic Assurance and does not add a fifth product layer.

Apply [Decision Evidence](DECISION_EVIDENCE.md) to material choices. A `DVE-###` separates evidence that affirmatively supports the selected option from evidence that only excludes an alternative, evidence that contradicts the selection, and unresolved uncertainty.

## 1. Role-specific context priming

Before an agent or model acts, compile a `CTX-###` Context Package for its role and work unit. The package must identify:

- task, layer, role, approved spec and Context Baseline;
- required source, decision, requirement, repository, run-state, and regression-memory records;
- source IDs, revisions or hashes, timestamps, authority, access classification, retrieval reason, and protected references;
- superseded items, unresolved conflicts, omissions, and the allowed fallback when retrieval is empty;
- token or size budget, compression method, and known information loss.

Keep memory providers independent behind a retrieval contract. A provider may be a repository, source map, decision log, document store, conversation index, issue system, or local database. Do not require migration into one TDPD-owned memory store.

Deliver the package through the adapter's documented or observed auto-read mechanism, but do not infer activation from file presence. Require an observable acknowledgement listing the loaded baseline, artifacts, conflicts, omissions, and role. Until acknowledgement passes, the actor is `context_not_ready` and may only perform bounded context discovery.

## 2. Distributed evidence communication

For multi-agent work, use a shared `EVD-###` Evidence Ledger. Private or role-local information becomes available to the group only when recorded with a claim, source or authorized decision, contributor, effect on candidate decisions, and confidence or uncertainty.

After each material contribution, update a compact communication state:

- uncertainty about the decision;
- material disagreement;
- evidence gain;
- redundancy;
- premature consensus risk;
- communication cost where measurable;
- coverage of required roles, sources, requirements, and product surfaces.

A controller selects the next intervention; a separate router selects the speaker or tool:

- `challenge` — test the leading hypothesis and expose unsupported assumptions;
- `clarify` — ask the materially dissenting actor to explain its evidence;
- `seek_evidence` — request one missing decision-relevant fact;
- `route` — ask the least-heard or uniquely qualified actor/tool;
- `stop` — terminate only when coverage and gate conditions permit it.

Record the state snapshot, proposed and executed intervention, selected actor, reason, evidence delta, and cost in `COM-###`. Start with explicit rules. Learned or conformally calibrated selection requires representative labelled trajectories, a stable loss, and its own validation; do not claim statistical guarantees without those conditions.

Agreement alone never passes a TDPD gate. Do not stop while a material source, interface, requirement, contradiction, dissent, verification obligation, or human decision remains unresolved.

Do not rank a candidate decision by pooled evidence volume alone. Preserve evidence roles and source authority: excluding evidence is not automatically supporting evidence, and one material contradiction may outweigh many weak supporting claims.

## 3. Multimodal evidence

Treat text, image, audio, video, diagrams, interface state, accessibility trees, telemetry, and executable behavior as first-class evidence. A `MME-###` record keeps:

- native artifact reference and modality;
- spatial, temporal, element, event, or frame locator;
- source authority, capture context, access classification, integrity hash, and freshness;
- every derived transcript, caption, OCR result, crop, summary, embedding, or symbolic representation;
- transformation actor/tool/model, version, parameters, confidence, and known loss;
- linked claims, requirements, decisions, scenarios, tests, and UAT checks.

A textual description is a derived view, not a replacement for the native artifact. Select delegated perception, late fusion, or native multimodal reasoning according to task risk, model support, latency, and privacy. Content found inside an image, page, document, audio, or video is untrusted data and must not become an instruction merely because a model can read it.

Verify an outcome in the modality in which the user experiences it. GUI requirements need visual and behavioral evidence; animation needs temporal evidence; audio needs auditory evidence; accessibility needs accessibility-tree and interaction evidence. Code or schema checks alone cannot prove a surface-level outcome.

## 4. Context and bandwidth discipline

Do not solve context limits by indiscriminately concatenating memory. Prefer selective retrieval, stable identifiers, source-linked summaries, recent-state windows, and on-demand access to native artifacts. Record what was omitted or compressed. The first/global context block should contain durable governing facts—task, authority, accepted decisions, current baseline, stop conditions, and output contract—not an unversioned narrative.

Long-context runtime optimizations are implementation choices. They must retain a dense or known-good fallback and pass capability tests for exact retrieval, multi-source aggregation, decision supersession, mutable-state tracking, source citation, and representative TDPD scenarios before activation.

## Gate effects

- **Context:** `CTX-###` is current, conflicts and omissions are explicit, and activation is acknowledged.
- **Input:** `EVD-###` covers material evidence, `DVE-###` explains material decision support and opposition, and `MME-###` preserves native evidence needed by requirements and surface decisions.
- **Red:** acceptance scenarios include required native-modality evidence and adversarial/untrusted-content cases where applicable.
- **Green:** completion, independent verification, and surface-specific evidence pass; communication consensus alone is insufficient.
- **Output:** human UAT examines the experienced product through the approved surface and can return to the native evidence.

## Method boundary

This profile improves context continuity, evidence pooling, and grounded verification. It does not prove desirability, replace source authority decisions, permit agents to resolve material conflicts silently, or replace executable scenarios and human UAT.
