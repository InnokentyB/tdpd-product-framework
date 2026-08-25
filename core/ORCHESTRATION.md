# Orchestrated Execution

This layer governs how one or more agents execute an approved TDPD delivery contract. It does not change the product problem, specification, scenarios, architecture approval, or human UAT authority.

## Execution modes

- **Manual:** one responsible human or primary agent owns dispatch, context, gate decisions, and recovery. Additional roles may be review lenses rather than separate workers.
- **Orchestrated:** one controller may delegate bounded work units to isolated workers. The current CLI records this intent but does not claim to provide an automated daemon, queue, or merge service.

## Required execution rules

1. Keep one logical owner of scheduling, shared resources, and dependency decisions.
2. Give each work unit one writer and an isolated branch, worktree, sandbox, or non-overlapping surface when work is concurrent.
3. Assemble worker context from versioned source material and durable prior artifacts.
4. Require a written handoff after every delegated unit, including partial or failed work.
5. Dispatch only units whose dependencies are explicitly satisfied. Treat unknown dependency state as blocked.
6. Require deterministic checks before a unit is accepted. Validate critical gates with a known failing case where practical.
7. Use independent review proportionate to risk. Keep human approval for architecture, high-risk actions, and final UAT.
8. Preserve execution evidence: unit, owner, input artifacts, changed surfaces, checks, handoff, failure cause, and recovery action.
9. Execute only inside the approved `AUT-###` authority envelope. Use a distinct auditable agent identity where supported; deny inherited or long-lived access that is not required for the work unit.
10. Prove `ER-###` Execution Readiness before implementation. Tool availability without a safe test, stop condition, and recovery path is not readiness.

For an agentic run, record the decision path, versioned execution contract, tool authorization, side effects, validations, and outcome in `templates/agent-run-evidence.md`. Missing required provenance makes the run `INCOMPLETE`, not passed; execution evidence still does not replace independent tests or human UAT.

Do not optimize for uninterrupted run duration alone. A long run that fails to converge, consumes unbounded cost, or reaches Green only after hidden human steering is not autonomous success. Record accepted outcome, interruptions, owner time, first-pass UAT, rollback, escaped defects, and cost where measurable.

## Work-unit state

Use `templates/work-unit.md`. A unit moves through:

`planned → eligible → active → review → passed | blocked | failed`

Only the controller changes eligibility or shared scheduling state. Workers may report facts and artifacts; they do not negotiate ownership of shared mutable resources.

## Relationship to product gates

Execution state never overrides TDPD gates. A passed work unit can contribute evidence to Red or Green, but only the responsible product flow advances gates. Automated merge, if a future runtime provides it, is not UAT.

## Prior art

The separation of single-owner coordination, isolated work, durable handoffs, dependency-aware release, validated gates, and recovery is informed by the Apache-2.0 licensed Orchestrated Coding specification by NovickLabs LTD: https://github.com/vnovick/orchestrated-coding
