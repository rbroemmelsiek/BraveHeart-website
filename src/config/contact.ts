/**
 * Brave Heart program contact — Karen Van Ness / founder outreach.
 * Values aligned with docs/braveheart/white-label-config.md (verify before publication).
 */

export const PROGRAM_CONTACT = {
  founderName: 'Karen Van Ness',
  founderRole: 'Founder / Program Innovator',
  brokerage: 'Van Ness & Associates | eXp Realty',
  dre: 'DRE #01354837',
  phoneTel: '+18586996409',
  phoneDisplay: '(858) 699-6409',
  email: 'karen@braveheartfirstresponders.com',
  portraitSrc: '/assets/images/braveheart/karen-van-ness-portrait.webp',
  portraitAlt: 'Karen Van Ness — Brave Heart First Responders founder and program innovator',
  smsBody:
    "Hi, I'm interested in learning about Brave Heart First Responders program benefits and eligibility.",
  quote:
    'Brave Heart was built to bring real transaction relief to the households that serve our communities— with clear guidance, vetted support, and benefits applied where they count.',
} as const;

export const CONTACT_SECTION_ID = 'contact';

export function contactEmailHref(subject = 'Brave Heart Program Inquiry'): string {
  return `mailto:${PROGRAM_CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}

export function contactSmsHref(body = PROGRAM_CONTACT.smsBody): string {
  return `sms:${PROGRAM_CONTACT.phoneTel}?body=${encodeURIComponent(body)}`;
}

export function contactTelHref(): string {
  return `tel:${PROGRAM_CONTACT.phoneTel}`;
}
