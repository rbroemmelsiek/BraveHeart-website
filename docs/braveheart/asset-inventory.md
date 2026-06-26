# Brave Heart Asset Inventory

## Purpose

Tracks source images, WebP conversions, approved usage, alt text, SEO purpose, and implementation status.

## Production Path

```text
public/assets/images/braveheart/
```

## Raw Intake Path

```text
public/assets/images/braveheart/inbox/
```

## Source Path (Preserved)

Original PNG/WebP sources remain at **`public/assets/`** until owner approves deletion.

## Status Values

```text
raw              — source PNG/JPG on disk, not yet at production path
converted        — WebP exists at production path, not yet referenced in React
needs-review     — placement or filename requires owner decision
approved         — ready for insertion
implemented      — referenced in React pages or global chrome
retired          — listing-site legacy; do not use
duplicate        — redundant copy of another asset
missing          — referenced in docs but not on disk
```

## Asset Registry (Plan 03 — 2026-06-21)

| Asset ID | Production Filename | Production Path | Dimensions | Alt Text | Page | Section | Status |
|---|---|---|---|---|---|---|---|
| hero-benefits | first-responder-real-estate-benefits.webp | public/assets/images/braveheart/ | 1376×768 | First responder family on a home porch representing real estate benefits for public safety and military households. | Home | Benefits Inside the Transaction | implemented |
| client-roadmap | braveheart-client-heroes-journey.webp | public/assets/images/braveheart/ | 1382×769 | The Hero's Path to Homeownership — Brave Heart client journey from first contact through closing and member benefits. | Home | Client Lifecycle Roadmap | implemented |
| ai-guardian | ai-guardian-team-real-estate-support.webp | public/assets/images/braveheart/ | 1376×768 | Three-panel visual showing AI-assisted real estate support for ethics, forms, and guidance. | Home | HomeToHome-Powered Support | implemented |
| legacy-support | braveheart-legacy-of-support-history.webp | public/assets/images/braveheart/ | 1376×768 | Historical timeline graphic highlighting a legacy of support since 1997. | Our Story | Legacy of Support | implemented |
| founder-history | police-history-generational-wealth.webp | public/assets/images/braveheart/ | 1376×768 | Evolution from historical policing to modern badge emphasizing generational wealth and stability. | Our Story | Founder Origin | implemented |
| secure-verification | braveheart-hometohome-secure-verification.webp | public/assets/images/braveheart/ | 1376×768 | Mobile verification interface protected by digital security symbols. | Who We Serve | Eligibility Categories | implemented |
| talentscout-matching | talentscout-ai-agent-matching-system.webp | public/assets/images/braveheart/ | 1376×768 | TalentScout AI diagram connecting an officer profile to a vetted real estate specialist. | Who We Serve | Professional Matching | implemented |
| aggregation-benefits | real-estate-power-of-aggregation-benefits.webp | public/assets/images/braveheart/ | 1376×768 | Network diagram showing real estate benefits aggregated across providers. | Savings Comparison | How Stacked Benefits Work | implemented |
| impact-ledger | real-world-impact-benefit-credit-example.webp | public/assets/images/braveheart/ | 1376×768 | Example purchase ledger showing stacked real estate benefit credits. | Savings Comparison | Illustrative Comparison | implemented |
| brokerage-lender-credit | major-transaction-savings-brokerage-lender.webp | public/assets/images/braveheart/ | 1376×768 | Graphic showing brokerage and lender credit benefits in a real estate transaction. | Service Lines | Core Transaction Credits | implemented |
| reduced-costs | reduced-closing-costs-discounts.webp | public/assets/images/braveheart/ | 1376×768 | Settlement fee breakdown showing escrow, title, disclosure, and inspection savings. | Service Lines | Settlement and Closing Services | implemented |
| lifecycle-benefits | comprehensive-lifecycle-real-estate-benefits.webp | public/assets/images/braveheart/ | 1376×768 | Comprehensive lifecycle benefits including warranty, exchange, referral, and inspection support. | Service Lines | Lifecycle and Extended Support | implemented |
| escrow-precision | automated-escrow-title-closing-precision.webp | public/assets/images/braveheart/ | 1376×768 | Step process tracker showing coordinated escrow, title, and closing precision. | Service Lines | Coordinated Transaction Flow | implemented |
| guarantee-list | braveheart-advantage-benefits-list.webp | public/assets/images/braveheart/ | 1376×768 | Checklist of the Braveheart Advantage highlighting credits, discounts, and AI matching. | Our Guarantee | Service Standards | implemented |
| testimonial | first-responder-testimonial-captain-lopez.webp | public/assets/images/braveheart/ | 1376×768 | First responder testimonial image representing program results. | Case Studies | Peer Endorsement Placeholder | implemented |
| logo-landscape | brave-heart-logo-landscape.webp | public/assets/images/braveheart/ | 1408×768 | Brave Heart First Responders landscape logo. | Global | Navbar/Footer | implemented |
| icon-final | braveheart-icon.webp | public/assets/images/braveheart/ | 2048×2048 | Brave Heart program icon. | Global | Favicon | implemented |
| logo-square | brave-heart-logo-square.webp | public/assets/images/braveheart/ | 1408×1408 | Square Brave Heart shield logo. | Global | OG/social (Plan 05) | converted |
| app-qr-signup | braveheart-app-qr-code-signup.webp | public/assets/images/braveheart/ | 1376×768 | QR code and smartphone displaying Braveheart HomeToHome app for eligibility verification. | Global | CTA | converted |
| founder-portrait | karen-van-ness-portrait.webp | public/assets/images/braveheart/ | 1351×1992 | Karen Van Ness — Brave Heart First Responders founder and program innovator. | Global | Founder spotlight / Contact | implemented |
| listing-agent-photo | — | public/assets/Karen2-250px.webp | — | Listing-site agent portrait (legacy). | — | — | retired |

