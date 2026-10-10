# Development Council Profile

The Development Council is an optional execution profile for applying TDPD responsibilities through one agent, several agents, or human specialists. TDPD does not require one process or model per role. What is mandatory is the responsibility, evidence, authority, and handoff appropriate to risk.

## Modes

- **Single-agent:** one actor applies roles sequentially, labels each lens, and does not claim independence where none exists.
- **Multi-agent:** a controller dispatches bounded roles with acknowledged context, durable outputs, explicit vetoes, and independent verification.
- **Hybrid:** humans own architecture, risk acceptance, release, and UAT while agents prepare and verify bounded artifacts.

## Gate placement

| Phase | Required responsibilities | Output |
|---|---|---|
| Goal and specification | Product lead, Spec Architect, QA Analyst | approved goal, deterministic rules, gaps/blockers |
| Experience | UI/UX Designer, UX Skeptic, Accessibility review | surface, journeys, states, manual judgments |
| Quality attributes | QA Analyst, Tech Lead, Security Officer, Operations | measurable QARs, workload, tests and monitoring |
| Architecture | System Architect, Tech Lead, Security Officer, Architecture/Failure Skeptic | ARCH, ADRs, RISK, fitness functions, human decision |
| Specification Lock | accountable specification owner | LOCK approval or exact blockers |
| Red | QA Analyst, QA Automation, Verification Owner | failing executable scenarios and oracle evidence |
| Implementation | Execution Engineer | smallest coherent implementation and handoff |
| Green | QA Automation, Security Officer, Architect, Failure Skeptic, Verification Owner | TRUN records, risk/fitness verdicts, release recommendation |
| UAT | Product Lead and responsible human | acceptance, rejection, or constrained acceptance |
| Operations | Documentation/Operations and Launch owner | runbook, observability, rollback, learning loop |

## Handoff contract

Every council contribution states role, input IDs and baseline, findings, decisions requested, changed artifacts, checks performed, veto status, unresolved risk, and next owner. Role output without source or artifact locators is advice, not gate evidence.

## Independence

The actor that writes production behavior must not be the sole actor approving its security, architecture fitness, test oracle, or release. Small/low-risk work may combine roles, but must disclose the combination and retain human UAT. High-risk work requires independent security and release authority.

## Vetoes

A veto is valid only when it identifies the role, blocked gate/readiness check, evidence, violated contract or plausible failure, severity, smallest clearing condition, and decision owner. A vague objection or taste preference cannot block delivery.

## Relationship to installed agent packs

Tool-specific agents may implement these responsibilities, but their prompts are adapters rather than canonical method. The installable tool-neutral cards live in `core/roles/`; a harness may invoke them as dedicated agents or sequential lenses. Absence of a dedicated subagent does not waive the responsibility, and presence of an agent file does not prove the review occurred.
