# 0.13 → 0.14 review and compatibility

Status: review candidate on `review/tdpd-0.14.0`, not a tagged stable release.
Do not use a nonexistent v0.14 tag.
Do not run an automatic fleet upgrade or edit live skills because this package exists.

1. Back up managed files, local instruction changes, run state and initiative evidence.
2. In a disposable target install the review checkout with the desired adapter;
   diff its `.tdpd/core`, templates, bin and entrypoints against the project.
3. Review/merge project-specific instructions manually. `init --force` still replaces
   colliding managed files; it is NOT a safe merging/upgrading engine.
4. Add CTRL/NEG/CRV/JRN proportionately to the next approved delivery. Existing
   historical runs are not retroactively GREEN under new assurance requirements.
   Do not fabricate old journal entries. Record historical evidence/capture gaps.
5. Run nearest regression/adapter checks in the approved isolated environment;
   review actual mechanisms and artifacts independently, then obtain human UAT.

Run-state `schemaVersion:1` remains readable: new `deliveryAssurance` is optional
for old records, initialized only on new runs. Missing legacy metadata is shown
as not_recorded, not auto-approved. Gates remain advisory/controller-owned records;
neither `audit` nor evidence checker is a secure workflow/authorization engine.
Installation `audit` requires a run state as before and checks the new managed files;
older installs must stage them before running the new audit.

`check-delivery-evidence.js` uses a strict opt-in compact pre-UAT JSON profile:
copy the synthetic example, replace every synthetic fact with actual task records,
link approved spec/base/current candidate and inspect all evidence externally.
Its code documents the accepted profile. Blank templates are not passing evidence.
The standalone JSONL schema carries task context on each event; compact JSON
inherits envelope context and rejects explicit conflicting overrides.

Rollback: restore the prior reviewed managed files/instructions; retain all new
journals, risk/review findings and tests as project evidence, never delete them
to recover an older PASS. No DB/schema migration or production action is included.
OperAI Dev Pack remains separately versioned at its pinned 0.13 baseline, untouched.
