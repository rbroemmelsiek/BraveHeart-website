import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TheResidence() {
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
      


<main className="pt-32">

<section className="relative px-4 sm:px-8 md:px-24 mb-16 sm:mb-24 md:mb-32">
<div className="max-w-screen-2xl mx-auto grid grid-cols-12 gap-6 items-end">
<div className="col-span-12 md:col-span-5 mb-8 sm:mb-12 md:mb-0 z-10 reveal active">
<p className="font-label text-tertiary uppercase tracking-[0.2rem] text-[10px] sm:text-xs mb-3 sm:mb-4 md:mb-6" >Unveiling Artistry</p>
<h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] text-on-surface mb-6 sm:mb-8" >The <br /><span className="serif-italic" >Residence</span></h1>
<p className="font-body text-sm sm:text-base md:text-lg text-secondary max-w-md leading-relaxed" >
                        A masterclass in modern restoration. Where historical integrity meets the precision of contemporary design. 1622 W. Oak St. is redefined through the lens of functional luxury.
                    </p>
</div>
<div className="col-span-12 md:col-span-8 md:col-start-5 relative reveal active" style={{"transitionDelay":"200ms"}}>
<img className="w-full h-auto object-contain grayscale-[20%] contrast-[1.05]" data-alt="high-resolution view of the spacious entry and living room featuring arched transitions and hardwood floors" src="/DR_Sliders_to_Patio.webp" />
<div className="absolute -bottom-6 -left-4 sm:-bottom-12 sm:-left-12 hidden md:block w-48 sm:w-64 h-auto sm:h-80 glass-panel p-4 sm:p-8 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.55)' }}>
<span className="material-symbols-outlined text-tertiary mb-2 sm:mb-4 text-3xl sm:text-[40px]">architecture</span>
<h3 className="font-headline text-lg sm:text-2xl mb-1 sm:mb-2 text-black" >Curated Detail</h3>
<p className="font-body text-[8px] sm:text-xs text-black leading-loose tracking-wide" >Every surface was reconsidered. Every system optimized for the modern inhabitant.</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-24">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-10 sm:mb-16 md:mb-20 gap-4 sm:gap-8 reveal active">
<h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-on-surface" >Highlights of the Home</h2>
<div className="h-px bg-outline-variant/30 flex-grow mx-8 hidden md:block"></div>
<p className="font-label text-secondary uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs" >Refined &amp; Polished</p>
</div>

<div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 md:mb-20 reveal active">
<blockquote className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-on-surface leading-tight" >
                        “The owners spared no expense creating a home that feels polished, functional, and ready for entertaining.”
                    </blockquote>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">

<div className="md:col-span-7 space-y-6 sm:space-y-8 reveal active">
<div className="relative overflow-hidden group cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img className="w-full h-auto object-contain" data-alt="luxury designer kitchen with a professional grade range and custom backsplash" src="/Kitchen_DR.webp" />
<div className="absolute inset-0 bg-primary/10 lg:group-hover:bg-primary/0 group-[.touch-active]:bg-primary/0 transition-colors duration-500"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
<div>
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 italic" >Culinary Precision</h3>
<p className="text-secondary leading-relaxed text-[10px] sm:text-xs md:text-sm" >A highlight of the extensive restoration, the kitchen serves as the social heart of the residence.</p>
</div>
<div className="relative overflow-hidden">
<img className="w-full h-auto object-contain" data-alt="kitchen awning window opening to a quartzite patio bar" src="/Kitchen_Awning_Window_Open.webp"  />
</div>
</div>
</div>

