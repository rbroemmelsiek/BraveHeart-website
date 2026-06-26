import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { CredentialResponse } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { isAdmin } from '../../config/auth';
import GoogleSignInPanel from './GoogleSignInPanel';

interface AuthNavActionsProps {
  variant: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

export default function AuthNavActions({ variant, onNavigate }: AuthNavActionsProps) {
  const { user, loading, authConfigured, signInWithCredential, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen && !signInOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setSignInOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [menuOpen, signInOpen]);

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) {
      setError('Google did not return a sign-in credential.');
      return;
    }

    try {
      setError(null);
      await signInWithCredential(response.credential);
      setSignInOpen(false);
      onNavigate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed.');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setMenuOpen(false);
    onNavigate?.();
  };

  if (loading) {
    return null;
  }

  if (user) {
    const firstName = user.name.split(' ')[0] || user.name;
    const isDesktop = variant === 'desktop';

    return (
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex items-center gap-2 text-on-surface hover:text-primary transition-colors ${
            isDesktop ? 'uppercase text-[10px] tracking-widest' : 'text-sm uppercase tracking-[0.12em]'
          }`}
          aria-expanded={menuOpen}
          aria-haspopup="menu"
        >
          {user.picture ? (
            <img
              src={user.picture}
              alt=""
              className="h-7 w-7 rounded-full ring-1 ring-primary/30 object-cover"
            />
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-medium">
              {firstName.charAt(0).toUpperCase()}
            </span>
          )}
          <span className="max-w-[8rem] truncate">{firstName}</span>
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            expand_more
          </span>
        </button>

        {menuOpen && (
          <div
            role="menu"
            className={`absolute z-[10020] mt-2 min-w-[12rem] glass-panel rounded-lg border border-outline-variant/25 p-2 editorial-shadow ${
              isDesktop ? 'right-0' : 'left-0'
            }`}
          >
            <p className="px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-secondary truncate">
              {user.email}
            </p>
            {isAdmin(user) && (
              <Link
                to="/admin/blog"
                role="menuitem"
                onClick={() => {
                  setMenuOpen(false);
                  onNavigate?.();
                }}
                className="block px-3 py-2 rounded-md text-sm text-on-surface hover:text-primary hover:bg-surface-container-high/40 transition-colors"
              >
                Blog admin
              </Link>
            )}
            <Link
              to="/account"
              role="menuitem"
              onClick={() => {
                setMenuOpen(false);
                onNavigate?.();
              }}
              className="block px-3 py-2 rounded-md text-sm text-on-surface hover:text-primary hover:bg-surface-container-high/40 transition-colors"
            >
              My account
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-on-surface hover:text-primary hover:bg-surface-container-high/40 transition-colors"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  const isDesktop = variant === 'desktop';

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => {
          setSignInOpen((open) => !open);
          setError(null);
        }}
        className={`text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest ${
          isDesktop ? 'text-[10px]' : 'text-sm tracking-[0.12em]'
        }`}
        aria-expanded={signInOpen}
      >
        Sign in
      </button>

      {signInOpen && (
        <div
          className={`absolute z-[10020] mt-2 w-[17rem] glass-panel rounded-lg border border-outline-variant/25 p-4 editorial-shadow ${
            isDesktop ? 'right-0' : 'left-0'
          }`}
        >
          <p className="text-xs text-on-surface/80 font-light leading-relaxed mb-3">
            Use your Google account to sign in or create access.
          </p>
          {authConfigured ? (
            <GoogleSignInPanel
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google sign-in was cancelled or failed.')}
            />
          ) : (
            <p className="text-xs text-secondary leading-relaxed">
              Sign-in is not configured yet. Add <code className="text-primary">VITE_GOOGLE_CLIENT_ID</code>{' '}
              and server OAuth settings.
            </p>
          )}
          {error && <p className="mt-3 text-xs text-red-300">{error}</p>}
        </div>
      )}
    </div>
  );
}
