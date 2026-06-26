import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useVerificationEntry } from '../context/ContactModalContext';
import { useAuth } from '../context/AuthContext';
import AuthNavActions from './auth/AuthNavActions';
import { braveheartImageSrc } from '../lib/braveheartAssets';
import { CONTACT_SECTION_ID } from '../config/contact';

const contactPath = { pathname: '/', hash: `#${CONTACT_SECTION_ID}` } as const;

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { openVerificationEntry } = useVerificationEntry();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Savings', path: '/savings-comparison' },
    { name: 'Service Lines', path: '/service-lines' },
    { name: 'Our Guarantee', path: '/our-guarantee' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const isLinkActive = (linkPath: string) => {
    if (linkPath === '/') return path === '/';
    return path === linkPath || path.startsWith(`${linkPath}/`);
  };

  const contactLinkClass =
    'text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase text-[10px] tracking-widest';

  const mobileMenu = (
    <div
      className={`2xl:hidden fixed inset-0 z-[9990] bg-background flex flex-col pt-[72px] lg:pt-[88px] transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isMobileMenuOpen}
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

        <div className="w-full pt-4 border-t border-outline-variant/30 mt-2 shrink-0 space-y-4 pb-8">
          <AuthNavActions variant="mobile" onNavigate={() => setIsMobileMenuOpen(false)} />
          {!user && (
            <>
              <Link
                to={contactPath}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${contactLinkClass} text-sm`}
              >
                Schedule Consultation
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openVerificationEntry('verify');
                }}
                className="btn-primary text-on-primary w-full md:w-auto md:px-12 py-4 md:py-5 rounded-lg uppercase text-sm tracking-widest font-medium hover:opacity-95 transition-all"
              >
                Verify Eligibility
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-[9999]">
        <div className="relative w-full glass-nav">
          <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 lg:py-6 max-w-[1920px] mx-auto gap-4">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={braveheartImageSrc('brave-heart-logo-landscape.webp')}
                alt="Brave Heart First Responders"
                className="h-8 lg:h-10 w-auto"
                width={1408}
                height={768}
              />
            </Link>

            <div className="hidden 2xl:flex space-x-6 font-serif text-lg font-light tracking-wide items-center shrink-0">
              {links.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${isActive ? 'text-primary border-b border-primary/30 pb-1' : 'text-on-surface-variant'} hover:text-primary transition-colors duration-500 uppercase text-xs tracking-widest`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="hidden 2xl:flex items-center gap-4 shrink-0">
              <AuthNavActions variant="desktop" />
              {!user && (
                <>
                  <Link
                    to={contactPath}
                    className="btn-glass text-on-surface px-5 py-3 rounded-lg uppercase text-[10px] tracking-widest font-medium hover:opacity-95 transition-all"
                  >
                    Schedule Consultation
                  </Link>
                  <button
                    onClick={() => openVerificationEntry('verify')}
                    className="btn-primary text-on-primary px-6 2xl:px-8 py-3 rounded-lg uppercase text-xs tracking-widest font-medium hover:opacity-95 transition-all"
                  >
                    Verify Eligibility
                  </button>
                </>
              )}
            </div>

            <button
              className="2xl:hidden p-2 text-on-surface focus:outline-none shrink-0 relative z-[10000]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>
      {typeof document !== 'undefined' ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
