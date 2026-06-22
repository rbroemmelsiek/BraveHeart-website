import React, { ReactNode } from 'react';
import BraveHeartImage from './BraveHeartImage';

export interface PageSectionData {
  title: string;
  body?: ReactNode;
  bullets?: string[];
  image?: { alt: string; file: string; priority?: boolean };
}

interface PageSectionProps {
  section: PageSectionData;
  index: number;
}

const delayClasses = ['delay-100', 'delay-200', 'delay-300'] as const;

const PageSection: React.FC<PageSectionProps> = ({ section, index }) => {
  const delayClass = delayClasses[index % delayClasses.length];

  return (
    <article
      className={`glass-panel rounded-xl p-6 md:p-10 editorial-shadow card-lift reveal ${delayClass}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <header className="md:col-span-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-secondary block mb-2">
            Step {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="text-xl md:text-2xl font-serif text-primary leading-snug">
            {section.title}
          </h2>
        </header>
        <div className="md:col-span-2 space-y-6">
          {section.body && (
            <div className="text-on-surface/90 font-light leading-relaxed space-y-4">{section.body}</div>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-2 text-on-surface/90 font-light leading-relaxed">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-primary mt-1 shrink-0" aria-hidden="true">
                    ◆
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <BraveHeartImage
              alt={section.image.alt}
              file={section.image.file}
              priority={section.image.priority}
              className="glass-inset rounded-lg p-1 md:p-2"
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default PageSection;
