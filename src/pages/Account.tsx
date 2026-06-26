import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isAdmin } from '../config/auth';

export default function Account() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center text-on-surface/70 font-light">
        Loading account…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="pt-40 md:pt-48 pb-24">
          <div className="max-w-lg mx-auto px-6 text-center reveal">
            <h1 className="font-serif font-light text-3xl text-on-surface mb-4">My account</h1>
            <p className="text-on-surface/80 font-light mb-6">
              Sign in from the header to access your Brave Heart account.
            </p>
            <Link
              to="/"
              className="text-primary uppercase text-xs tracking-widest hover:opacity-80 transition-opacity"
            >
              Back to home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-40 md:pt-48 pb-24">
        <div className="max-w-lg mx-auto px-6 reveal">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-3">Account</p>
          <h1 className="font-serif font-light text-3xl text-on-surface mb-6">Welcome, {user.name}</h1>

          <div className="glass-panel rounded-xl p-6 editorial-shadow space-y-4">
            <p className="text-on-surface/85 font-light break-all">{user.email}</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-secondary">
              {isAdmin(user) ? 'Administrator' : 'Member account'}
            </p>
            {isAdmin(user) && (
              <Link
                to="/admin/blog"
                className="inline-block text-primary text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Open blog admin
              </Link>
            )}
            <button
              type="button"
              onClick={() => signOut()}
              className="btn-glass text-on-surface px-5 py-3 rounded-lg uppercase text-[10px] tracking-widest font-medium hover:opacity-95 transition-all"
            >
              Sign out
            </button>
          </div>

          <p className="mt-8 text-on-surface-variant text-sm font-light leading-relaxed">
            Member dashboards and saved program progress will appear here as account features are
            launched.
          </p>
        </div>
      </main>
    </div>
  );
}
