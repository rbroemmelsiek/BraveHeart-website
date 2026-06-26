import React, { useState } from 'react';
import {
  CONTACT_SECTION_ID,
  PROGRAM_CONTACT,
  contactEmailHref,
  contactSmsHref,
  contactTelHref,
} from '../../config/contact';
import { VERIFICATION_ENTRY_FORM_NOTICE } from '../../config/cta';
import FounderPortrait from './FounderPortrait';

interface InquiryForm {
  name: string;
  email: string;
  message: string;
}

const INITIAL: InquiryForm = { name: '', email: '', message: '' };

export default function ProgramContactSection() {
  const [form, setForm] = useState<InquiryForm>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    'w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm font-light focus:outline-none focus:border-primary/50 transition-colors';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={CONTACT_SECTION_ID}
      className="max-w-4xl mx-auto px-6 md:px-8 mt-16 scroll-mt-32 reveal"
      aria-labelledby="program-contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4 glass-panel rounded-xl p-8 editorial-shadow card-lift">
          <div className="text-center mb-8">
            <FounderPortrait size="contact" className="mx-auto mb-5" />
            <h2 className="font-serif text-2xl text-on-surface font-light">
              {PROGRAM_CONTACT.founderName}
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mt-2">
              {PROGRAM_CONTACT.brokerage}
            </p>
            <p className="text-on-surface-variant text-xs mt-1">{PROGRAM_CONTACT.dre}</p>
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href={contactSmsHref()}
                className="flex items-center gap-3 text-on-surface/85 hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  sms
                </span>
                <span className="font-light">Text the program team</span>
              </a>
            </li>
            <li>
              <a
                href={contactTelHref()}
                className="flex items-center gap-3 text-on-surface/85 hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  call
                </span>
                <span className="font-light">{PROGRAM_CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={contactEmailHref()}
                className="flex items-center gap-3 text-on-surface/85 hover:text-primary transition-colors group break-all"
              >
                <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">
                  mail
                </span>
                <span className="font-light">{PROGRAM_CONTACT.email}</span>
              </a>
            </li>
          </ul>
        </aside>

        <div className="lg:col-span-8 glass-panel rounded-xl p-8 md:p-10 editorial-shadow">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
            Contact the Program Team
          </p>
          <h2
            id="program-contact-heading"
            className="font-serif text-3xl md:text-4xl text-on-surface font-light mb-6"
          >
            Schedule a Program Consultation
          </h2>
          <p className="text-on-surface/80 font-light leading-relaxed mb-8">
            Ask about eligibility, service lines, or how Brave Heart benefits may apply in your
            market. Submitting this form does not guarantee program approval or specific savings.
          </p>

          {submitted ? (
            <div className="space-y-4" role="status">
              <p className="text-on-surface font-light leading-relaxed">
                Thank you. Your inquiry has been recorded locally for this demo intake flow. A
                program team follow-up would occur after live contact routing is connected.
              </p>
              <p className="text-on-surface/60 text-sm font-light">{VERIFICATION_ENTRY_FORM_NOTICE}</p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL);
                }}
                className="btn-primary text-on-primary px-8 py-4 rounded-lg uppercase text-xs tracking-widest font-medium"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-widest text-secondary mb-2"
                >
                  Full name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-widest text-secondary mb-2"
                >
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-widest text-secondary mb-2"
                >
                  How can we help? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Eligibility questions, market area, buying/selling timeline, etc."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className={`${fieldClass} resize-y min-h-[6rem]`}
                />
              </div>
              <button
                type="submit"
                className="btn-primary text-on-primary w-full md:w-auto px-12 py-4 rounded-lg uppercase text-xs tracking-widest font-medium"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
