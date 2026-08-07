# Test-Driven Product Development

Test-Driven Product Development (TDPD) is an original method by Innokenty Bodrov.

## Canonical pipeline

`Business problem → Specification → User scenarios → E2E tests → Agent implementation → Acceptance (UAT)`

1. Establish the actor, problem, desired outcome, and success signal.
2. Specify observable behavior, rules, states, data, constraints, failures, and recovery.
3. Describe real sequences of user actions and system responses.
4. Convert every practical scenario into an executable e2e test before production implementation.
5. Let the implementation agent work within a human-approved architecture boundary until tests pass.
6. Have a responsible human decide through UAT whether the result solves the original problem.

## Non-negotiable principles

- Reconcile contradictory sources before development.
- Treat an untestable scenario as a wish until it has an observable condition or is assigned to manual review.
- Prove tests fail because behavior is absent before implementing it.
- Do not weaken tests merely to create green.
- Keep human judgment at architecture input and UAT output instead of requiring line-by-line review of every agent rewrite.
- Preserve traceability from business value to acceptance evidence.
- Never claim product value solely because automated tests pass.

## Honest limits

Tone, perceived convenience, visual taste, and strategic value may require human judgment. Legacy products may need a narrow e2e adoption slice. When no practical executable boundary exists, label the work as a specification or UAT plan rather than completed TDPD.
