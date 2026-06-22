import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { openModal } = useContactModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry: 1622 W. Oak St. from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nPREFERRED DATE AND SPECIAL REQUIREMENTS (message): ${formData.message}`;
    const mailtoUrl = `mailto:karen@vannessandassociates.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Use window.open for better cross-platform compatibility in iframes
    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const totalSlides = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
      



<header className="relative h-[100svh] w-full overflow-hidden flex items-end md:items-center justify-center pb-20 sm:pb-24 md:pb-0" id="home">

<div className="absolute inset-0 z-0 slideshow-container" id="hero-slideshow">

<div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Patio &amp; Pool Oasis" className="w-full h-full object-cover slide-zoom-in" src="/patio-pool.webp" />
</div>

<div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Primary Bath Vanity &amp; Tub" className="w-full h-full object-cover slide-zoom-out" src="/Bath_Primary_Vanity_Tub.webp" />
</div>

<div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Dining Room Arch Entry" className="w-full h-full object-cover slide-pan" src="/Entry_Doors_Hall_Kitchen_View.webp" />
</div>

<div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Gourmet Kitchen Range" className="w-full h-full object-cover slide-zoom-in" src="/Kitchen_DR.webp" />
</div>

<div className={`slide ${currentSlide === 4 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Front Garden View" className="w-full h-full object-cover slide-zoom-out" src="/LR_Front_Garden.webp" />
</div>

<div className={`slide ${currentSlide === 5 ? 'active' : ''}`}>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="ADU &amp; Pool House" className="w-full h-full object-cover slide-pan" src="/ADU_Pool_House_Hedge.webp" />
</div>
</div>

{/* Mobile gradient overlay for text readability */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden z-10"></div>

<div className="relative z-20 text-center text-on-primary px-4 sm:px-6 md:px-8 w-full">
<div className="py-8 px-4 sm:p-10 md:py-16 md:px-12 max-w-4xl mx-auto md:bg-white/10 md:backdrop-blur-sm md:border md:border-white/50 md:shadow-2xl">
<p className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 md:mb-6 opacity-90 reveal" >NEWLY REMODELED</p>
<h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light mb-4 sm:mb-6 md:mb-12 tracking-tight leading-[0.9] reveal" >THE OAK STREET <br/><span className="italic" >SANCTUARY</span></h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 reveal">
<p className="text-white/90 md:text-white/80 font-light text-xs sm:text-sm md:text-lg tracking-wide max-w-2xl mx-auto mb-6 sm:mb-8" >
                    A curated masterwork of light, form, and functionality in the heart of Burbank’s premier residential corridor.
                </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 reveal">
<a className="w-full md:w-auto bg-white/10 md:bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-sm uppercase text-[8px] sm:text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-primary btn-transition" href="sms:+18586996409?body=Hi%2C%20I'm%20interested%20in%20scheduling%20a%20tour%20of%201622%20W.%20Oak%20St.">
                    Text for Tour
                </a>
<a className="w-full md:w-auto flex items-center justify-center gap-2 sm:gap-3 uppercase text-[8px] sm:text-[10px] md:text-xs tracking-widest group btn-transition cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
<span className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/40 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500">
<span className="material-symbols-outlined text-base sm:text-lg md:text-xl" data-icon="play_arrow">play_arrow</span>
</span>
                    Experience the 4K Cinematic Tour
                </a>
</div>
</div>
</div>
</header>

{isVideoModalOpen && (
<div aria-hidden="false" className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-4 md:p-20" id="video-modal">
<button className="absolute top-8 right-8 text-white hover:text-primary-fixed-dim transition-colors focus:outline-none" onClick={() => setIsVideoModalOpen(false)} >
<span className="material-symbols-outlined text-4xl" >close</span>
</button>
<div className="w-full max-w-6xl aspect-video bg-black shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full" frameBorder="0" src="https://www.youtube.com/embed/7Evmngy1cew" title="4K Cinematic Property Tour"></iframe>
</div>
<div className="mt-8 text-center">
<p className="font-headline text-white text-2xl italic" >1622 W. Oak St. Residential Exhibition</p>
</div>
</div>
)}

<section className="bg-surface py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-outline-variant/10">
<div className="max-w-5xl mx-auto text-center reveal">
<div className="mb-4 sm:mb-6 md:mb-12 opacity-40">
<span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl font-extralight" >architecture</span>
</div>
<blockquote className="font-headline text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-on-surface mb-4 sm:mb-6 md:mb-12 italic px-2 sm:px-4 md:px-0" >
            Luxury is not about excess, it is about the curated absence of noise.
        </blockquote>
<cite className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.4em] text-secondary not-italic block">
            Architectural Philosophy
        </cite>
</div>
</section>

<section className="py-12 sm:py-16 md:py-24 bg-surface-container-low px-4 sm:px-8 md:px-12">
<div className="max-w-[1400px] mx-auto">
<div className="mb-8 sm:mb-10 md:mb-16 text-center reveal">
<h3 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 md:mb-4" >Property Snapshot</h3>
<div className="w-12 sm:w-16 md:w-24 h-[1px] bg-tertiary-fixed mx-auto"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-6">
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >home</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Street address</span>
<span className="text-sm sm:text-base md:text-lg font-headline font-light leading-snug" >1622 W. Oak St., Burbank, CA 91506</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >villa</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Separate ADU address</span>
<span className="text-sm sm:text-base md:text-lg font-headline font-light leading-snug" >1624 Oak St. (private entrance from Reese Court)</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >info</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Current public marketing</span>
<span className="text-sm sm:text-base md:text-lg font-headline font-light leading-snug" >5 bedrooms | 3.5 baths | approx. 3,085 sq ft</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >aspect_ratio</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Lot size</span>
<span className="text-lg sm:text-xl md:text-2xl font-headline font-light" >Approx. 8,196 sq ft</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >calendar_today</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Year built / remodeled</span>
<span className="text-lg sm:text-xl md:text-2xl font-headline font-light" >1970 / 2023</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:aspect-square border-b border-transparent hover:border-tertiary transition-all card-lift reveal">
<span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-0" >apartment</span>
<div>
<span className="block text-secondary text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-1" >Property type</span>
<span className="text-sm sm:text-base md:text-lg font-headline font-light" >Single-family residence</span>
</div>
</div>
<div className="sm:col-span-2 lg:col-span-2 bg-primary text-on-primary p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center reveal">
<span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2rem] sm:tracking-[0.4rem] mb-2 sm:mb-3 md:mb-4 opacity-70" >Parking</span>
<h4 className="font-headline text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-6" >Garage &amp; Guest Spaces</h4>
<p className="font-light text-xs sm:text-sm md:text-base text-on-primary-container leading-relaxed" >
                    EV Charger.
                    Public listing sources reference two garage spaces and up to six total spaces.
                </p>
</div>
</div>
</div>
</section>

<section className="bg-surface py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 overflow-hidden" id="summary">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-16 items-start">
<div className="lg:col-span-5 relative reveal active">
<div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-2xl">
<img alt="Interior View" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="/DR_Detail.webp" />
</div>
<div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-tertiary-fixed p-4 sm:p-6 md:p-12 hidden md:block editorial-shadow">
<p className="font-headline italic text-lg sm:text-xl md:text-3xl text-on-tertiary-fixed-variant leading-tight" >
                    "A rare fusion of <br/>heritage and <br/>modernity."
                </p>
</div>
</div>
<div className="lg:col-span-7 pt-4 sm:pt-6 md:pt-12">
<p className="font-label text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary mb-2 sm:mb-3 md:mb-4 reveal active" >Residential Narrative</p>
<h2 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight mb-4 sm:mb-6 md:mb-10 text-on-surface reveal active" >Executive Summary</h2>
<div className="space-y-3 sm:space-y-4 md:space-y-8 text-on-surface-variant font-light text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl reveal active">
<p className="" >
                    The home offers a compelling blend of luxury improvements, outdoor entertaining features, and location advantages. From a buyer’s perspective, the address is attractive not only for the residence itself, but also for access to Burbank schools, the city’s shopping and dining districts, major studio and media employers, Providence Saint Joseph Medical Center, the Hollywood Burbank Airport, and regional rail connections.
                </p>
</div>
<div className="mt-8 sm:mt-10 md:mt-16 flex items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 border-l border-outline-variant/30 bg-surface-container-low/50 reveal active">
<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
<img alt="Karen Van Ness" className="w-full h-full object-cover" src="/Karen2-250px.webp" />
</div>
<div>
<p className="font-semibold text-on-surface text-xs sm:text-sm md:text-base" >Karen Van Ness</p>
<p className="text-secondary uppercase tracking-widest text-[6px] sm:text-[8px] md:text-[10px]" >DRE #01354837</p>
<p className="text-secondary uppercase tracking-widest text-[6px] sm:text-[8px] md:text-[10px]" >eXp Realty | Van Ness &amp; Associates</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-8 sm:mb-12 md:mb-24 reveal active">
<h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 md:mb-4" >Accessory Dwelling Detail</h2>
<div className="w-12 sm:w-16 h-[1px] bg-tertiary-fixed mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-8">
<div className="md:col-span-8 group relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] lg:h-[500px] card-lift reveal active cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Chef's Kitchen" className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110 group-[.touch-active]:scale-110 object-center" src="/ADU_LR_Kitchen_Bed.webp" />
<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 text-white border border-white/10 opacity-0 lg:group-hover:opacity-100 group-[.touch-active]:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0 group-[.touch-active]:translate-y-0">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2" >A Second Sanctuary</h3>
<p className="text-[10px] sm:text-xs md:text-sm font-light opacity-80 uppercase tracking-widest" ><span style={{"letterSpacing":"normal","textTransform":"none"}}>A private and well-appointed ADU featuring a spacious bedroom with apartment style full kitchen.</span></p>
</div>
</div>
<div className="md:col-span-4 group relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] lg:h-[500px] card-lift reveal active cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Wine Cellar" className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110 group-[.touch-active]:scale-110 object-center" src="/ADU_Patio.webp" />
<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 text-white border border-white/10 opacity-0 lg:group-hover:opacity-100 group-[.touch-active]:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0 group-[.touch-active]:translate-y-0"><h3 className="font-headline text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2" >Patio Entry</h3><p className="text-[10px] sm:text-xs md:text-sm font-light opacity-80" >Enjoy as a pool room or private office</p></div>
</div>
<div className="md:col-span-5 group relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] lg:h-[500px] card-lift reveal active cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Infinity Pool" className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110 group-[.touch-active]:scale-110 object-center" src="/ADU_Entry_Reese_Cul-de-Sac_.webp" />
<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 text-white border border-white/10 opacity-0 lg:group-hover:opacity-100 group-[.touch-active]:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0 group-[.touch-active]:translate-y-0">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2" >Private Street Entry</h3>
<p className="text-[10px] sm:text-xs md:text-sm font-light opacity-80 uppercase tracking-widest" >Complete Solution for Live-in Help or Passive Income</p>
</div>
</div>
<div className="md:col-span-7 group relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] lg:h-[500px] card-lift reveal active cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<img alt="Master Suite" className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110 group-[.touch-active]:scale-110 object-center" src="/ADU_Bath.webp" />
<div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 text-white border border-white/10 opacity-0 lg:group-hover:opacity-100 group-[.touch-active]:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0 group-[.touch-active]:translate-y-0">
<h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2" >En Suite Bathroom</h3>
<p className="text-[10px] sm:text-xs md:text-sm font-light opacity-80 uppercase tracking-widest" >Modern Appointments Complete</p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-surface py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12" id="neighborhood">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24 items-start">
<div className="lg:w-1/3">
<h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 md:mb-8 reveal" >The Neighborhood</h2>
<p className="text-on-surface-variant text-xs sm:text-sm md:text-lg leading-relaxed font-light mb-6 sm:mb-8 md:mb-12 reveal" >
                    Perfectly positioned in Burbank, this residence offers seamless access to the city’s premier creative studios and academic institutions.
                </p>
<div className="space-y-4 sm:space-y-6 md:space-y-8 reveal">
<div>
<p className="font-label text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest text-secondary mb-1 sm:mb-2" >Distance to Media Centers</p>
<p className="font-body text-sm sm:text-base md:text-lg" >10 Minutes — Walt Disney Studios</p>
</div>
<div>
<p className="font-label text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest text-secondary mb-1 sm:mb-2" >Education</p>
<p className="font-body text-sm sm:text-base md:text-lg" >Burbank Unified School District</p>
</div>
<div>
<p className="font-label text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest text-secondary mb-1 sm:mb-2" >Connectivity</p>
<p className="font-body text-sm sm:text-base md:text-lg" >Hollywood Burbank Airport (BUR)</p>
</div>
</div>
</div>
<div className="lg:w-2/3 w-full h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] bg-surface-container relative reveal card-lift group overflow-hidden cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('touch-active')}>
<div className="w-full h-full grayscale opacity-60 lg:group-hover:grayscale-0 group-[.touch-active]:grayscale-0 lg:group-hover:opacity-100 group-[.touch-active]:opacity-100 transition-all duration-1000">
<div className="w-full h-full bg-[url('/W_Oak_St-Burbank.webp')] bg-cover bg-center lg:group-hover:scale-105 group-[.touch-active]:scale-105 transition-transform duration-1000"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rounded-full animate-ping"></div>
<div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rounded-full absolute"></div>
<div className="absolute bg-white/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-sm shadow-xl border border-tertiary-fixed/30 mt-12 sm:mt-16 md:mt-20">
<p className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary" >1622 W. Oak St.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-high py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12" id="agent">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-16">
<div className="lg:col-span-4 bg-white/40 backdrop-blur-xl p-5 sm:p-6 md:p-12 editorial-shadow border border-white/20 card-lift reveal">
<div className="mb-5 sm:mb-6 md:mb-10 text-center">
<img alt="Karen Van Ness Portrait" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6 object-cover ring-4 ring-tertiary-fixed/30" src="/Karen2-250px.webp" />
<p className="font-headline text-lg sm:text-xl md:text-3xl font-light mb-1 sm:mb-2" >Karen Van Ness</p>
<p className="text-secondary uppercase tracking-widest text-[6px] sm:text-[8px] md:text-[10px]" >DRE #01354837</p>
<p className="font-label text-[6px] sm:text-[8px] md:text-xs uppercase tracking-widest text-secondary leading-relaxed" >Van Ness & Associates <span className="hidden md:inline">|</span><br className="md:hidden" /> eXp Realty</p>
</div>
<div className="space-y-3 sm:space-y-4 md:space-y-6">
<a className="flex items-center gap-2 sm:gap-3 md:gap-4 text-secondary hover:text-primary transition-colors cursor-pointer group" href="tel:+18586996409" >
<span className="material-symbols-outlined shrink-0 group-hover:scale-110 transition-transform text-base sm:text-lg md:text-2xl" >call</span>
<span className="font-light text-[10px] sm:text-xs md:text-base" >+1 (858) 699-6409</span>
</a>
<a className="flex items-center gap-2 sm:gap-3 md:gap-4 text-secondary hover:text-primary transition-colors cursor-pointer group" href="mailto:karen@vannessandassociates.com?subject=Inquiry: 1622 W. Oak St." target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined shrink-0 group-hover:scale-110 transition-transform text-base sm:text-lg md:text-2xl" >mail</span>
<span className="font-light text-[10px] sm:text-xs md:text-base break-all" >karen@vannessandassociates.com</span>
</a>
</div>
<div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-outline-variant/30">
<p className="italic text-[10px] sm:text-xs md:text-sm text-on-surface-variant leading-relaxed" >"Representing the world's most exceptional properties requires a lens of appreciation for the finer details of craftsmanship."</p>
</div>
</div>
<div className="lg:col-span-8">
<p className="font-label text-[6px] sm:text-[8px] md:text-xs uppercase tracking-[0.2em] text-tertiary mb-2 sm:mb-3 md:mb-6 reveal" >Private Exhibition</p>
<h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-light mb-6 sm:mb-8 md:mb-12 reveal" >Schedule a Private Viewing</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-6 md:gap-y-12 reveal" onSubmit={handleSubmit}>
<div className="relative group">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 sm:py-3 focus:ring-0 focus:border-primary transition-all text-xs sm:text-sm md:text-base" id="name" placeholder=" " type="text" value={formData.name} onChange={handleInputChange} required/>
<label className="absolute left-0 top-2 sm:top-3 text-secondary text-[10px] sm:text-xs md:text-sm font-label uppercase tracking-widest pointer-events-none transition-all peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[6px] sm:peer-focus:text-[8px] md:peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[6px] sm:peer-[:not(:placeholder-shown)]:text-[8px] md:peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary" htmlFor="name" >Full Name</label>
<div className="absolute bottom-0 left-0 h-[2px] w-0 bg-tertiary-fixed transition-all duration-500 group-focus-within:w-full"></div>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 sm:py-3 focus:ring-0 focus:border-primary transition-all text-xs sm:text-sm md:text-base" id="email" placeholder=" " type="email" value={formData.email} onChange={handleInputChange} required/>
<label className="absolute left-0 top-2 sm:top-3 text-secondary text-[10px] sm:text-xs md:text-sm font-label uppercase tracking-widest pointer-events-none transition-all peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[6px] sm:peer-focus:text-[8px] md:peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[6px] sm:peer-[:not(:placeholder-shown)]:text-[8px] md:peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary" htmlFor="email" >Email Address</label>
<div className="absolute bottom-0 left-0 h-[2px] w-0 bg-tertiary-fixed transition-all duration-500 group-focus-within:w-full"></div>
</div>
<div className="relative md:col-span-2 group">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-2 sm:py-3 focus:ring-0 focus:border-primary transition-all text-xs sm:text-sm md:text-base" id="message" placeholder=" " type="text" value={formData.message} onChange={handleInputChange} required/>
<label className="absolute left-0 top-2 sm:top-3 text-secondary text-[10px] sm:text-xs md:text-sm font-label uppercase tracking-widest pointer-events-none transition-all peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[6px] sm:peer-focus:text-[8px] md:peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[6px] sm:peer-[:not(:placeholder-shown)]:text-[8px] md:peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary" htmlFor="message" >Preferred Date &amp; Special Requirements</label>
<div className="absolute bottom-0 left-0 h-[2px] w-0 bg-tertiary-fixed transition-all duration-500 group-focus-within:w-full"></div>
</div>
<div className="md:col-span-2 pt-4 sm:pt-6 md:pt-8">
  {isSubmitted ? (
    <div className="bg-primary/10 border border-primary/20 p-4 rounded-sm text-primary text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
      <p className="font-medium mb-1">Inquiry Drafted Successfully</p>
      <p className="font-light opacity-80">Your email client should have opened with the inquiry details. Please send the email to complete your request.</p>
    </div>
  ) : (
    <button className="bg-primary text-on-primary w-full md:w-auto px-10 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 roundedness-sm uppercase text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] font-semibold hover:opacity-90 btn-transition shadow-lg shadow-primary/20"  type="submit">
      Submit Inquiry
    </button>
  )}
</div>
</form>
</div>
</div>
</section>



<div className="fixed bottom-8 right-8 z-40 hidden md:block reveal">
<a className="flex items-center gap-3 bg-on-surface text-surface-bright px-8 py-4 rounded-none shadow-2xl hover:bg-tertiary transition-colors duration-500 group hover:scale-105 active:scale-95" href="#agent">
<span className="font-label text-xs uppercase tracking-[0.2rem]">Inquire Now</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>



    </div>
  );
}
