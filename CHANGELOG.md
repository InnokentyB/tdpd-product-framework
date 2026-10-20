# Changelog

TDPD / Test-Driven Product Development is an original method by Innokenty Bodrov.
Detailed historical notes are in [RELEASE_NOTES.md](RELEASE_NOTES.md).

## 0.14.0 — review candidate — 2026-10-20

Branch: `review/tdpd-0.14.0`. This is a versioned review candidate, not a tagged
stable release or an automatic upgrade of existing product installations.

### Added

- Executable Delivery Assurance: critical restrictions map protected assets to
  permission/isolation/guard mechanisms and safe negative probes (`CTRL`).
- Spec-derived negative/abuse boundary coverage (`NEG`), checking refusal/recovery
  AND absence of forbidden writes, dispatch, debits or disclosure.
- Independent candidate Spec/Standards review (`CRV`), code gates, concrete findings
  and fix/retest/re-review before human UAT.
- Timestamped implementation journals (`JRN`), JSON Schema and synthetic examples:
  task/spec/base/actor/scope, actions, decisions, checks, failures and recovery.
- Dependency-free read-only delivery-evidence checker with installed-flow and
  negative regression tests; it verifies declared consistency, not authenticity.
- Bounded non-root Docker Compose jobs for Node and schema validation.

### Changed

- Gates, layer contracts, role cards, all tool adapters and assurance templates.
- Optional additive deliveryAssurance state; existing schemaVersion 1 remains
  readable. Installed CLI now has an explicit ESM package boundary.
- Installation audit output explicitly separates file/state checks from product
  GREEN, enforcement verification, release and UAT.

### Verification and limits

- 39/39 Node tests passed, no skipped tests; current candidate schema and ten-event
  journal passed; Codex/Cline skill validation passed.
- Independent scoped review cleared material findings; RED and failed schema
  attempts remain visible in [review evidence](review/VALIDATION.md).
- No native-client pilot, production certification, automatic capture integration
  or human UAT. Prompts/tests are not technical prevention or absolute safety.
- No live-skill changes, fleet installation or production workload activation.

See [migration/rollback and compatibility](MIGRATION_0.14.md).

## 0.13.0 — 2026-10-10

Added approved Specification Lock, measurable quality attributes, architecture
planning, security/failure challenge, development role profiles and per-build
scenario-level test evidence. See [detailed release notes](RELEASE_NOTES.md#0130).
