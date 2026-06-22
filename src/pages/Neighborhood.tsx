import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Neighborhood() {
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
      



<header className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:flex items-center">
<div className="lg:w-2/5 z-10 relative mb-8 sm:mb-12 lg:mb-0 reveal">
<p className="text-tertiary font-medium uppercase tracking-[0.2rem] text-[8px] sm:text-[10px] md:text-xs mb-2 sm:mb-3 md:mb-4">The Burbank Collection</p>
<h1 className="font-serif-delicate text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-on-surface leading-[0.9] mb-4 sm:mb-6 md:mb-8">Neighborhood and Lifestyle</h1>
<p className="text-secondary text-sm sm:text-base md:text-lg font-light max-w-md leading-relaxed">Discover the heartbeat of the Media Capital. An existence where historic charm meets the modern pulse of global entertainment.</p>
</div>
<div className="lg:w-3/5 relative reveal" style={{"transitionDelay":"200ms"}}>
<div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl card-lift">
<img alt="Sun-drenched wide street in a peaceful California neighborhood" className="w-full h-full object-cover" src="/Street_View.webp"/>
</div>
<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-12 hidden md:block glass-panel p-4 sm:p-6 md:p-8 shadow-lg max-w-xs reveal" style={{"transitionDelay":"500ms", "backgroundColor": "rgba(255, 255, 255, 0.65)"}}>
<p className="font-serif-delicate italic text-base sm:text-lg md:text-xl text-primary mb-1 sm:mb-2">"A walkable district unlike any other in Los Angeles."</p>
<p className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-outline">The Resident Journal</p>
</div>
</div>
</div>
</header>

<section className="py-16 sm:py-20 md:py-24 bg-surface-container-low">
<div className="max-w-screen-xl mx-auto px-4 sm:px-8">
<div className="flex flex-col md:flex-row gap-10 sm:gap-16 items-start">
<div className="md:w-1/3 sticky top-24 sm:top-32 reveal">
<h2 className="font-serif-delicate text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6">Shopping, Dining, and Recreation</h2>
<p className="text-on-surface-variant leading-relaxed font-light mb-4 sm:mb-6 md:mb-8 text-[13px] sm:text-[15px] md:text-base">Burbank's distinct districts offer a tapestry of artisanal coffee shops, vintage boutiques, and world-class culinary destinations just moments from your door.</p>
<div className="space-y-4 sm:space-y-6 md:space-y-8">
<div className="p-4 sm:p-5 md:p-6 glass-card-lifestyle card-lift rounded-lg">
<span className="text-tertiary text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest block mb-1">Local Landmark</span>
<h4 className="font-medium text-sm sm:text-base md:text-lg">Magnolia Park</h4>
<p className="text-[11px] sm:text-[13px] md:text-sm text-secondary font-light">The quintessential walkable district, famous for retro vibes and indie creators.</p>
</div>
<div className="p-4 sm:p-5 md:p-6 glass-card-lifestyle card-lift rounded-lg">
<span className="text-tertiary text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest block mb-1">Culinary Icon</span>
<h4 className="font-medium text-sm sm:text-base md:text-lg">Porto's Bakery</h4>
<p className="text-[11px] sm:text-[13px] md:text-sm text-secondary font-light">An institution of taste, renowned for world-famous pastries and vibrant atmosphere.</p>
</div>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
<div className="space-y-2 sm:space-y-3 md:space-y-4 pt-6 sm:pt-8 md:pt-12 reveal" style={{"transitionDelay":"200ms"}}>
<div className="aspect-[4/5] overflow-hidden card-lift rounded-sm cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Modern upscale cafe interior" className="w-full h-full object-cover grayscale lg:hover:grayscale-0 group-[.touch-active]:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnX0TK-qQlYnPNo0YwC7gqTVcMM5LnlL2AICUb2syjYtLJa4tbo4M3tENXvCYIIcd60UK52e6pCUUb7LBbbwZbpOQlQ2dABjA49hITfIk3YMVc9iJlev0-9vmB7UjmU721Z5LfmY8XYyEbQAzwj52XUiLRtpP2bM4b_3EANiIjzf5wMgFG57qEiYN-GfscWesOr3G1EpzL892mQFmkQswh6K3wbYXZGLd5mzSEBNXGefa4meC_jJJSSIyr01unxfVEvbqGpubC3i3O"/>
</div>
<figcaption className="font-serif-delicate italic text-sm sm:text-base md:text-lg text-on-surface">Artisanal mornings at Magnolia</figcaption>
</div>
<div className="space-y-2 sm:space-y-3 md:space-y-4 reveal" style={{"transitionDelay":"400ms"}}>
<div className="aspect-[4/5] overflow-hidden card-lift rounded-sm cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Gourmet pastries and coffee" className="w-full h-full object-cover grayscale lg:hover:grayscale-0 group-[.touch-active]:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzWKLm6A35ToSK557QqHEPP1iNAuDdouGhRUabIjYJPNQpoqSjaUdUGOrcT6vktVt7FHwGGrZhOzuLhdi6Scm3diPvCWibBnYK43VnaRNuKLThZsgbZ_J8KAYq3rFUMj1pfuTerx-pfMwgkPzBhhKGNPn1cXbiM9NY7AZ4tdVKJoOlMxfnTdndrMHsx0povxj5ULkyw8JhVGFimWlZu1_GijPpPA-7Y491ZVOM8XkDh6n0B9G4Wzt5Pls1u5I9_iPCx5TLXhIgTYsK"/>
</div>
<figcaption className="font-serif-delicate italic text-sm sm:text-base md:text-lg text-on-surface">The legendary Porto's experience</figcaption>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 md:py-32 overflow-hidden bg-surface">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
<div className="relative grid grid-cols-12 gap-8 items-center">
<div className="col-span-12 lg:col-span-7 image-bleed-left order-2 lg:order-1 reveal">
<div className="aspect-video relative card-lift overflow-hidden">
<img alt="Modern media campus" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbd7Zi-TWzY2bEpecZ_ARqP1lH6R041BxTSwWZ2OXc0Pyti_hyVbBX07NtykCKKHTMOFHf8Xqudbq9aNEhEtqVinG_ggF-rC2EQ0Kh_4oYCTQ57XoiOY0hG7MlLbH1r-9w3LGDJTnWrdepKu6Jn6rEz9Uh244ZEnq6B_harQdG2KtOIRMVcE3uqU1dwjPCes_ivay8Y7kGGzyyloMCUSgeVvvao8Iz86mkvM2_lOttFAbHInQbTR_9AohsC-4LrORCf6dIYtwW--1T"/>
<div className="absolute inset-0 bg-primary/5"></div>
</div>
</div>
<div className="col-span-12 lg:col-span-5 lg:pl-16 order-1 lg:order-2 mb-8 sm:mb-12 lg:mb-0 reveal" style={{"transitionDelay":"200ms"}}>
<h2 className="font-serif-delicate text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight">Economic Drivers: The Media District</h2>
<p className="text-on-surface-variant font-light text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">Positioned at the epicenter of global entertainment, 1622 W. Oak St. offers unparalleled proximity to the world's leading creative studios. This is where innovation lives.</p>
<ul className="space-y-3 sm:space-y-4 md:space-y-6">
<li className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 md:p-4 glass-card-lifestyle rounded-lg transition-all duration-500 hover:bg-white/60">
<span className="material-symbols-outlined text-primary mt-1 text-xl sm:text-2xl">movie</span>
<div>
<h5 className="font-semibold text-on-surface text-xs sm:text-sm md:text-base">The Walt Disney Studios</h5>
<p className="text-[10px] sm:text-xs md:text-sm text-secondary">A global landmark of storytelling just minutes away.</p>
</div>
</li>
<li className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 md:p-4 glass-card-lifestyle rounded-lg transition-all duration-500 hover:bg-white/60">
<span className="material-symbols-outlined text-primary mt-1 text-xl sm:text-2xl">video_library</span>
<div>
<h5 className="font-semibold text-on-surface text-xs sm:text-sm md:text-base">Warner Bros. Discovery</h5>
<p className="text-[10px] sm:text-xs md:text-sm text-secondary">A powerhouse of media production and industrial heritage.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 md:py-24 bg-surface-container-low">
<div className="max-w-4xl mx-auto px-4 sm:px-8">
<div className="text-center mb-8 sm:mb-12 md:mb-16 reveal">
<span className="text-tertiary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.3rem]">Commuter Intelligence</span>
<h3 className="font-serif-delicate text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4">Nearby Work Centers</h3>
</div>
<div className="overflow-x-auto reveal" style={{"transitionDelay":"200ms"}}>
<div className="glass-panel p-4 sm:p-6 md:p-8 rounded-lg min-w-[600px]">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30">
<th className="py-3 sm:py-4 md:py-6 font-medium text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-outline">Destination</th>
<th className="py-3 sm:py-4 md:py-6 font-medium text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-outline">Travel Time</th>
<th className="py-3 sm:py-4 md:py-6 font-medium text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-outline">Industry</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="hover:bg-white/40 transition-colors group">
<td className="py-3 sm:py-4 md:py-8 font-medium group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">Disney Corporate Campus</td>
<td className="py-3 sm:py-4 md:py-8 font-light text-xs sm:text-sm md:text-base">6 Mins</td>
<td className="py-3 sm:py-4 md:py-8 text-secondary italic text-xs sm:text-sm md:text-base">Entertainment</td>
</tr>
<tr className="hover:bg-white/40 transition-colors group">
<td className="py-3 sm:py-4 md:py-8 font-medium group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">Warner Bros. Studios</td>
<td className="py-3 sm:py-4 md:py-8 font-light text-xs sm:text-sm md:text-base">8 Mins</td>
<td className="py-3 sm:py-4 md:py-8 text-secondary italic text-xs sm:text-sm md:text-base">Production</td>
</tr>
<tr className="hover:bg-white/40 transition-colors group">
<td className="py-3 sm:py-4 md:py-8 font-medium group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">Providence St. Joseph Medical Center</td>
<td className="py-3 sm:py-4 md:py-8 font-light text-xs sm:text-sm md:text-base">5 Mins</td>
<td className="py-3 sm:py-4 md:py-8 text-secondary italic text-xs sm:text-sm md:text-base">Healthcare</td>
</tr>
<tr className="hover:bg-white/40 transition-colors group">
<td className="py-3 sm:py-4 md:py-8 font-medium group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">Nickelodeon Animation</td>
<td className="py-3 sm:py-4 md:py-8 font-light text-xs sm:text-sm md:text-base">10 Mins</td>
<td className="py-3 sm:py-4 md:py-8 text-secondary italic text-xs sm:text-sm md:text-base">Animation</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
<div className="md:col-span-4 order-2 md:order-1 reveal">
<div className="aspect-[3/4] overflow-hidden rounded-sm card-lift">
<img alt="Sunny morning at a farmer's market" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsSPt-3SPkJfcCxJbwuI6pwbVEYUMzgljZrj13jX4HgWa9SuNJVTo4MNBgQLSovnS-ZVjqortr4M5R9AdDZc0ZPGmtWOVaz6rkohgJw_tXibRlt8YPxEhnqMiB0dgSilJcQleL3FIXBcd-KnGZTaV4MZldnMKqfheQOtteMtgvUvbFO6B6VhjkSB2-AdzUBZVgamaxrGfLWX5dTI0kHR_HhqzpGcpg2IGUnQWwEWzmkeTNg74BYNKd2dDmcJx-XgmQVYlExsVbVne"/>
</div>
</div>
<div className="md:col-span-8 order-1 md:order-2">
<div className="max-w-2xl ml-auto">
<h2 className="font-serif-delicate text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 md:mb-12 leading-none reveal">Walkable District, <br/><span className="italic text-primary">Infinite Discovery</span></h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 reveal" style={{"transitionDelay":"300ms"}}>
<div className="p-4 sm:p-6 md:p-8 glass-panel rounded-lg card-lift">
<p className="text-on-surface-variant leading-relaxed font-light text-xs sm:text-sm md:text-base">The Oak Street lifestyle is defined by the luxury of choice. Whether it's a brisk walk to the neighborhood park for a morning jog or an evening of shopping in Magnolia Park, the city unfolds at your pace.</p>
</div>
<div className="p-4 sm:p-6 md:p-8 glass-panel rounded-lg card-lift">
<p className="text-on-surface-variant leading-relaxed font-light text-xs sm:text-sm md:text-base">This is a community where the "Economic Drivers" of the world's biggest studios blend seamlessly with the quiet, residential serenity of tree-lined avenues and boutique charm.</p>
</div>
</div>
</div>
</div>
</div>
</section>




    </div>
  );
}
