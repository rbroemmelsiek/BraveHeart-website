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

## Content Readiness (Normalized 2026-06-21)

All files under `docs/braveheart/normalized-content/` are **draft outlines only**:

- Each file defines target H1, page purpose, required sections, and notes.
- Body copy has **not** been expanded for implementation.
- All entries below remain `draft` with editorial `needs-review` until copy is approved.

**Do not implement full page copy in plan 02 until sections are marked `approved-for-implementation`.**

Legal pages (`privacy-policy`, `terms-of-service`, `accessibility`) require additional compliance review per `legal-and-compliance-notes.md`.

## Page Content Map

| Route | Section | Content Source | Image | CTA | Status | Review | Notes |
|---|---|---|---|---|---|---|---|
| `/` | Hero | normalized-content/home.md | first-responder-real-estate-benefits.webp | Verify Eligibility | draft | needs-review | Main benefits statement — body copy not expanded. |
| `/` | Client Lifecycle Roadmap | normalized-content/home.md | BraveHeartHerosJourney.webp | Learn More | draft | needs-review | Visual journey section. |
| `/` | AI Guardian Team | normalized-content/home.md | ai-guardian-team-real-estate-support.webp | Ask / Verify | draft | needs-review | Technology support explanation. |
| `/` | Transaction Flow (optional) | normalized-content/home.md | automated-escrow-title-closing-precision.webp | Verify Eligibility | draft | needs-review | Placement TBD — not in original map; asset on disk. |
| `/our-story` | Founder Origin | normalized-content/our-story.md | police-history-generational-wealth.webp | Contact Founder | draft | needs-review | Founder and lived-experience story. |
| `/our-story` | Legacy Timeline (optional) | normalized-content/our-story.md | braveheart-legacy-of-support-history.webp | Learn More | draft | needs-review | Asset on disk; section TBD in normalized content. |
| `/who-we-serve` | Eligibility Categories | normalized-content/who-we-serve.md | braveheart-hometohome-secure-verification.webp | Verify Eligibility | draft | needs-review | First responders and military. |
| `/who-we-serve` | Agent Matching (optional) | normalized-content/who-we-serve.md | talentscout-ai-agent-matching-system.webp | Verify Eligibility | draft | needs-review | Asset on disk; section TBD. |
| `/savings-comparison` | Savings Math | normalized-content/savings-comparison.md | real-world-impact-benefit-credit-example.webp | See Benefits | draft | needs-review | Example financial math — compliance review for figures. |
| `/savings-comparison` | Aggregation | normalized-content/savings-comparison.md | real-estate-power-of-aggregation-benefits.webp | See Benefits | draft | needs-review | Network aggregation diagram. |
| `/service-lines` | Benefit Menu | normalized-content/service-lines.md | major-transaction-savings-brokerage-lender.webp | Start Intake | draft | needs-review | Brokerage/lender/escrow/title/inspection. |
| `/service-lines` | Settlement Savings | normalized-content/service-lines.md | reduced-closing-costs-discounts.webp | Start Intake | draft | needs-review | Closing cost breakdown graphic. |
| `/service-lines` | Lifecycle Benefits (optional) | normalized-content/service-lines.md | comprehensive-lifecycle-real-estate-benefits.webp | Start Intake | draft | needs-review | Asset on disk; section TBD. |
| `/our-guarantee` | Accountability | normalized-content/our-guarantee.md | braveheart-advantage-benefits-list.webp | Verify | draft | needs-review | Standards and oversight. |
| `/case-studies` | Case Studies | normalized-content/case-studies.md | first-responder-testimonial-captain-lopez.webp | Get Matched | draft | needs-review | Scenario-based examples. |
| `/privacy-policy` | Privacy | normalized-content/privacy-policy.md | None | Contact | draft | needs-review | Legal review required before publication. |
| `/terms-of-service` | Terms | normalized-content/terms-of-service.md | None | Contact | draft | needs-review | Legal review required before publication. |
| `/accessibility` | Accessibility | normalized-content/accessibility.md | None | Contact | draft | needs-review | Accessibility statement — legal/compliance review. |
| Global | App / QR CTA | cta-and-verification-flow.md | braveheart-app-qr-code-signup.webp | Open App | draft | needs-review | CTA destination TBD (open decision). |

## Insertion Rule

New content must be added here before implementation in React components.
