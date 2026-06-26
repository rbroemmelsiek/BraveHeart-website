import React, { Suspense, lazy } from 'react';
import type { CredentialResponse } from '@react-oauth/google';
import { googleClientId } from '../../config/auth';

const LazyGoogleSignIn = lazy(() => import('./GoogleSignInButton'));

interface GoogleSignInPanelProps {
  onSuccess: (response: CredentialResponse) => void;
  onError: () => void;
}

export default function GoogleSignInPanel({ onSuccess, onError }: GoogleSignInPanelProps) {
  return (
    <Suspense
      fallback={
        <p className="text-xs text-on-surface/70 text-center py-2">Loading sign-in…</p>
      }
    >
      <LazyGoogleSignIn clientId={googleClientId} onSuccess={onSuccess} onError={onError} />
    </Suspense>
  );
}
