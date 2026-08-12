# Outcomes and Learning Layer

This layer begins before delivery with a measurement contract and continues after UAT through controlled launch, live observation, and a lifecycle decision.

Use the loop:

`Baseline → Launch → Observe → Compare → Explain → Decide`

TDPD UAT confirms that the delivered behavior solves the intended job in realistic acceptance. It does not prove adoption, causal impact, operational sustainability, or business value in production.

## 1. Define the measurement contract before delivery

Create `MEAS-###` linked to the opportunity decision and product problem. Define:

- primary user outcome and expected business outcome;
- causal chain from product exposure to behavior and outcome;
- baseline, comparison, or counterfactual;
- primary outcome metric;
- leading/input metrics the team can influence;
- adoption and activation metrics;
- guardrails for quality, cost, safety, compliance, reliability, and support load;
- metric formulas, units, segments, exclusions, data sources, owners, freshness, and observation windows;
- pass, fail, regression, and inconclusive thresholds;
- decision triggered by each result.

A metric that cannot change a decision is telemetry, not a product success criterion. Preserve undefined values as unknown rather than inventing targets.

## 2. Validate instrumentation

Map each metric to events, properties, identities, systems, owners, retention, consent, and quality checks. Confirm:

- exposure can be distinguished from eligibility;
- activation and success events represent real behavior, not page views alone;
- user, buyer, account, and operator identities are not accidentally mixed;
- duplicate, missing, late, bot, test, and internal traffic are handled;
- source data can reproduce the metric formula;
- privacy and retention constraints are explicit;
- a known-good and known-bad case validate critical measurement logic.

Do not launch a decision-critical experiment with unverified instrumentation unless the responsible human explicitly accepts the limitation.

## 3. Prepare launch and operations

Create `LAUNCH-###` for the smallest rollout that can validate the remaining risk: internal alpha, pilot, segment, geography, feature flag, percentage rollout, or general availability.

Require owners and readiness for product scope, pricing/billing when relevant, legal/compliance, data and migrations, monitoring and alerts, support, documentation, training, communications, rollback/contingency, incident response, and observation cadence.

Separate:

- **release:** software is available;
- **launch:** intended users are exposed with communication and operational support;
- **adoption:** users begin the intended behavior;
- **outcome:** the target condition changes.

## 4. Observe production honestly

Record `OUT-OBS-###` observations against the frozen measurement contract. Preserve cohorts, segments, exposure, time window, source query/dashboard version, data-quality notes, operational effort, support load, incidents, and unintended effects.

Do not hide non-users, failed migrations, support-assisted success, churn, selection bias, or users excluded from measurement. Separate raw result from explanation.

## 5. Review outcome and causality

Create `OUT-REV-###`. Compare observed values with baseline and thresholds, then test alternative explanations:

- seasonality or external events;
- selection, survivor, novelty, or rollout bias;
- concurrent product, marketing, pricing, or policy changes;
- metric definition or instrumentation changes;
- learning and time-lag effects;
- behavior moving to an unmeasured channel;
- metric improvement that harms a guardrail;
- manual support effort masking poor product performance.

Classify each conclusion as Known, Plausible, Unsupported, or Contradicted. A green delivery test and positive UAT do not substitute for outcome evidence.

## 6. Make the lifecycle decision

Create `LIFE-DEC-###`. The responsible human chooses exactly one:

- **Iterate:** retain the thesis and change the product or workflow.
- **Scale:** expand exposure or investment because outcome and guardrails support it.
- **Hold:** maintain the current state while awaiting a defined signal or resolving a constraint.
- **Roll back:** reduce or remove exposure because harm, regression, or operational risk exceeds tolerance.
- **Sunset:** end the product or capability and preserve migration, communication, data, and learning records.

Record evidence, confidence, guardrail status, residual risk, next investment boundary, owner, review date, and artifacts invalidated by the decision.

## Launch gate

The gate passes when UAT is accepted and the rollout has:

- validated decision-critical instrumentation;
- defined audience/exposure and success window;
- operational, support, communication, monitoring, and incident owners;
- privacy, legal, billing, migration, and accessibility readiness as applicable;
- explicit rollback triggers and a recoverable rollback path;
- an outcome review date and decision-maker.

## Outcome gate

The gate passes when:

- the observation window is complete or deliberately ended;
- product, adoption, business, operational, and guardrail evidence is available or explicitly missing;
- results are compared with the frozen baseline and thresholds;
- attribution limitations and alternative explanations are visible;
- a responsible human records `LIFE-DEC-###` as Iterate, Scale, Hold, Roll back, or Sunset;
- the next loop returns to the earliest affected Context, Problem, Opportunity, Input, or delivery gate.

Outcome completion closes one learning cycle, not the life of the product.
