# TDPD workshop installation

This document defines the pinned installation path for workshop participants and the release checks for organizers.

## Participant prerequisites

- GitHub account and a local copy of the workshop project.
- Node.js 22 LTS with `node` and `npx` available in the terminal.
- One supported coding agent.
- No existing `.tdpd/` installation in the target project.

Check the environment:

```bash
node --version
npx --version
```

## Choose an adapter

| Coding agent | Adapter |
|---|---|
| Codex | `codex` |
| Claude Code | `claude-code` |
| Cursor | `cursor` |
| Windsurf | `windsurf` |
| GitHub Copilot | `github-copilot` |
| Another compatible agent | `universal` |

## Install from the pinned GitHub tag

Open a terminal in the workshop project and run one command, replacing `codex` when another adapter is required:

```bash
npx --yes --package=github:InnokentyB/tdpd-product-framework#workshop-v0.3.1 tdpd init --adapter codex --target .
```

Expected output:

```text
Installed TDPD with 'codex' into <project-directory>
```

The command installs the shared framework into `.tdpd/` and adds the instruction files for the selected coding agent. It refuses to overwrite existing files. Do not use `--force` during workshop preparation.

## Start and verify the workshop run

```bash
npx --yes --package=github:InnokentyB/tdpd-product-framework#workshop-v0.3.1 tdpd start --mode manual --target .
npx --yes --package=github:InnokentyB/tdpd-product-framework#workshop-v0.3.1 tdpd status --target .
npx --yes --package=github:InnokentyB/tdpd-product-framework#workshop-v0.3.1 tdpd audit --target .
```

Preparation is successful when:

- `status` reports an active manual run;
- the current gate is `Context`;
- `audit` reports `Audit passed`;
- the selected coding agent can read the project and its installed instructions.

## Information sent to organizers

- selected coding agent;
- selected adapter;
- output of `tdpd status`;
- output of `tdpd audit`;
- the exact workshop tag: `workshop-v0.3.1`.

Do not send passwords, tokens, API keys, `.env` files, or account access.

## Organizer release checklist

Complete every item before sending the command to participants:

1. The target commit is on `main` and the working tree is clean.
2. The package version matches the workshop tag.
3. `npm test` passes.
4. `npm pack --dry-run` includes `bin/`, `core/`, `templates/`, every adapter, `README.md`, and `WORKSHOP.md`.
5. A fresh GitHub install succeeds for all six adapters.
6. `start`, `status`, and `audit` succeed in a fresh target project.
7. The repository contains the owner-approved license or workshop-use permission.
8. The annotated tag is pushed to GitHub.
9. The exact tagged GitHub command is run once more from a clean temporary directory.

Do not publish participant instructions from `main`, a branch name, or an uncommitted checkout.
