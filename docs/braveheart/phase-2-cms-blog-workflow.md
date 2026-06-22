# Brave Heart Phase 2 CMS-Lite / Blog Publishing Workflow

## Purpose

Phase 2 adds a simple WordPress-style content publishing system without introducing a heavy CMS.

## Goal

Allow easy creation, review, tagging, linking, sharing, and publication of blog/article content.

## Content Location

Preferred future location:

```text
content/braveheart/posts/
```

Temporary draft location:

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

## Auto-Tagging and Auto-Titling

Cursor may propose:

1. SEO title.
2. H1.
3. Slug.
4. Excerpt.
5. Category.
6. Tags.
7. Internal links.
8. CTA.
9. Share image.
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
- title is unique;
- SEO title is unique;
- meta description exists;
- category is assigned;
- at least one tag is assigned;
- featured image exists;
- image alt text exists;
- canonical URL is correct;
- internal links resolve;
- post appears in blog index;
- post appears on category archive page;
- sitemap includes the post;
- robots directive is correct;
- share metadata renders correctly;
- compliance-sensitive claims are flagged.
