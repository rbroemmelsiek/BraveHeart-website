# Brave Heart Launch Readiness Report

**Report date:** 2026-06-21  
**Scope:** Phase 1 marketing site + Phase 2 CMS-lite (Plans 00–06)  
**Audit plan:** `.agent/plans/07.braveheart-final-publication-readiness.md`  
**Validation detail:** `.agent/validation/07.braveheart-final-publication-readiness-validation.md`

## Current Site Status

The Brave Heart First Responders website is **technically complete for Phase 1 and CMS-lite foundation**. All public routes render in a production build, listing-site residue is absent from active pages, images resolve from production WebP paths, SEO metadata is wired, robots/sitemap are present, and CTAs use the front-end verification entry modal with documented stubs.

**Publication status:** The site is **not launch-ready for public production** due to unresolved legal, compliance, editorial, and infrastructure decisions documented below.

## Routes Ready (Technical)

These routes passed Plan 07 preview audit (render, metadata, no listing residue):

| Route | SEO metadata | Sitemap | Notes |
|---|---|---|---|
| `/` | Yes | Yes | Home |
| `/our-story` | Yes | Yes | TBD founder narrative flagged |
| `/who-we-serve` | Yes | Yes | Conservative eligibility language |
| `/savings-comparison` | Yes | Yes | TBD ledger — compliance review |
| `/service-lines` | Yes | Yes | |
| `/our-guarantee` | Yes | Yes | Conservative guarantee framing |
| `/case-studies` | Yes | Yes | Illustrative scenarios only |
| `/blog` | Yes | Yes | Published posts only in index |
| `/blog/how-eligibility-verification-works` | Yes | Yes | Single published sample post |

Legacy redirects (`/residence`, `/neighborhood`, `/schools`, `/gallery`, `/privacy`, `/terms`) are configured and excluded from the sitemap.

## Routes Requiring Legal / Compliance Review

| Route | Review reason | Visible marker |
|---|---|---|
| `/privacy-policy` | Draft privacy copy; retention/security TBD | Legal review banner |
| `/terms-of-service` | Draft terms; liability/eligibility clauses TBD | Legal review banner |
| `/accessibility` | Draft accessibility statement | Legal review banner |
| `/savings-comparison` | Savings figures and example ledger TBD | TBD placeholders in body copy |
| `/service-lines` | Benefit/discount descriptions | Program disclaimer present |
| `/our-guarantee` | Accountability/guarantee language | Conservative framing + disclaimer |
| `/case-studies` | Testimonial asset vs verified outcome | Illustrative disclaimer + TBD endorsement |
| `/our-story` | Founder narrative and legacy timeline | TBD editorial placeholders |
| `/blog/:slug` | Per-post editorial/compliance approval | Workflow required before publish |

## SEO Status

| Item | Status |
|---|---|
| Per-route title, description, canonical, OG, Twitter | Implemented (client-side `SEOHead`) |
| `index.html` home fallback | Present |
| Unique titles/descriptions | Pass on audited routes |
| Open Graph images | Resolve under `/assets/images/braveheart/` |
| SPA limitation | Documented — non-JS crawlers see home fallback only |
| Domain | **Placeholder** `https://braveheartfirstresponders.com` — owner confirmation required |

## Sitemap / Robots Status

| File | Status | Notes |
|---|---|---|
| `public/robots.txt` | Production-appropriate | `Allow: /`; sitemap URL uses placeholder domain |
| `public/sitemap.xml` | Production-appropriate | 12 entries: 10 Phase 1 + `/blog` + 1 published post |
| Draft/review blog posts | Excluded | Verified |
| Legacy listing routes | Excluded | Redirects only |
| Topic archive pages | Excluded | By design |
| Staging caveat | **Action required** | Preview/staging hosts must override with `Disallow: /` |

Sitemap is regenerated before each build via `scripts/generate-sitemap.mjs`.

## CTA / Verification Status

| Item | Status |
|---|---|
| Verification entry modal | Implemented (front-end only) |
| Navbar / page / footer CTAs | Wired to documented intents |
| Disclaimers | Visible — no guaranteed eligibility/benefits |
| QR asset | Loads from production WebP path |
| HomeToHome app URL | **Stubbed** (`CTA_CONFIG.appUrl` null) |
| Verification backend / CRM | **Not implemented** (Phase 1 scope) |
| Listing agent contact flow | Removed |

Reference: `docs/braveheart/cta-and-verification-flow.md`

## CMS-Lite / Blog Status

| Item | Status |
|---|---|
| File-based posts | `content/braveheart/posts/*.md` |
| Published filtering | Index, post routes, sitemap |
| Sample published post | 1 (`how-eligibility-verification-works`) |
| Sample draft/review | Excluded from public index and sitemap |
| Topic archives | Render; not in sitemap |
| Backend CMS | Not implemented (by design) |

Reference: `docs/braveheart/phase-2-cms-blog-workflow.md`

## Open Launch Blockers

1. **Production domain** — placeholder domain in SEO config, sitemap, and robots; must be owner-confirmed before marketing launch.
2. **Legal sign-off** — privacy, terms, and accessibility pages are drafts with visible review banners.
3. **Compliance review** — savings comparison figures, discount percentages, and benefit ledger examples contain TBD placeholders.
4. **Verified testimonials** — case studies are illustrative; peer endorsement section awaits approved content.
5. **Live app / verification path** — app URL stubbed; no verification backend or CRM transmission.
6. **Editorial approval** — founder narrative, legacy timeline, and blog publication workflow pending owner process.
7. **Staging robots** — deploy pipeline must apply `Disallow: /` on non-production hosts.

## Post-Launch Items

- Production DNS and deployment configuration
- Analytics installation
- Optional prerender/SSR for crawler metadata coverage
- Verification backend, CRM, and email delivery integration
- Approved HomeToHome app deep link for QR CTAs
- Founder contact mailto/tel publication (if approved)
- Editorial workflow for blog `status: published`
- Optional cleanup of unmounted listing page source files (not required for launch)
- Nationwide availability / provider network claim review if expanded in future content

## Build / Validation Summary (2026-06-21)

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npm run build` | Pass |
| `npm run preview` | Pass — manual route audit completed |
| Broken public images | None found |
| Active listing-site copy | None found |
| Unsupported guarantee claims introduced | None found |

## Explicit Recommendation

**Ready for internal review and staging deployment.**

**Not ready for public production launch** until the open launch blockers above are resolved.

After blockers 1–7 are cleared and owner sign-off is recorded in `.agent/validation/braveheart-site-validation.md`, the recommendation may move to **ready for production after listed blockers** (all items verified closed).
