import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import type { AuthUser } from '../config/auth';
import { isAuthConfigured } from '../config/auth';
import { fetchCurrentUser, signInWithGoogleCredential, signOutSession } from '../lib/authApi';

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  authConfigured: boolean;
  signInWithCredential: (credential: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const AUTH_ROUTE_PREFIXES = ['/account', '/admin'];

function shouldFetchAuthImmediately(pathname: string): boolean {
  return AUTH_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function scheduleIdleTask(task: () => void): () => void {
  if (typeof window.requestIdleCallback === 'function') {
    const id = window.requestIdleCallback(task, { timeout: 4000 });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(task, 2000);
  return () => window.clearTimeout(id);
}

function AuthStateProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const immediate = shouldFetchAuthImmediately(pathname);

    const loadSession = () => {
      if (immediate && !cancelled) {
        setLoading(true);
      }

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
    };

    if (immediate) {
      loadSession();
      return () => {
        cancelled = true;
      };
    }

    const cancelScheduled = scheduleIdleTask(loadSession);
    return () => {
      cancelled = true;
      cancelScheduled();
    };
  }, [pathname]);

  const signInWithCredential = useCallback(async (credential: string) => {
    const nextUser = await signInWithGoogleCredential(credential);
    setUser(nextUser);
    setLoading(false);
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
  return <AuthStateProvider>{children}</AuthStateProvider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
