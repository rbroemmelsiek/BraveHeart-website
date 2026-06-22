import React from 'react';
import BraveHeartPageStub from '../components/BraveHeartPageStub';

export default function WhoWeServe() {
  return (
    <BraveHeartPageStub
      h1="Who We Serve: A Dedicated Mission"
      intro="Placeholder for eligibility categories and verification introduction. Approved copy pending in Plan 02."
      sections={[
        {
          title: 'Eligibility Categories',
          body: 'Placeholder for first responder and military eligibility overview. Source: docs/braveheart/normalized-content/who-we-serve.md.',
        },
      ]}
    />
  );
}
