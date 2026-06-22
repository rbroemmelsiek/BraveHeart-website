# Brave Heart CTA and Verification Flow

## Purpose

Defines user-facing calls to action and Phase 1 verification entry behavior (front-end only).

## Implementation Status (Plan 04 — 2026-06-21)

Phase 1 provides a **front-end-only verification entry modal** — no backend, CRM, identity provider, or live app deep link.

| Component | Path | Role |
|---|---|---|
| CTA config | `src/config/cta.ts` | Labels, intents, stub app URL, disclaimers |
| Verification entry modal | `src/components/braveheart/VerificationEntryModal.tsx` | Intake form + disclaimers + QR placeholder |
| Context provider | `src/context/ContactModalContext.tsx` | `openVerificationEntry(intent)` |
| Page CTAs | `src/components/braveheart/CtaBlock.tsx` | Primary/secondary/tertiary actions |

## CTA Intents

| Intent | Typical trigger | Modal title | QR shown |
|---|---|---|---|
| `verify` | Navbar, Home, Who We Serve, Savings, Guarantee | Start Eligibility Review | Yes |
| `founder` | Our Story primary CTA | Speak With the Founder | No |
| `matched` | Case Studies primary CTA | Request Program Review | Yes |
| `intake` | Service Lines primary CTA | Start Program Intake | Yes |
| `contact` | Footer Contact, legal pages | Contact the Program Team | No |

## Phase 1 CTA Destinations

| CTA | Destination | Status | Notes |
|---|---|---|---|
| Verify Eligibility | Verification entry modal (`verify`) | **Implemented** | Navbar + page CTAs |
| Start Intake | Verification entry modal (`intake`) | **Implemented** | Service Lines |
| Get Matched | Verification entry modal (`matched`) | **Implemented** | Does not imply instant assignment |
| Speak With Founder | Verification entry modal (`founder`) | **Implemented** | No guaranteed callback |
| Contact Program Team | Verification entry modal (`contact`) | **Implemented** | Footer + legal pages |
| See Your Benefits / Explore Service Lines | Internal routes | **Implemented** | Secondary/tertiary links |
| Who We Serve / Learn More | Internal routes | **Implemented** | Tertiary/secondary links |
| Open App | QR image placeholder only | **Stubbed** | `CTA_CONFIG.appUrl` is null |

## Form Fields (Front-End Only)

| Field | Required | Notes |
|---|---|---|
| Full name | Yes | |
| Email | Yes | |
| Phone | No | |
| Service category | Yes | Law enforcement, fire, EMS, dispatch, military, etc. |
| Active / retired / status | Yes | |
| Buying / selling / both / undecided | Yes | |
| State or market area | Yes | Free text |
| Message | No | |

Submit displays a local success message only — **no network request**.

## Disclaimers

Visible in every modal session:

1. **Eligibility disclaimer** — submission does not guarantee eligibility, benefits, financing, brokerage credit, lender approval, or transaction outcomes.
2. **Form notice** — Phase 1 front-end intake only; no verification backend connected.

Program-wide disclaimer on benefit pages remains in `ProgramDisclaimer.tsx`.

## QR / App Entry

- Asset: `public/assets/images/braveheart/braveheart-app-qr-code-signup.webp`
- Shown for `verify`, `matched`, and `intake` intents
- Static placeholder caption — no live deep link until `CTA_CONFIG.appUrl` is approved

## Stubbed / Pending Owner Approval

| Item | Status | Location |
|---|---|---|
| HomeToHome app URL | Stubbed (`null`) | `src/config/cta.ts` |
| Verification backend | Not implemented | Future phase |
| CRM / email delivery | Not implemented | Future phase |
| Founder contact email/phone in modal | Not wired | Use form only until approved |

Reference contact values in `docs/braveheart/white-label-config.md` require verification before publication as live `mailto:` / `tel:` links.

## Removed Listing-Site Behavior

The following were removed from active UI in Plan 04:

- `karen@vannessandassociates.com` mailto
- `+18586996409` tel/sms links
- `1622 W. Oak St., Burbank` property inquiry text
- Listing-style Email / Call / Text modal actions

## Future Flow

```text
User clicks Verify Eligibility
→ verification entry modal (Phase 1)
→ basic contact/intake fields
→ service category selection
→ [future] secure verification partner/app
→ [future] program team follow-up
```

## Validation Checklist

- CTA buttons open modal or route correctly
- No listing-agent contact info on active routes
- No CTA guarantees approval or specific savings
- Disclaimers visible in modal
- Keyboard: Escape closes; focus moves to close button
- QR asset loads from production WebP path
