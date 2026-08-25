# Prior Art

The orchestration layer is informed by the following vendor-neutral work:

- **Orchestrated Coding**, NovickLabs LTD, version 0.2 draft: https://github.com/vnovick/orchestrated-coding
  - Concepts considered: single-owner coordination, isolated work units, durable handoffs, dependency-aware release, independently validated gates, event-driven control loops, and recoverable execution.
  - Source license: Apache License 2.0.
  - This repository implements its own TDPD-specific wording, templates, state model, and CLI behavior; no source code was copied.

TDPD remains a distinct product-delivery method. Orchestration governs execution beneath its specification, test, architecture, and UAT boundaries.

The autonomy-control additions are also informed by the practitioner presentation **Prompt to Prod: Engineering an Autonomous SDLC at Scale**, Andrew Swerdlow, Roblox, QCon AI / InfoQ, recorded 2026-08-24: https://www.infoq.com/presentations/autonomous-ai-software-development-roblox/

- Concepts considered: sandboxing, least-privilege and just-in-time access, distinct agent identity, API/CLI/MCP execution surfaces, staging/canary/telemetry, automated rollback, eval-driven improvement, and measuring successful autonomous work rather than code volume.
- Evidence boundary: the presentation reports Roblox's internal experience and local metrics; this repository does not treat those figures as universal benchmarks or independent validation of TDPD.
- TDPD-specific boundary: the source focuses on execution from prompt to production. TDPD retains human control before the prompt through Problem/Context/Input and after Green through independent UAT.
