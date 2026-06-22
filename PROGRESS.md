# Brave Heart Build Progress

## Current Status

```text
Status: Plan 03 complete — awaiting approval for Plan 04
Primary objective: Convert cloned Home Listing Website into Brave Heart First Responders website.
```

## Phase 1 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 00 | Source normalization | **Complete** | Asset inventory reconciled; inspection note complete. |
| 01 | Rebrand and route shell | **Complete** | Routes, nav, footer, legacy redirects. |
| 02 | Content pages | **Complete** | Route-specific content via BraveHeartPageLayout; legal drafts flagged. |
| 03 | Assets and visual system | **Complete** | 19 WebP conversions; images wired; navy/gold theme. Lint + build pass. **Awaiting approval.** |
| 04 | CTA and verification entry | Not started | Add eligibility/contact/app entry CTAs. |
| 05 | SEO and publication controls | Not started | Add metadata, robots, sitemap, validation. |

## Phase 2 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 06 | CMS-lite/blog | Not started | Add markdown/frontmatter publishing workflow. |
| 07 | Final publication readiness | Not started | Launch audit after plans 01–05. |

## Validation Reports

```text
.agent/validation/braveheart-site-validation.md
.agent/validation/02.braveheart-content-pages-validation.md
.agent/validation/03.braveheart-assets-and-visual-system-validation.md
```

## Open Decisions

- Final production domain.
- Final CTA destinations (ContactModal still listing contact until Plan 04).
- Final eligibility verification provider or app route.
- Editorial approval for founder narrative and legacy timeline.
- Compliance review for savings figures and discount percentages.
- Legal sign-off for privacy, terms, and accessibility drafts.
- Verified testimonial publication for case studies.

## Plan 03 Summary (2026-06-21)

- Conversion: `npm run images:braveheart` — 19 production WebP files at `public/assets/images/braveheart/`.
- Components: `BraveHeartImage.tsx`, `braveheartAssets.ts`; `PageSection` renders production images.
- Theme: deep navy background, gold accent, warm white text, dark glass surfaces in `src/index.css`.
- Global chrome: landscape logo in Navbar/Footer; favicon from `braveheart-icon.webp`.
- 16 section images wired across 7 content routes; originals preserved at `public/assets/`.
- Deferred: app QR CTA graphic (Plan 04), square logo OG (Plan 05).
