/**
 * Brave Heart CTA and verification-entry configuration.
 * External URLs remain stubbed until owner approval.
 */

export type VerificationEntryIntent = 'verify' | 'founder' | 'matched' | 'intake' | 'contact';

export const CTA_CONFIG = {
  /** HomeToHome app URL — not live; QR shown as static placeholder only. */
  appUrl: null as string | null,
  appUrlStatus: 'stubbed' as const,
  appUrlNote: 'Final HomeToHome app URL pending owner approval.',
} as const;

export const VERIFICATION_ENTRY_DISCLAIMER =
  'Submitting this form starts a program review request only. It does not guarantee eligibility, benefits, financing, brokerage credit, lender approval, or transaction outcomes. A program team member may follow up after review.';

export const VERIFICATION_ENTRY_FORM_NOTICE =
  'This is a front-end intake form only. No information is transmitted to a verification backend in Phase 1.';

export const SERVICE_CATEGORY_OPTIONS = [
  'Law enforcement',
  'Firefighter',
  'EMT / paramedic',
  '911 dispatcher',
  'Active-duty military',
  'Veteran / retired military',
  'Spouse or household member',
  'Other / unsure',
] as const;

export const STATUS_CATEGORY_OPTIONS = [
  'Active duty / active service',
  'Retired',
  'Veteran',
  'Spouse or household member',
  'Prefer not to say',
] as const;

export const TRANSACTION_INTENT_OPTIONS = [
  'Buying',
  'Selling',
  'Buying and selling',
  'Undecided',
] as const;

export const INTENT_COPY: Record<
  VerificationEntryIntent,
  { title: string; description: string; submitLabel: string; showQr: boolean }
> = {
  verify: {
    title: 'Start Eligibility Review',
    description:
      'Tell us about your service background and transaction goals so the program team can begin an eligibility review.',
    submitLabel: 'Start Eligibility Review',
    showQr: true,
  },
  founder: {
    title: 'Speak With the Founder',
    description:
      'Request a conversation with the Brave Heart founder about the program. This does not confirm eligibility or benefits.',
    submitLabel: 'Request Founder Contact',
    showQr: false,
  },
  matched: {
    title: 'Request Program Review',
    description:
      'Share your information to begin a program review. Professional matching depends on verification, market, and provider participation.',
    submitLabel: 'Request Program Review',
    showQr: true,
  },
  intake: {
    title: 'Start Program Intake',
    description:
      'Begin the Brave Heart intake process. Final benefits and service lines are confirmed only after verification and transaction review.',
    submitLabel: 'Start Intake',
    showQr: true,
  },
  contact: {
    title: 'Contact the Program Team',
    description:
      'Send a message to the Brave Heart program team. For eligibility questions, include your service category and market area.',
    submitLabel: 'Send Request',
    showQr: false,
  },
};
