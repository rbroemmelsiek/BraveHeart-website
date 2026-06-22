import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function OurStory() {
  return (
    <BraveHeartPageLayout
      h1="Our Story: Built From Lived Experience"
      intro={
        <p>
          Brave Heart was shaped by lived experience in public-safety households and a
          practical insight: professional value generated inside real estate transactions
          can be redirected to support the families who serve their communities.
        </p>
      }
      sections={[
        {
          title: 'Founder Origin',
          body: (
            <>
              <p>
                The program reflects a founder perspective rooted in respect for law
                enforcement, fire, EMS, dispatch, and military service—not luxury marketing,
                but household stability and financial clarity during major life transitions.
              </p>
              <p>
                [TBD: Expanded founder narrative pending editorial approval in normalized
                content.]
              </p>
            </>
          ),
          image: {
            alt: 'Historical and generational context emphasizing stability for public-safety families.',
            plannedFile: 'police-history-generational-wealth.webp',
          },
        },
        {
          title: 'Legacy of Support',
          body: (
            <p>
              Brave Heart builds on a commitment to serve frontline households with
              practical transaction support. Specific historical claims and timeline details
              will be added after editorial review.
            </p>
          ),
          image: {
            alt: 'Timeline graphic highlighting a legacy of support for public-safety and military families.',
            plannedFile: 'braveheart-legacy-of-support-history.webp',
            label: 'Visual asset — pending editorial approval',
          },
        },
        {
          title: 'Mission Over Marketing',
          bullets: [
            'Direct, respectful communication with eligible households.',
            'Protection-focused guidance through complex transaction decisions.',
            'Coordination with vetted professionals where the program applies.',
            'No gimmicky urgency or unsupported promises.',
          ],
        },
      ]}
      cta={{
        primaryLabel: 'Speak With the Founder',
        secondaryLabel: 'Who We Serve',
        secondaryTo: '/who-we-serve',
      }}
      relatedLinks={[
        { label: 'Home', to: '/' },
        { label: 'Our Guarantee', to: '/our-guarantee' },
        { label: 'Case Studies', to: '/case-studies' },
      ]}
    />
  );
}
