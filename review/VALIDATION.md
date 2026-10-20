# TDPD 0.14 review evidence

Base: `2f5c87c` / 0.13.0. Candidate is local branch `review/tdpd-0.14.0`, not
published/tagged, installed into live projects, or accepted via human UAT.

## Executed

- RED: 0/15 new tests passed because new verifier surface did not exist;
  bounded runner/installer executed. `red.log` preserves diagnostics.
- GREEN: 39/39 Node tests passed, 0 skips/failures. `green.log` includes original
  installer/layer/state tests and 18 new verifier/installed-flow tests.
- JSON Schema draft 2020-12 checks schema and actual journal/events, synthetic
  standalone example and aligned framework/plugin version. `schema.log` preserves
  initial successful snapshot; final Compose run is recorded as `schema-final.log`.
- Skill Creator quick_validate: Codex and Cline SKILL.md passed; no live skills
  changed. Other adapters are instruction entrypoints, not native-client E2E-tested.
- `git diff --check` passed; JavaScript syntax is exercised by Node test execution.
- Independent read-only Spec/Standards review: material findings fixed/reviewed;
  exact scope and limitations in `independent-review.md`.

## Failure and recovery, not hidden

Schema attempt 1 and 2 failed while loading the native jsonschema dependency on
temporary noexec storage. Third job passed with explicit executable temporary
library storage, no host secrets or application access. Reusable schema-checks
image installs pinned direct validators at build time; runtime remains non-root,
read-only, network-none and noexec /tmp. Both failures remain in attempt logs.

## Limits

No independent model/native-client behavior pilot, production permission/isolation
certification, live-provider smoke, signature/authenticity validation, complete
automatic journal collector or human UAT. No formatter/linter/typechecker toolchain
is configured by this repository: Node execution, whitespace check and independent
source review do not substitute for those gates in downstream application projects.
The verifier checks declared evidence structure only, not artifacts or authority.

Docker Compose provides bounded one-off verification, not an application sandbox
implementation. No background services, ports, databases, credentials, publisher,
bot, scheduler, production installation, push or deploy were activated.
Temporary containers use --rm; source/evidence directories retained for inspection.
