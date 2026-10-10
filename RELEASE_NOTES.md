# TDPD 0.13.0 Release Notes

Released: 2026-10-10

TDPD 0.13 strengthens the boundary between product intent, architecture, implementation, and acceptance. The main change from 0.12 is that quality attributes, architecture, security/failure review, and per-build test evidence are now explicit gate contracts rather than advisory concerns.

## What changed from 0.12

### Hard Specification Lock

- `LOCK-###` is required before final scenario drafting, Red, or implementation.
- The lock covers the goal, functional specification, product surface, project organization, measurable quality attributes, architecture, risks, and unresolved decisions.
- Material upstream changes supersede the lock and invalidate affected downstream scenarios, tests, delivery evidence, and prior Green claims.
- Planning and audit modes still do not authorize implementation.

### Measurable non-functional requirements

- Material non-functional requirements are recorded as `QAR-###` Quality Attribute Requirements.
- Each QAR states stimulus/workload, environment, expected response, measurement, threshold, verification method, monitoring, and owner.
- Performance and load requirements include expected and peak concurrency, traffic shape, data volume, latency/throughput/error budgets, saturation behavior, and recovery expectations.
- Unmeasurable adjectives such as “fast”, “secure”, or “scalable” cannot pass the Input gate on their own.

### Architecture as an explicit human decision

- `ARCH-###` records architecture drivers, boundaries, data ownership, trust zones, integration contracts, deployment, observability, migration, rollback, and recovery.
- ADRs compare credible alternatives against the approved functional and quality drivers.
- Architecture decisions remain human-owned when they change material tradeoffs, residual risk, cost, or operational responsibility.
- Architecture fitness checks connect important decisions to executable verification.

### Security and failure challenge

- The Development Council adds a Security Officer and an independent Architecture/Failure Skeptic responsibility.
- `RISK-###` findings cover threats, abuse, authorization, secret handling, dependency compromise, overload, concurrency, partial failure, retries, corruption, recovery, migration, and rollback.
- A veto must identify evidence, severity, affected gate, the smallest clearing condition, and the responsible decision owner.
- Unresolved critical security or architecture vetoes block Specification Lock, Green, or release as applicable.

### Operational Development Council

- Tool-neutral role cards are installed for specification, experience, quality, architecture, security, failure challenge, QA, execution, automation, verification, and documentation/operations.
- The council supports single-agent, multi-agent, and hybrid execution.
- Role files are prompts and responsibility contracts; their presence is not evidence that a review happened.
- Higher-risk work requires verification independent from the implementation author.

### Per-build test evidence

- Every build/test attempt produces a new immutable `TRUN-###`.
- Every required case is reported as `passed`, `failed`, `error`, `skipped`, or `not_run` with environment and diagnostic references.
- Product defects, infrastructure failures, flaky behavior, and missing coverage remain distinct.
- Summary counts must reconcile with case-level records, and retests link to the attempts they supersede.
- A required failed, errored, skipped, or unexecuted test cannot be summarized as Green.

### Evidence and agentic assurance completed in the 0.13 line

- Context packages, evidence ledgers, communication-control events, multimodal evidence, and Decision Evidence preserve provenance and disagreement through delivery.
- Agentic Assurance adds spec-fidelity, completion-before-quality, bounded repair, independent verification, adoption-readiness, and run-cost evidence.
- The CLI run state and status output now expose specification assurance and test-run evidence.
- Claude Code, Cline, Codex, Cursor, GitHub Copilot, universal, and Windsurf adapters carry the new gates.

## New primary artifacts

| Artifact | Purpose |
|---|---|
| `quality-attribute-requirements.yaml` | Measurable NFR/QAR contract |
| `architecture-plan.md` | Architecture drivers, boundaries, alternatives, migration, and operations |
| `architecture-risk-review.md` | Independent security and failure challenge |
| `specification-lock.yaml` | Human-approved authorization for final scenarios and Red |
| `development-council.md` | Role assignments, independence, handoffs, and vetoes |
| `test-run-log.yaml` | Immutable case-level evidence for one build attempt |

## Upgrade guidance

1. Review local changes to the installed adapter and `.tdpd/` directory.
2. Reinstall 0.13 with the same adapter using `--force` only when overwriting framework-managed files is acceptable.
3. Do not rewrite historical evidence. Add a new `LOCK-###` against the current baseline.
4. Convert material NFRs into measurable QARs and document the chosen architecture and risk review.
5. Do not carry a 0.12 Green status forward without a current clean `TRUN-###` covering required scenario, quality, security, recovery, and architecture-fitness checks.
6. Keep responsible-human UAT as the final product acceptance boundary.

## Compatibility

- Node.js 18 or newer remains required for the CLI.
- Existing natural-language Shape, Plan, Deliver, and Audit entry points remain available.
- Existing 0.12 evidence remains historical input but does not automatically satisfy the new lock or per-build verification gates.
- Tool-specific multi-agent runtimes are optional; all council responsibilities can be executed sequentially when the lack of independence is disclosed and risk permits it.

## Verification

The release test suite covers adapter installation, layer installation, product-surface and project-organization enforcement, agentic assurance, context/evidence control, Specification Lock, architecture/security review, per-build test evidence, run tracking, and audit behavior.
