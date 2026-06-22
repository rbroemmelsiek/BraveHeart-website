# Brave Heart First Responders Website Build Pack

This repository is intended to start from the cloned Home Listing Website React/Vite/Tailwind codebase and convert it into the Brave Heart First Responders website without rebuilding the UI shell from scratch.

## Operating Rule

Use the existing site architecture as the starting point. Preserve the React/Vite routing approach, shared components, responsive behavior, visual animation patterns, navbar/footer/modal conventions, and CSS/Tailwind structure unless a plan explicitly requires a change.

## Root-Level Control Files

- `PRD.md` — controlling product requirements for this Brave Heart website repo.
- `CLAUDE.md` — agent rules for Cursor/Claude-style implementation.
- `CLOUD.md` — local/cloud service startup and validation notes.
- `GEMINI.md` — Gemini/Antigravity adapter notes if used.
- `PROGRESS.md` — module/build progress tracking.

## Supporting Documentation

Core supporting docs live in:

```text
./docs/braveheart/
```

Executable implementation plans live in:

```text
./.agent/plans/
```

Validation reports and test records live in:

```text
./.agent/validation/
```

## Build Sequence

1. Inspect the cloned listing website.
2. Normalize source materials and image assets.
3. Rebrand the shell and route map.
4. Build the Brave Heart content pages.
5. Convert and insert WebP images.
6. Wire CTA and verification entry points.
7. Add SEO, robots, sitemap, and publication controls.
8. Add Phase 2 CMS-lite/blog publishing when Phase 1 is stable.

## Source Materials

Place external reference documents and old assets wherever is convenient for local work. Do not let unverified legacy markdowns become authoritative. The authoritative repo docs are the root files and `docs/braveheart/*` files in this package.

Recommended image intake path:

```text
public/assets/images/braveheart/inbox/
```

Recommended production image path:

```text
public/assets/images/braveheart/
```
