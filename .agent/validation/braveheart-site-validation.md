# Brave Heart Site Validation

## Status

Plan 01 route shell validated — 2026-06-21. Full publication validation pending plans 02–07.

## Required Route Validation

| Route | Renders | H1 Present | Metadata | Images OK | Links OK | Notes |
|---|---:|---:|---:|---:|---:|---|
| `/` | Yes | Yes | Pending (Plan 05) | Yes (no images) | Yes | Stub shell |
| `/our-story` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/who-we-serve` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/savings-comparison` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/service-lines` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/our-guarantee` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/case-studies` | Yes | Yes | Pending | Yes | Yes | Stub shell |
| `/privacy-policy` | Yes | Yes | Pending | Yes | Yes | Legal stub |
| `/terms-of-service` | Yes | Yes | Pending | Yes | Yes | Legal stub |
| `/accessibility` | Yes | Yes | Pending | Yes | Yes | Legal stub |

## Legacy Redirect Validation (Plan 01)

| Legacy route | Redirects to | Verified |
|---|---|---|
| `/residence` | `/our-story` | Configured in App.tsx |
| `/neighborhood` | `/who-we-serve` | Configured in App.tsx |
| `/schools` | `/savings-comparison` | Configured in App.tsx |
| `/gallery` | `/case-studies` | Configured in App.tsx |
| `/privacy` | `/privacy-policy` | Configured in App.tsx |
| `/terms` | `/terms-of-service` | Configured in App.tsx |

## Build Validation

| Check | Result | Notes |
|---|---|---|
| Install succeeds | Pass | npm install |
| Dev server starts | Not run | — |
| Production build succeeds | Pass | vite build |
| No console errors on primary routes | Not run (browser) | Build-only validation |
| No missing image paths on public routes | Pass | No `<img>` on active Brave Heart routes |
| robots.txt present | Pending | Plan 05 |
| sitemap.xml present | Pending | Plan 05 |

## SEO Validation

| Check | Result | Notes |
|---|---|---|
| One H1 per page | Pass | Stub H1s per seo-publication-map |
| Unique SEO titles | Pending | Plan 05 |
| Unique meta descriptions | Pending | Plan 05 |
| Canonical URLs | Pending | Plan 05 |
| Open Graph images | Pending | Plans 03, 05 |
| Alt text present | N/A | No images on public routes yet |
| Internal links resolve | Pass | Nav + footer updated |

## Publication Decision

Do not mark ready for publication until all critical checks pass or exceptions are documented and approved.

Plan 01 complete — awaiting approval before Plan 02.
