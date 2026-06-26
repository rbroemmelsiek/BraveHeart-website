import type { AuthUser } from '../config/auth';

async function parseJson<T>(response: Response): Promise<T> {
  const data = await response.json();
  return data as T;
}

export async function fetchCurrentUser(): Promise<AuthUser | null> {
  const response = await fetch('/api/auth/me', { credentials: 'include' });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error('Unable to load session.');
  const data = await parseJson<{ user: AuthUser | null }>(response);
  return data.user;
}

export async function signInWithGoogleCredential(credential: string): Promise<AuthUser> {
  const response = await fetch('/api/auth/google', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Google sign-in failed.');
  }

  const data = await parseJson<{ user: AuthUser }>(response);
  return data.user;
}

export async function signOutSession(): Promise<void> {
  await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  });
}
