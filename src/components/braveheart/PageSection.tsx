import React, { ReactNode } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export interface PageSectionData {
  title: string;
  body?: ReactNode;
  bullets?: string[];
  image?: { alt: string; plannedFile: string; label?: string };
}

interface PageSectionProps {
  section: PageSectionData;
  index: number;
}

const PageSection: React.FC<PageSectionProps> = ({ section, index }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-outline-variant/20 pt-12 reveal">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-serif text-primary italic">
          {String(index + 1).padStart(2, '0')}. {section.title}
        </h2>
      </div>
      <div className="md:col-span-2 space-y-6">
        {section.body && (
          <div className="text-on-surface font-light leading-relaxed space-y-4">{section.body}</div>
        )}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="list-disc list-outside ml-5 space-y-2 text-on-surface font-light leading-relaxed">
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {section.image && (
          <ImagePlaceholder
            alt={section.image.alt}
            plannedFile={section.image.plannedFile}
            label={section.image.label}
          />
        )}
      </div>
    </div>
  );
};

export default PageSection;
