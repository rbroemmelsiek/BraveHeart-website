import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function OurGuarantee() {
  return (
    <BraveHeartPageLayout
      h1="Our Guarantee: Quality, Accountability & Protection"
      intro={
        <p>
          Brave Heart emphasizes professional accountability, clear communication, and
          protective oversight throughout the transaction process. This page describes service
          standards—not absolute outcomes that cannot be operationally guaranteed.
        </p>
      }
      sections={[
        {
          title: 'Service Standards',
          bullets: [
            'Vetted professional network where the program applies',
            'Documented transaction steps and participant communication',
            'Ethical guidance aligned to licensed professional roles',
            'Escalation paths when service expectations are not met',
          ],
          image: {
            alt: 'Checklist of the Braveheart Advantage highlighting program standards.',
            file: 'braveheart-advantage-benefits-list.webp',
          },
        },
        {
          title: 'Accountability and Oversight',
          body: (
            <p>
              Program oversight is intended to protect eligible participants during complex
              transactions. Final credits, timelines, and provider assignments depend on
              verification, market conditions, and transaction-specific factors.
            </p>
          ),
        },
        {
          title: 'What We Do Not Promise',
          body: (
            <p>
              Brave Heart does not guarantee loan approval, specific dollar savings, instant
              matching, or outcomes before verification and transaction review are complete.
              Language on this site describes program intent—not binding financial commitments.
            </p>
          ),
        },
      ]}
      cta={{
        primaryLabel: 'Verify Eligibility',
        primaryIntent: 'verify',
        secondaryLabel: 'Our Story',
        secondaryTo: '/our-story',
      }}
      relatedLinks={[
        { label: 'Service Lines', to: '/service-lines' },
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms of Service', to: '/terms-of-service' },
      ]}
    />
  );
}
