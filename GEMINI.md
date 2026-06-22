# GEMINI.md

Gemini / Antigravity adapter notes for the Brave Heart website repo.

## Controlling Rules

Use `CLAUDE.md` as the controlling implementation guide. This file only adapts the same workflow for Gemini-style tooling.

## Startup

1. Open the repo in Cursor or VS Code.
2. Read `README.md`, `PRD.md`, `CLAUDE.md`, and `PROGRESS.md`.
3. Inspect `.agent/plans/`.
4. Do not build until a plan is approved.

## Suggested Commands

If using Gemini CLI:

```text
/onboard
/build .agent/plans/<plan-file>.md
```

If the CLI does not support these exact commands, use the same intent manually:

- onboard by reading root docs and project files;
- build only the approved plan;
- validate and record results.

## MCP / Browser Validation

Use browser testing tools if available to verify:

- route rendering;
- responsive layout;
- navigation;
- CTA behavior;
- image loading;
- page metadata.

## Model Guidance

Use a fast model for repo inspection and Q&A. Use the strongest available model for code edits, route refactors, SEO metadata, image workflow automation, or CMS-lite implementation.
