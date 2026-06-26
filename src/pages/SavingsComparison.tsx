import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function SavingsComparison() {
  return (
    <BraveHeartPageLayout
      h1="Real Savings: Transparent Financial Analysis"
      intro={
        <p>
          Brave Heart is designed to stack transaction-related benefits where eligible and
          available—potentially reducing out-of-pocket costs across multiple service lines.
          Actual savings vary by transaction, market, lender approval, and provider
          participation.
        </p>
      }
      sections={[
        {
          title: 'How Stacked Benefits Work',
          body: (
            <p>
              Instead of treating brokerage, lending, escrow, title, and inspections as
              isolated line items, the program aggregates pre-negotiated benefits across
              participating providers. Eligible participants may receive credits and discounts
              subject to final verification and transaction-specific rules.
            </p>
          ),
          image: {
            alt: 'Network diagram showing real estate benefits aggregated across providers.',
            file: 'real-estate-power-of-aggregation-benefits.webp',
            priority: true,
          },
        },
        {
          title: 'Illustrative Comparison',
          body: (
            <>
              <p>
                Worked examples and purchase-scenario math will be published here after
                compliance review. Figures must not be treated as guarantees.
              </p>
              <p className="text-secondary text-sm italic">
                [TBD: Approved example ledger and numeric scenarios — compliance review
                required before publication.]
              </p>
            </>
          ),
          image: {
            alt: 'Example purchase ledger showing stacked benefit credits.',
            file: 'real-world-impact-benefit-credit-example.webp',
          },
        },
        {
          title: 'What Affects Your Outcome',
          bullets: [
            'Verified eligibility and program category',
            'Participating providers in your market',
            'Loan type, purchase price, and transaction structure',
            'Lender approval and closing timeline',
            'Applicable law and transaction-specific documentation',
          ],
        },
      ]}
      cta={{
        primaryLabel: 'Verify Eligibility',
        primaryIntent: 'verify',
        secondaryLabel: 'View Service Lines',
        secondaryTo: '/service-lines',
      }}
      relatedLinks={[
        { label: 'Service Lines', to: '/service-lines' },
        { label: 'Who We Serve', to: '/who-we-serve' },
        { label: 'Our Guarantee', to: '/our-guarantee' },
      ]}
    />
  );
}
