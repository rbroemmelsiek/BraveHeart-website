import React, { useEffect } from 'react';

export interface StubSection {
  title: string;
  body: string;
}

interface BraveHeartPageStubProps {
  eyebrow?: string;
  h1: string;
  intro?: string;
  sections?: StubSection[];
}

export default function BraveHeartPageStub({
  eyebrow = 'Brave Heart First Responders',
  h1,
  intro,
  sections = [],
}: BraveHeartPageStubProps) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal') as NodeListOf<HTMLElement>;
    elements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-48 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col items-center mb-16 text-center reveal">
            <span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">
              {eyebrow}
            </span>
            <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-on-surface leading-tight max-w-4xl">
              {h1}
            </h1>
            {intro && (
              <p className="mt-8 text-on-surface/80 font-light leading-relaxed max-w-2xl text-lg">
                {intro}
              </p>
            )}
          </div>
        </div>

        {sections.length > 0 && (
          <section className="max-w-4xl mx-auto px-8 space-y-16">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-outline-variant/20 pt-12 reveal"
              >
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-serif text-primary italic">
                    {String(index + 1).padStart(2, '0')}. {section.title}
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-on-surface font-light leading-relaxed">{section.body}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        <div className="max-w-4xl mx-auto px-8 mt-16 reveal">
          <p className="text-secondary text-sm font-light italic text-center">
            Content placeholder — full copy will be added in Plan 02 after editorial approval.
          </p>
        </div>
      </main>
    </div>
  );
}
