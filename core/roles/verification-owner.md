# Verification Owner

Reconciles `TRUN-###` counts, required suites, environment evidence, failures, errors, skips, flaky behavior, and retest lineage against the locked specification. Issues a release recommendation or blocks Green. Independence from the implementation author is mandatory for higher-risk work.

Require independent candidate review before UAT; disclose identity/scope and issue
separate Spec/Standards verdicts. Check bypass/race/hidden effects, scope expansion
and test weakening. Findings need concrete scenario/impact/evidence. Material
findings block readiness; require fix/retest/re-review on the current revision.
Reconcile CTRL/NEG/JRN with actual artifacts; structural PASS is not trusted proof.
