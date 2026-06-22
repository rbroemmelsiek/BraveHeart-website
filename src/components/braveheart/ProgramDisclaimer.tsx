import React, { useEffect } from 'react';

const DISCLAIMER =
  'Program benefits are subject to eligibility verification, provider availability, transaction terms, lender approval, and applicable law. Final credits and discounts are confirmed during the transaction process.';

export default function ProgramDisclaimer() {
  return (
    <aside
      className="max-w-4xl mx-auto px-8 mt-16 reveal border border-outline-variant/30 bg-surface-container-low/50 p-6 md:p-8 rounded-sm"
      aria-label="Program disclaimer"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3 font-medium">
        Important Notice
      </p>
      <p className="text-on-surface/80 text-sm font-light leading-relaxed">{DISCLAIMER}</p>
    </aside>
  );
}

export { DISCLAIMER };
