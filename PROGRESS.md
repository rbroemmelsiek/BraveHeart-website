# Brave Heart Build Progress

## Current Status

```text
Status: Plan 05 complete — awaiting approval for Plan 06
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
| 05 | SEO and publication controls | **Complete** | Per-route metadata, robots.txt, sitemap.xml. Lint + build pass. **Awaiting approval.** |

## Phase 2 Checklist

| Step | Plan | Status | Notes |
|---|---|---:|---|
| 06 | CMS-lite/blog | Not started | Add markdown/frontmatter publishing workflow. |
| 07 | Final publication readiness | Not started | Launch audit after plans 01–05. |

## Validation Reports

```text
.agent/validation/braveheart-site-validation.md
.agent/validation/02.braveheart-content-pages-validation.md
.agent/validation/03.braveheart-assets-and-visual-system-validation.md
.agent/validation/04.braveheart-cta-and-verification-entry-validation.md
.agent/validation/05.braveheart-seo-publication-controls-validation.md
```

## Open Decisions

- Final production domain (placeholder `https://braveheartfirstresponders.com` in SEO config).
- Final HomeToHome app URL (`CTA_CONFIG.appUrl` currently null).
- Verification backend / CRM integration (not Phase 1).
- Founder contact mailto/tel publication approval.
- Editorial approval for founder narrative and legacy timeline.
- Compliance review for savings figures and discount percentages.
- Legal sign-off for privacy, terms, and accessibility drafts.
- Verified testimonial publication for case studies.
- Staging robots override for preview deployments.
- Optional prerender/SSR for non-JS crawler metadata coverage.

## Plan 05 Summary (2026-06-21)

- Added `src/config/seo.ts` with metadata for all 10 Phase 1 routes.
- Added `src/components/SEOHead.tsx` — lightweight client-side head manager (no new dependency).
- Wired `SEOHead` in `AppShell` via router pathname.
- Updated `index.html` with home fallback metadata, OG/Twitter tags, apple-touch-icon.
- Created `public/robots.txt` (Allow `/`, sitemap reference).
- Created `public/sitemap.xml` (10 Phase 1 routes; no legacy listing routes).
- Updated SEO docs and validation reports.
- `npm run lint` and `npm run build` pass.

## Plan 04 Summary (2026-06-21)

- Replaced listing `ContactModal` with `VerificationEntryModal` (front-end-only intake).
- CTA config: `src/config/cta.ts` with five intents (`verify`, `founder`, `matched`, `intake`, `contact`).
- Navbar, Footer, and all 10 routes wired to Brave Heart entry flow.
- Form fields: name, email, phone, service category, status, transaction intent, market area, message.
- Disclaimers: no guaranteed eligibility/benefits; Phase 1 no backend transmission.
- QR asset shown in modal for verify/matched/intake — app URL stubbed.
- Removed: `karen@vannessandassociates.com`, listing tel/sms, Burbank property inquiry text.
