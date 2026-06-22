import React from 'react';
import BraveHeartPageLayout from '../components/braveheart/BraveHeartPageLayout';

export default function WhoWeServe() {
  return (
    <BraveHeartPageLayout
      h1="Who We Serve: A Dedicated Mission"
      intro={
        <p>
          Brave Heart is designed for public-safety and military households who may qualify
          for program benefits. Eligibility categories and household rules are confirmed
          during verification—not assumed from job title alone.
        </p>
      }
      sections={[
        {
          title: 'Eligibility Categories',
          body: (
            <p>
              The program is intended for eligible participants in categories such as those
              below. Final eligibility depends on program rules, documentation, and
              verification outcomes.
            </p>
          ),
          bullets: [
            'Law enforcement professionals',
            'Firefighters',
            'EMTs and paramedics',
            '911 dispatchers, where included by program rules',
            'Active-duty military members',
            'Veterans and retired military members',
            'Spouses or households connected to eligible members, where program rules allow',
          ],
          image: {
            alt: 'Mobile verification interface protected by digital security symbols.',
            plannedFile: 'braveheart-hometohome-secure-verification.webp',
          },
        },
        {
          title: 'Verification and Program Integrity',
          body: (
            <p>
              Access to benefits begins with eligibility review through the Brave Heart /
              HomeToHome intake process. Verification helps protect program integrity for
              eligible participants and partner providers.
            </p>
          ),
          bullets: [
            'Start eligibility review—approval is not guaranteed in advance.',
            'Submit information requested for verification.',
            'Receive guidance on next steps after review.',
          ],
        },
        {
          title: 'Professional Matching',
          body: (
            <p>
              Where the program applies, participants may be connected with vetted real
              estate specialists aligned to first-responder and military household needs.
              Matching availability depends on market, provider participation, and verified
              eligibility.
            </p>
          ),
          image: {
            alt: 'TalentScout AI diagram connecting a service profile to a vetted real estate specialist.',
            plannedFile: 'talentscout-ai-agent-matching-system.webp',
            label: 'Visual asset — Plan 03',
          },
        },
      ]}
      cta={{
        primaryLabel: 'Verify Eligibility',
        secondaryLabel: 'See Service Lines',
        secondaryTo: '/service-lines',
      }}
      relatedLinks={[
        { label: 'Savings Comparison', to: '/savings-comparison' },
        { label: 'Our Story', to: '/our-story' },
        { label: 'Case Studies', to: '/case-studies' },
      ]}
    />
  );
}
