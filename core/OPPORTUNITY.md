# Opportunity and Validation Layer

This layer determines whether a sourced problem is worth further product investment before a deterministic solution specification is committed.

Use the loop:

`Assumption → Hypothesis → Cheapest credible test → Evidence → Decision`

## 1. Define the opportunity

Create `OPP-###` from source-grounded context. State:

- target user and, when different, buyer or approver;
- job, pain, trigger, frequency, severity, and urgency;
- current workaround and competing alternatives, including doing nothing;
- desired behavior change and user outcome;
- expected business outcome and plausible causal mechanism;
- reachability of the segment;
- constraints and reasons this opportunity matters now.

Do not convert a goal, stakeholder request, market narrative, or solution idea into proof of a problem. Trace every factual claim to the Context layer.

## 2. Classify reliance and potential harm

Create `RH-###` before committing the opportunity:

- **LOW:** the user can readily decline or leave; failure is local, short-lived, and reversible.
- **MATERIAL:** failure can cause meaningful loss of time, money, data, access, or trust.
- **HIGH:** the product affects health, rights, education, substantial financial decisions, or another essential service, and exit is constrained.

Record user dependency, practical ability to exit, severity and duration of plausible harm, reversibility, affected edge or excluded users, and available support or recovery. This classification selects the depth of evidence and acceptance work; it is not a claim that the product is safe.

For `MATERIAL` and `HIGH`, distinguish the expressed request from the underlying need, obtain direct contextual evidence for load-bearing assumptions, examine immediate and delayed consequences, and name guardrail signals. Telemetry can show behavior but must not be treated as sufficient evidence of motivation. In-person research is not universally required; choose a method capable of testing the risk in its real context.

## 3. Register load-bearing assumptions

Use `ASM-###` and classify assumptions across:

- **Desirability:** the problem is important and the intervention is wanted.
- **Usability:** people can understand and use the proposed experience.
- **Feasibility:** the team can build, operate, and support it.
- **Viability:** buyer, value exchange, cost, and strategic fit can work.
- **Compliance/trust:** legal, privacy, security, ethical, and reputational constraints are acceptable.
- **Adoption:** users can be reached, switch, migrate, learn, and sustain the new behavior.

Rank assumptions by consequence if false, uncertainty, and cost of learning. Test the smallest set capable of killing or materially changing the opportunity.

## 4. Map alternatives and switching

Compare the opportunity with current behavior, manual workarounds, adjacent products, internal processes, and doing nothing. Record who chooses, what triggers reconsideration, switching costs, trust requirements, and why the existing option remains acceptable.

The product competes first with the current workaround, not merely with products in the same category.

## 5. Design the cheapest credible experiment

Use `EXP-###`. Define:

- linked assumption and falsifiable hypothesis;
- method and comparison or baseline;
- target participants or observed population;
- exact exposure or intervention;
- leading behavior and outcome metrics;
- observation window;
- pass, fail, and inconclusive thresholds before collecting results;
- decision triggered by each outcome;
- cost, timebox, owner, ethics/privacy constraints, and primary bias risk.

Prefer observed behavior over stated intent, and payment or costly commitment over casual interest. Use interviews, existing-data analysis, concierge service, Wizard of Oz, prototype, fake door, landing page, pre-order, paid pilot, or technical spike according to the uncertainty. Do not build a full product when a cheaper test can answer the decision.

## 6. Preserve observations

Record raw observations separately from interpretations. Each `OBS-###` links to participant/cohort, time, method, source/evidence, observed behavior, quote only when exact wording matters, limitation, and experiment ID.

Do not hide negative cases, non-response, drop-off, selection bias, or operational effort. Do not count duplicate or dependent observations as independent confirmations.

## 7. Evaluate validity

Before interpreting results, check:

- baseline and counterfactual;
- selection and survivorship bias;
- novelty and researcher effects;
- sample adequacy for the decision, without pretending weak samples prove population claims;
- attribution and alternative explanations;
- metric gaming and Goodhart effects;
- time lag and whether the observation window matches the outcome;
- whether the observation window can reveal plausible delayed harm;
- difference between user, buyer, approver, and operator behavior;
- whether edge or excluded users were absent from the evidence;
- what worked manually but may fail at scale.

Classify the result as pass, fail, or inconclusive using the precommitted thresholds. Changing thresholds after seeing results requires a `DL-###` decision and preserves the original threshold.

## 8. Make the opportunity decision

Create `OPP-DEC-###` with exactly one disposition:

- **Proceed:** evidence supports the smallest product bet.
- **Proceed with constraints:** bounded delivery is justified while named non-critical uncertainty remains.
- **Revise:** change segment, problem framing, mechanism, or experiment and retest.
- **Stop:** do not invest further under the current thesis.

Record evidence, failed assumptions, residual uncertainty, investment limit, smallest next slice, kill criteria, decision-maker, and review date. A failed test is useful evidence, not a reason to quietly redesign the story.

## Opportunity gate

The gate passes only when:

- the opportunity and current alternatives are source-grounded;
- load-bearing assumptions are visible and ranked;
- reliance/harm is classified and the depth of evidence is proportionate;
- material desirability/adoption risk has behavioral evidence or an explicit constrained decision;
- `MATERIAL` and `HIGH` opportunities have direct contextual evidence, edge-user coverage, consequence analysis, and guardrail signals or remain blocked;
- experiments have predeclared pass, fail, and inconclusive rules;
- observations and interpretations remain distinct;
- the responsible human records an `OPP-DEC-###` disposition;
- the chosen bet has an investment boundary and kill criteria.

The Opportunity gate does not require certainty. It requires uncertainty to be explicit, tested proportionately, and owned by a decision-maker.
