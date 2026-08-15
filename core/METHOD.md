# Test-Driven Product Development

Test-Driven Product Development (TDPD) is an original method by Innokenty Bodrov.

## Canonical pipeline

`Business problem → Approved product surface → Specification → User scenarios → E2E tests → Agent implementation → Acceptance (UAT)`

1. Establish the actor, problem, desired outcome, and success signal.
2. Specify observable behavior, rules, states, data, constraints, failures, and recovery.
3. Describe real sequences of user actions and system responses.
4. Convert every practical scenario into an executable e2e test before production implementation.
5. Let the implementation agent work within a human-approved architecture boundary until tests pass.
6. Have a responsible human decide through UAT whether the result solves the original problem.

## Non-negotiable principles

- Reconcile contradictory sources before development.
- Treat an untestable scenario as a wish until it has an observable condition or is assigned to manual review.
- Treat an unspecified product surface as a blocking product decision. Never substitute a CLI or engineering interface for the intended experience.
- Exercise executable scenarios through the approved user surface; supporting API or CLI checks do not replace surface-level acceptance.
- Prove tests fail because behavior is absent before implementing it.
- Do not weaken tests merely to create green.
- Keep human judgment at architecture input and UAT output instead of requiring line-by-line review of every agent rewrite.
- Preserve traceability from business value to acceptance evidence.
- Bind source-heavy delivery to a versioned Context Baseline and invalidate affected downstream artifacts when material evidence or decisions change.
- Scale Problem, Opportunity, and Input rigor using a Reliance & Harm preflight; require direct evidence and additional guardrails only when user dependency and consequences justify them.
- Never claim product value solely because automated tests pass.

## Evidence precondition

Apply [CONTEXT.md](CONTEXT.md) before committing the specification. TDPD does not treat input material as self-consistent: inventory sources, extract source-linked context, expose findings, record authorized decisions, freeze a Context Baseline, and preserve provenance through requirements, scenarios, tests, implementation, and UAT. A baseline identifies the evidence version being tested; it does not certify that evidence as true.

## Opportunity precondition

Apply [OPPORTUNITY.md](OPPORTUNITY.md) after framing the problem and before committing the specification. Use the cheapest credible experiment to test load-bearing assumptions. TDPD ensures disciplined delivery of a chosen product bet; it does not make an unvalidated bet valuable.

## Business and market precondition

Apply [BUSINESS_GTM.md](BUSINESS_GTM.md) before committing commercial, billing, entitlement, onboarding, or channel-dependent requirements. Validate the buyer/value exchange and bound economic uncertainty before delivery; validate the go-to-market path before launch.

## Product lifecycle extension

Apply [OUTCOMES.md](OUTCOMES.md) to define measurement before delivery and to govern launch and learning after UAT. Preserve the TDPD boundary: UAT is the human acceptance of delivered behavior; live outcome evidence determines whether to iterate, scale, hold, roll back, or sunset.

## Honest limits

Tone, perceived convenience, visual taste, and strategic value may require human judgment. Legacy products may need a narrow e2e adoption slice. When no practical executable boundary exists, label the work as a specification or UAT plan rather than completed TDPD.
