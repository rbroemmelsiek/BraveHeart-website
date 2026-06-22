import { useEffect } from 'react';
import {
  SITE_NAME,
  getAbsoluteOgImageUrl,
  getCanonicalUrl,
  getRouteSEO as getStaticRouteSEO,
} from '../config/seo';
import { getBlogSEO } from '../lib/blog';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

interface SEOHeadProps {
  pathname: string;
}

/**
 * Lightweight client-side head manager for the React SPA.
 * Crawlers that execute JavaScript will receive per-route metadata.
 */
export default function SEOHead({ pathname }: SEOHeadProps) {
  useEffect(() => {
    const seo = getBlogSEO(pathname) ?? getStaticRouteSEO(pathname);
    const canonicalUrl = seo.canonicalUrl ?? getCanonicalUrl(seo.path);
    const ogImageUrl = getAbsoluteOgImageUrl(seo.ogImage);

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.robots);
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:image', ogImageUrl);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', seo.ogType ?? 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', ogImageUrl);
  }, [pathname]);

  return null;
}
