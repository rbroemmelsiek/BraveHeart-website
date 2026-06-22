# Brave Heart Site Validation

## Status

Plan 03 assets and visual system validated — 2026-06-21. See `.agent/validation/03.braveheart-assets-and-visual-system-validation.md` for plan-specific detail.

## Required Route Validation

| Route | Renders | H1 Present | Metadata | Images OK | Links OK | Notes |
|---|---:|---:|---:|---:|---:|---|
| `/` | Yes | Yes | Pending (Plan 05) | Yes (3 WebP) | Yes | Plan 03 images + theme |
| `/our-story` | Yes | Yes | Pending | Yes (2 WebP) | Yes | Plan 03 images |
| `/who-we-serve` | Yes | Yes | Pending | Yes (2 WebP) | Yes | Plan 03 images |
| `/savings-comparison` | Yes | Yes | Pending | Yes (2 WebP) | Yes | Compliance flags on figures |
| `/service-lines` | Yes | Yes | Pending | Yes (4 WebP) | Yes | Plan 03 images |
| `/our-guarantee` | Yes | Yes | Pending | Yes (1 WebP) | Yes | Compliance flags |
| `/case-studies` | Yes | Yes | Pending | Yes (1 WebP) | Yes | Illustrative + testimonial pending |
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
| Install succeeds | Pass | Includes `sharp` devDependency |
| Dev server starts | Not run | — |
| Production build succeeds | Pass | Plan 03 |
| `npm run lint` | Pass | Plan 03 |
| All referenced WebP files exist | Pass | 19 production files |
| No listing-site image refs on active routes | Pass | Unrouted legacy pages retain old refs only |
| robots.txt present | Pending | Plan 05 |
| sitemap.xml present | Pending | Plan 05 |

## SEO Validation

| Check | Result | Notes |
|---|---|---|
| One H1 per page | Pass | Matches seo-publication-map intent |
| Unique SEO titles | Pending | Plan 05 |
| Unique meta descriptions | Pending | Plan 05 |
| Canonical URLs | Pending | Plan 05 |
| Open Graph images | Pending | `brave-heart-logo-square.webp` ready — Plan 05 |
| Alt text on meaningful images | Pass | Plan 03 |
| Internal links resolve | Pass | Related links + CTAs |
| Favicon | Pass | `braveheart-icon.webp` |

## Asset Validation

| Check | Result |
|---|---|
| Production path populated | Pass — 19 WebP files |
| Originals preserved | Pass — sources at `public/assets/` |
| Kebab-case filenames | Pass |
| WebP quality ~82 | Pass |
| Dimensions preserved | Pass |
| Global logo in nav/footer | Pass |

## Publication Decision

**Not ready for publication.** Legal pages, compliance-sensitive figures, and verified testimonials require review. Plan 03 complete — awaiting approval before Plan 04.
