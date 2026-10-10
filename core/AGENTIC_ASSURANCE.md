# Agentic Assurance

Agentic Assurance is a cross-layer control profile for work synthesized or verified by AI agents. It strengthens specification quality, execution evidence, independent verification, and adoption without adding a fifth product layer or replacing human UAT.

Use it together with [CONTEXT_EVIDENCE_CONTROL.md](CONTEXT_EVIDENCE_CONTROL.md) when roles need cross-session context, evidence is distributed, or product truth includes non-text artifacts.

## Spec Fidelity

Review specifications on four dimensions:

1. **Completeness** — actors, surfaces, states, edge cases, failures, recovery, quality attributes, operations, and non-goals are covered proportionately.
2. **Consistency** — requirements, terminology, source decisions, interface contracts, architecture, and project contracts do not conflict silently.
3. **Unambiguity** — a material rule has one stable interpretation; units, boundaries, defaults, authority, and unresolved decisions are explicit.
4. **Verifiability** — every material rule maps to an objective scenario/test or a named manual UAT judgment through the approved product surface.

Use `Ready`, `Ready with constraints`, or `Blocked`. Dimension scores and percentages are diagnostic, not a universal threshold. A critical ambiguity, missing surface decision, unsafe authority gap, or unverifiable material rule blocks Input regardless of an average score.

## Completion before quality

Evaluate agent runs through a funnel:

`started → runtime completed → output present → parseable → schema valid → required artifacts present → non-placeholder → quality-eligible → verified → human accepted`

Timeout, crash, out-of-memory, truncation, parse failure, schema failure, placeholder output, quality failure, and UAT rejection are different outcomes. Do not mix them in one pass rate. Repair and quality metrics apply only to the appropriate eligible denominator.

## Ambiguity and repair telemetry

Record clarification loops, synthesis passes, test rewrites, specification returns, human re-steering, deterministic repairs, token/time/cost where available, and the reason for each return:

- specification gap;
- architecture or project-contract gap;
- implementation defect;
- test or oracle defect;
- environment/tool failure;
- changed product decision.

When comparable cost is available, calculate `repair multiplier = total accepted-outcome cost / first-pass cost`. This is a diagnostic for calibration, not a universal target or proof of model quality. Never invent missing cost or token measurements.

## Independent verification

Separate these authorities explicitly:

- specification owner;
- synthesis actor/model route;
- test/oracle author or repairer;
- verification owner/actor;
- merge authority;
- release authority;
- UAT decision-maker.

The actor that synthesized an artifact or weakened/repaired its acceptance oracle must not approve its own release using that evidence alone. Independence may be supplied by deterministic checks derived from an approved requirement, a separate context or model route, an accountable human reviewer, or a risk-proportionate combination. Correlated model-family review is not automatically independent; record the actual boundary.

## Provenance baseline

Bind every material run to a spec baseline and durable evidence: specification revision/hash, source/input hashes or protected references, prompt/agent configuration, model artifact and route, runtime and generation parameters, tool policy, output references, repair history, verification report, gate outcomes, and human decisions. Create a new run ID for every retry; do not overwrite failed evidence.

Keep sensitive prompts, inputs, and outputs in access-controlled storage. Public audit records may contain hashes, versions, classifications, and redacted summaries instead of raw content.

## Human comprehension

Green code can still create cognitive debt. Before production proximity, verify that a responsible human can locate governing specifications, run and test the system, trace critical behavior to decisions, diagnose representative failures, operate rollback, and understand the remaining autonomy boundary. Missing comprehension is an operational risk, not proof that tests failed.

## Staged adoption

Adopt agentic execution reversibly:

`Assessment → Pilot → Hybrid → TDPD-first`

- **Assessment:** baseline current specifications, verification, tooling, authority, provenance, and operations.
- **Pilot:** run one bounded scenario or feature with complete evidence and human control.
- **Hybrid:** expand only the proven roles or layers while legacy controls remain available.
- **TDPD-first:** make governed specification, synthesis, verification, and UAT the default for eligible work.

Advance on observed readiness, verification evidence, repair behaviour, security, and accepted outcomes rather than calendar dates. A failed gate returns to the earliest affected contract.

## Method boundary

Agentic Assurance governs whether agent execution is understandable and trustworthy. It does not establish product desirability or business value, and it never replaces TDPD's Product & Business decisions, surface-level acceptance scenarios, or human UAT.
