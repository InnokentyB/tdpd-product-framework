# Prior Art

The orchestration layer is informed by the following vendor-neutral work:

- **Orchestrated Coding**, NovickLabs LTD, version 0.2 draft: https://github.com/vnovick/orchestrated-coding
  - Concepts considered: single-owner coordination, isolated work units, durable handoffs, dependency-aware release, independently validated gates, event-driven control loops, and recoverable execution.
  - Source license: Apache License 2.0.
  - This repository implements its own TDPD-specific wording, templates, state model, and CLI behavior; no source code was copied.

TDPD remains a distinct product-delivery method. Orchestration governs execution beneath its specification, test, architecture, and UAT boundaries.
