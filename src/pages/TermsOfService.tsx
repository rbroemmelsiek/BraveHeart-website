import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
<span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">Legal Governance</span>
<h1 className="font-serif-elegant font-light text-6xl md:text-8xl text-on-surface leading-tight">
                    Terms of <br/>Service
                </h1>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative z-20">

<aside className="md:col-span-3 reveal active">
<div className="sticky top-32 space-y-8">
<div className="h-px bg-outline-variant/30 w-12"></div>

<div className="pt-8">
<p className="text-xs text-secondary font-light leading-relaxed">
                            Last Updated: <br/>
                            April 2, 2026
                        </p>
</div>
</div>
</aside>

<div className="md:col-span-8 md:col-start-5 space-y-24">

<section className="max-w-3xl reveal" id="acceptance">
<h2 className="font-serif-elegant text-4xl mb-8 text-primary italic">01. Acceptance of Terms</h2>
<div className="space-y-6 text-on-surface-variant font-light leading-loose">
<p>
                            Welcome to the digital exhibition of 1622 W. Oak St. By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. This platform is designed to provide a premium viewing experience of the residence and its surrounding environment.
                        </p>
</div>
</section>

<section className="glass-panel p-12 md:-mx-12 rounded-xl shadow-sm reveal" id="informational" style={{"transitionDelay":"100ms"}}>
<h2 className="font-serif-elegant text-4xl mb-8 text-primary">02. Informational Purposes</h2>
<div className="space-y-6 text-on-surface-variant font-light leading-loose">
<p className="text-lg text-on-surface">
                            This website serves exclusively as a digital brochure and informational portal for potential buyers, real estate professionals, and architectural enthusiasts.
                        </p>
<p>
                            All creative assets, including high-resolution imagery, video tours, and editorial descriptions, are intended to convey the aesthetic and lifestyle potential of the property. They do not constitute a binding legal offer or a contractual agreement for sale.
                        </p>
</div>
</section>

<section className="max-w-3xl reveal" id="verification" style={{"transitionDelay":"100ms"}}>
<h2 className="font-serif-elegant text-4xl mb-8 text-tertiary italic">03. Independent Verification</h2>
<div className="space-y-6 text-on-surface-variant font-light leading-loose">
<p>
                            While we strive for absolute precision in our digital presentation, architectural details, square footage, property boundaries, and neighborhood specifications are subject to change.
                        </p>
<div className="border-l border-tertiary-container pl-8 py-2 my-10 bg-tertiary-fixed/10">
<p className="text-on-surface font-medium italic">
                                "Prospective buyers are explicitly advised and required to independently verify all property data, including but not limited to dimensions, zoning, utility access, and school district boundaries."
                            </p>
</div>
<p>
                            1622 W. Oak St. Residential Exhibition and its representatives shall not be held liable for discrepancies between digital renderings and the physical residence.
                        </p>
</div>
</section>

<section className="max-w-3xl reveal" id="limitations" style={{"transitionDelay":"200ms"}}>
<h2 className="font-serif-elegant text-4xl mb-8 text-primary">04. Use of Imagery</h2>
<div className="space-y-6 text-on-surface-variant font-light leading-loose">
<p>
                            The editorial photography and curated content on this site are protected by intellectual property laws. Users may not reproduce, distribute, or modify any high-resolution assets without express written consent from the estate management.
                        </p>
</div>
</section>

<div className="pt-12 border-t border-outline-variant/20 reveal">
<p className="font-serif-elegant italic text-2xl text-secondary">A Legacy of Refined Living.</p>
</div>
</div>
</div>
</div>
</main>



<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 glass-panel shadow-[0_40px_40px_-15px_rgba(27,28,26,0.08)] flex items-center justify-center rounded-full text-primary hover:scale-105 transition-transform z-50 cursor-pointer">
<span className="material-symbols-outlined">arrow_upward</span>
</button>


    </div>
  );
}
