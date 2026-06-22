import React from 'react';
import BraveHeartPageStub from '../components/BraveHeartPageStub';

export default function Home() {
  return (
    <BraveHeartPageStub
      eyebrow="Brave Heart First Responders"
      h1="Real Financial Relief—Applied Where It Counts"
      intro="Home page shell for eligible first responders and military members. Approved program overview and benefit details will be added in Plan 02."
      sections={[
        {
          title: 'Program Overview',
          body: 'Placeholder for the main benefits introduction. Source content: docs/braveheart/normalized-content/home.md.',
        },
        {
          title: 'Client Journey',
          body: 'Placeholder for the lifecycle roadmap section. Visual assets will be wired in Plan 03.',
        },
        {
          title: 'Support & Guidance',
          body: 'Placeholder for technology-enabled support overview. CTAs will be wired in Plan 04.',
        },
      ]}
    />
  );
}
