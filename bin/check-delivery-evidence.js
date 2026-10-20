#!/usr/bin/env node

// Structural consistency only. Never executes commands or follows evidence links.
import { readFile } from 'node:fs/promises';

const requiredGates = ['formatter', 'lint', 'types', 'codingRules', 'moduleBoundaries', 'security', 'architecture'];
const present = value => typeof value === 'string' && value.trim().length > 0;
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const strings = value => Array.isArray(value) && value.length > 0 && value.every(present);
const records = value => Array.isArray(value) && value.length > 0 && value.every(record);

function validate(e) {
  const issues = [];
  const require = (condition, message) => { if (!condition) issues.push(message); };
  require(record(e), 'root must be an object');
  if (!record(e)) return issues;
  require(e.schemaVersion === 1, 'unsupported schemaVersion');
  for (const key of ['task', 'specVersion', 'baseCommit', 'revision', 'implementationActor', 'approvedScope']) {
    require(present(e[key]), `missing ${key}`);
  }
  for (const key of ['controls', 'negativeScenarios', 'codeGates', 'journal']) require(records(e[key]), `${key} must contain records`);
  if (issues.length) return issues;
  const current = item => item.revision === e.revision;
  const unique = (items, name) => require(items.every(i => present(i.id)) && new Set(items.map(i => i.id)).size === items.length, `invalid/duplicate ${name} IDs`);
  for (const key of ['controls', 'negativeScenarios', 'codeGates', 'journal']) unique(e[key], key);
  for (const item of e.controls) {
    require(typeof item.critical === 'boolean', 'control critical flag required');
    require(present(item.asset) && present(item.invariant), 'control asset/invariant required');
    require(record(item.mechanism) && ['instruction', 'permission', 'isolation', 'guard', 'test'].includes(item.mechanism.kind) && present(item.mechanism.description), 'invalid control mechanism');
    if (item.critical) require(['permission', 'isolation', 'guard'].includes(item.mechanism?.kind), 'critical control cannot rely on instruction/test alone');
    require(current(item) && strings(item.evidence), 'control evidence missing or stale');
    require(e.negativeScenarios.some(s => s.id === item.negativeTest), 'control negative test missing');
  }
  for (const item of e.negativeScenarios) {
    require(['requirement', 'boundaryModel', 'expected', 'actual', 'forbiddenEffect'].every(k => present(item[k])), 'negative scenario contract incomplete');
    require(item.status === 'passed' && item.forbiddenEffectObserved === false, 'negative scenario failed or forbidden effect not excluded');
    require(current(item) && strings(item.evidence), 'negative scenario evidence missing or stale');
  }
  require(requiredGates.every(id => e.codeGates.some(g => g.id === id)), 'required code gate missing');
  for (const gate of e.codeGates) {
    require(gate.status === 'passed' || (gate.status === 'not_applicable' && present(gate.reason)), 'code gate not satisfied');
    require(current(gate) && strings(gate.evidence), 'code gate evidence missing or stale');
  }
  const review = e.review;
  require(record(review), 'independent review missing');
  if (record(review)) {
    require(present(review.reviewer) && review.reviewer !== e.implementationActor, 'independent reviewer required');
    require(current(review) && review.verdict === 'passed' && review.openMaterialFindings === 0 && strings(review.evidence), 'review failed, stale or unresolved');
  }
  let previous = -Infinity;
  for (const event of e.journal) {
    for (const key of ['task', 'specVersion', 'baseCommit', 'approvedScope']) {
      require(event[key] === undefined || event[key] === e[key], 'journal context conflicts with envelope');
    }
    const timestamp = typeof event.timestamp === 'string' && /^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:\d{2})$/.test(event.timestamp) ? Date.parse(event.timestamp) : NaN;
    require(Number.isFinite(timestamp) && timestamp >= previous, 'journal timestamp invalid or out of order');
    previous = timestamp;
    require(['planned', 'attempted', 'completed', 'verified'].includes(event.status), 'invalid journal status');
    require(['actor', 'action', 'reason'].every(k => present(event[k])), 'journal action/actor/reason required');
    require(strings(event.requirements) && strings(event.decisions) && strings(event.files), 'journal traceability missing');
    if (event.status === 'completed' || event.status === 'verified') require(present(event.expected) && present(event.actual) && strings(event.evidence), 'completed/verified event needs expected/actual evidence');
    if (event.error !== undefined) require(record(event.error) && present(event.error.summary) && present(event.error.rootCause) && present(event.error.recovery), 'error needs sanitized summary, root cause (or unknown), and recovery/disposition');
  }
  require(record(e.uat) && ['not_run', 'pending', 'accepted', 'rejected'].includes(e.uat.status), 'UAT status required');
  if (e.uat?.status === 'accepted') require(present(e.uat.owner) && strings(e.uat.evidence), 'accepted UAT requires named owner and evidence; authenticity remains human-verified');
  return issues;
}

try {
  if (process.argv.length !== 3) throw new Error('Usage: node check-delivery-evidence.js <evidence.json>');
  // Bound parser input; no credential access, command execution or remote retrieval.
  const data = await readFile(process.argv[2]);
  if (data.length > 2 * 1024 * 1024) throw new Error('evidence exceeds 2 MiB limit');
  let evidence;
  try { evidence = JSON.parse(data.toString('utf8')); } catch { throw new Error('evidence is not valid JSON'); }
  const issues = validate(evidence);
  if (issues.length) throw new Error(issues.join('; '));
  process.stdout.write(`Delivery evidence structural checks passed${evidence.synthetic ? ' (SYNTHETIC)' : ''}. Not proof of enforcement, reviewer independence, artifact authenticity, release or human UAT.\n`);
} catch (error) {
  // Never echo input records, raw JSON or sensitive parser diagnostics.
  process.stderr.write(`Evidence rejected: ${error.code ? 'file unavailable' : error.message}\n`);
  process.exitCode = 1;
}
