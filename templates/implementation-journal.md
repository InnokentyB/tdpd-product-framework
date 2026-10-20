# JRN-### — Capture and handoff contract

Use timestamped JSONL events matching implementation-journal.schema.json.
Start before implementation; append at action/check/error/handoff boundaries.
For compact delivery-evidence JSON, task/spec/base/scope may be inherited from
the envelope. Standalone JSONL events must carry those fields themselves.

Record planned → attempted → completed → verified only as actually observed;
these are evidence labels, not an enforced runtime state machine. A completed
command may fail; its result/error remains, a linked recovery is a new event.
Do not manufacture missing transitions or timestamps after a capture outage.

- Capture owner, allowlisted runner, redaction policy and restricted raw store:
- Required task/spec/base/scope/actor, action/decision/files/check traceability:
- Error → root cause or UNKNOWN → recovery → reverify links:
- Current candidate revision, open findings, next owner/action and UAT status:
- Capture gaps, synthetic/example records, access/retention limitations:

Example (synthetic, not evidence):

```json
{"id":"J-demo","timestamp":"2026-10-20T00:00:00Z","actor":"demo-author","task":"demo","specVersion":"LOCK-demo","baseCommit":"demo-base","approvedScope":"synthetic only","status":"completed","action":"run negative save test","reason":"check forbidden writes","requirements":["RULE-demo"],"decisions":["DL-demo"],"files":["demo-test"],"expected":"deny with unchanged storage","actual":"response denied but storage mutated","evidence":["synthetic://failing-state-diff"],"error":{"summary":"forbidden write observed","rootCause":"UNKNOWN pending investigation","recovery":"block GREEN; inspect guard and append repair/retest event"}}
```
