import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 md:py-20 px-6 md:px-12 border-t border-outline-variant/10">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full max-w-[1920px] mx-auto reveal text-center md:text-left">
<div className="flex flex-col gap-4 items-center md:items-start">
<div className="font-['Cormorant_Garamond'] text-xl font-light text-on-surface italic">
            1622 W. Oak St.
          </div>
<p className="text-primary max-w-xs text-sm font-light">
            Representing the pinnacle of Burbank residential lifestyle.
          </p>
</div>
<div className="flex flex-col items-center md:items-end gap-6">
<div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 font-['Work_Sans'] text-[10px] uppercase tracking-[0.15em]">
<Link className="text-slate-500 hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
<Link className="text-slate-500 hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
<Link className="text-slate-500 hover:text-primary transition-colors" to="/accessibility">Accessibility</Link>
<Link className="text-slate-500 hover:text-primary transition-colors" to="/#agent">Contact</Link>
</div>
<div className="font-['Work_Sans'] text-[10px] uppercase tracking-[0.15em] text-secondary text-center md:text-right mt-4 md:mt-0">
            © 2026 1622 W. OAK ST. RESIDENTIAL EXHIBITION. ALL RIGHTS RESERVED.
          </div>
</div>
</div>
<div className="mt-16 md:mt-20 pt-8 border-t border-outline-variant/30 text-center opacity-40 text-[10px] tracking-[0.4em] uppercase reveal">
        Designed for Elegant Living
      </div>
</footer>
  );
}