<div className="md:col-span-5 glass-panel p-6 sm:p-8 md:p-10 shadow-sm reveal active" style={{"transitionDelay":"200ms"}}>
<h3 className="font-label uppercase tracking-[0.2rem] text-[8px] sm:text-[10px] md:text-xs text-tertiary mb-4 sm:mb-6 md:mb-10" >Property Specifications</h3>
<ul className="space-y-4 sm:space-y-6 md:space-y-8">
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Substantial renovation investment reported in MLS marketing materials.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Private front garden entry and elegant transition details including archways and hardwood flooring.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Upgraded split-zone HVAC system with a second unit.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Luxury kitchen with 7-burner executive range, white cabinetry, designer lighting and backsplash, and an awning window opening to a quartzite patio bar.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Primary bath steam shower and extensively updated baths with smart water closets, cabinetry, tile surrounds, plumbing, and flooring.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >EV charging, custom closet cabinetry, updated plumbing under the home, electrical improvements, and refreshed landscaping.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >Backyard entertaining amenities including a heated pool and spa, covered patio, built-in bar, and dog run.</p>
</li>
<li className="flex gap-3 sm:gap-4" >
<span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-tertiary rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
<p className="text-on-surface text-xs sm:text-sm leading-relaxed" >ADU configuration adds flexibility for guests, extended family, office use, or income-oriented buyers.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-24 bg-surface overflow-hidden">
<div className="max-w-screen-2xl mx-auto relative">
<div className="grid grid-cols-12 gap-8 items-center">
<div className="col-span-12 md:col-span-6 order-2 md:order-1 reveal active">
<div className="relative">
<img className="w-full h-auto object-contain" data-alt="primary bathroom suite featuring a double vanity and luxury soaking tub" src="/Bath Primary_Vanity_Tub_Shower.webp"  />
<div className="absolute -top-4 right-0 sm:-top-10 sm:-right-10 md:-right-20 w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 glass-panel flex items-center justify-center p-2 sm:p-6 md:p-8 bg-tertiary-fixed/40">
<p className="font-headline text-on-tertiary-fixed text-center leading-tight text-[10px] sm:text-sm md:text-base" >The Steam <br />Sanctuary</p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2 mb-10 sm:mb-16 md:mb-0 reveal active" style={{"transitionDelay":"200ms"}}>
<h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight" >Restoration of the <span className="serif-italic" >Self.</span></h2>
<p className="text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed pr-4 sm:pr-0" >
                            The primary bath is a testament to the home’s "polished and functional" narrative. A fully integrated steam shower provides a daily spa experience, complemented by elegant fixtures and marble finishes.
                        </p>
<div className="space-y-6 sm:space-y-8 md:space-y-12">
<div className="flex gap-3 sm:gap-4 md:gap-6">
<span className="font-headline text-2xl sm:text-3xl md:text-4xl text-primary/40" >01</span>
<div>
<h4 className="font-label uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs mb-1 sm:mb-2" >Technological Wellness</h4>
<p className="text-secondary text-[10px] sm:text-xs md:text-sm" >Digital temperature control for the steam cycle and ambient lighting.</p>
</div>
</div>
<div className="flex gap-3 sm:gap-4 md:gap-6">
<span className="font-headline text-2xl sm:text-3xl md:text-4xl text-primary/40" >02</span>
<div>
<h4 className="font-label uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs mb-1 sm:mb-2" >ELEGENT Foundations</h4>
<p className="text-secondary text-[10px] sm:text-xs md:text-sm" >Marbled surfaces throughout</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-16 sm:py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-start">
<div className="space-y-10 sm:space-y-16 md:space-y-24">
<div className="group reveal active cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="overflow-hidden mb-4 sm:mb-6 md:mb-8">
<img className="w-full aspect-video object-cover transition-transform duration-700 lg:group-hover:scale-105 group-[.touch-active]:scale-105" data-alt="luxury outdoor heated pool and spa at dusk" src="/ADU_Pool_House_Hedge.webp"/>
</div>
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4 italic" >Heated Pool &amp; Spa</h3>
<p className="text-secondary leading-loose text-xs sm:text-sm md:text-base" >Year-round leisure. The pool and integrated spa are temperature-controlled via a high-efficiency heating system, surrounded by non-slip pavers.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 reveal active" style={{"transitionDelay":"200ms"}}>
<div className="glass-panel p-4 sm:p-6 md:p-8 flex flex-col justify-between aspect-[2/1] sm:aspect-square">
<span className="material-symbols-outlined text-tertiary text-2xl sm:text-[32px]">CONNECTED</span>
<div>
<h4 className="font-label uppercase tracking-widest text-[8px] sm:text-[10px] mb-1 sm:mb-2" >HOME OFFICE</h4>
<p className="font-body text-[10px] sm:text-xs md:text-sm font-medium" >Designed for the modern professional.</p>
</div>
</div>
<div className="relative overflow-hidden">
<img className="w-full h-auto object-contain" data-alt="flex space or office with professional setup including a treadmill desk" src="/Bdrm_2_Office_Door.webp" />
</div>
</div>
</div>
<div className="mt-12 sm:mt-24 md:mt-32">
<div className="mb-8 sm:mb-10 md:mb-12 reveal active">
<p className="font-label text-tertiary uppercase tracking-[0.2rem] text-[8px] sm:text-[10px] md:text-xs mb-2 sm:mb-3 md:mb-4" >permitted Secondary Dwelling</p>
<h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-8" >The Garden <span className="serif-italic" >ADU</span></h2>
<p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8" >
                                A fully independent Accessory Dwelling Unit sits at the rear of the property. Perfect for guests, a creative studio, or a professional home office, it mirrors the main house's architectural finish.
                            </p>
