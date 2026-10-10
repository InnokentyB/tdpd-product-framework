# Verification Independence Record

- **Record ID:** VER-001
- **Work unit / scenarios:**
- **Specification baseline / hash:**
- **Risk level:**

## Authorities

| Authority | Human, agent, model route, or deterministic system | Version / identity | May approve release? |
|---|---|---|---|
| Specification owner | | | |
| Synthesis actor | | | no |
| Test/oracle author | | | |
| Test/oracle repairer | | | |
| Verification owner | | | |
| Verification actor | | | |
| Merge authority | | | |
| Release authority | | | |
| UAT decision-maker | | | yes for acceptance |

## Independence analysis

- Shared model family, context, prompt, source interpretation, or toolchain:
- Deterministic checks derived from pre-synthesis requirements:
- Independent context/model/human checks:
- Known correlated-failure risk:
- Can the synthesis actor change its own oracle?:
- If yes, compensating control:
- Independence verdict: `SUFFICIENT | CONSTRAINED | INSUFFICIENT`

The actor that synthesized an artifact or weakened/repaired its acceptance oracle must not approve its own release using that evidence alone.

## Evidence and decision

- Verification report:
- Security/conformance evidence:
- Known failing case:
- Residual risk:
- Merge decision and owner:
- Release decision and owner:
- Human UAT record:
