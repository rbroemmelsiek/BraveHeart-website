import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function Home() {
  return (
    <BraveHeartPageLayout
      h1="Real Financial Relief—Applied Where It Counts"
      intro={
        <>
          <p>
            Brave Heart First Responders is a mission-focused real estate benefits and
            transaction-support program for eligible public-safety and military households.
          </p>
          <p>
            Brave Heart helps eligible first responders and military members access
            pre-negotiated real estate benefits, vetted professional support, and
            HomeToHome-powered transaction guidance—applied inside the transaction process,
            not as a generic discount site.
          </p>
        </>
      }
      sections={[
        {
          title: 'Benefits Inside the Transaction',
          body: (
            <p>
              Rather than presenting disconnected promotions, Brave Heart coordinates
              benefits across brokerage, lending, escrow, title, inspections, and related
              service lines where available. Eligible participants may receive credits and
              discounts subject to verification, provider participation, and transaction-specific
              rules.
            </p>
          ),
          image: {
            alt: 'First responder family representing real estate benefits for public safety and military households.',
            plannedFile: 'first-responder-real-estate-benefits.webp',
          },
        },
        {
          title: 'Client Lifecycle Roadmap',
          body: (
            <p>
              The program is designed to support households from first inquiry through
              closing and ongoing lifecycle needs—verification, professional matching,
              coordinated transaction steps, and follow-up support where the program applies.
            </p>
          ),
          image: {
            alt: 'Visual roadmap of the Brave Heart client journey from service to home stability.',
            plannedFile: 'braveheart-client-heroes-journey.webp',
          },
        },
        {
          title: 'HomeToHome-Powered Support',
          body: (
            <p>
              Brave Heart uses HomeToHome-powered workflows to help eligible participants
              move from intake toward verification, professional coordination, and
              transaction guidance. Technology support is intended to reinforce clarity,
              documentation, and ethical decision-making—not replace licensed professionals.
            </p>
          ),
          image: {
            alt: 'Three-panel visual showing AI-assisted real estate support for ethics, forms, and guidance.',
            plannedFile: 'ai-guardian-team-real-estate-support.webp',
          },
        },
        {
          title: 'Start With Verification',
          body: (
            <p>
              Program access begins with eligibility review. Use the verification entry point
              to start the intake process or connect with the program team. Approval is not
              implied before verification is complete.
            </p>
          ),
        },
      ]}
      cta={{
        primaryLabel: 'Verify Eligibility',
        secondaryLabel: 'Explore Service Lines',
        secondaryTo: '/service-lines',
        tertiaryLabel: 'Who We Serve',
        tertiaryTo: '/who-we-serve',
      }}
      relatedLinks={[
        { label: 'Our Story', to: '/our-story' },
        { label: 'Savings Comparison', to: '/savings-comparison' },
        { label: 'Our Guarantee', to: '/our-guarantee' },
      ]}
    />
  );
}
