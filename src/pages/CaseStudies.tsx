import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

const SCENARIOS = [
  {
    title: 'Law Enforcement — First Home Purchase',
    summary:
      'Illustrative scenario: an eligible officer household seeks pre-negotiated transaction support, verification, and coordinated closing services in a competitive market.',
  },
  {
    title: 'Firefighter — Relocation',
    summary:
      'Illustrative scenario: an eligible firefighter household relocates for a new assignment and uses program coordination for lending, escrow, and inspection pathways where available.',
  },
  {
    title: 'Active-Duty Military — PCS Move',
    summary:
      'Illustrative scenario: an active-duty household navigates a PCS-related purchase with verification-first intake and professional matching where the program applies.',
  },
  {
    title: 'Veteran — Post-Service Transition',
    summary:
      'Illustrative scenario: a veteran household explores eligible benefits during a post-service home purchase, with lifecycle support considerations where approved.',
  },
];

export default function CaseStudies() {
  return (
    <BraveHeartPageLayout
      h1="Real Results: Client Case Studies"
      intro={
        <>
          <p>
            The scenarios below are illustrative examples for planning and education. They
            are not verified testimonials unless explicitly labeled and approved for
            publication.
          </p>
          <p className="text-sm text-secondary italic">
            [TBD: Verified peer endorsements and named testimonials require editorial and
            compliance approval.]
          </p>
        </>
      }
      sections={[
        ...SCENARIOS.map((scenario) => ({
          title: scenario.title,
          body: <p>{scenario.summary}</p>,
        })),
        {
          title: 'Peer Endorsement Placeholder',
          body: (
            <p>
              A verified testimonial section may appear here after editorial approval. Do not
              treat marketing assets as confirmed client outcomes until published as verified.
            </p>
          ),
          image: {
            alt: 'First responder testimonial image representing program results.',
            plannedFile: 'first-responder-testimonial-captain-lopez.webp',
            label: 'Testimonial — pending verification and approval',
          },
        },
      ]}
      cta={{
        primaryLabel: 'Get Matched',
        secondaryLabel: 'Verify Eligibility',
        secondaryTo: '/who-we-serve',
      }}
      relatedLinks={[
        { label: 'Who We Serve', to: '/who-we-serve' },
        { label: 'Savings Comparison', to: '/savings-comparison' },
        { label: 'Service Lines', to: '/service-lines' },
      ]}
    />
  );
}
