# Brave Heart Implementation Source of Truth

## Purpose

This file identifies which project documents control the implementation of the Brave Heart website.

## Authority Order

1. `PRD.md` — controlling product requirements.
2. `CLAUDE.md` — agent execution and planning rules.
3. `.agent/plans/*.md` — approved implementation plans.
4. `docs/braveheart/content-map.md` — editorial placement map.
5. `docs/braveheart/asset-inventory.md` — approved image and asset registry.
6. `docs/braveheart/seo-publication-map.md` — page metadata and publication controls.
7. Source PDFs/DOCX/old zips — reference only unless normalized into approved docs.

## Non-Authoritative Materials

Old markdown files, old folder names, image filenames, and legacy listing-site route names are not authoritative. They must be normalized before implementation.

Listing-site page files (`TheResidence.tsx`, `Neighborhood.tsx`, `Schools.tsx`, `Gallery.tsx`) are **retained but unrouted** — not authoritative for public content.

`original/*.md` listing legal structures are **not authoritative** for Brave Heart legal pages.

## Implementation Rule

Cursor should not treat a source artifact as ready for publication merely because it exists in the repo. It must be mapped, approved, and validated.

## Route Content Control (Plan 02 — 2026-06-21)

Each public route is implemented in `src/pages/` using shared layout components in `src/components/braveheart/`:

| Route | React Page | Primary Content Sources | Layout |
|---|---|---|---|
| `/` | `Home.tsx` | `normalized-content/home.md`, `PRD.md` | `BraveHeartPageLayout` |
| `/our-story` | `OurStory.tsx` | `normalized-content/our-story.md`, PRD tone | `BraveHeartPageLayout` |
| `/who-we-serve` | `WhoWeServe.tsx` | `normalized-content/who-we-serve.md`, PRD target users | `BraveHeartPageLayout` |
| `/savings-comparison` | `SavingsComparison.tsx` | `normalized-content/savings-comparison.md`, compliance notes | `BraveHeartPageLayout` |
| `/service-lines` | `ServiceLines.tsx` | `normalized-content/service-lines.md` | `BraveHeartPageLayout` |
| `/our-guarantee` | `OurGuarantee.tsx` | `normalized-content/our-guarantee.md`, compliance notes | `BraveHeartPageLayout` |
| `/case-studies` | `CaseStudies.tsx` | `normalized-content/case-studies.md` | `BraveHeartPageLayout` |
| `/privacy-policy` | `PrivacyPolicy.tsx` | `normalized-content/privacy-policy.md` | `BraveHeartPageLayout` + legal banner |
| `/terms-of-service` | `TermsOfService.tsx` | `normalized-content/terms-of-service.md` | `BraveHeartPageLayout` + legal banner |
| `/accessibility` | `Accessibility.tsx` | `normalized-content/accessibility.md` | `BraveHeartPageLayout` + legal banner |

### Shared Components (Plan 02)

| Component | Role |
|---|---|
| `BraveHeartPageLayout.tsx` | Page shell: hero, sections, CTAs, related links, disclaimer |
| `PageSection.tsx` | Numbered editorial section grid |
| `BraveHeartImage.tsx` | Production WebP renderer with lazy/eager loading |
| `ImagePlaceholder.tsx` | Retained for fallback; superseded by BraveHeartImage in Plan 03 |
| `ProgramDisclaimer.tsx` | Compliance disclaimer on benefit pages |
| `CtaBlock.tsx` | Primary/secondary CTAs (ContactModal via Plan 04) |

### H1 Control

H1 text per route follows `docs/braveheart/seo-publication-map.md` and normalized content target H1 fields.

### Visual System (Plan 03 — 2026-06-21)

| Asset | Path |
|---|---|
| Production WebP base | `public/assets/images/braveheart/` |
| Image helper | `src/lib/braveheartAssets.ts` |
| Image component | `src/components/braveheart/BraveHeartImage.tsx` |
| Theme tokens | `src/index.css` — deep navy, gold accent, warm white text, dark glass |
| Conversion script | `npm run images:braveheart` → `scripts/convert-braveheart-images.mjs` |

### Publication Gaps

Content marked `[TBD]` in React or `needs-review` in content map is **not publication-ready**. Legal pages require compliance sign-off. Numeric savings examples and verified testimonials are explicitly deferred.
