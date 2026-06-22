import React, { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSection, { PageSectionData } from './PageSection';
import ProgramDisclaimer from './ProgramDisclaimer';
import CtaBlock from './CtaBlock';

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
  cta?: {
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryTo?: string;
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
            <p className="text-center text-xs uppercase tracking-widest text-secondary border border-outline-variant/30 py-3 px-4 rounded-sm bg-surface-container-low/80">
              Draft for legal and compliance review — not final publication copy.
            </p>
          </div>
        )}

        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col items-center mb-16 text-center reveal">
            <span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">
              {eyebrow}
            </span>
            <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-on-surface leading-tight max-w-4xl">
              {h1}
            </h1>
            {intro && (
              <div className="mt-8 text-on-surface/80 font-light leading-relaxed max-w-2xl text-lg space-y-4">
                {intro}
              </div>
            )}
          </div>
        </div>

        {sections.length > 0 && (
          <section className="max-w-4xl mx-auto px-8 space-y-16">
            {sections.map((section, index) => (
              <PageSection key={section.title} section={section} index={index} />
            ))}
          </section>
        )}

        {cta && (
          <CtaBlock
            primaryLabel={cta.primaryLabel}
            secondaryLabel={cta.secondaryLabel}
            secondaryTo={cta.secondaryTo}
            tertiaryLabel={cta.tertiaryLabel}
            tertiaryTo={cta.tertiaryTo}
          />
        )}

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
