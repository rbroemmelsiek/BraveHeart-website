import React from 'react';
import BraveHeartImage from './BraveHeartImage';

export interface JourneyStep {
  title: string;
  description: string;
  icon: string;
}

export const DEFAULT_JOURNEY_STEPS: JourneyStep[] = [
  {
    title: 'Request Support',
    description:
      'Eligible households begin through the website verification entry point or program contact channels.',
    icon: 'contact_phone',
  },
  {
    title: 'Confidential Verification',
    description:
      'Program staff review eligibility context through a structured, privacy-conscious intake process.',
    icon: 'verified_user',
  },
  {
    title: 'Expert Matchmaking',
    description:
      'Verified participants may be connected with vetted professionals aligned to program service lines.',
    icon: 'handshake',
  },
  {
    title: 'Home & Financial Profiling',
    description:
      'Household needs, market context, and lender coordination are clarified before transaction steps advance.',
    icon: 'home_work',
  },
  {
    title: 'Coordinated Oversight',
    description:
      'Transaction milestones are tracked with HomeToHome-powered guidance to support clarity and documentation.',
    icon: 'account_tree',
  },
  {
    title: 'Closing & Member Benefit',
    description:
      'Eligible credits and discounts are applied inside the transaction process where program rules and providers apply.',
    icon: 'savings',
  },
];

interface HeroesJourneyShowcaseProps {
  /** Full infographic image filename under public/assets/images/braveheart/ */
  infographicFile?: string;
  infographicAlt?: string;
  steps?: JourneyStep[];
  className?: string;
}

export default function HeroesJourneyShowcase({
  infographicFile = 'braveheart-client-heroes-journey.webp',
  infographicAlt = "The Hero's Path to Homeownership — Brave Heart client journey from first contact through closing.",
  steps = DEFAULT_JOURNEY_STEPS,
  className = '',
}: HeroesJourneyShowcaseProps) {
  return (
    <section
      className={`reveal space-y-8 ${className}`.trim()}
      aria-labelledby="heroes-journey-heading"
    >
      <div className="glass-hero rounded-2xl p-6 md:p-10 editorial-shadow text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-3 font-medium">
          Program Standard
        </p>
        <h2
          id="heroes-journey-heading"
          className="font-serif font-light text-2xl md:text-3xl text-on-surface leading-snug"
        >
          The Hero&apos;s Path to Homeownership
        </h2>
        <p className="mt-4 text-on-surface/80 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          A structured journey from first inquiry through verification, professional coordination,
          and transaction support—presented here as the Brave Heart visual standard.
        </p>
      </div>

      {infographicFile && (
        <div className="glass-panel rounded-xl p-3 md:p-4 editorial-shadow">
          <BraveHeartImage
            file={infographicFile}
            alt={infographicAlt}
            className="glass-inset rounded-lg p-1 md:p-2"
          />
        </div>
      )}

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none p-0 m-0">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="glass-panel rounded-xl p-5 md:p-6 editorial-shadow card-lift flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 border border-primary/30 text-primary font-serif text-lg"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">
                {step.icon}
              </span>
            </div>
            <h3 className="font-serif text-lg text-primary leading-snug">{step.title}</h3>
            <p className="text-on-surface/85 text-sm font-light leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>

      <p className="text-center text-on-surface-variant text-xs font-light leading-relaxed px-4">
        Illustrative program flow only. Eligibility, provider participation, and final benefits are
        confirmed during verification and the transaction process.
      </p>
    </section>
  );
}
