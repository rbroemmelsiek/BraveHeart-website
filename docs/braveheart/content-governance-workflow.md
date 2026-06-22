# Brave Heart Content Governance Workflow

## Purpose

Defines the content-first workflow for adding, revising, inserting, and publishing Brave Heart website content.

## Method B: Content-First Workflow

All new content should follow:

```text
Draft content or raw asset
→ intake folder
→ content or asset inventory
→ recommended page placement
→ approval
→ implementation
→ validation
→ publication
```

## Draft Locations

New written content:

```text
docs/braveheart/content-drafts/
```

Approved canonical content:

```text
docs/braveheart/normalized-content/
```

Placement map:

```text
docs/braveheart/content-map.md
```

## Draft Types

```text
hero-copy
body-section
benefit-card
eligibility-copy
founder-story
case-study
testimonial
faq
legal-note
cta-support-copy
blog-post
seo-summary
app-embed-copy
```

## Required Draft Header

```text
Title:
Draft type:
Target page:
Suggested section:
Primary audience:
Primary CTA:
Related image:
SEO keyword focus:
Compliance sensitivity:
Status:
```

## Status Values

```text
draft
needs-review
approved-for-implementation
implemented
published
retired
```

## Insertion Rules

Cursor must not insert new content into React pages until the content appears in `docs/braveheart/content-map.md`.

For every insertion, Cursor must document:

1. Target route.
2. Target component or page file.
3. Section heading.
4. Insertion position.
5. Related image.
6. CTA.
7. SEO title/description impact.
8. Internal links added.
9. Compliance/legal risk notes.
10. Validation checks.

## Validation After Content Insertion

Verify:

- target route renders;
- new section appears in correct location;
- mobile layout remains readable;
- CTA links work or are intentionally stubbed;
- image paths work;
- images have alt text;
- heading order is logical;
- page title and meta description remain accurate;
- internal links resolve;
- no claims exceed approved source content.
