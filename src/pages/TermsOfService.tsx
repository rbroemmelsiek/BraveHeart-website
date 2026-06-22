import React from 'react';
import BraveHeartPageStub from '../components/BraveHeartPageStub';

export default function TermsOfService() {
  return (
    <BraveHeartPageStub
      eyebrow="Legal"
      h1="Terms of Service"
      intro="Placeholder for program terms and operational guidelines. Legal review required before publication in Plan 02."
      sections={[
        {
          title: 'Program Terms',
          body: 'Placeholder for terms of service sections. Source: docs/braveheart/normalized-content/terms-of-service.md.',
        },
      ]}
    />
  );
}
