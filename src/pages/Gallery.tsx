import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsLightboxOpen(true);
  };

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
      


<main className="pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">

<header className="relative px-4 sm:px-8 lg:px-24 mb-16 sm:mb-24 lg:mb-32 flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-12">
<div className="z-10 w-full lg:w-1/3 mb-4 sm:mb-8 lg:mb-0 reveal">
<p className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary mb-2 sm:mb-3 md:mb-4">Historical District</p>
<h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-on-surface leading-tight">
                1622 W. <br/>
<span className="italic pl-6 sm:pl-8 md:pl-12">Oak St.</span>
</h1>
<div className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-2 sm:gap-3 md:gap-4 text-tertiary">
<span className="w-6 sm:w-8 md:w-12 h-[1px] bg-tertiary"></span>
<span className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">A Visual Narrative</span>
</div>
</div>
<div className="w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-sm reveal" style={{"transitionDelay":"200ms"}}>
<img className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" data-alt="Modernist luxury estate exterior at twilight with glowing warm interior lights and sharp architectural lines against a deep blue sky" src="/Kitchen.webp"/>
</div>
</header>

<section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-y-12 sm:gap-y-16 md:gap-y-48 gap-x-4 sm:gap-x-8">

<div className="col-span-1 md:col-span-12 md:col-span-7 gallery-item cursor-zoom-in relative group reveal" onClick={() => openLightbox("/Entry_Doors_Hall_Kitchen_View.webp")}>
<div className="overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Entry Doors &amp; Hall View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Entry_Doors_Hall_Kitchen_View.webp"/>
</div>
<div className="mt-4 sm:mt-6 flex justify-between items-start">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl">Architectural Transparency: The Grand Entrance</h3>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-tighter text-secondary">01 / Entrance</p>
</div>
</div>
<div className="col-span-1 md:col-span-12 md:col-span-4 md:col-start-9 self-center gallery-item cursor-zoom-in relative group reveal" style={{"transitionDelay":"200ms"}} onClick={() => openLightbox("/Front_Elevation_Garden.webp")}>
<div className="aspect-[1/1] overflow-hidden bg-surface-container-low rounded-full shadow-lg max-w-[250px] sm:max-w-none mx-auto md:mx-0">
<img alt="Front Elevation Garden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="/Front_Elevation_Garden.webp"/>
</div>
<div className="mt-4 sm:mt-6 md:mt-8 text-center">
<p className="font-headline font-light text-base sm:text-lg md:text-xl italic mb-1">Manicured Grounds</p>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-tertiary">Where Architecture Meets Nature</p>
</div>
</div>

<div className="col-span-1 md:col-span-12 md:col-span-10 md:col-start-2 gallery-item cursor-zoom-in relative group reveal" onClick={() => openLightbox("/ADU_Spa_Pool_House_Doors_Open.webp")}>
<div className="aspect-[16/9] overflow-hidden bg-surface-container-low shadow-xl">
<img alt="ADU Pool House Hedge" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000" src="/ADU_Spa_Pool_House_Doors_Open.webp"/>
</div>
<div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 md:-bottom-12 md:-left-8 glass-panel p-3 sm:p-4 md:p-8 max-w-[200px] sm:max-w-[250px] md:max-w-sm">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-3xl italic leading-tight">Private Sanctuary:</h3>
<p className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mt-1 sm:mt-2 text-secondary">The ADU and Pool House</p>
</div>
</div>

<div className="col-span-1 md:col-span-12 md:col-span-5 gallery-item cursor-zoom-in relative group mt-8 sm:mt-12 reveal" onClick={() => openLightbox("/patio-pool.webp")}>
<div className="aspect-[3/4] overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Spa ADU" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/patio-pool.webp"/>
</div>
<div className="mt-4 sm:mt-6">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl">Refined Leisure: Generous Terrace, Pool & Heated Spa </h3>
</div>
</div>
<div className="col-span-1 md:col-span-12 md:col-span-6 md:col-start-7 gallery-item cursor-zoom-in relative group reveal" style={{"transitionDelay":"200ms"}} onClick={() => openLightbox("/LR_Front_Garden.webp")}>
<div className="aspect-[4/3] overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Living Room Front Garden" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/LR_Front_Garden.webp"/>
</div>
<div className="mt-4 sm:mt-6 flex flex-col items-end text-right">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">The Great Room</h3>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-secondary">An Interplay of Interior &amp; Exterior</p>
<span className="w-8 sm:w-12 md:w-16 h-[1px] bg-outline-variant mt-2 opacity-30"></span>
</div>
</div>

