import React from 'react';
import { Link } from 'react-router-dom';
import { useVerificationEntry } from '../../context/ContactModalContext';
import { VerificationEntryIntent } from '../../config/cta';

interface CtaBlockProps {
  primaryLabel?: string;
  primaryIntent?: VerificationEntryIntent;
  secondaryLabel?: string;
  secondaryTo?: string;
  secondaryAction?: 'link' | 'modal';
  secondaryIntent?: VerificationEntryIntent;
  tertiaryLabel?: string;
  tertiaryTo?: string;
}

export default function CtaBlock({
  primaryLabel = 'Verify Eligibility',
  primaryIntent = 'verify',
  secondaryLabel,
  secondaryTo,
  secondaryAction = 'link',
  secondaryIntent = 'verify',
  tertiaryLabel,
  tertiaryTo,
}: CtaBlockProps) {
  const { openVerificationEntry } = useVerificationEntry();

  const buttonClass =
    'btn-primary text-on-primary px-8 py-4 rounded-lg uppercase text-xs tracking-widest font-medium hover:opacity-95 transition-all w-full sm:w-auto text-center';
  const secondaryLinkClass =
    'btn-glass text-primary px-8 py-4 rounded-lg uppercase text-xs tracking-widest font-medium transition-all w-full sm:w-auto text-center';

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 mt-12 reveal">
      <div className="glass-panel rounded-xl p-8 md:p-10 editorial-shadow flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
      <button
        type="button"
        onClick={() => openVerificationEntry(primaryIntent)}
        className={buttonClass}
      >
        {primaryLabel}
      </button>
      {secondaryLabel &&
        (secondaryAction === 'modal' ? (
          <button
            type="button"
            onClick={() => openVerificationEntry(secondaryIntent)}
            className={secondaryLinkClass}
          >
            {secondaryLabel}
          </button>
        ) : (
          secondaryTo && (
            <Link to={secondaryTo} className={secondaryLinkClass}>
              {secondaryLabel}
            </Link>
          )
        ))}
      {tertiaryLabel && tertiaryTo && (
        <Link
          to={tertiaryTo}
          className="text-secondary hover:text-primary uppercase text-xs tracking-widest font-medium transition-colors px-4 py-2"
        >
          {tertiaryLabel}
        </Link>
      )}
      </div>
    </div>
  );
}
