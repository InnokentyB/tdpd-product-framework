import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const verifier = resolve('bin/check-delivery-evidence.js');
const cli = resolve('bin/tdpd.js');
const fixturePath = resolve('examples/delivery-evidence.synthetic.json');

async function runEvidence(edit, expectSuccess = false) {
  const dir = await mkdtemp(join(tmpdir(), 'tdpd-evidence-'));
  try {
    const evidence = JSON.parse(await readFile(fixturePath, 'utf8'));
    edit(evidence);
    const file = join(dir, 'evidence.json');
    await writeFile(file, JSON.stringify(evidence));
    const before = await readFile(file, 'utf8');
    if (expectSuccess) {
      const { stdout } = await exec(process.execPath, [verifier, file]);
      assert.match(stdout, /structural checks passed/i);
      assert.match(stdout, /not.*UAT|UAT.*not/i);
    } else {
      await assert.rejects(exec(process.execPath, [verifier, file]), error => {
        assert.equal(error.code, 1);
        assert.match(error.stderr, /Evidence rejected/);
        return true;
      });
    }
    assert.equal(await readFile(file, 'utf8'), before, 'verification must not mutate evidence');
  } finally { await rm(dir, { recursive: true, force: true }); }
}

test('accepts complete synthetic evidence without claiming human acceptance', () => runEvidence(() => {}, true));
for (const [name, edit] of [
  ['instruction-only critical control', e => { e.controls[0].mechanism.kind = 'instruction'; }],
  ['forbidden side effect despite expected refusal', e => { e.negativeScenarios[0].forbiddenEffectObserved = true; }],
  ['stale negative verification', e => { e.negativeScenarios[0].revision = 'old'; }],
  ['skipped required code gate', e => { e.codeGates[0].status = 'skipped'; }],
  ['self-review', e => { e.review.reviewer = e.implementationActor; }],
  ['stale independent review', e => { e.review.revision = 'old'; }],
  ['unresolved material finding', e => { e.review.openMaterialFindings = 1; }],
  ['empty journal', e => { e.journal = []; }],
  ['journal from another task', e => { e.journal[0].task = 'other-task'; }],
  ['journal from stale spec', e => { e.journal[0].specVersion = 'old-spec'; }],
  ['missing command evidence', e => { e.codeGates[0].evidence = []; }],
  ['invalid journal timestamp', e => { e.journal[0].timestamp = 'tomorrow'; }],
  ['planned action claimed verified without evidence', e => { e.journal[0].status = 'verified'; e.journal[0].evidence = []; }],
  ['malformed record shape', e => { e.controls = [null]; }],
  ['missing architecture check', e => { e.codeGates = e.codeGates.filter(g => g.id !== 'architecture'); }]
]) test(`rejects ${name} and leaves evidence unchanged`, () => runEvidence(edit));

test('malformed JSON is rejected without reflecting sensitive input', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tdpd-malformed-'));
  try {
    const file = join(dir, 'evidence.json');
    await writeFile(file, '{"secret":"SYNTHETIC_CANARY_DO_NOT_ECHO",');
    await assert.rejects(exec(process.execPath, [verifier, file]), error => {
      assert.equal(error.code, 1);
      assert.match(error.stderr, /Evidence rejected/);
      assert.ok(!error.stderr.includes('SYNTHETIC_CANARY_DO_NOT_ECHO'));
      return true;
    });
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('installed verifier works, and install conflict preserves existing instructions and no state is invented', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tdpd-installed-evidence-'));
  try {
    await writeFile(join(dir, 'AGENTS.md'), 'Existing project authority\n');
    await assert.rejects(exec(process.execPath, [cli, 'init', '--adapter', 'universal', '--target', dir]));
    assert.equal(await readFile(join(dir, 'AGENTS.md'), 'utf8'), 'Existing project authority\n');
    await assert.rejects(readFile(join(dir, '.tdpd/state/run-state.json')));
    await exec(process.execPath, [cli, 'init', '--adapter', 'claude-code', '--target', dir]);
    const file = join(dir, 'evidence.json');
    await writeFile(file, await readFile(fixturePath));
    const { stdout } = await exec(process.execPath, [join(dir, '.tdpd/bin/check-delivery-evidence.js'), file]);
    assert.match(stdout, /structural checks passed/i);
    await assert.rejects(readFile(join(dir, '.tdpd/state/run-state.json')));
  } finally { await rm(dir, { recursive: true, force: true }); }
});
