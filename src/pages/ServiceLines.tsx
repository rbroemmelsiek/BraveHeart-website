import React from 'react';
import BraveHeartPageStub from '../components/BraveHeartPageStub';

export default function ServiceLines() {
  return (
    <BraveHeartPageStub
      h1="Our Service Lines: The Pre-Negotiated Benefit Menu"
      intro="Placeholder for the transaction benefit menu across program service lines. Approved copy pending in Plan 02."
      sections={[
        {
          title: 'Benefit Menu',
          body: 'Placeholder for brokerage, lending, escrow, title, inspection, and related service lines. Source: docs/braveheart/normalized-content/service-lines.md.',
        },
      ]}
    />
  );
}
