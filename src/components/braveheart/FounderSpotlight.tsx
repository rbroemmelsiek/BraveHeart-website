import React from 'react';
import { PROGRAM_CONTACT } from '../../config/contact';

export default function FounderSpotlight() {
  return (
    <section
      className="max-w-4xl mx-auto px-6 md:px-8 mb-8 reveal"
      aria-labelledby="founder-spotlight-heading"
    >
      <article className="glass-panel rounded-xl p-6 md:p-10 editorial-shadow card-lift">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={PROGRAM_CONTACT.portraitSrc}
              alt={PROGRAM_CONTACT.portraitAlt}
              width={250}
              height={250}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-primary/40 editorial-shadow"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.25em] text-secondary">
              Program Leadership
            </p>
            <h2
              id="founder-spotlight-heading"
              className="font-serif text-2xl md:text-3xl text-on-surface font-light"
            >
              {PROGRAM_CONTACT.founderName}
            </h2>
            <p className="text-primary text-sm uppercase tracking-widest">
              {PROGRAM_CONTACT.founderRole}
            </p>
            <p className="text-on-surface-variant text-sm">
              {PROGRAM_CONTACT.brokerage} · {PROGRAM_CONTACT.dre}
            </p>
            <p className="text-on-surface/85 font-light leading-relaxed italic">
              &ldquo;{PROGRAM_CONTACT.quote}&rdquo;
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
