import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const address = "1622 W. Oak St., Burbank";
  const message = `Hi, I'm interested in ${address}`;
  const encodedMessage = encodeURIComponent(message);
  
  const emailHref = `mailto:karen@vannessandassociates.com?subject=Inquiry: ${address}&body=${encodedMessage}`;
  const callHref = `tel:+18586996409`;
  const smsHref = `sms:+18586996409?body=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-surface p-8 max-w-sm w-full rounded-sm shadow-2xl relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <h3 className="font-headline text-2xl mb-6 text-center text-on-surface">Contact Us</h3>
        <div className="flex flex-col gap-4">
          <a href={emailHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-6 uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">mail</span>
            Email
          </a>
          <a href={callHref} className="flex items-center justify-center gap-3 bg-surface-container-high text-on-surface py-4 px-6 uppercase text-xs tracking-widest hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            Call
          </a>
          <a href={smsHref} className="flex items-center justify-center gap-3 bg-surface-container-high text-on-surface py-4 px-6 uppercase text-xs tracking-widest hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">sms</span>
            Text (SMS)
          </a>
        </div>
      </div>
    </div>
  );
}
