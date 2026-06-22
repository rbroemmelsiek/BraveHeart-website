import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Schools() {
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
      

<main className="pt-32 sm:pt-40 pb-16 sm:pb-24">
<section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-24 relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-end">
<div className="md:col-span-5 relative z-10 -mb-6 sm:-mb-8 md:-mb-12 reveal">
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2rem] mb-2 sm:mb-3 md:mb-4 font-medium" >Educational Excellence</span>
<h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-on-surface leading-tight mb-4 sm:mb-6 md:mb-8" >Academic<br />Foundation.</h1>
<p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed max-w-md" >
                        Situated in a district known for its commitment to student success, 1622 W. Oak St. offers proximity to some of the area's most distinguished public and private educational institutions.
                    </p>
</div>
<div className="md:col-span-7 reveal cursor-pointer" style={{"transitionDelay":"200ms"}} onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="aspect-[16/10] overflow-hidden bg-surface-container editorial-shadow">
<img className="w-full h-full object-cover grayscale-[20%] lg:hover:scale-105 group-[.touch-active]:scale-105 transition-transform duration-1000" data-alt="Modern minimalist architectural view of a university campus library at sunset with large glass windows and warm interior lighting" src="/School.webp" />
</div>
</div>
</div>
</section>
<section className="bg-surface-container-low py-16 sm:py-20 md:py-24">
<div className="max-w-4xl mx-auto px-4 sm:px-8">
<div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 reveal">
<span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-3 md:mb-4" data-icon="school" >school</span>
<h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 md:mb-6" >School References</h2>
<div className="w-12 h-px bg-outline-variant"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-12">
<div className="p-4 sm:p-6 md:p-8 glass-panel rounded-sm shadow-sm flex flex-col items-center text-center reveal" style={{"transitionDelay":"100ms"}}>
<span className="text-tertiary font-headline text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4" >0.4</span>
<span className="text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1 sm:mb-2" >Miles</span>
<p className="font-medium text-on-surface text-xs sm:text-sm md:text-base" >William McKinley Elementary</p>
</div>
<div className="p-4 sm:p-6 md:p-8 glass-panel rounded-sm shadow-sm flex flex-col items-center text-center reveal" style={{"transitionDelay":"200ms"}}>
<span className="text-tertiary font-headline text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4" >0.8</span>
<span className="text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1 sm:mb-2" >Miles</span>
<p className="font-medium text-on-surface text-xs sm:text-sm md:text-base" >Dolores Huerta Middle</p>
</div>
<div className="p-4 sm:p-6 md:p-8 glass-panel rounded-sm shadow-sm flex flex-col items-center text-center reveal" style={{"transitionDelay":"300ms"}}>
<span className="text-tertiary font-headline text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4" >1.2</span>
<span className="text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1 sm:mb-2" >Miles</span>
<p className="font-medium text-on-surface text-xs sm:text-sm md:text-base" >John Burroughs High</p>
</div>
</div>
</div>
</section>
<section className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 sm:py-20 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 md:gap-20">
<div className="lg:col-span-4 reveal">
<h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 sm:mb-6 md:mb-8" >Public Schools</h2>
<p className="text-on-surface-variant mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base" >
                        The property is centrally located within the Burbank Unified School District (BUSD), providing access to award-winning campuses and diverse academic programs.
                    </p>
<div className="p-4 sm:p-5 md:p-6 glass-panel border-l-2 border-primary">
<div className="flex gap-3 sm:gap-4">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl" data-icon="info" >info</span>
<div>
<span className="block text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold text-on-primary-fixed-variant mb-1 sm:mb-2" >Important Notice</span>
<p className="text-[10px] sm:text-xs md:text-sm text-on-primary-fixed-variant leading-relaxed" >
                                    School boundary maps are subject to change. Potential residents MUST confirm specific school paths and enrollment availability directly with the <span className="font-semibold" >Burbank Unified School District (BUSD)</span>.
                                </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8 reveal" style={{"transitionDelay":"200ms"}}>
<div className="overflow-x-auto">
<table className="w-full text-left min-w-[500px]">
<thead>
<tr className="border-b border-outline-variant">
<th className="py-2 sm:py-3 md:py-4 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15rem] font-semibold text-secondary" >School Name</th>
<th className="py-2 sm:py-3 md:py-4 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15rem] font-semibold text-secondary text-right" >Distance</th>
<th className="py-2 sm:py-3 md:py-4 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15rem] font-semibold text-secondary text-right" >Type</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest">
<tr>
<td className="py-4 sm:py-6 md:py-8" >
<div className="font-headline text-lg sm:text-xl md:text-2xl text-on-surface mb-1" >William McKinley Elementary</div>
<div className="text-[8px] sm:text-[10px] md:text-xs text-secondary font-medium tracking-wide" >Primary Education</div>
</td>
<td className="py-4 sm:py-6 md:py-8 text-right font-body text-on-surface text-xs sm:text-sm md:text-base" >0.4 Miles</td>
<td className="py-4 sm:py-6 md:py-8 text-right" >
<span className="px-2 sm:px-3 py-1 bg-surface-container-highest text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-full" >Public</span>
</td>
</tr>
<tr>
<td className="py-4 sm:py-6 md:py-8" >
<div className="font-headline text-lg sm:text-xl md:text-2xl text-on-surface mb-1" >Dolores Huerta Middle</div>
<div className="text-[8px] sm:text-[10px] md:text-xs text-secondary font-medium tracking-wide" >Secondary Education</div>
</td>
<td className="py-4 sm:py-6 md:py-8 text-right font-body text-on-surface text-xs sm:text-sm md:text-base" >0.8 Miles</td>
<td className="py-4 sm:py-6 md:py-8 text-right" >
<span className="px-2 sm:px-3 py-1 bg-surface-container-highest text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-full" >Public</span>
</td>
</tr>
<tr>
<td className="py-4 sm:py-6 md:py-8" >
<div className="font-headline text-lg sm:text-xl md:text-2xl text-on-surface mb-1" >John Burroughs High</div>
<div className="text-[8px] sm:text-[10px] md:text-xs text-secondary font-medium tracking-wide" >High School</div>
</td>
<td className="py-4 sm:py-6 md:py-8 text-right font-body text-on-surface text-xs sm:text-sm md:text-base" >1.2 Miles</td>
<td className="py-4 sm:py-6 md:py-8 text-right" >
<span className="px-2 sm:px-3 py-1 bg-surface-container-highest text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-full" >Public</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
<section className="bg-surface-dim/20 py-16 sm:py-20 md:py-32">
<div className="max-w-screen-xl mx-auto px-4 sm:px-8">
<div className="flex flex-col md:flex-row justify-between items-baseline gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 reveal">
<h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-light" >Private School Options</h2>
<p className="text-secondary max-w-sm font-light text-[10px] sm:text-xs md:text-sm italic" >
                        Highly-regarded independent institutions within a short commute from the Oak Street residence.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/30 reveal active">
