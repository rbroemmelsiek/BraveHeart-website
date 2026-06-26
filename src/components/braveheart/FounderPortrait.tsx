import React from 'react';
import { PROGRAM_CONTACT } from '../../config/contact';

type FounderPortraitProps = {
  /** Tailwind size preset or pass `className` for custom layout. */
  size?: 'spotlight' | 'contact';
  className?: string;
};

const sizeClasses = {
  spotlight: 'w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56',
  contact: 'w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48',
} as const;

export default function FounderPortrait({ size = 'spotlight', className = '' }: FounderPortraitProps) {
  return (
    <img
      src={PROGRAM_CONTACT.portraitSrc}
      alt={PROGRAM_CONTACT.portraitAlt}
      width={1351}
      height={1992}
      className={`${sizeClasses[size]} object-contain rounded-xl ring-2 ring-primary/35 editorial-shadow bg-surface-container-low/30 ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  );
}
