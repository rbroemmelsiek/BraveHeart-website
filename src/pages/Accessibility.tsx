import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function Accessibility() {
  return (
    <BraveHeartPageLayout
      eyebrow="Legal"
      h1="Accessibility Statement"
      legalReviewBanner
      showDisclaimer={false}
      intro={
        <p>
          Brave Heart First Responders is committed to improving digital accessibility for
          eligible participants, partners, and visitors. This draft statement describes our
          goals pending a formal accessibility audit.
        </p>
      }
      sections={[
        {
          title: 'Accessibility Commitment',
          body: (
            <p>
              We aim to provide a website that is usable across common devices and assistive
              technologies. Ongoing improvements include semantic structure, readable contrast,
              keyboard navigation, and descriptive alternative text for meaningful visuals.
            </p>
          ),
        },
        {
          title: 'Standards and Testing',
          body: (
            <p>
              [TBD: Target WCAG conformance level and audit date will be documented after
              formal accessibility review.]
            </p>
          ),
          bullets: [
            'Semantic headings and landmarks for screen reader navigation',
            'Keyboard-accessible navigation and interactive controls where implemented',
            'Alt text on meaningful marketing images per asset inventory',
          ],
        },
        {
          title: 'Known Limitations',
          body: (
            <p>
              Some compliance-sensitive figures and draft legal copy remain under review.
              Third-party embeds or future app integrations may require separate accessibility
              review.
            </p>
          ),
        },
        {
          title: 'Feedback and Assistance',
          body: (
            <p>
              If you encounter a barrier on this site, contact the program team through the
              contact entry point. [TBD: Dedicated accessibility contact channel after legal
              review.]
            </p>
          ),
        },
      ]}
      cta={{ primaryLabel: 'Contact the Program Team', primaryIntent: 'contact' }}
      relatedLinks={[
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms of Service', to: '/terms-of-service' },
      ]}
    />
  );
}
