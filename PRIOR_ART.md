# Prior Art

The orchestration layer is informed by the following vendor-neutral work:

- **Orchestrated Coding**, NovickLabs LTD, version 0.2 draft: https://github.com/vnovick/orchestrated-coding
  - Concepts considered: single-owner coordination, isolated work units, durable handoffs, dependency-aware release, independently validated gates, event-driven control loops, and recoverable execution.
  - Source license: Apache License 2.0.
  - This repository implements its own TDPD-specific wording, templates, state model, and CLI behavior; no source code was copied.

TDPD remains a distinct product-delivery method. Orchestration governs execution beneath its specification, test, architecture, and UAT boundaries.

The Agentic Assurance profile is informed by **SDAD: Spec-Driven Agentic Development for the AI-Native SDLC**, Vu Hung Nguyen and Thanh Nguyen, arXiv:2608.20341v1 (2026): https://arxiv.org/abs/2608.20341

- Concepts considered: Spec Fidelity, ambiguity and repair economics, independent verification and release authority, synthesis provenance, human comprehension/cognitive debt, and staged reversible adoption.
- Source license: CC BY-SA 4.0.
- Evidence boundary: the report identifies several proposed metrics and illustrative thresholds as needing operational calibration and longitudinal validation. TDPD therefore treats them as local diagnostics, not universal gates.
- Method boundary: SDAD focuses on formal specification and governed agentic synthesis. TDPD retains independent Product & Business validation, approved product surfaces, executable user scenarios before implementation, and human UAT plus production outcome decisions.

The autonomy-control additions are also informed by the practitioner presentation **Prompt to Prod: Engineering an Autonomous SDLC at Scale**, Andrew Swerdlow, Roblox, QCon AI / InfoQ, recorded 2026-08-24: https://www.infoq.com/presentations/autonomous-ai-software-development-roblox/

- Concepts considered: sandboxing, least-privilege and just-in-time access, distinct agent identity, API/CLI/MCP execution surfaces, staging/canary/telemetry, automated rollback, eval-driven improvement, and measuring successful autonomous work rather than code volume.
- Evidence boundary: the presentation reports Roblox's internal experience and local metrics; this repository does not treat those figures as universal benchmarks or independent validation of TDPD.
- TDPD-specific boundary: the source focuses on execution from prompt to production. TDPD retains human control before the prompt through Problem/Context/Input and after Green through independent UAT.

The Context and Evidence Control profile is informed by:

- **Consilience: Conformally Calibrated Communication Control for Hidden-Profile Multi-Agent Reasoning**, Abhijith Babu et al., arXiv:2608.20564v1 (2026): https://arxiv.org/abs/2608.20564
  - Concepts considered: compact discussion state, adaptive challenge/clarification/evidence-seeking/routing actions, separate action and speaker selection, premature-consensus control, and communication-cost awareness.
  - Evidence boundary: TDPD adopts explicit rule-based control first. It does not claim conformal guarantees without representative calibration trajectories, stable loss and exchangeability conditions.
- **PrimeAgentOrchestrator: Memory-Primed Agent Spawning for Personal AI Infrastructure**, Myron Koch, arXiv:2608.20342v1 (2026): https://arxiv.org/abs/2608.20342
  - Concepts considered: role-specific warm starts, bridging independent memory providers, file-based context delivery, readiness detection, and lifecycle evidence.
  - Evidence boundary: the source is a small single-user Claude Code experience report. TDPD generalizes the contract but does not adopt permission bypasses or platform-specific trust manipulation.
- **A Survey on Foundations and Frontiers of Multimodal Agentic Frameworks: Techniques and Applications**, Neel Mokaria et al., arXiv:2608.20379v1 (2026): https://arxiv.org/abs/2608.20379
  - Concepts considered: delegated/late/early fusion, modality-specific and unified memory, temporal and bandwidth management, native-modality grounding, evaluation, and multimodal attack surfaces.
  - Method boundary: native artifacts and transformations extend TDPD provenance and surface acceptance; they do not replace source authority, executable scenarios or human UAT.

**BF1: A Causal Dyadic Sparse-Attention Retrofit for Efficient Long-Context Transformers**, Hina Dixit, arXiv:2608.20427v1 (2026), is recorded as runtime prior art for local-model deployments: https://arxiv.org/abs/2608.20427

- Concepts considered: correctness-gated sparse-attention retrofit, local/global/logarithmic historical coverage, matched controls, dense fallback, and end-to-end rather than kernel-only performance accounting.
- Evidence boundary: BF1 is not a TDPD requirement. The reported work covers one Qwen3-0.6B retrofit and one primary NVIDIA architecture; it does not establish broad retrieval, aggregation, mutable-state or capability preservation.
