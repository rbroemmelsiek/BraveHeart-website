# Brave Heart Build Progress

## Current Status

```text
Status: Plan 07 complete + post-launch enhancements committed — publication still blocked pending owner/legal/compliance sign-off
Primary objective: Convert cloned Home Listing Website into Brave Heart First Responders website.
```

## Phase 1 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 00 | Source normalization | **Complete** | Asset inventory reconciled; inspection note complete. |
| 01 | Rebrand and route shell | **Complete** | Routes, nav, footer, legacy redirects. |
| 02 | Content pages | **Complete** | Route-specific content via BraveHeartPageLayout; legal drafts flagged. |
| 03 | Assets and visual system | **Complete** | 19 WebP conversions; images wired; navy/gold theme. |
| 04 | CTA and verification entry | **Complete** | Verification entry modal; listing contact removed. |
| 05 | SEO and publication controls | **Complete** | Per-route metadata, robots.txt, sitemap.xml. |

## Phase 2 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 06 | CMS-lite/blog | **Complete** | Markdown posts, blog routes, taxonomy archives, sitemap generator. Lint + build pass. |
| 07 | Final publication readiness | **Complete** | Full route audit, build/lint/preview validation, launch-readiness report. **Not approved for public production launch.** |

## Validation Reports

```text
.agent/validation/braveheart-site-validation.md
.agent/validation/02.braveheart-content-pages-validation.md
.agent/validation/03.braveheart-assets-and-visual-system-validation.md
.agent/validation/04.braveheart-cta-and-verification-entry-validation.md
.agent/validation/05.braveheart-seo-publication-controls-validation.md
.agent/validation/06.braveheart-phase-2-cms-lite-validation.md
.agent/validation/07.braveheart-final-publication-readiness-validation.md
docs/braveheart/launch-readiness-report.md
```

## Post-Plan-07 Enhancements (2026-06-22)

| Area | Status | Notes |
|---|---|---|
| Google OAuth + session auth | **Committed** | `AuthProvider`, `/account`, `server/auth-api.mjs`; dev proxy via `npm run dev` |
| Admin blog route | **Committed** | `/admin/blog` protected by `ProtectedAdminRoute`; admin email allowlist |
| Founder portrait asset | **Committed** | `karen-van-ness-portrait.webp` + inbox source; wired in Founder components |
| Heroes Journey showcase | **Committed** | Interactive milestone UI refinements on Home |
| Blog post rendering | **Committed** | `markdownBody.tsx` and `BlogPost.tsx` layout improvements |
| Navbar auth actions | **Committed** | Sign-in / account / admin nav via `AuthNavActions` |

**Not in original Phase 1 plans.** Requires production OAuth secrets (`VITE_GOOGLE_CLIENT_ID`, `AUTH_SESSION_SECRET`, `ADMIN_EMAILS`) before admin features work in deployment.

## Open Decisions

- Final production domain (placeholder `https://braveheartfirstresponders.com` in SEO config).
- Google OAuth production credentials and authorized origins.
- Whether admin blog editing remains file-based or moves to a CMS backend.
- Final HomeToHome app URL (`CTA_CONFIG.appUrl` currently null).
- Verification backend / CRM integration (not Phase 1).
- Founder contact mailto/tel publication approval.
- Editorial approval for founder narrative and legacy timeline.
- Compliance review for savings figures and discount percentages.
- Legal sign-off for privacy, terms, and accessibility drafts.
- Verified testimonial publication for case studies.
- Staging robots override for preview deployments.
- Optional prerender/SSR for non-JS crawler metadata coverage.
- Editorial approval workflow for blog posts before setting `status: published`.

## Plan 07 Summary (2026-06-21)

- Executed final publication-readiness audit per `.agent/plans/07.braveheart-final-publication-readiness.md`.
- `npm run lint` and `npm run build` pass; production preview route audit completed.
- All 10 Phase 1 routes + blog routes + legacy redirects verified; no listing residue on active pages.
- 19 production WebP assets resolve; alt text present on meaningful images.
- robots.txt and sitemap.xml production-appropriate (12 public entries; placeholder domain documented).
- Draft/review blog posts excluded from index and sitemap; direct URLs return 404 + noindex.
- Legal pages reachable with visible draft review banners; compliance-sensitive copy flagged.
- **No application code changes** — audit and documentation only.
- Created `docs/braveheart/launch-readiness-report.md`.
- **Recommendation:** ready for internal review and staging; **not ready for public production** until launch blockers cleared.

## Plan 06 Summary (2026-06-21)

- Added file-based CMS at `content/braveheart/posts/` with YAML frontmatter schema.
- Implemented build-time loader (`src/lib/blog.ts`) using Vite `import.meta.glob`.
- Added routes: `/blog`, `/blog/:slug`, `/topics/:taxonomySlug`.
- Published-only filtering for index, post routes, and sitemap.
- Extended SEO via `getBlogSEO()` for blog index, posts, and topic archives.
- Added `scripts/generate-sitemap.mjs` (runs before build) — 12 sitemap entries.
- Sample posts: 1 published, 1 draft, 1 review (draft/review excluded publicly).
- Footer Blog link added; Phase 1 nav preserved.
- No backend CMS or database at Plan 06 completion; **Google OAuth admin auth added post-Plan-07** (see above).
- `npm run lint` and `npm run build` pass.

## Plan 05 Summary (2026-06-21)

- Added `src/config/seo.ts` with metadata for all 10 Phase 1 routes.
- Added `src/components/SEOHead.tsx` — lightweight client-side head manager (no new dependency).
- Wired `SEOHead` in `AppShell` via router pathname.
- Updated `index.html` with home fallback metadata, OG/Twitter tags, apple-touch-icon.
- Created `public/robots.txt` (Allow `/`, sitemap reference).
- Created `public/sitemap.xml` (10 Phase 1 routes; no legacy listing routes).
- Updated SEO docs and validation reports.

## Plan 04 Summary (2026-06-21)

- Replaced listing `ContactModal` with `VerificationEntryModal` (front-end-only intake).
- CTA config: `src/config/cta.ts` with five intents (`verify`, `founder`, `matched`, `intake`, `contact`).
- Navbar, Footer, and all 10 routes wired to Brave Heart entry flow.
- Form fields: name, email, phone, service category, status, transaction intent, market area, message.
- Disclaimers: no guaranteed eligibility/benefits; Phase 1 no backend transmission.
- QR asset shown in modal for verify/matched/intake — app URL stubbed.
- Removed: `karen@vannessandassociates.com`, listing tel/sms, Burbank property inquiry text.
