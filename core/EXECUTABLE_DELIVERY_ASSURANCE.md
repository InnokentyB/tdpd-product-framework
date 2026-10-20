# Executable Delivery Assurance — 0.14

TDPD remains six steps: problem, specification, user scenarios, tests first,
agent implementation, human UAT. Human architecture/risk decisions govern input;
independent verification governs implementation; the owner accepts value at output.
This module strengthens existing gates, not a fifth layer or seventh step.

## Constraints must have mechanisms

For every critical restriction create `CTRL-###`: protected asset and forbidden
action, threat/authority boundary, mechanism, configuration/identity/scope,
negative probe, expected refusal/recovery, forbidden side-effect assertion,
actual observation, evidence locator, baseline/revision, owner and residual risk.

Distinguish mechanisms rather than substituting one for another:

- Instructions/signs describe policy; an AGENTS file cannot revoke write access.
- Permissions/barriers (scoped/read-only credentials, object authorization) limit
  operations; verify at the server/storage boundary, not merely hidden UI controls.
- Isolation/glass (sandbox, read-only mounts, separate volumes/identities, bounded
  network/resources) limits reach; test escapes and host/provider access safely.
- Guards/hooks reject invalid transitions; enforce below caller-controlled input
  and test direct/bypass routes, concurrency and stale revisions.
- Tests detect failures for examined cases; a passing test does not constrain an
  actor outside that path, revoke credentials or prove absolute safety.

A critical control cannot be labelled implemented using prompts or tests alone.
Layer controls proportionately. Never exercise real forbidden production actions
just to obtain evidence; use synthetic state and controlled dispatch/payment spies.
Unverified controls remain UNVERIFIED, not safe-by-documentation. Explicitly state
unsupported attack surfaces and residual risk. A guard can have bypasses.

## Negative/abuse scenarios from the contract

Derive a boundary/state model from the locked spec independently of implementation.
Record applicable classes: malformed/wrong data; foreign/insufficient identity;
skipped stage; stale approval/spec/revision; duplicate/replay/race; interruption,
partial failure and recovery; direct/alternate route and bypass attempts. For each
class provide SCN IDs or an owned N/A rationale. Scale depth to risk, not test count.

Each scenario asserts BOTH the correct refusal/recovery AND absence of forbidden
changes, outbound sends, debits, resource escalation or leaked data. Compare durable
before/after state, attempts/outbox and provider spy where applicable; status code
alone is insufficient. Concurrent scenarios need coordinated simultaneous actors,
not two sequential calls described as a race. Bind oracle and evidence to revision.
RED fails because specified behavior is missing, not unavailable infrastructure.
Never derive expected behavior merely from current code or weaken assertions for GREEN.

## Code gates after writing

Before human UAT require formatter, lint, types (or explicit N/A), agreed coding
rules, module/dependency boundaries, security and architecture-fitness checks,
plus scenario/QAR tests and an independent strict review of the exact candidate.
The author cannot manufacture independence by renaming a role. Separate Spec
(requirements/oracles) and Standards (code/security/architecture) verdicts;
one independent reviewer may provide both when risk permits. If unavailable,
record BLOCKED; do not ask the owner to review every intermediate rewrite.

Inspect bypasses, races, hidden effects, weakened/skipped tests, oracle edits,
excess scope, failures swallowed by catches and unreviewed dependency/config changes.
Each finding names scenario, impact, location/evidence, severity, owner and smallest
clearing condition. Do not invent criticism to fill a quota. Material defects block
release readiness; fix, retest and re-review the changed candidate. A code change
invalidates affected reviews/evidence until impact is reviewed, never silently
reuse an older PASS. Preserve failures and dissent, not only final averages.

## Journal during work, not a retrospective story

Start a timestamped implementation/event journal before implementation. Bind task,
spec/baseline version, base commit, actor and approved scope. Append actions with
short operational reasons, files and requirement/decision links; expected/actual
checks and evidence; sanitized errors, root cause or UNKNOWN, recovery and retest.
Keep planned / attempted / completed / verified distinct. Preserve failed attempts;
a retry appends a new linked attempt rather than overwriting prior results.

Capture allowlisted command metadata, exit status and sanitized result artifacts
automatically where the harness supports it. Do not log raw shell commands with
tokens, environment dumps, sensitive payloads or hidden chain-of-thought. The agent
records concise decisions, not private reasoning transcripts. Keep sensitive raw
evidence in an authorized restricted store; share redacted locators and summaries.
If redaction fails stop capture, quarantine the material and record the gap.

On pause/handoff include current commit, last event, open findings, active owner,
next action, missing evidence and UAT status. Expose capture outages and uncertain
event times honestly; never backfill a fabricated exact chronology.

## Machine check boundary

Use `node .tdpd/bin/check-delivery-evidence.js <evidence.json>` for the optional
strict pre-UAT evidence profile. It performs read-only structural/consistency
checks on declared controls, negative outcomes, current-revision code gates,
review and journal. It does not execute tests, dereference evidence, authenticate
reviewers, prove journal completeness or enforce an application gate. A malicious
author can fabricate a structurally valid record. Verification owners inspect
underlying artifacts and actual permission/isolation configuration independently.
Baseline/signature/time authenticity belongs to the approved harness/store.
No CLI success changes run state, grants release authority or accepts UAT.
