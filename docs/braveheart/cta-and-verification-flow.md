# Brave Heart CTA and Verification Flow

## Purpose

Defines the user-facing calls to action and future verification entry points.

## Phase 1 CTA Types

| CTA | Destination | Status | Notes |
|---|---|---|---|
| Verify Eligibility | Stub/modal/app link | Planned | Primary CTA. |
| See Your Benefits | Service Lines / Savings | Planned | Internal route. |
| Speak With Founder | Contact modal / mailto / tel | Planned | Confirm contact. |
| Open App | htoh/app link placeholder | Future | Stub if not live. |
| Get Matched | Contact/verification flow | Planned | Should not imply instant assignment unless true. |

## Verification Entry Requirements

Phase 1 does not implement verification backend. It should provide clear entry points without pretending verification is complete.

Allowed wording:

- Start eligibility review.
- Check whether you may qualify.
- Begin the Brave Heart intake process.
- Connect with the program team.

Avoid wording that guarantees approval before verification.

## Future Flow

```text
User clicks Verify Eligibility
→ modal or form entry
→ basic contact/intake
→ service category selection
→ secure verification partner/app
→ program team follow-up
```

## Validation

Verify:

- CTA buttons are visible above the fold on home page.
- CTAs appear on all major pages.
- Every CTA destination is live or intentionally stubbed.
- No CTA promises an unverified financial outcome.
- Phone/email links work if used.
