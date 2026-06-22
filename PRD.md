# Brave Heart First Responders Website PRD

## Product

Brave Heart First Responders is a white-label HomeToHome / BrokerBrand implementation for first responders and military members. The site presents a real estate benefits system with transaction credits, service-provider coordination, eligibility verification, and a HomeToHome-powered app/workflow entry path.

## Primary Objective

Convert the cloned Home Listing Website into a production-ready Brave Heart First Responders website using the existing React/Vite/Tailwind architecture and visual shell as the starting point.

## Strategic Positioning

Brave Heart is not a generic discount website. It is a mission-focused real estate benefits and transaction-support system for eligible public-safety and military households.

Core positioning:

> Brave Heart helps eligible first responders and military members access pre-negotiated real estate benefits, vetted professional support, and HomeToHome-powered transaction guidance.

## Target Users

1. Law enforcement professionals.
2. Firefighters.
3. EMTs and paramedics.
4. 911 dispatchers, where included by program rules.
5. Active-duty military members.
6. Veterans and retired military members.
7. Spouses or households connected to eligible members, where program rules allow.
8. Founder/admin operators managing program inquiries.
9. Partner agents, lenders, escrow/title, inspection, warranty, and related providers.

## Phase 1 Scope

Build a static, high-quality marketing website with clear CTA and verification entry points.

Phase 1 includes:

- Rebrand cloned listing-site shell.
- Replace listing-specific routes with Brave Heart routes.
- Add Brave Heart page content.
- Add Brave Heart brand/theme tokens.
- Convert approved images to WebP.
- Insert approved images with alt text.
- Add SEO metadata, robots.txt, and sitemap control.
- Create clear verification/contact CTA entry.
- Preserve privacy, terms, and accessibility pages.

## Phase 1 Routes

```text
/
/our-story
/who-we-serve
/savings-comparison
/service-lines
/our-guarantee
/case-studies
/privacy-policy
/terms-of-service
/accessibility
```

## Phase 2 Scope

Add a CMS-lite/blog publishing workflow that feels familiar to a WordPress user but remains lightweight.

Phase 2 includes:

- Markdown/frontmatter posts.
- Blog index.
- Category archive pages.
- Tag archive pages.
- Auto-suggested titles, tags, excerpts, share images, and internal links.
- Sitemap inclusion for published posts.
- Open Graph/share metadata.
- Publication status tracking.

## Out of Scope for Phase 1

- Full custom backend.
- Payment/billing.
- Full CRM.
- Full eligibility verification backend.
- Broker admin dashboard.
- Real account authentication.
- Real-time transaction tracking.
- Full CMS database.
- AI generation inside the production site.

## In Scope as Placeholders or Entry Points

- "Verify Eligibility" CTA.
- "Download / open the app" CTA.
- "Speak with founder" CTA.
- "Partner network" explanation.
- Future HomeToHome app embed placeholder.
- Future agent/lender matching entry placeholder.

## Required Design Tone

The site should feel:

- mission-focused;
- trustworthy;
- protective;
- premium but not luxury-real-estate detached;
- direct and clear;
- respectful toward public service;
- compliant and non-gimmicky.

## Theme Direction

- Primary background: deep navy / blue-black.
- Secondary surfaces: glass navy or dark translucent panels.
- Accent: gold.
- Text: white / warm off-white.
- Muted text: pale slate.
- Borders: translucent gold/white.
- CTA: gold-on-navy or navy-on-gold.

## Content Governance

All new copy should flow through Method B:

```text
Draft → content map → approval → implementation → validation → publication
```

Do not scatter untracked copy directly into React components unless it has first been represented in `docs/braveheart/content-map.md`.

## Image Governance

All new images should flow through:

```text
inbox image → WebP conversion → asset inventory → placement approval → implementation → validation
```

Production images should live in:

```text
public/assets/images/braveheart/
```

Raw/unprocessed images should live in:

```text
public/assets/images/braveheart/inbox/
```

## SEO Requirements

Every public page must have:

- unique title;
- unique meta description;
- exactly one H1;
- correct canonical URL;
- Open Graph metadata;
- descriptive image alt text;
- sitemap entry;
- correct robots directive.

## Success Criteria

Phase 1 is complete when:

- all target routes render;
- no old listing-site property copy remains;
- Brave Heart branding is visible throughout;
- navigation and footer links work;
- legal pages are present;
- images load and use WebP where practical;
- metadata is defined for all public routes;
- `robots.txt` and sitemap are present;
- CTA/verification links are intentionally wired or explicitly stubbed;
- validation report is completed under `.agent/validation/`.
