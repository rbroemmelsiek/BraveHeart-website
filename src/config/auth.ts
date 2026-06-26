export type AuthRole = 'admin' | 'user';

export interface AuthUser {
  email: string;
  name: string;
  picture: string | null;
  role: AuthRole;
}

export const DEFAULT_ADMIN_EMAIL = 'karen@braveheartfirstresponders.com';

export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export function isAuthConfigured(): boolean {
  return Boolean(googleClientId);
}

export function isAdmin(user: AuthUser | null | undefined): boolean {
  return user?.role === 'admin';
}
