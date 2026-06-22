# Brave Heart Content Map

## Purpose

Tracks approved page sections, source content, CTAs, images, and implementation status.

## Status Values

```text
draft                        — outline or placeholder only; not for React insertion
needs-review                 — requires editorial or compliance review
approved-for-implementation  — cleared for plan 02
implemented                  — present in React pages
published                    — live and validated
retired                      — removed from site
```

## Content Readiness (Updated Plan 03 — 2026-06-21)

Route-specific content is **implemented in React** using normalized content, PRD tone, and compliance notes. Marketing images are **wired from production WebP** at `public/assets/images/braveheart/` per asset inventory. Sections marked `[TBD]` or `needs-review` require editorial or legal completion before publication.

## Page Content Map

| Route | Section | Content Source | Image | CTA | Status | Review | Notes |
|---|---|---|---|---|---|---|---|
| `/` | Hero / Program Overview | normalized-content/home.md, PRD | first-responder-real-estate-benefits.webp | Verify Eligibility | implemented | needs-review | Plan 03 — hero image priority load. |
| `/` | Client Lifecycle Roadmap | normalized-content/home.md | braveheart-client-heroes-journey.webp | Learn More | implemented | needs-review | Plan 03 wired. |
| `/` | HomeToHome Support | normalized-content/home.md | ai-guardian-team-real-estate-support.webp | Verify | implemented | needs-review | Plan 03 wired. |
| `/` | Verification Intro | normalized-content/home.md | None | Verify Eligibility | implemented | needs-review | CTA opens ContactModal (Plan 04). |
| `/our-story` | Founder Origin | normalized-content/our-story.md | police-history-generational-wealth.webp | Speak With Founder | implemented | needs-review | Plan 03 wired. |
| `/our-story` | Legacy Timeline | normalized-content/our-story.md | braveheart-legacy-of-support-history.webp | Learn More | implemented | needs-review | Plan 03 wired; [TBD] historical claims. |
| `/our-story` | Mission Principles | PRD tone | None | — | implemented | needs-review | Bullets from PRD tone guidance. |
| `/who-we-serve` | Eligibility Categories | PRD target users | braveheart-hometohome-secure-verification.webp | Verify Eligibility | implemented | needs-review | No guarantee of eligibility. |
| `/who-we-serve` | Verification | normalized-content/who-we-serve.md | None | Verify | implemented | needs-review | — |
| `/who-we-serve` | Professional Matching | content-map optional | talentscout-ai-agent-matching-system.webp | Verify | implemented | needs-review | Plan 03 wired. |
| `/savings-comparison` | Stacked Benefits | normalized-content/savings-comparison.md | real-estate-power-of-aggregation-benefits.webp | See Benefits | implemented | needs-review | No numeric examples yet. |
| `/savings-comparison` | Illustrative Comparison | normalized-content/savings-comparison.md | real-world-impact-benefit-credit-example.webp | See Benefits | implemented | needs-review | **[TBD] compliance review for figures.** |
| `/savings-comparison` | Outcome Factors | normalized-content/savings-comparison.md | None | — | implemented | needs-review | — |
| `/service-lines` | Core Transaction Credits | normalized-content/service-lines.md | major-transaction-savings-brokerage-lender.webp | Start Intake | implemented | needs-review | No specific percentages. |
| `/service-lines` | Settlement Services | normalized-content/service-lines.md | reduced-closing-costs-discounts.webp | Start Intake | implemented | needs-review | **[TBD] discount figures.** |
| `/service-lines` | Lifecycle Support | normalized-content/service-lines.md | comprehensive-lifecycle-real-estate-benefits.webp | Start Intake | implemented | needs-review | Plan 03 wired. |
| `/service-lines` | Coordinated Flow | content-map optional | automated-escrow-title-closing-precision.webp | Start Intake | implemented | needs-review | Plan 03 wired. |
| `/our-guarantee` | Service Standards | normalized-content/our-guarantee.md | braveheart-advantage-benefits-list.webp | Verify | implemented | needs-review | **[TBD] benefit list figures.** |
| `/our-guarantee` | Accountability | normalized-content/our-guarantee.md | None | Verify | implemented | needs-review | — |
| `/our-guarantee` | Limitations | legal-and-compliance-notes.md | None | — | implemented | needs-review | Explicit non-guarantee language. |
| `/case-studies` | Illustrative Scenarios (×4) | normalized-content/case-studies.md | None | Get Matched | implemented | needs-review | Labeled illustrative, not verified. |
| `/case-studies` | Testimonial Placeholder | normalized-content/case-studies.md | first-responder-testimonial-captain-lopez.webp | Get Matched | implemented | needs-review | Plan 03 wired; **[TBD] verified testimonial approval.** |
| `/privacy-policy` | Privacy Sections | normalized-content/privacy-policy.md | None | Contact | implemented | needs-review | **Draft — legal review required.** |
| `/terms-of-service` | Terms Sections | normalized-content/terms-of-service.md | None | Contact | implemented | needs-review | **Draft — legal review required.** |
| `/accessibility` | Accessibility Sections | normalized-content/accessibility.md | None | Contact | implemented | needs-review | **Draft — audit and legal review.** |
| Global | Navbar/Footer logo | asset-inventory | brave-heart-logo-landscape.webp | — | implemented | needs-review | Plan 03 global chrome. |
| Global | Favicon | asset-inventory | braveheart-icon.webp | — | implemented | needs-review | Plan 03. |
| Global | App / QR CTA | cta-and-verification-flow.md | braveheart-app-qr-code-signup.webp | Open App | converted | needs-review | Converted — Plan 04 CTA wiring. |

## Insertion Rule

New content must be added here before implementation in React components.
