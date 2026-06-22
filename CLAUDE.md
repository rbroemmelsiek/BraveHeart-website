# CLAUDE.md

Brave Heart First Responders website conversion project. This repo starts from a cloned React/Vite/Tailwind Home Listing Website and converts it into a Brave Heart white-label website.

## Stack

- Frontend: React + Vite + TypeScript/JavaScript as present in cloned repo.
- Styling: Tailwind/CSS token system as present in cloned repo.
- Assets: public static images under `public/assets/images/braveheart/`.
- Content governance: markdown docs in `docs/braveheart/`.
- Build workflow: `.agent/plans/` and `.agent/validation/`.

## Rules

- Do not rebuild from scratch.
- Preserve the working listing-site architecture unless a plan explicitly requires a change.
- Do not remove shared components until their Brave Heart replacements are working.
- Do not hard-code unreviewed content directly into React components.
- Use `docs/braveheart/content-map.md` as the editorial placement map.
- Use `docs/braveheart/asset-inventory.md` as the image source of truth.
- Convert PNG/JPG/JPEG assets to WebP before public use when practical.
- Preserve image dimensions unless resizing is specifically requested.
- Use descriptive alt text for every meaningful image.
- Do not invent legal, RESPA, eligibility, tax, lending, or brokerage claims beyond approved source content.
- CTA links that are not yet live must be clearly stubbed and documented.

## Planning

Save all implementation plans to:

```text
.agent/plans/
```

Plan naming convention:

```text
{sequence}.{feature-name}.md
```

Examples:

```text
00.braveheart-source-normalization.md
01.braveheart-site-rebrand-and-route-shell.md
```

Each plan must include:

- complexity label;
- scope;
- out-of-scope;
- files likely affected;
- tasks;
- validation tests;
- rollback notes;
- approval checkpoint.

## Development Flow

1. Inspect.
2. Plan.
3. Wait for approval.
4. Build.
5. Validate.
6. Record results.
7. Update `PROGRESS.md`.

## Validation

After each implementation plan, update:

```text
.agent/validation/braveheart-site-validation.md
```

Do not mark a plan complete if:

- routes fail to render;
- navigation is broken;
- images are missing;
- metadata is missing;
- legal pages are missing;
- old listing-site content remains on public pages;
- site cannot build.

## SEO and Publication

Maintain:

```text
public/robots.txt
public/sitemap.xml
```

or a documented sitemap generation equivalent.

Track page metadata in:

```text
docs/braveheart/seo-publication-map.md
```

## CMS-Lite Phase 2

Do not implement CMS-lite until Phase 1 is stable unless explicitly directed.

CMS-lite content should use markdown/frontmatter and support categories, tags, slugs, related links, status, share images, and sitemap inclusion.
