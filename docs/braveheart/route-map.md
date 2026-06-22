# Brave Heart Route Map

## Purpose

Defines the target public routes for the Brave Heart First Responders website and documents current listing-site routes pending replacement.

## Current Routes (As Implemented — Plan 01 Complete)

| Route | Component | Status |
|---|---|---|
| `/` | `Home` | Stub shell — Plan 02 content |
| `/our-story` | `OurStory` | Stub shell |
| `/who-we-serve` | `WhoWeServe` | Stub shell |
| `/savings-comparison` | `SavingsComparison` | Stub shell |
| `/service-lines` | `ServiceLines` | Stub shell |
| `/our-guarantee` | `OurGuarantee` | Stub shell |
| `/case-studies` | `CaseStudies` | Stub shell |
| `/privacy-policy` | `PrivacyPolicy` | Legal stub |
| `/terms-of-service` | `TermsOfService` | Legal stub |
| `/accessibility` | `Accessibility` | Legal stub |

Configured in [`src/App.tsx`](../../src/App.tsx).

## Legacy Listing Files (Retained, Unrouted)

| File | Former route | Status |
|---|---|---|
| `TheResidence.tsx` | `/residence` | Redirects to `/our-story` |
| `Neighborhood.tsx` | `/neighborhood` | Redirects to `/who-we-serve` |
| `Schools.tsx` | `/schools` | Redirects to `/savings-comparison` |
| `Gallery.tsx` | `/gallery` | Redirects to `/case-studies` |

## Phase 1 Target Routes

| Route | Page | Purpose | Status |
|---|---|---|---|
| `/` | Home | Benefits hero, program overview, primary CTA. | Stub (Plan 02) |
| `/our-story` | Our Story | Founder story and program origin. | Stub (Plan 02) |
| `/who-we-serve` | Who We Serve | Eligibility categories and verification introduction. | Stub (Plan 02) |
| `/savings-comparison` | Savings Comparison | Explain stacked credits and examples. | Stub (Plan 02) |
| `/service-lines` | Service Lines | Menu of transaction savings/services. | Stub (Plan 02) |
| `/our-guarantee` | Our Guarantee | Accountability, service standards, oversight. | Stub (Plan 02) |
| `/case-studies` | Case Studies | Example outcomes and user scenarios. | Stub (Plan 02) |
| `/privacy-policy` | Privacy Policy | Privacy and data governance. | Stub (Plan 02) |
| `/terms-of-service` | Terms of Service | Program terms and disclaimers. | Stub (Plan 02) |
| `/accessibility` | Accessibility | Accessibility commitment. | Stub (Plan 02) |

## Route Slug Mismatches (Documented)

| Current slug | Target slug | Action (plan 01) |
|---|---|---|
| `/privacy` | `/privacy-policy` | Add redirect; update footer links |
| `/terms` | `/terms-of-service` | Add redirect; update footer links |
| `/accessibility` | `/accessibility` | No slug change |

## Phase 2 Routes

| Route | Page | Purpose | Status |
|---|---|---|---|
| `/blog` | Blog Index | WordPress-style publication list. | Future |
| `/blog/[slug]` | Blog Post | Published article/content item. | Future |
| `/topics/[slug]` | Topic Archive | Category/tag archive. | Future |

## Redirects / Legacy Handling

Proposed redirects when Brave Heart replacements are stable (confirm mapping in plan 01):

| Legacy route | Proposed redirect |
|---|---|
| `/residence` | `/our-story` |
| `/neighborhood` | `/who-we-serve` |
| `/schools` | `/savings-comparison` |
| `/gallery` | `/case-studies` |
| `/privacy` | `/privacy-policy` |
| `/terms` | `/terms-of-service` |

Do not leave old listing-site pages reachable in production without redirects.

**Note:** PRD and route-map reference `/the-residence` in some docs; actual implemented path is `/residence`.

## Phase 2 Routes

See plan 06. Do not implement until Phase 1 validation passes.
