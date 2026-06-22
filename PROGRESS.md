# Brave Heart Build Progress

## Current Status

```text
Status: Plan 00 complete — awaiting approval for Plan 01
Primary objective: Convert cloned Home Listing Website into Brave Heart First Responders website.
```

## Phase 1 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 00 | Source normalization | **Complete** | Asset inventory reconciled; content map flagged draft; route map updated; inspection note complete. No code changes. |
| 01 | Rebrand and route shell | Not started | Replace listing routes with Brave Heart routes. **Awaiting approval.** |
| 02 | Content pages | Not started | Implement approved page content. |
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

Plan 00 validation: documentation-only — see inspection note `.agent/notes/00.repo-and-source-inspection.md`.

## Open Decisions

- Final production domain.
- Final CTA destinations.
- Final eligibility verification provider or app route.
- Final image set and placement for six newly registered assets.
- Whether blog/CMS-lite uses file-based markdown only or a future database.
- Whether page content is hard-coded in React or moved into `src/content/braveheart/` registries.
- Legacy redirect target mapping (proposed in route-map.md — confirm before plan 01).

## Plan 00 Summary (2026-06-21)

- 19 Brave Heart assets inventoried at `public/assets/`; production path empty.
- 22 listing-site image paths documented as missing/broken.
- 10 normalized content files confirmed draft-only; legal pages need compliance review.
- Route slug mismatches documented (`/privacy`, `/terms`).