<div className="bg-surface p-6 sm:p-8 md:p-12 lg:hover:bg-surface-container-lowest group-[.touch-active]:bg-surface-container-lowest transition-all duration-500 group cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:group-hover:text-primary group-[.touch-active]:text-primary transition-colors mb-1 sm:mb-2 md:mb-0" >St. Finbar School</h3>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-secondary font-medium sm:mt-2" >K-8 Education</span>
</div>
<p className="text-on-surface-variant leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" >
                            Offering a robust curriculum with a focus on community and traditional values, located just minutes from the neighborhood.
                        </p>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-xs sm:text-sm" data-icon="location_on" >location_on</span>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold" >Proximity Note: 0.9 Miles away</span>
</div>
</div>
<div className="bg-surface p-6 sm:p-8 md:p-12 lg:hover:bg-surface-container-lowest group-[.touch-active]:bg-surface-container-lowest transition-all duration-500 group cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:group-hover:text-primary group-[.touch-active]:text-primary transition-colors mb-1 sm:mb-2 md:mb-0" >Providence High School</h3>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-secondary font-medium sm:mt-2" >9-12 Education</span>
</div>
<p className="text-on-surface-variant leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" >
                            A premier college-preparatory institution recognized for its health, media, and technology focus programs.
                        </p>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-xs sm:text-sm" data-icon="location_on" >location_on</span>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold" >Proximity Note: 1.5 Miles away</span>
</div>
</div>
<div className="bg-surface p-6 sm:p-8 md:p-12 lg:hover:bg-surface-container-lowest group-[.touch-active]:bg-surface-container-lowest transition-all duration-500 group cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:group-hover:text-primary group-[.touch-active]:text-primary transition-colors mb-1 sm:mb-2 md:mb-0" >Burbank Montessori</h3>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-secondary font-medium sm:mt-2" >Preschool - Kinder</span>
</div>
<p className="text-on-surface-variant leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" >
                            Specializing in child-led development and creative exploration for the earliest stages of academic life.
                        </p>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-xs sm:text-sm" data-icon="location_on" >location_on</span>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold" >Proximity Note: 0.6 Miles away</span>
</div>
</div>
<div className="bg-surface p-6 sm:p-8 md:p-12 lg:hover:bg-surface-container-lowest group-[.touch-active]:bg-surface-container-lowest transition-all duration-500 group cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 md:mb-6">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:group-hover:text-primary group-[.touch-active]:text-primary transition-colors mb-1 sm:mb-2 md:mb-0" >LILA</h3>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-secondary font-medium sm:mt-2" >International K-12</span>
</div>
<p className="text-on-surface-variant leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" >
                            The International School of Los Angeles, the primary French immersion school near Burbank, is an independent accredited school.</p>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-xs sm:text-sm" data-icon="location_on" >location_on</span>
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold" >Proximity Note: 2.1 Miles away</span>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16 md:mt-32">
<div className="bg-surface-container rounded-sm p-6 sm:p-10 md:p-24 text-center relative overflow-hidden reveal">
<div className="absolute inset-0 opacity-5 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Blurred background of a sophisticated academic hall with rows of wooden desks and classical architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk55pZvb5uIf1TaDY5YEzsASqpw7Zbq73YY_Je3xj7uVKRoxRxx0UUxzbNLKt7QqsZuhO4cJP6ioago5PB80FbgeQRnjS08a3BgG9UDgmdjWR85dQxFHySXRwzvhqeWTLq7eKoP3nFJxeshniQnO0p-67w8VUxONA5HUD424JUfGVDj17d4CMQWVp2HOnnXWYYbu5Mk2XGLZAtUvuYKBewG5pUuOLIVHqSdmq8oRE1pfpPl1bV_erA85RQ6pgnkPQEwJr9owWT2JZL"  />
</div>
<div className="relative z-10 glass-panel max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
<h2 className="font-headline text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6" >Nurturing Future Success.</h2>
<p className="text-secondary mb-6 sm:mb-8 md:mb-12 max-w-xl mx-auto text-xs sm:text-sm md:text-base" >
                        We believe that a home is more than its walls—it's the community and opportunities that surround it. Explore the district details today.
                    </p>
<a className="relative z-20 inline-block border-b-2 border-tertiary text-tertiary font-bold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2rem] py-2 hover:opacity-70 transition-opacity" href="https://www.burbankusd.org/" target="_blank" rel="noopener noreferrer">Visit BUSD District Portal</a>
</div>
</div>
</section>
</main>



    </div>
  );
}
