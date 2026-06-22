# Brave Heart Site Validation

## Status

Plan 05 SEO and publication controls validated — 2026-06-21. See `.agent/validation/05.braveheart-seo-publication-controls-validation.md` for plan-specific detail.

## Required Route Validation

| Route | Renders | H1 Present | Metadata | Images OK | Links OK | CTA OK | Notes |
|---|---:|---:|---:|---:|---:|---:|---|
| `/` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/our-story` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/who-we-serve` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/savings-comparison` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/service-lines` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/our-guarantee` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/case-studies` | Yes | Yes | Yes | Yes | Yes | Yes | Unique title + OG |
| `/privacy-policy` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |
| `/terms-of-service` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |
| `/accessibility` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |

## Legacy Redirect Validation (Plan 01)

| Legacy route | Redirects to | Verified |
|---|---|---|
| `/residence` | `/our-story` | Configured — not in sitemap |
| `/neighborhood` | `/who-we-serve` | Configured — not in sitemap |
| `/schools` | `/savings-comparison` | Configured — not in sitemap |
| `/gallery` | `/case-studies` | Configured — not in sitemap |
| `/privacy` | `/privacy-policy` | Configured — not in sitemap |
| `/terms` | `/terms-of-service` | Configured — not in sitemap |

## Build Validation

| Check | Result | Notes |
|---|---|---|
| Install succeeds | Pass | |
| Production build succeeds | Pass | Plan 05 |
| `npm run lint` | Pass | Plan 05 |
| All referenced WebP files exist | Pass | OG + favicon verified |
| No listing-site contact on active routes | Pass | Plan 04 |
| robots.txt present | Pass | `dist/robots.txt` copied |
| sitemap.xml present | Pass | 10 Phase 1 routes only |

## CTA Validation (Plan 04)

| Check | Result |
|---|---|
| Navbar Verify Eligibility opens modal | Pass |
| Footer Contact opens modal | Pass |
| Page primary CTAs use correct intent | Pass |
| Secondary internal links resolve | Pass |
| No guaranteed eligibility language in CTAs | Pass |
| Modal disclaimers visible | Pass |
| Front-end-only form (no backend) | Pass |
| QR loads from production path | Pass |
| Listing mailto/tel/sms removed | Pass |

## SEO Validation (Plan 05)

| Check | Result | Notes |
|---|---|---|
| One H1 per page | Pass | Unchanged from Plan 02 |
| Unique SEO titles | Pass | 10 distinct titles in `src/config/seo.ts` |
| Unique meta descriptions | Pass | 10 distinct descriptions |
| Canonical URLs | Pass | Placeholder domain consistent |
| Open Graph images | Pass | All paths resolve on disk |
| Favicon / apple-touch-icon | Pass | `braveheart-icon.webp`, `brave-heart-logo-square.webp` |
| robots.txt allows indexing | Pass | `Allow: /` |
| sitemap.xml Phase 1 routes | Pass | 10 routes; no listing routes |
| Alt text on meaningful images | Pass | Plan 03 |
| Internal links resolve | Pass | No active nav/footer links to listing routes |
| No accidental noindex | Pass | All Phase 1 routes `index,follow` |

## Publication Decision

**Not ready for full publication launch.** SEO controls are implemented, but final domain confirmation, legal sign-off, compliance review of savings figures, verified testimonials, and live verification/app URLs remain open. Plan 05 complete — awaiting approval before Plan 06.
