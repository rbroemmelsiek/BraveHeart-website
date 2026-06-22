/**
 * Brave Heart Phase 1 SEO and publication metadata.
 * Placeholder production domain — confirm with owner before launch.
 */
import { braveheartImageSrc } from '../lib/braveheartAssets';

/** Requires owner confirmation before production indexing. */
export const PRODUCTION_DOMAIN = 'https://braveheartfirstresponders.com';

export const SITE_NAME = 'Brave Heart First Responders';

/** Default share image for legal and fallback routes. */
export const DEFAULT_OG_IMAGE = 'brave-heart-logo-square.webp';

export interface RouteSEO {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  robots: string;
  sitemap: boolean;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
}

export const ROUTE_SEO: Record<string, RouteSEO> = {
  '/': {
    path: '/',
    title: 'Brave Heart First Responders Real Estate Benefits',
    description:
      'Real estate benefits, closing credits, and HomeToHome-powered guidance for eligible first responders and military members.',
    ogImage: 'first-responder-real-estate-benefits.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/our-story': {
    path: '/our-story',
    title: 'Our Story',
    description:
      'Learn how Brave Heart was built from lived experience to support public safety and military families.',
    ogImage: 'police-history-generational-wealth.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/who-we-serve': {
    path: '/who-we-serve',
    title: 'Who We Serve',
    description:
      'Eligibility overview for first responders, law enforcement, firefighters, EMTs, paramedics, military members, and veterans.',
    ogImage: 'braveheart-hometohome-secure-verification.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/savings-comparison': {
    path: '/savings-comparison',
    title: 'Savings Comparison',
    description:
      'See how stacked real estate benefits may reduce closing costs across brokerage, lending, escrow, title, and inspections.',
    ogImage: 'real-world-impact-benefit-credit-example.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/service-lines': {
    path: '/service-lines',
    title: 'Service Lines',
    description:
      'Explore the Brave Heart benefit menu across brokerage, lending, escrow, title, inspections, warranties, and lifecycle support.',
    ogImage: 'major-transaction-savings-brokerage-lender.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/our-guarantee': {
    path: '/our-guarantee',
    title: 'Our Guarantee',
    description:
      'Brave Heart service standards, accountability, and transaction oversight for eligible participants.',
    ogImage: 'braveheart-advantage-benefits-list.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/case-studies': {
    path: '/case-studies',
    title: 'Case Studies',
    description:
      'Example Brave Heart transaction scenarios for law enforcement, firefighters, military members, and veterans.',
    ogImage: 'first-responder-testimonial-captain-lopez.webp',
    robots: 'index,follow',
    sitemap: true,
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'How Brave Heart handles personal information, verification data, and transaction-related information.',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index,follow',
    sitemap: true,
  },
  '/terms-of-service': {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description:
      'Operational guidelines, eligibility rules, and program terms for Brave Heart First Responders.',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index,follow',
    sitemap: true,
  },
  '/accessibility': {
    path: '/accessibility',
    title: 'Accessibility Statement',
    description: 'Brave Heart accessibility commitment and digital interface standards.',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index,follow',
    sitemap: true,
  },
};

export const SITEMAP_ROUTES = Object.values(ROUTE_SEO).filter((route) => route.sitemap);

export function getRouteSEO(pathname: string): RouteSEO {
  return ROUTE_SEO[pathname] ?? ROUTE_SEO['/'];
}

export function getCanonicalUrl(path: string): string {
  if (path === '/') {
    return `${PRODUCTION_DOMAIN}/`;
  }
  return `${PRODUCTION_DOMAIN}${path}`;
}

export function getAbsoluteOgImageUrl(filename: string): string {
  return `${PRODUCTION_DOMAIN}${braveheartImageSrc(filename)}`;
}
