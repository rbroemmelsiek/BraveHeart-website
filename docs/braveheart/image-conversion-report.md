# Brave Heart Image Conversion Report

## Purpose

Record image conversion results. Updated after Plan 03 WebP conversion (2026-06-21).

## Conversion Defaults

```text
Format: WebP
Quality: 82 default
Dimensions: preserve original
Upscaling: prohibited unless explicitly requested
Original deletion: prohibited until approved
Tool: Sharp via npm run images:braveheart
Output: public/assets/images/braveheart/
```

## Normalization Status (Plan 03 — 2026-06-21)

- **Conversion complete.** 19 production WebP files written to `public/assets/images/braveheart/`.
- All PNG sources preserved at `public/assets/`.
- Existing partial WebPs relocated and re-encoded to kebab-case production names.
- `Karen2-250px.webp` retired — not converted.
- Re-run: `npm run images:braveheart` (reads `scripts/convert-braveheart-images.mjs`).

## Source Inventory Summary

| Category | Count | Location |
|---|---:|---|
| PNG sources (Brave Heart) | 16 | `public/assets/*.png` |
| WebP partial (Brave Heart) | 2 | `public/assets/BraveHeartHerosJourney.webp`, `public/assets/Brave Heart LogoDarkSqu.webp` |
| Retired listing asset | 1 | `public/assets/Karen2-250px.webp` |
| Production WebP output | 19 | `public/assets/images/braveheart/` |

## Conversion Table

| Original File | Original Format | Original Dimensions | Original Size | WebP File | WebP Size | Status | Notes |
|---|---|---:|---:|---|---:|---|---|
| first-responder-real-estate-benefits.png | PNG | 1376×768 | 1.31 MB | first-responder-real-estate-benefits.webp | 85.0 KB | Complete | Home hero/benefits |
| braveheart-legacy-of-support-history.png | PNG | 1376×768 | 1.25 MB | braveheart-legacy-of-support-history.webp | 78.3 KB | Complete | Our Story legacy |
| ai-guardian-team-real-estate-support.png | PNG | 1376×768 | 1.12 MB | ai-guardian-team-real-estate-support.webp | 82.7 KB | Complete | Home HomeToHome support |
| braveheart-hometohome-secure-verification.png | PNG | 1376×768 | 1.09 MB | braveheart-hometohome-secure-verification.webp | 42.3 KB | Complete | Who We Serve verification |
| talentscout-ai-agent-matching-system.png | PNG | 1376×768 | 1.05 MB | talentscout-ai-agent-matching-system.webp | 69.3 KB | Complete | Who We Serve matching |
| automated-escrow-title-closing-precision.png | PNG | 1376×768 | 1.16 MB | automated-escrow-title-closing-precision.webp | 73.5 KB | Complete | Service Lines flow |
| major-transaction-savings-brokerage-lender.png | PNG | 1376×768 | 1.13 MB | major-transaction-savings-brokerage-lender.webp | 60.6 KB | Complete | Service Lines credits |
| real-estate-power-of-aggregation-benefits.png | PNG | 1376×768 | 1009.0 KB | real-estate-power-of-aggregation-benefits.webp | 55.8 KB | Complete | Savings aggregation |
| real-world-impact-benefit-credit-example.png | PNG | 1376×768 | 903.5 KB | real-world-impact-benefit-credit-example.webp | 51.1 KB | Complete | Savings example — compliance review |
| reduced-closing-costs-discounts.png | PNG | 1376×768 | 1.17 MB | reduced-closing-costs-discounts.webp | 68.7 KB | Complete | Service Lines settlement |
| comprehensive-lifecycle-real-estate-benefits.png | PNG | 1376×768 | 1.16 MB | comprehensive-lifecycle-real-estate-benefits.webp | 65.9 KB | Complete | Service Lines lifecycle |
| first-responder-testimonial-captain-lopez.png | PNG | 1376×768 | 1.15 MB | first-responder-testimonial-captain-lopez.webp | 56.5 KB | Complete | Case Studies — pending verification |
| police-history-generational-wealth.png | PNG | 1376×768 | 906.2 KB | police-history-generational-wealth.webp | 45.7 KB | Complete | Our Story founder |
| braveheart-advantage-benefits-list.png | PNG | 1376×768 | 986.6 KB | braveheart-advantage-benefits-list.webp | 54.4 KB | Complete | Our Guarantee — compliance review |
| braveheart-app-qr-code-signup.png | PNG | 1376×768 | 1.07 MB | braveheart-app-qr-code-signup.webp | 47.1 KB | Complete | Deferred to Plan 04 CTA |
| Brave Heart Logo 2.png | PNG | 1408×768 | 1.65 MB | brave-heart-logo-landscape.webp | 52.2 KB | Complete | Navbar/footer logo |
| icon-final.png | PNG | 2048×2048 | 1.41 MB | braveheart-icon.webp | 50.1 KB | Complete | Favicon |
| BraveHeartHerosJourney.webp | WebP | 2752×1536 | 267.8 KB | braveheart-client-heroes-journey.webp | 294.7 KB | Complete | Relocated/re-encoded |
| Brave Heart LogoDarkSqu.webp | WebP | 1408×1408 | 49.9 KB | brave-heart-logo-square.webp | 55.5 KB | Complete | OG/social candidate |
| Karen2-250px.webp | WebP | — | 6.8 KB | — | — | Retired | Listing-site legacy; do not convert |
