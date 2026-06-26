import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AuthUser } from '../config/auth';
import { googleClientId, isAuthConfigured } from '../config/auth';
import { fetchCurrentUser, signInWithGoogleCredential, signOutSession } from '../lib/authApi';

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  authConfigured: boolean;
  signInWithCredential: (credential: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function AuthStateProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchCurrentUser()
      .then((current) => {
        if (!cancelled) setUser(current);
      })
      .catch(() => {
        if (!cancelled) setUser(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const signInWithCredential = useCallback(async (credential: string) => {
    const nextUser = await signInWithGoogleCredential(credential);
    setUser(nextUser);
  }, []);

  const signOut = useCallback(async () => {
    await signOutSession();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      authConfigured: isAuthConfigured(),
      signInWithCredential,
      signOut,
    }),
    [user, loading, signInWithCredential, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!isAuthConfigured()) {
    return <AuthStateProvider>{children}</AuthStateProvider>;
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthStateProvider>{children}</AuthStateProvider>
    </GoogleOAuthProvider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
