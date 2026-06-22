import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function TermsOfService() {
  return (
    <BraveHeartPageLayout
      eyebrow="Legal"
      h1="Terms of Service"
      legalReviewBanner
      showDisclaimer={false}
      intro={
        <p>
          These draft terms describe the scope of the Brave Heart First Responders website
          and program information. They are not a substitute for transaction-specific
          agreements with licensed professionals. Legal review is required before publication.
        </p>
      }
      sections={[
        {
          title: 'Program Scope',
          body: (
            <p>
              This website provides information about a real estate benefits and
              transaction-support program for eligible public-safety and military households.
              Program availability, benefits, and providers may vary by location and
              verification outcome.
            </p>
          ),
        },
        {
          title: 'Eligibility and Verification',
          body: (
            <p>
              Eligibility is not assumed from job title or self-identification alone.
              Benefits described on this site are subject to verification, provider
              participation, transaction terms, and applicable law.
            </p>
          ),
        },
        {
          title: 'Credits and Provider Roles',
          body: (
            <p>
              [TBD: RESPA-aligned credit distribution language, provider role definitions,
              and limitation clauses require legal review before publication.]
            </p>
          ),
          bullets: [
            'Licensed professionals retain responsibility for their regulated services',
            'Program credits and discounts are confirmed during the transaction process',
            'No website content guarantees specific financial outcomes',
          ],
        },
        {
          title: 'User Responsibilities',
          bullets: [
            'Provide accurate information during intake and verification',
            'Independently evaluate professional advice and transaction documents',
            'Use the site in compliance with applicable laws and program rules',
          ],
        },
        {
          title: 'Limitations',
          body: (
            <p>
              [TBD: Full limitation-of-liability, dispute, and governing-law sections
              require legal review.]
            </p>
          ),
        },
      ]}
      cta={{ primaryLabel: 'Contact the Program Team', primaryIntent: 'contact' }}
      relatedLinks={[
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Accessibility', to: '/accessibility' },
        { label: 'Our Guarantee', to: '/our-guarantee' },
      ]}
    />
  );
}
