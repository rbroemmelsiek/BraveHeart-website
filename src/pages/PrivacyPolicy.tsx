import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';

export default function PrivacyPolicy() {
  const { openModal } = useContactModal();

  useEffect(() => {
    // Re-trigger reveal animations
    const elements = document.querySelectorAll('.reveal') as NodeListOf<HTMLElement>;
    elements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = ''; 
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      


<main className="pt-48 pb-24">
<div className="max-w-screen-2xl mx-auto px-8">

<div className="flex flex-col items-center mb-24 text-center">
<div className="w-full reveal active">
<span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">Legal Framework</span>
<h1 className="font-serif-elegant font-light text-6xl md:text-8xl text-on-surface leading-tight">
                    Privacy Policy
                </h1>
</div>
</div>
</div>

<section className="max-w-4xl mx-auto px-8 mt-24 space-y-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-12 reveal active">
<div className="md:col-span-1">
<h2 className="text-3xl font-serif text-primary italic" >01. Data Integrity</h2>
</div>
<div className="md:col-span-2 space-y-6">
<p className="text-on-surface font-light leading-relaxed" >
                    Your data is handled with the same exclusivity as a private exhibition. We collect personal identifiers—specifically names, email addresses, and phone numbers—solely when voluntarily submitted via our inquiry or tour scheduling forms.
                </p>
<p className="text-on-surface font-light leading-relaxed" >
                    This information is utilized exclusively for facilitating private tours, property inquiries, and transaction-related communications specific to the 1622 W. Oak St. listing.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-12 reveal active">
<div className="md:col-span-1">
<h2 className="text-3xl font-serif text-primary italic" >02. Curated Access</h2>
</div>
<div className="md:col-span-2 space-y-6">
<p className="text-on-surface font-light leading-relaxed" >
                    Access to your personal information is restricted to authorized agents representing 1622 W. Oak St. We do not sell, rent, or distribute your identity to third-party marketing firms or external real estate aggregators.
                </p>
<div className="glass-panel p-8 rounded-lg editorial-shadow">
<p className="font-label text-xs tracking-widest uppercase text-tertiary mb-2" >Our Promise</p>
<p className="italic font-serif text-lg text-secondary" >
                        "Your inquiry is a private dialogue. We ensure it remains within the walls of this estate's digital ecosystem."
                    </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-12 reveal active">
<div className="md:col-span-1">
<h2 className="text-3xl font-serif text-primary italic" >03. Digital Footprints</h2>
</div>
<div className="md:col-span-2 space-y-6">
<p className="text-on-surface font-light leading-relaxed" >
                    We may utilize cookies and diagnostic tools to enhance the visual performance of this residential exhibition. This non-identifiable data helps us understand gallery traffic and improve the digital viewing experience. 
                </p>
<p className="text-on-surface font-light leading-relaxed" ><br /></p>
</div>
</div>
</section>

<section className="mt-32 px-8 reveal active">
<div className="max-w-screen-xl mx-auto bg-primary-container p-2 md:p-16 rounded-xl relative overflow-hidden flex flex-col items-center text-center glass-panel">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-container-lowest to-transparent"></div>
<span className="hidden md:block material-symbols-outlined text-on-primary-container text-4xl mb-6" data-icon="verified_user" >verified_user</span>
<h3 className="hidden md:block text-4xl md:text-5xl font-serif text-on-primary-container mb-6 italic" >Secure Inquiry</h3>
<p className="hidden md:block text-on-primary-container/80 max-w-lg mb-10 font-light tracking-wide" >
                Ready to experience the residence in person? Your data remains protected throughout the entire scheduling process.
            </p>
<button onClick={openModal} className="relative z-10 bg-surface-container-lowest text-primary w-full md:w-auto px-10 py-4 font-label text-xs tracking-[0.2rem] uppercase font-semibold transition-all hover:bg-on-primary-container hover:text-primary btn-transition" >
                Schedule Your Tour
            </button>
</div>
</section>
</main>
<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 glass-panel shadow-[0_40px_40px_-15px_rgba(27,28,26,0.08)] flex items-center justify-center rounded-full text-primary hover:scale-105 transition-transform z-50 cursor-pointer">
<span className="material-symbols-outlined">arrow_upward</span>
</button>
    </div>
  );
}
