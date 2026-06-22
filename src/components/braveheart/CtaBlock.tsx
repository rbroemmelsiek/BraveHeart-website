import React from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../../context/ContactModalContext';

interface CtaBlockProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  tertiaryLabel?: string;
  tertiaryTo?: string;
}

export default function CtaBlock({
  primaryLabel = 'Verify Eligibility',
  secondaryLabel,
  secondaryTo,
  tertiaryLabel,
  tertiaryTo,
}: CtaBlockProps) {
  const { openModal } = useContactModal();

  return (
    <div className="max-w-4xl mx-auto px-8 mt-16 reveal flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
      <button
        type="button"
        onClick={openModal}
        className="bg-primary text-on-primary px-8 py-4 rounded-sm uppercase text-xs tracking-widest font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 w-full sm:w-auto text-center"
      >
        {primaryLabel}
      </button>
      {secondaryLabel && secondaryTo && (
        <Link
          to={secondaryTo}
          className="border border-primary/30 text-primary px-8 py-4 rounded-sm uppercase text-xs tracking-widest font-medium hover:bg-primary/5 transition-colors w-full sm:w-auto text-center"
        >
          {secondaryLabel}
        </Link>
      )}
      {tertiaryLabel && tertiaryTo && (
        <Link
          to={tertiaryTo}
          className="text-secondary hover:text-primary uppercase text-xs tracking-widest font-medium transition-colors px-4 py-2"
        >
          {tertiaryLabel}
        </Link>
      )}
    </div>
  );
}
