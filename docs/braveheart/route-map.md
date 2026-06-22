# Brave Heart Route Map

## Purpose

Defines the target public routes for the Brave Heart First Responders website and documents current listing-site routes pending replacement.

## Current Listing-Site Routes (As Implemented)

| Route | Component | Status |
|---|---|---|
| `/` | `Home` | Listing-site — replace content |
| `/residence` | `TheResidence` | Listing-site — remove/redirect in plan 01 |
| `/neighborhood` | `Neighborhood` | Listing-site — remove/redirect in plan 01 |
| `/schools` | `Schools` | Listing-site — remove/redirect in plan 01 |
| `/gallery` | `Gallery` | Listing-site — remove/redirect in plan 01 |
| `/privacy` | `PrivacyPolicy` | Listing legal copy — slug mismatch |
| `/terms` | `TermsOfService` | Listing legal copy — slug mismatch |
| `/accessibility` | `Accessibility` | Listing legal copy — slug OK |

Configured in [`src/App.tsx`](../../src/App.tsx).

## Phase 1 Target Routes

| Route | Page | Purpose | Status |
|---|---|---|---|
| `/` | Home | Benefits hero, program overview, primary CTA. | Planned |
| `/our-story` | Our Story | Founder story and program origin. | Planned |
| `/who-we-serve` | Who We Serve | Eligibility categories and verification introduction. | Planned |
| `/savings-comparison` | Savings Comparison | Explain stacked credits and examples. | Planned |
| `/service-lines` | Service Lines | Menu of transaction savings/services. | Planned |
| `/our-guarantee` | Our Guarantee | Accountability, service standards, oversight. | Planned |
| `/case-studies` | Case Studies | Example outcomes and user scenarios. | Planned |
| `/privacy-policy` | Privacy Policy | Privacy and data governance. | Planned |
| `/terms-of-service` | Terms of Service | Program terms and disclaimers. | Planned |
| `/accessibility` | Accessibility | Accessibility commitment. | Planned |

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
