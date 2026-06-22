# Brave Heart Site Validation

## Status

**Plan 07 final publication readiness audit complete — 2026-06-21.**

- Technical QA: **Pass** (build, lint, preview route audit)
- Publication launch gate: **Not approved** — open blockers documented in `docs/braveheart/launch-readiness-report.md`
- Plan-specific detail: `.agent/validation/07.braveheart-final-publication-readiness-validation.md`

## Required Route Validation

| Route | Renders | H1 Present | Metadata | Images OK | Links OK | CTA OK | Notes |
|---|---:|---:|---:|---:|---:|---:|---|
| `/` | Yes | Yes | Yes | Yes | Yes | Yes | Plan 07 preview verified |
| `/our-story` | Yes | Yes | Yes | Yes | Yes | Yes | TBD editorial placeholders |
| `/who-we-serve` | Yes | Yes | Yes | Yes | Yes | Yes | |
| `/savings-comparison` | Yes | Yes | Yes | Yes | Yes | Yes | Compliance TBD flagged |
| `/service-lines` | Yes | Yes | Yes | Yes | Yes | Yes | |
| `/our-guarantee` | Yes | Yes | Yes | Yes | Yes | Yes | Conservative language |
| `/case-studies` | Yes | Yes | Yes | Yes | Yes | Yes | Illustrative scenarios |
| `/privacy-policy` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |
| `/terms-of-service` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |
| `/accessibility` | Yes | Yes | Yes | N/A | Yes | Yes | Legal review banner |
| `/blog` | Yes | Yes | Yes | N/A | Yes | Yes | 1 published post only |
| `/blog/:slug` | Yes | Yes | Yes | Yes | Yes | Yes | Draft/review → 404 + noindex |
| `/topics/:taxonomySlug` | Yes | Yes | Yes | N/A | Yes | N/A | Not in sitemap |

## Legacy Redirect Validation (Plan 01)

| Legacy route | Redirects to | Verified (Plan 07) |
|---|---|---|
| `/residence` | `/our-story` | Yes — preview |
| `/neighborhood` | `/who-we-serve` | Yes — configured |
| `/schools` | `/savings-comparison` | Yes — configured |
| `/gallery` | `/case-studies` | Yes — preview |
| `/privacy` | `/privacy-policy` | Yes — configured |
| `/terms` | `/terms-of-service` | Yes — configured |

Parked listing page components remain in repo but are **not mounted** in `App.tsx`.

## Build Validation

| Check | Result | Notes |
|---|---|---|
| Install succeeds | Pass | |
| Production build succeeds | Pass | Plan 07 — 2026-06-21 |
| `npm run lint` | Pass | Plan 07 — 2026-06-21 |
| All referenced WebP files exist | Pass | 19 production WebP assets |
| No listing-site contact on active routes | Pass | Plan 04 + Plan 07 grep |
| robots.txt present in dist | Pass | `Allow: /` |
| sitemap.xml present in dist | Pass | 12 public entries |
| Production preview audit | Pass | `npm run preview` @ localhost:4173 |

## Listing Residue Validation (Plan 07)

| Check | Result |
|---|---|
| Active route body text scan | Pass — no 1622/Oak St/Burbank/vanness/Schedule Tour |
| Listing agent email removed | Pass |
| Parked page files only | Pass — unmounted legacy components |

## CTA Validation (Plan 04 + 07)

| Check | Result |
|---|---|
| Navbar Verify Eligibility opens modal | Pass |
| Footer Contact opens modal | Pass |
| Page primary CTAs use correct intent | Pass |
| Blog post CTA uses frontmatter intent | Pass |
| Secondary internal links resolve | Pass |
| No guaranteed eligibility language in CTAs | Pass |
| Modal disclaimers visible | Pass |
| Front-end-only form (no backend) | Pass |
| QR loads from production path | Pass |
| Listing mailto/tel/sms removed | Pass |
| Modal close behavior | Pass — Plan 07 preview |

## SEO Validation (Plans 05–06 + 07)

| Check | Result | Notes |
|---|---|---|
| One H1 per page | Pass | |
| Unique SEO titles | Pass | |
| Unique meta descriptions | Pass | |
| Canonical URLs | Pass | Placeholder domain |
| Open Graph images | Pass | |
| Favicon / apple-touch-icon | Pass | |
| robots.txt allows indexing | Pass | Staging override documented |
| sitemap.xml public content only | Pass | No drafts; no listing routes |
| Blog post SEO from frontmatter | Pass | |
| Alt text on meaningful images | Pass | |
| Internal links resolve | Pass | |
| No accidental noindex on public pages | Pass | Draft URLs use noindex |
| Domain placeholder caveat | **Open** | Owner confirmation required |

## CMS-Lite Validation (Plan 06 + 07)

| Check | Result |
|---|---|
| File-based posts load at build time | Pass |
| Published posts in blog index | Pass (1 sample) |
| Draft/review excluded from index | Pass |
| Draft/review excluded from sitemap | Pass |
| No backend/CMS/auth/database added | Pass |
| Topic archive routes render | Pass |
| Sitemap generator runs before build | Pass |

## Mobile Validation (Plan 07)

| Check | Result |
|---|---|
| Mobile nav open/close (375px) | Pass |
| Hero and sections responsive | Pass |
| CTA modal on mobile | Pass |

## Publication Decision

**Not ready for public production launch.**

Technical Phase 1 + CMS-lite foundation passes CLAUDE.md build/route/image/metadata criteria. Launch is blocked by owner, legal, compliance, and infrastructure items listed in `docs/braveheart/launch-readiness-report.md`.

**Recommendation:** Ready for **internal review and staging deployment** only.

## Owner Sign-Off

| Role | Name | Date | Decision |
|---|---|---|---|
| Technical QA (Plan 07) | Automated audit | 2026-06-21 | Technical pass; launch blocked |
| Content / editorial | _Pending_ | | |
| Legal / compliance | _Pending_ | | |
| Owner / launch authority | _Pending_ | | |
