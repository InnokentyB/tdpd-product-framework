# Test coverage audit

The QA Analyst derives scenarios and oracles. QA Automation writes and runs tests.
An independent Test Coverage Auditor assesses the inventory, test design and
evidence. The Verification Owner consumes that verdict and owns the Green
decision. The auditor must be independent of the implementation and test authors.
A self-assessment can prepare the record but leaves independent review pending.

## Inventory and test layers

Inventory supported behavior from the approved specification, actual UI/API/CLI
surface, service boundaries, incident history and existing data contracts. Reconcile
conflicts with the product owner. Give every supported action and observable
outcome a row, including unchanged behavior susceptible to regression. Start from
the inventory before opening the tests to avoid inheriting their blind spots.

| Level | Required evidence |
| --- | --- |
| Unit | Individual functions with meaningful rules, validation, decisions or transformations. Assert boundaries and failure behavior deterministically. |
| Integration | Each service with its real owned adapters and relevant dependencies in an isolated environment. Verify contracts, transactions, persistence and effects, including applicable retries, concurrency, authorization and recovery. Record external substitutions. |
| End-to-end | Every supported user-facing operation on the approved entry point, including each relevant role, state and CRUD operation. Exercise the application path with real owned services and disposable persistence. Use explicit stable assertions on the user-visible outcome and relevant durable state. Stub external providers at the external boundary and state what their use leaves unverified. |

For each material case cover applicable empty, invalid, forbidden, duplicate,
retry, interrupted and recovery paths. Record inapplicability with a reason.
A UI journey with a mocked owned backend is valuable browser-level evidence.
Record it as partial coverage of the full product path. A status code, toast,
snapshot, or click without an outcome assertion cannot establish durable success.

For each supported CRUD operation identify the entity and actor. Create and read
the same ID. Update and reload or reopen in a new session to observe the changed
value. Delete and confirm the same entity is absent or in the specified terminal
state. Preserve a control record when selection, scope or bulk effects matter.
Verify that rejection leaves protected state untouched. Independently read back
durable effects for material writes when feasible.

## Review and gate decisions

1. Before Red, review coverage design against the approved inventory, including
   affected existing behavior and uncovered or uncertain rows. Record why each
   test's expected result follows from the approved rule.
2. At Red, inspect raw failure evidence. New or changed behavior must fail for
   the intended reason on the baseline. For a material existing regression check,
   prove the assertion catches a bounded representative break using an isolated
   baseline, controlled test double, or reversible mutation. No production probes.
3. At Green, inspect the candidate tests and exact candidate TRUN. Flag weak
   assertions, conditional actions, hidden skips, important mocked paths,
   incorrect fixtures, false-green tests, and coverage lost through changed tests.
   Verify failing cases distinguish application defects from runner failures.
4. Record each finding with rule, test/artifact, impact, owner and clearing
   condition. Required affected cases with missing coverage, invalid oracles,
   skips, failures, stale evidence or unresolved material findings block Green.
   Fix, rerun, and independently re-review the candidate before clearing the gate.

For an existing project, report the whole known baseline and where it is still
unknown. Prioritize escaped defects, high-risk CRUD and other critical paths.
Legacy gaps outside the affected boundary remain explicit backlog with owners
and due decisions. They cannot justify claiming full product coverage. Progress
measures are covered behaviors by level and risk, known gaps and unknown scope.
Test counts and line coverage help diagnose gaps without deciding the verdict.

Use [the audit record](../templates/test-coverage-audit.md) for each material
delivery and update it when the specification, test or candidate changes.
