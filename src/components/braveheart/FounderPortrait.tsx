import {
  portraitDefaultSrc,
  portraitSrcSet,
  PORTRAIT_SIZES,
} from '../../lib/braveheartAssets';
import { PROGRAM_CONTACT } from '../../config/contact';

type FounderPortraitProps = {
  /** Tailwind size preset or pass `className` for custom layout. */
  size?: 'spotlight' | 'contact';
  className?: string;
  /** When true, loads immediately (e.g. above-the-fold spotlight). */
  priority?: boolean;
};

const sizeClasses = {
  spotlight: 'w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56',
  contact: 'w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48',
} as const;

const PORTRAIT_FILE = 'karen-van-ness-portrait.webp';

export default function FounderPortrait({
  size = 'spotlight',
  className = '',
  priority = false,
}: FounderPortraitProps) {
  return (
    <img
      src={portraitDefaultSrc(PORTRAIT_FILE)}
      srcSet={portraitSrcSet(PORTRAIT_FILE)}
      sizes={PORTRAIT_SIZES}
      alt={PROGRAM_CONTACT.portraitAlt}
      width={512}
      height={755}
      className={`${sizeClasses[size]} object-contain rounded-xl ring-2 ring-primary/35 editorial-shadow bg-surface-container-low/30 ${className}`.trim()}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
