import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { braveheartImageSrc } from '../../lib/braveheartAssets';
import {
  CTA_CONFIG,
  INTENT_COPY,
  SERVICE_CATEGORY_OPTIONS,
  STATUS_CATEGORY_OPTIONS,
  TRANSACTION_INTENT_OPTIONS,
  VERIFICATION_ENTRY_DISCLAIMER,
  VERIFICATION_ENTRY_FORM_NOTICE,
  VerificationEntryIntent,
} from '../../config/cta';

interface VerificationEntryModalProps {
  isOpen: boolean;
  intent: VerificationEntryIntent;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  statusCategory: string;
  transactionIntent: string;
  marketArea: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  serviceCategory: '',
  statusCategory: '',
  transactionIntent: '',
  marketArea: '',
  message: '',
};

export default function VerificationEntryModal({
  isOpen,
  intent,
  onClose,
}: VerificationEntryModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const copy = INTENT_COPY[intent];

  const resetAndClose = useCallback(() => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        resetAndClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, resetAndClose]);

  if (!isOpen) return null;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    'w-full bg-surface-container-low border border-outline-variant/30 rounded-sm px-4 py-3 text-on-surface text-sm font-light focus:outline-none focus:border-primary/50 transition-colors';

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={resetAndClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="bg-surface border border-outline-variant/20 p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          onClick={resetAndClose}
          aria-label="Close verification entry dialog"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            close
          </span>
        </button>

        <header className="mb-6 pr-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
            Brave Heart First Responders
          </p>
          <h2 id={titleId} className="font-serif text-2xl text-on-surface font-light">
            {copy.title}
          </h2>
          <p id={descriptionId} className="mt-3 text-on-surface/80 text-sm font-light leading-relaxed">
            {copy.description}
          </p>
        </header>

        {submitted ? (
          <div className="space-y-4" role="status">
            <p className="text-on-surface font-light leading-relaxed">
              Thank you. Your request has been recorded locally for this demo intake flow. A program
              team follow-up would occur after a live verification system is connected.
            </p>
            <p className="text-on-surface/70 text-sm font-light leading-relaxed">
              {VERIFICATION_ENTRY_DISCLAIMER}
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="w-full bg-primary text-on-primary py-4 px-6 rounded-sm uppercase text-xs tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="ve-name" className="block text-xs uppercase tracking-widest text-secondary mb-2">
                Full name <span className="text-primary">*</span>
              </label>
              <input
                id="ve-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="ve-email" className="block text-xs uppercase tracking-widest text-secondary mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="ve-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="ve-phone" className="block text-xs uppercase tracking-widest text-secondary mb-2">
                Phone <span className="text-on-surface-variant">(optional)</span>
              </label>
              <input
                id="ve-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="ve-service"
                className="block text-xs uppercase tracking-widest text-secondary mb-2"
              >
                Service category <span className="text-primary">*</span>
              </label>
              <select
                id="ve-service"
                name="serviceCategory"
                required
                value={form.serviceCategory}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="">Select a category</option>
                {SERVICE_CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="ve-status"
                className="block text-xs uppercase tracking-widest text-secondary mb-2"
              >
                Active / retired / status <span className="text-primary">*</span>
              </label>
              <select
                id="ve-status"
                name="statusCategory"
                required
                value={form.statusCategory}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="">Select status</option>
                {STATUS_CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="ve-transaction"
                className="block text-xs uppercase tracking-widest text-secondary mb-2"
              >
                Buying / selling / both <span className="text-primary">*</span>
              </label>
              <select
                id="ve-transaction"
                name="transactionIntent"
                required
                value={form.transactionIntent}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="">Select transaction intent</option>
                {TRANSACTION_INTENT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="ve-market"
                className="block text-xs uppercase tracking-widest text-secondary mb-2"
              >
                State or market area <span className="text-primary">*</span>
              </label>
              <input
                id="ve-market"
                name="marketArea"
                type="text"
                required
                placeholder="e.g., California — San Diego area"
                value={form.marketArea}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="ve-message" className="block text-xs uppercase tracking-widest text-secondary mb-2">
                Message <span className="text-on-surface-variant">(optional)</span>
              </label>
              <textarea
                id="ve-message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y min-h-[5rem]`}
              />
            </div>

            <aside
              className="border border-outline-variant/30 bg-surface-container-low/50 p-4 rounded-sm space-y-2"
              aria-label="Verification and eligibility disclaimer"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-secondary font-medium">
                Important
              </p>
              <p className="text-on-surface/80 text-xs font-light leading-relaxed">
                {VERIFICATION_ENTRY_DISCLAIMER}
              </p>
              <p className="text-on-surface/60 text-[11px] font-light leading-relaxed">
                {VERIFICATION_ENTRY_FORM_NOTICE}
              </p>
            </aside>

            {copy.showQr && (
              <figure className="border border-outline-variant/20 rounded-sm p-4 bg-surface-container-low/30">
                <img
                  src={braveheartImageSrc('braveheart-app-qr-code-signup.webp')}
                  alt="QR code and smartphone displaying the Braveheart HomeToHome app for eligibility verification."
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-w-xs mx-auto rounded-sm"
                />
                <figcaption className="mt-3 text-center text-on-surface/70 text-xs font-light leading-relaxed">
                  HomeToHome app entry — static placeholder.{' '}
                  {CTA_CONFIG.appUrl
                    ? 'Use the app when your verification provider link is live.'
                    : CTA_CONFIG.appUrlNote}
                </figcaption>
              </figure>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 px-6 rounded-sm uppercase text-xs tracking-widest font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              {copy.submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
