import React, { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSection, { PageSectionData } from './PageSection';
import ProgramDisclaimer from './ProgramDisclaimer';
import CtaBlock from './CtaBlock';
import FounderSpotlight from './FounderSpotlight';
import ProgramContactSection from './ProgramContactSection';
import HeroesJourneyShowcase from './HeroesJourneyShowcase';
import { VerificationEntryIntent } from '../../config/cta';

export interface RelatedLink {
  label: string;
  to: string;
}

export interface BraveHeartPageLayoutProps {
  eyebrow?: string;
  h1: string;
  intro?: ReactNode;
  sections?: PageSectionData[];
  relatedLinks?: RelatedLink[];
  showDisclaimer?: boolean;
  showFounderSpotlight?: boolean;
  showContactSection?: boolean;
  showHeroesJourneyShowcase?: boolean;
  cta?: {
    primaryLabel?: string;
    primaryIntent?: VerificationEntryIntent;
    secondaryLabel?: string;
    secondaryTo?: string;
    secondaryAction?: 'link' | 'modal';
    secondaryIntent?: VerificationEntryIntent;
    tertiaryLabel?: string;
    tertiaryTo?: string;
  };
  legalReviewBanner?: boolean;
}

export default function BraveHeartPageLayout({
  eyebrow = 'Brave Heart First Responders',
  h1,
  intro,
  sections = [],
  relatedLinks = [],
  showDisclaimer = true,
  showFounderSpotlight = false,
  showContactSection = false,
  showHeroesJourneyShowcase = false,
  cta,
  legalReviewBanner = false,
}: BraveHeartPageLayoutProps) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal') as NodeListOf<HTMLElement>;
    elements.forEach((el) => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-48 pb-24">
        {legalReviewBanner && (
          <div className="max-w-4xl mx-auto px-8 mb-8 reveal">
            <p className="text-center text-xs uppercase tracking-widest text-secondary glass-panel py-3 px-4 rounded-lg">
              Draft for legal and compliance review — not final publication copy.
            </p>
          </div>
        )}

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="glass-hero rounded-2xl px-6 py-12 md:px-12 md:py-16 mb-16 text-center reveal editorial-shadow max-w-4xl mx-auto">
            <span className="text-primary uppercase text-xs tracking-[0.25rem] mb-6 block font-medium">
              {eyebrow}
            </span>
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
              {h1}
            </h1>
            {intro && (
              <div className="mt-8 text-on-surface/85 font-light leading-relaxed max-w-2xl mx-auto text-base md:text-lg space-y-4">
                {intro}
              </div>
            )}
          </div>
        </div>

        {showHeroesJourneyShowcase && (
          <div className="mb-16 md:mb-20">
            <HeroesJourneyShowcase variant="feature" showSteps={false} />
          </div>
        )}

        {showFounderSpotlight && <FounderSpotlight />}

        {sections.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 md:px-8 space-y-8">
            {sections.map((section, index) => (
              <PageSection key={section.title} section={section} index={index} />
            ))}
          </section>
        )}

        {cta && (
          <CtaBlock
            primaryLabel={cta.primaryLabel}
            primaryIntent={cta.primaryIntent}
            secondaryLabel={cta.secondaryLabel}
            secondaryTo={cta.secondaryTo}
            secondaryAction={cta.secondaryAction}
            secondaryIntent={cta.secondaryIntent}
            tertiaryLabel={cta.tertiaryLabel}
            tertiaryTo={cta.tertiaryTo}
          />
        )}

        {showContactSection && <ProgramContactSection />}

        {relatedLinks.length > 0 && (
          <nav
            className="max-w-4xl mx-auto px-8 mt-12 reveal"
            aria-label="Related pages"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-4 text-center">
              Related Pages
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {relatedLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary hover:opacity-80 text-sm font-light transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {showDisclaimer && <ProgramDisclaimer />}
      </main>
    </div>
  );
}