<div className="col-span-1 md:col-span-12 md:col-span-5 md:col-start-2 gallery-item cursor-zoom-in relative group reveal" onClick={() => openLightbox("/Bath_Primary_Vanity_Tub.webp")}>
<div className="aspect-square overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Primary Bath Shower" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="/Bath_Primary_Vanity_Tub.webp"/>
</div>
<div className="mt-4 sm:mt-6">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl italic">Bespoke Restorations</h3>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-tertiary mt-1">The Primary Bath & Steam Shower</p>
</div>
</div>
<div className="col-span-1 md:col-span-12 md:col-span-5 md:col-start-8 gallery-item cursor-zoom-in relative group mt-8 sm:mt-12 md:mt-24 reveal" style={{"transitionDelay":"200ms"}} onClick={() => openLightbox("/Bdrm_Primary_Window.webp")}>
<div className="aspect-[3/4] overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Primary Bedroom Window" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Bdrm_Primary_Window.webp"/>
</div>
<div className="mt-4 sm:mt-6">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl">The Primary Suite</h3>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-secondary">Bathed in Natural Radiance</p>
</div>
</div>

<div className="col-span-1 md:col-span-12 md:col-span-8 md:col-start-1 gallery-item cursor-zoom-in relative group reveal" onClick={() => openLightbox("/Kitchen_Awning_Window_Open.webp")}>
<div className="aspect-[21/9] overflow-hidden bg-surface-container-low shadow-lg">
<img alt="Kitchen Awning Window" className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-700" src="/Kitchen_Awning_Window_Open.webp"/>
</div>
<div className="mt-4 sm:mt-6">
<h3 className="font-headline font-light text-lg sm:text-xl md:text-2xl">Culinary Artistry: The Quartzite Patio Bar</h3>
</div>
</div>
<div className="col-span-1 md:col-span-12 md:col-span-3 md:col-start-10 self-end gallery-item cursor-zoom-in relative group mb-8 sm:mb-12 reveal" style={{"transitionDelay":"200ms"}} onClick={() => openLightbox("/DR_Detail.webp")}>
<div className="aspect-square overflow-hidden bg-surface-container-low border-[4px] sm:border-[8px] md:border-[12px] border-surface shadow-lg max-w-[200px] sm:max-w-none ml-auto md:ml-0">
<img alt="Dining Room Sliders" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="/DR_Detail.webp"/>
</div>
<div className="mt-2 sm:mt-3 md:mt-4 text-right md:text-left">
<p className="font-headline font-light text-sm sm:text-base md:text-lg italic">Seamless Flow</p>
<p className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-secondary">Al Fresco Living</p>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24 md:mt-48 mb-16 sm:mb-24 md:mb-48 text-center px-4 sm:px-8 reveal">
<div className="max-w-4xl mx-auto glass-panel py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-12 rounded-xl">
<span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-tertiary-fixed-dim mb-4 sm:mb-6 md:mb-8" style={{"fontVariationSettings":"'FILL' 1"}}>format_quote</span>
<h2 className="font-headline text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed italic text-on-surface">
                "L'architecture est le jeu savant, correct et magnifique des formes assemblées sous la lumière."
            </h2>
<p className="mt-6 sm:mt-8 md:mt-12 font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.4em] text-secondary">  — Le Corbusier </p>
</div>
</section>
</main>



<div className={`fixed inset-0 bg-on-background/95 z-[100] flex-col items-center justify-center backdrop-blur-md ${isLightboxOpen ? 'flex' : 'hidden'}`} id="lightbox-overlay">
<button className="absolute top-8 right-8 text-surface-container-lowest hover:text-tertiary-fixed transition-colors" onClick={() => setIsLightboxOpen(false)}>
<span className="material-symbols-outlined text-4xl">close</span>
</button>
<img alt="Featured Residence" className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" id="lightbox-img" src={currentImage}/>
<div className="absolute bottom-6 text-center">
<p className="font-label text-xs uppercase tracking-widest text-surface-container-low opacity-60 mt-2">1622 W. Oak St.</p>
</div>
</div>


    </div>
  );
}
