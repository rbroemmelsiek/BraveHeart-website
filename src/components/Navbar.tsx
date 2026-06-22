import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { openModal } = useContactModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Savings', path: '/savings-comparison' },
    { name: 'Service Lines', path: '/service-lines' },
    { name: 'Our Guarantee', path: '/our-guarantee' },
    { name: 'Case Studies', path: '/case-studies' },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  const isLinkActive = (linkPath: string) => {
    if (linkPath === '/') return path === '/';
    return path === linkPath || path.startsWith(`${linkPath}/`);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-700">
      <div className="relative z-50 w-full glass-nav shadow-sm border-b border-white/10">
        <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 lg:py-6 max-w-[1920px] mx-auto">
          <Link to="/" className="font-serif text-lg lg:text-xl italic tracking-tight text-on-surface z-50">
            Brave Heart First Responders
          </Link>
          <div className="hidden xl:flex space-x-8 font-serif text-lg font-light tracking-wide items-center">
            {links.map((link) => {
              const isActive = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${isActive ? 'text-primary border-b border-primary/30 pb-1' : 'text-slate-600'} hover:text-primary transition-colors duration-500 uppercase text-xs tracking-widest`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button
            onClick={openModal}
            className="hidden lg:block bg-primary text-on-primary px-6 xl:px-8 py-3 rounded-sm uppercase text-xs tracking-widest font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Verify Eligibility
          </button>

          <button
            className="lg:hidden z-50 p-2 text-on-surface focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-surface/95 backdrop-blur-2xl z-40 flex flex-col pt-[72px] lg:pt-[88px] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-start gap-6 items-start w-full px-8 md:px-16 pb-12 pt-8 overflow-y-auto">
          {links.map((link) => {
            const isActive = isLinkActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${isActive ? 'text-primary' : 'text-on-surface'} text-xl md:text-2xl uppercase tracking-[0.1em] font-light hover:text-primary transition-colors py-2`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="w-full pt-4 border-t border-outline-variant/30 mt-2 shrink-0 pb-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="bg-primary text-on-primary w-full md:w-auto md:px-12 py-4 md:py-5 rounded-sm uppercase text-sm tracking-widest font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Verify Eligibility
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
