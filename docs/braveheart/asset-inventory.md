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

## Current On-Disk Location (Pre-Normalization)

Brave Heart source files currently live at **`public/assets/`** (repo root of assets folder). Production path and inbox are not yet populated with converted assets. Inbox contains only `.gitkeep`.

## Status Values

```text
raw              — source PNG/JPG on disk, not yet at production path
converted        — WebP exists (may still be at legacy path)
needs-review     — placement or filename requires owner decision
approved         — ready for plan 03 conversion/insertion
implemented      — referenced in React pages
retired          — listing-site legacy; do not use
duplicate        — redundant copy of another asset
missing          — referenced in docs but not on disk
```

## Asset Registry (Reconciled 2026-06-21)

| Asset ID | On-Disk File (Current) | Target Production Filename | Page | Section | Alt Text | Status |
|---|---|---|---|---|---|---|
| hero-benefits | `public/assets/first-responder-real-estate-benefits.png` | `first-responder-real-estate-benefits.webp` | Home | Hero | First responder family on a home porch representing real estate benefits for public safety and military households. | raw |
| client-roadmap | `public/assets/BraveHeartHerosJourney.webp` | `braveheart-client-heroes-journey.webp` | Home | Lifecycle Roadmap | Visual roadmap of the Brave Heart client journey from service sacrifice to home stability. | converted |
| legacy-support | `public/assets/braveheart-legacy-of-support-history.png` | `braveheart-legacy-of-support-history.webp` | Our Story | Legacy Timeline | Historical timeline graphic highlighting a legacy of support since 1997. | raw |
| ai-guardian | `public/assets/ai-guardian-team-real-estate-support.png` | `ai-guardian-team-real-estate-support.webp` | Home | Tech-Enabled Support | Three-panel visual showing AI-assisted real estate support for ethics, forms, and guidance. | raw |
| secure-verification | `public/assets/braveheart-hometohome-secure-verification.png` | `braveheart-hometohome-secure-verification.webp` | Who We Serve | Verification | Mobile verification interface protected by digital security symbols. | raw |
| talentscout-matching | `public/assets/talentscout-ai-agent-matching-system.png` | `talentscout-ai-agent-matching-system.webp` | Who We Serve | Agent Matching | TalentScout AI diagram connecting an officer profile to a vetted real estate specialist. | raw |
| escrow-precision | `public/assets/automated-escrow-title-closing-precision.png` | `automated-escrow-title-closing-precision.webp` | Home / Service Lines | Transaction Flow | Step process tracker showing coordinated escrow, title, and closing precision. | raw |
| brokerage-lender-credit | `public/assets/major-transaction-savings-brokerage-lender.png` | `major-transaction-savings-brokerage-lender.webp` | Service Lines | Primary Transaction Credits | Graphic showing brokerage and lender credit benefits in a real estate transaction. | raw |
| aggregation-benefits | `public/assets/real-estate-power-of-aggregation-benefits.png` | `real-estate-power-of-aggregation-benefits.webp` | Savings Comparison | Aggregation | Network diagram showing real estate benefits aggregated across providers. | raw |
| impact-ledger | `public/assets/real-world-impact-benefit-credit-example.png` | `real-world-impact-benefit-credit-example.webp` | Savings Comparison | Financial Example | Example purchase ledger showing stacked real estate benefit credits. | raw |
| reduced-costs | `public/assets/reduced-closing-costs-discounts.png` | `reduced-closing-costs-discounts.webp` | Service Lines | Settlement Extensions | Settlement fee breakdown showing escrow, title, disclosure, and inspection savings. | raw |
| lifecycle-benefits | `public/assets/comprehensive-lifecycle-real-estate-benefits.png` | `comprehensive-lifecycle-real-estate-benefits.webp` | Service Lines / Our Guarantee | Lifecycle Support | Comprehensive lifecycle benefits including warranty, exchange, referral, and inspection support. | raw |
| testimonial | `public/assets/first-responder-testimonial-captain-lopez.png` | `first-responder-testimonial-captain-lopez.webp` | Case Studies | Peer Endorsement | First responder testimonial image representing program results. | raw |
| founder-history | `public/assets/police-history-generational-wealth.png` | `police-history-generational-wealth.webp` | Our Story | Founder Origin | Evolution from historical policing to modern badge emphasizing generational wealth and stability. | raw |
| guarantee-list | `public/assets/braveheart-advantage-benefits-list.png` | `braveheart-advantage-benefits-list.webp` | Our Guarantee | Accountability | Checklist of the Braveheart Advantage highlighting credits, discounts, and AI matching. | raw |
| app-qr-signup | `public/assets/braveheart-app-qr-code-signup.png` | `braveheart-app-qr-code-signup.webp` | Global / Home | CTA | QR code and smartphone displaying Braveheart HomeToHome app for eligibility verification. | raw |
| logo-landscape | `public/assets/Brave Heart Logo 2.png` | `brave-heart-logo-landscape.webp` | Global | Navbar/Footer | Brave Heart First Responders landscape logo. | raw |
| logo-square | `public/assets/Brave Heart LogoDarkSqu.webp` | `brave-heart-logo-square.webp` | Global | Favicon/Icon | Square Brave Heart shield logo. | converted |
| icon-final | `public/assets/icon-final.png` | `braveheart-icon.webp` | Global | Favicon/Icon | Brave Heart program icon. | raw |
| listing-agent-photo | `public/assets/Karen2-250px.webp` | — | — | — | Listing-site agent portrait (legacy). | retired |

## Gaps and Mismatches

| Issue | Detail |
|---|---|
| Production path empty | `public/assets/images/braveheart/` has no WebP output files yet. |
| Filename spaces | `Brave Heart Logo 2.png` must be normalized before public URLs (plan 03). |
| Journey filename drift | On-disk `BraveHeartHerosJourney.webp` vs manifest `braveheart-client-heroes-journey.jpg` — reconcile target SEO name in plan 03. |
| Logo target names | Inventory previously used spaced names (`Brave Heart Logo 2.webp`); normalize to kebab-case. |
| Listing images missing | 22 unique root-level `/ *.webp` paths referenced in `src/pages/` — files not in repo (see inspection note §6). |
| Karen2 path mismatch | File exists at `public/assets/Karen2-250px.webp` but pages reference `/Karen2-250px.webp` (public root) — broken either way after Brave Heart conversion. |

## Notes

- Do not implement React image paths until WebP files exist at the production path and status is `approved` or above.
- Original PNG deletion is prohibited until owner approval (plan 03).
- Reconcile placement of `escrow-precision`, `lifecycle-benefits`, and `talentscout-matching` with content map during plan 02.