## Source Files (Preserved)

| Asset ID | Original File | Format | Notes |
|---|---|---|---|
| hero-benefits | public/assets/first-responder-real-estate-benefits.png | PNG | Preserved |
| client-roadmap | public/assets/images/braveheart/braveheart-client-heroes-journey.png | PNG | Preserved — run `npm run images:braveheart` to regenerate WebP |
| legacy-support | public/assets/braveheart-legacy-of-support-history.png | PNG | Preserved |
| ai-guardian | public/assets/ai-guardian-team-real-estate-support.png | PNG | Preserved |
| secure-verification | public/assets/braveheart-hometohome-secure-verification.png | PNG | Preserved |
| talentscout-matching | public/assets/talentscout-ai-agent-matching-system.png | PNG | Preserved |
| escrow-precision | public/assets/automated-escrow-title-closing-precision.png | PNG | Preserved |
| brokerage-lender-credit | public/assets/major-transaction-savings-brokerage-lender.png | PNG | Preserved |
| aggregation-benefits | public/assets/real-estate-power-of-aggregation-benefits.png | PNG | Preserved |
| impact-ledger | public/assets/real-world-impact-benefit-credit-example.png | PNG | Preserved |
| reduced-costs | public/assets/reduced-closing-costs-discounts.png | PNG | Preserved |
| lifecycle-benefits | public/assets/comprehensive-lifecycle-real-estate-benefits.png | PNG | Preserved |
| testimonial | public/assets/first-responder-testimonial-captain-lopez.png | PNG | Preserved |
| founder-history | public/assets/police-history-generational-wealth.png | PNG | Preserved |
| guarantee-list | public/assets/braveheart-advantage-benefits-list.png | PNG | Preserved |
| app-qr-signup | public/assets/braveheart-app-qr-code-signup.png | PNG | Preserved |
| logo-landscape | public/assets/Brave Heart Logo 2.png | PNG | Preserved |
| logo-square | public/assets/Brave Heart LogoDarkSqu.webp | WebP | Preserved |
| icon-final | public/assets/icon-final.png | PNG | Preserved |
| founder-portrait | public/assets/images/braveheart/inbox/Karen-Van-Ness-portrait.jpg | JPG | Preserved — run `npm run images:braveheart` to regenerate WebP |

## Gaps and Deferred Items

| Issue | Detail |
|---|---|
| App QR CTA | `braveheart-app-qr-code-signup.webp` converted but not wired — Plan 04 CTA entry. |
| Square logo OG | `brave-heart-logo-square.webp` ready for Plan 05 Open Graph metadata. |
| Compliance-sensitive graphics | Savings example, discount breakdown, guarantee checklist, testimonial — shown with editorial/compliance flags in copy. |
| Listing legacy | `Karen2-250px.webp` retained at source path; superseded by `karen-van-ness-portrait.webp`. |

## Notes

- All public route images use production WebP paths via `src/lib/braveheartAssets.ts`.
- Original PNG deletion is prohibited until owner approval.
- Conversion script: `npm run images:braveheart`.
