# Brave Heart Build Progress

## Current Status

```text
Status: Plan 01 complete — awaiting approval for Plan 02
Primary objective: Convert cloned Home Listing Website into Brave Heart First Responders website.
```

## Phase 1 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 00 | Source normalization | **Complete** | Asset inventory reconciled; content map flagged draft; route map updated; inspection note complete. |
| 01 | Rebrand and route shell | **Complete** | Brave Heart routes, nav, footer, stubs, legacy redirects. Build + lint pass. Listing page files retained but not routed. |
| 02 | Content pages | Not started | Implement approved page content. **Awaiting approval.** |
| 03 | Assets and visual system | Not started | Convert images to WebP and apply brand tokens. |
| 04 | CTA and verification entry | Not started | Add eligibility/contact/app entry CTAs. |
| 05 | SEO and publication controls | Not started | Add metadata, robots, sitemap, validation. |

## Phase 2 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 06 | CMS-lite/blog | Not started | Add markdown/frontmatter publishing workflow. |
| 07 | Final publication readiness | Not started | Launch audit after plans 01–05. |

## Validation Reports

Record results in:

```text
.agent/validation/braveheart-site-validation.md
```

Plan 01: build and lint pass; all 10 target routes configured; legacy redirects in App.tsx.

## Open Decisions

- Final production domain.
- Final CTA destinations (ContactModal still listing contact until Plan 04).
- Final eligibility verification provider or app route.
- Final image set and placement for six newly registered assets.
- Whether blog/CMS-lite uses file-based markdown only or a future database.
- Whether page content is hard-coded in React or moved into `src/content/braveheart/` registries.

## Plan 01 Summary (2026-06-21)

- 10 Phase 1 routes live with placeholder pages (no listing images on public routes).
- Navbar/footer rebranded; CTA label "Verify Eligibility" (modal wiring in Plan 04).
- Legacy routes redirect: `/residence`, `/neighborhood`, `/schools`, `/gallery`, `/privacy`, `/terms`.
- Listing page files kept in repo: `TheResidence.tsx`, `Neighborhood.tsx`, `Schools.tsx`, `Gallery.tsx` (unrouted).
