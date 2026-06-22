# Brave Heart Phase 2 CMS-Lite / Blog Publishing Workflow

## Purpose

Phase 2 adds a simple WordPress-style content publishing system without introducing a heavy CMS, database, authentication, or admin UI.

## Implemented Approach (Plan 06 — 2026-06-21)

| Item | Value |
|---|---|
| Content folder | `content/braveheart/posts/` |
| Loader | `src/lib/blog.ts` via Vite `import.meta.glob(..., { query: '?raw' })` |
| Frontmatter parser | `src/lib/frontmatter.ts` (minimal YAML subset) |
| Markdown body renderer | `src/lib/markdownBody.tsx` |
| Blog index | `/blog` → `src/pages/BlogIndex.tsx` |
| Blog post | `/blog/:slug` → `src/pages/BlogPost.tsx` |
| Taxonomy archive | `/topics/:taxonomySlug` → `src/pages/TopicArchive.tsx` |
| SEO integration | `getBlogSEO()` in `src/lib/blog.ts`, consumed by `SEOHead` |
| Sitemap generation | `scripts/generate-sitemap.mjs` (`npm run sitemap:generate`, runs before build) |

### Publication Rules

- Only posts with `status: published` appear in the blog index, public post routes, and sitemap.
- `draft`, `review`, `approved`, and `archived` posts may exist as markdown files but are excluded from public indexes.
- Direct navigation to unpublished slugs shows an "Article Not Found" page with `noindex,nofollow`.
- Duplicate slugs fail at build/load time.

### Cursor Workflow (Not Runtime)

Cursor may propose SEO title, slug, excerpt, category, tags, internal links, CTA, share image, and compliance notes when authoring markdown drafts. Cursor must not set `status: published` without explicit owner approval.

## Content Location

Production markdown posts:

```text
content/braveheart/posts/
```

Temporary editorial drafts (pre-implementation):

```text
docs/braveheart/cms-drafts/
```

## Frontmatter Template

```yaml
---
title:
slug:
status: draft
excerpt:
author:
date:
lastUpdated:
primaryCategory:
tags:
seoTitle:
seoDescription:
canonicalUrl:
ogImage:
shareImage:
relatedPages:
relatedPosts:
cta:
robots: index,follow
---
```

## Status Values

```text
draft
review
approved
published
archived
```

Only `published` posts are public.

## Categories

```text
Benefits
Eligibility
Buying
Selling
Military
Law Enforcement
Firefighters
EMS
Mortgage
Closing Costs
Homeownership
Program Updates
```

Category archive URLs use slugified values, e.g. `Eligibility` → `/topics/eligibility`.

## Tags

Examples:

```text
brokerage-credit
lender-credit
escrow
title
inspection
verification
first-time-buyer
veterans
public-safety
relocation
closing-costs
```

Tag archive URLs use slugified values, e.g. `public-safety` → `/topics/public-safety`.

## Auto-Tagging and Auto-Titling

Cursor may propose:

1. SEO title.
2. H1 (post title).
3. Slug.
4. Excerpt.
5. Category.
6. Tags.
7. Internal links.
8. CTA intent (`verify`, `founder`, `matched`, `intake`, `contact`).
9. Share image filename (under `public/assets/images/braveheart/`).
10. Compliance sensitivity note.

Cursor must not mark a post `published` without approval.

## WordPress-Style Identification

Each post should show or track:

```text
Post title
Category
Tags
Publication status
Last updated date
Featured image
Excerpt
CTA
Related pages
Related posts
```

## Validation

Before publication, verify:

- slug is unique;
- title is unique among published posts;
- SEO title is set;
- meta description exists;
- category is assigned;
- at least one tag is assigned (recommended);
- featured/share image exists on disk;
- image alt text is present in the React renderer;
- canonical URL is correct or omitted to use default pattern;
- internal links resolve;
- post appears in blog index when published;
- post appears on category/tag archive page when applicable;
- sitemap includes the post when published;
- robots directive is correct;
- share metadata renders correctly;
- compliance-sensitive claims are flagged and conservative.

## Sitemap

Run before build:

```bash
npm run sitemap:generate
```

Includes Phase 1 routes, `/blog`, and published posts only.

Topic archive pages are not sitemap entries in Phase 2.

## Sample Posts (Validation)

| Slug | Status | Public |
|---|---|---|
| `how-eligibility-verification-works` | published | Yes |
| `draft-mortgage-planning-overview` | draft | No |
| `review-relocation-planning-notes` | review | No |
