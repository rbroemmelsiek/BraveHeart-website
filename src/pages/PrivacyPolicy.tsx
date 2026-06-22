import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function PrivacyPolicy() {
  return (
    <BraveHeartPageLayout
      eyebrow="Legal"
      h1="Privacy Policy"
      legalReviewBanner
      showDisclaimer={false}
      intro={
        <p>
          This draft privacy policy describes how Brave Heart First Responders may collect,
          use, and protect information submitted through this website and related program
          intake channels. Final legal text requires compliance review before publication.
        </p>
      }
      sections={[
        {
          title: 'Information We May Collect',
          bullets: [
            'Contact information you voluntarily provide (name, email, phone)',
            'Service category and eligibility-related information submitted for review',
            'Transaction-related information needed to coordinate program benefits',
            'Technical data such as browser type and site usage for security and performance',
          ],
        },
        {
          title: 'How Information May Be Used',
          bullets: [
            'To respond to inquiries and coordinate program intake',
            'To conduct eligibility review and verification workflows',
            'To connect eligible participants with participating professionals where applicable',
            'To improve site performance and security',
          ],
        },
        {
          title: 'Sharing With Providers',
          body: (
            <p>
              Information may be shared with participating real estate, lending, escrow,
              title, inspection, and related providers only as needed to deliver program
              services you request or authorize. Brave Heart does not describe sale of personal
              information to unrelated third-party marketing lists in this draft policy.
            </p>
          ),
        },
        {
          title: 'Retention and Security',
          body: (
            <p>
              [TBD: Specific retention periods, security controls, and data-subject rights
              will be added after legal review.]
            </p>
          ),
        },
        {
          title: 'Your Choices',
          body: (
            <p>
              You may contact the program team with questions about information submitted
              through this site. Formal privacy rights language will be added after legal
              review.
            </p>
          ),
        },
      ]}
      cta={{ primaryLabel: 'Contact the Program Team', primaryIntent: 'contact' }}
      relatedLinks={[
        { label: 'Terms of Service', to: '/terms-of-service' },
        { label: 'Accessibility', to: '/accessibility' },
      ]}
    />
  );
}
