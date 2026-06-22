import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function ServiceLines() {
  return (
    <BraveHeartPageLayout
      h1="Our Service Lines: The Pre-Negotiated Benefit Menu"
      intro={
        <p>
          Brave Heart organizes transaction support across a pre-negotiated benefit menu.
          Each service line includes concise program intent; specific credits and discounts
          are confirmed during verification and closing.
        </p>
      }
      sections={[
        {
          title: 'Core Transaction Credits',
          body: (
            <p>
              Where available, eligible participants may access brokerage- and lender-related
              credits as part of the coordinated transaction process. Amounts and applicability
              require verification and provider participation.
            </p>
          ),
          image: {
            alt: 'Graphic showing brokerage and lender credit benefits in a real estate transaction.',
            file: 'major-transaction-savings-brokerage-lender.webp',
          },
          bullets: [
            'Brokerage fee credits — subject to verification and transaction rules',
            'Lender-related credits — subject to lender approval and program terms',
          ],
        },
        {
          title: 'Settlement and Closing Services',
          body: (
            <p>
              Escrow, title, disclosure, and inspection-related benefits may apply where
              participating providers and program rules allow.
            </p>
          ),
          image: {
            alt: 'Settlement fee breakdown showing escrow, title, and inspection-related savings.',
            file: 'reduced-closing-costs-discounts.webp',
          },
          bullets: [
            'Escrow fee reductions where available',
            'Title insurance discounts where available',
            'Inspection and NHD-related discounts where available',
          ],
        },
        {
          title: 'Lifecycle and Extended Support',
          body: (
            <p>
              Beyond a single closing, the program may include lifecycle support such as home
              warranty considerations, exchange-related guidance, referral pathways, and
              follow-up inspections where approved.
            </p>
          ),
          image: {
            alt: 'Comprehensive lifecycle benefits including warranty, exchange, and referral support.',
            file: 'comprehensive-lifecycle-real-estate-benefits.webp',
          },
          bullets: [
            'Home warranty coupons or credits where available',
            '1031 exchange-related guidance where applicable',
            'Referral and repeat-transaction pathways where program rules allow',
            'Discounted inspections where available',
          ],
        },
        {
          title: 'Coordinated Transaction Flow',
          body: (
            <p>
              HomeToHome-powered workflows help coordinate offer, escrow, title, and closing
              steps with professional oversight. Automation supports clarity—not a substitute
              for licensed advice.
            </p>
          ),
          image: {
            alt: 'Step process tracker showing coordinated escrow, title, and closing precision.',
            file: 'automated-escrow-title-closing-precision.webp',
          },
        },
      ]}
      cta={{
        primaryLabel: 'Start Intake',
        primaryIntent: 'intake',
        secondaryLabel: 'Compare Savings',
        secondaryTo: '/savings-comparison',
      }}
      relatedLinks={[
        { label: 'Who We Serve', to: '/who-we-serve' },
        { label: 'Our Guarantee', to: '/our-guarantee' },
        { label: 'Case Studies', to: '/case-studies' },
      ]}
    />
  );
}
