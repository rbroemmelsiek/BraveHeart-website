import crypto from 'crypto';
import express from 'express';
import cookieParser from 'cookie-parser';
import { OAuth2Client } from 'google-auth-library';

const SESSION_COOKIE = 'bh_session';
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

function parseAdminEmails(value) {
  return (value || 'karen@braveheartfirstresponders.com')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function signSession(payload, secret) {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  return `${data}.${signature}`;
}

function verifySession(token, secret) {
  if (!token || !secret) return null;
  const [data, signature] = token.split('.');
  if (!data || !signature) return null;

  const expected = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (sigBuffer.length !== expectedBuffer.length) return null;
  if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return null;

  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    if (!payload?.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

function resolveRole(email, adminEmails) {
  return adminEmails.includes(email.toLowerCase()) ? 'admin' : 'user';
}

function readSession(req, sessionSecret) {
  return verifySession(req.cookies?.[SESSION_COOKIE], sessionSecret);
}

export function createAuthApp(options = {}) {
  const clientId = options.clientId || process.env.GOOGLE_CLIENT_ID || '';
  const sessionSecret =
    options.sessionSecret || process.env.AUTH_SESSION_SECRET || 'dev-insecure-change-me';
  const adminEmails = parseAdminEmails(options.adminEmails || process.env.ADMIN_EMAILS);
  const oauthClient = clientId ? new OAuth2Client(clientId) : null;

  const app = express();
  app.use(express.json());
  app.use(cookieParser());

  app.get('/api/auth/config', (_req, res) => {
    res.json({
      googleClientId: clientId || null,
      authEnabled: Boolean(clientId && sessionSecret),
    });
  });

  app.get('/api/auth/me', (req, res) => {
    const session = readSession(req, sessionSecret);
    if (!session?.email) {
      res.status(401).json({ user: null });
      return;
    }

    res.json({
      user: {
        email: session.email,
        name: session.name || session.email,
        picture: session.picture || null,
        role: session.role,
      },
    });
  });

  app.post('/api/auth/google', async (req, res) => {
    if (!oauthClient) {
      res.status(503).json({ error: 'Google sign-in is not configured on this server.' });
      return;
    }

    const credential = req.body?.credential;
    if (!credential) {
      res.status(400).json({ error: 'Missing Google credential.' });
      return;
    }

    try {
      const ticket = await oauthClient.verifyIdToken({
        idToken: credential,
        audience: clientId,
      });
      const payload = ticket.getPayload();
      const email = payload?.email?.toLowerCase();
      if (!email || !payload.email_verified) {
        res.status(401).json({ error: 'Google account email could not be verified.' });
        return;
      }

      const role = resolveRole(email, adminEmails);
      const sessionPayload = {
        email,
        name: payload.name || email,
        picture: payload.picture || null,
        role,
        exp: Date.now() + SESSION_MAX_AGE_MS,
      };

      const token = signSession(sessionPayload, sessionSecret);
      res.cookie(SESSION_COOKIE, token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: SESSION_MAX_AGE_MS,
        path: '/',
      });

      res.json({
        user: {
          email,
          name: sessionPayload.name,
          picture: sessionPayload.picture,
          role,
        },
      });
    } catch {
      res.status(401).json({ error: 'Google sign-in could not be verified.' });
    }
  });

  app.post('/api/auth/logout', (_req, res) => {
    res.clearCookie(SESSION_COOKIE, { path: '/' });
    res.json({ ok: true });
  });

  return {
    app,
    requireAuth(requiredRole) {
      return (req, res, next) => {
        const session = readSession(req, sessionSecret);
        if (!session?.email) {
          res.status(401).json({ error: 'Authentication required.' });
          return;
        }
        if (requiredRole && session.role !== requiredRole) {
          res.status(403).json({ error: 'Insufficient permissions.' });
          return;
        }
        req.authUser = {
          email: session.email,
          name: session.name || session.email,
          picture: session.picture || null,
          role: session.role,
        };
        next();
      };
    },
  };
}
