# Brave Heart Site Validation

## Status

Plan 02 content pages validated — 2026-06-21. See `.agent/validation/02.braveheart-content-pages-validation.md` for plan-specific detail.

## Required Route Validation

| Route | Renders | H1 Present | Metadata | Images OK | Links OK | Notes |
|---|---:|---:|---:|---:|---:|---|
| `/` | Yes | Yes | Pending (Plan 05) | Yes (placeholders) | Yes | Plan 02 content |
| `/our-story` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/who-we-serve` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/savings-comparison` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/service-lines` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/our-guarantee` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/case-studies` | Yes | Yes | Pending | Yes (placeholders) | Yes | Plan 02 content |
| `/privacy-policy` | Yes | Yes | Pending | N/A | Yes | Draft legal — review required |
| `/terms-of-service` | Yes | Yes | Pending | N/A | Yes | Draft legal — review required |
| `/accessibility` | Yes | Yes | Pending | N/A | Yes | Draft legal — review required |

## Legacy Redirect Validation (Plan 01)

| Legacy route | Redirects to | Verified |
|---|---|---|
| `/residence` | `/our-story` | Configured |
| `/neighborhood` | `/who-we-serve` | Configured |
| `/schools` | `/savings-comparison` | Configured |
| `/gallery` | `/case-studies` | Configured |
| `/privacy` | `/privacy-policy` | Configured |
| `/terms` | `/terms-of-service` | Configured |

## Build Validation

| Check | Result | Notes |
|---|---|---|
| Install succeeds | Pass | Prior session |
| Dev server starts | Not run | — |
| Production build succeeds | Pass | Plan 02 |
| `npm run lint` | Pass | Plan 02 |
| No missing image paths on public routes | Pass | ImagePlaceholder only |
| robots.txt present | Pending | Plan 05 |
| sitemap.xml present | Pending | Plan 05 |

## SEO Validation

| Check | Result | Notes |
|---|---|---|
| One H1 per page | Pass | Matches seo-publication-map intent |
| Unique SEO titles | Pending | Plan 05 |
| Unique meta descriptions | Pending | Plan 05 |
| Canonical URLs | Pending | Plan 05 |
| Open Graph images | Pending | Plans 03, 05 |
| Alt text on meaningful images | Pending | Plan 03 (placeholders have aria-label) |
| Internal links resolve | Pass | Related links + CTAs |

## Publication Decision

**Not ready for publication.** Legal pages and compliance-sensitive figures require review. Plan 02 complete — awaiting approval before Plan 03.
