# Brave Heart Component Map

## Purpose

Maps existing listing-site components to Brave Heart usage and identifies new components to create.

## Preserve Existing Components Where Possible

| Existing Component | Brave Heart Use | Notes |
|---|---|---|
| Navbar | Global navigation | Rebrand labels, logo, route links. |
| Footer | Global footer | Add legal links, contact, program disclaimers. |
| ContactModal | Founder/contact/verify CTA modal | Update copy and action buttons. |
| Page sections/cards | Content sections | Reuse styling and layout patterns. |
| Gallery/lightbox patterns | Case studies or visual benefits | Use only if still appropriate. |

## New or Refactored Components

| Component | Purpose | Phase |
|---|---|---|
| BraveHeartHero | Home page hero with primary benefit CTA. | Phase 1 |
| BenefitCardGrid | Displays major transaction benefit categories. | Phase 1 |
| EligibilityPanel | Shows who qualifies and verification entry. | Phase 1 |
| SavingsScenario | Renders example financial math. | Phase 1 |
| ServiceLineGrid | Lists brokerage/lender/escrow/title/inspection benefits. | Phase 1 |
| VerificationCTA | Reusable verify eligibility block. | Phase 1 |
| SEOHead / Metadata helper | Page metadata injection if not already present. | Phase 1 |
| BlogCard | CMS-lite post card. | Phase 2 |
| CategoryArchive | CMS-lite category/tag archive. | Phase 2 |

## Implementation Preference

If the existing site has simple page components, do not over-engineer. Reuse the existing shell and add small helper components only where repetition becomes obvious.
