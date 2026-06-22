# Brave Heart Build Progress

## Current Status

```text
Status: Plan 02 complete — awaiting approval for Plan 03
Primary objective: Convert cloned Home Listing Website into Brave Heart First Responders website.
```

## Phase 1 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 00 | Source normalization | **Complete** | Asset inventory reconciled; inspection note complete. |
| 01 | Rebrand and route shell | **Complete** | Routes, nav, footer, legacy redirects. |
| 02 | Content pages | **Complete** | Route-specific content via BraveHeartPageLayout; image placeholders; legal drafts flagged. Lint + build pass. **Awaiting approval.** |
| 03 | Assets and visual system | Not started | Convert images to WebP and apply brand tokens. |
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
```

## Open Decisions

- Final production domain.
- Final CTA destinations (ContactModal still listing contact until Plan 04).
- Final eligibility verification provider or app route.
- Editorial approval for founder narrative and legacy timeline.
- Compliance review for savings figures and discount percentages.
- Legal sign-off for privacy, terms, and accessibility drafts.
- Verified testimonial publication for case studies.

## Plan 02 Summary (2026-06-21)

- Shared layout: `src/components/braveheart/BraveHeartPageLayout.tsx` and helpers.
- All 10 routes have route-specific sections; no generic stub copy.
- No `<img>` on public routes — `ImagePlaceholder` until Plan 03.
- Program disclaimer on benefit pages; legal draft banners on legal routes.
- Normalized markdown body copy still outline-only — React uses conservative derived copy.