<div className="mb-4 sm:mb-6 md:mb-8 relative overflow-hidden">
<img className="w-full h-auto object-contain" data-alt="bedroom within the garden ADU showing seamless indoor-outdoor living" src="/ADU_Patio.webp"
 />
</div>
<ul className="space-y-3 sm:space-y-4 md:space-y-6">
<li className="border-b border-outline-variant/20 pb-2 sm:pb-3 md:pb-4 flex justify-between" >
<span className="text-[10px] sm:text-xs md:text-sm font-light italic" >Full Kitchenette</span>
<span className="material-symbols-outlined text-[8px] sm:text-[10px] md:text-xs" >check</span>
</li>
<li className="border-b border-outline-variant/20 pb-2 sm:pb-3 md:pb-4 flex justify-between" >
<span className="text-[10px] sm:text-xs md:text-sm font-light italic" >Dedicated Climate Zone</span>
<span className="material-symbols-outlined text-[8px] sm:text-[10px] md:text-xs" >check</span>
</li>
<li className="border-b border-outline-variant/20 pb-2 sm:pb-3 md:pb-4 flex justify-between" >
<span className="text-[10px] sm:text-xs md:text-sm font-light italic" >Private Street Entrance</span>
<span className="material-symbols-outlined text-[8px] sm:text-[10px] md:text-xs" >check</span>
</li>
</ul>
</div>
<div className="glass-panel p-6 sm:p-8 md:p-12 shadow-[0_40px_40px_-15px_rgba(27,28,26,0.04)] reveal active" style={{"transitionDelay":"300ms"}}>
<h4 className="font-headline text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 italic text-center" >Inquiry for Residence</h4>
<div className="space-y-3 sm:space-y-4 md:space-y-6">
<div className="relative">
<label className="font-label text-[8px] sm:text-[10px] uppercase text-secondary mb-1 block" >Full Name</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant py-1 sm:py-2 focus:ring-0 focus:border-primary transition-all text-[10px] sm:text-xs md:text-sm" type="text" />
</div>
<div className="relative">
<label className="font-label text-[8px] sm:text-[10px] uppercase text-secondary mb-1 block" >Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant py-1 sm:py-2 focus:ring-0 focus:border-primary transition-all text-[10px] sm:text-xs md:text-sm" type="email" />
</div>
<button className="w-full bg-primary text-on-primary py-2 sm:py-3 md:py-4 rounded-sm font-label uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs mt-2 sm:mt-4 btn-transition shadow-lg shadow-primary/20" >Request Specs</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>




    </div>
  );
}
