# Product Surface Decision

- **Decision ID:** SURF-001
- **Linked problem / opportunity:**
- **Decision owner:**
- **Approval status and date:** proposed / approved / rejected

## Usage context

- Primary actor and job:
- Physical and organizational context:
- Expected devices and input methods:
- Frequency, urgency, and session length:
- Connectivity and environmental constraints:

## Approved surfaces

- Primary user surface: web / mobile / desktop / CLI / API / bot / embedded / other
- Secondary user surfaces:
- Operator or administration surface:
- Integration surface:
- Explicitly excluded surfaces:

## Decision rationale

- Evidence supporting this interaction model:
- Alternatives considered:
- Why the chosen surface fits the user rather than implementation convenience:
- Accessibility and localization implications:
- Security, privacy, identity, and device implications:
- Cost, schedule, and capability tradeoffs:

## Guardrail

If the primary user surface is not explicitly approved, implementation is blocked. A CLI, API, generated file, or test harness must not substitute for an intended graphical or human-facing interface. Engineering tools may supplement but not redefine the approved product surface.
