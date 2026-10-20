"""Review-only artifact validation; run inside the approved verification container."""
import json
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker

root = Path('/work')
schema = json.loads((root / 'templates/implementation-journal.schema.json').read_text())
Draft202012Validator.check_schema(schema)
validator = Draft202012Validator(schema, format_checker=FormatChecker())
events = [json.loads(line) for line in (root / 'review/implementation-journal.jsonl').read_text().splitlines() if line.strip()]
assert len({event['id'] for event in events}) == len(events)
for event in events:
    validator.validate(event)
print(f'PASS: journal schema and {len(events)} actual events')

example = (root / 'templates/implementation-journal.md').read_text().split('```json\n')[1].split('\n```')[0]
validator.validate(json.loads(example))
print('PASS: synthetic standalone journal example')

package = json.loads((root / 'package.json').read_text())
plugin = json.loads((root / 'adapters/codex/.codex-plugin/plugin.json').read_text())
assert package['version'] == plugin['version'] == '0.14.0'
print('PASS: framework/plugin version alignment')
