import { VerificationEntryIntent } from '../config/cta';
import {
  DEFAULT_OG_IMAGE,
  PRODUCTION_DOMAIN,
  RouteSEO,
  getAbsoluteOgImageUrl,
} from '../config/seo';
import { getStringArrayField, getStringField, parseFrontmatter } from './frontmatter';

export type PostStatus = 'draft' | 'review' | 'approved' | 'published' | 'archived';

export interface BlogPost {
  title: string;
  slug: string;
  status: PostStatus;
  excerpt: string;
  author: string;
  date: string;
  lastUpdated: string;
  primaryCategory: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogImage: string;
  shareImage: string;
  relatedPages: string[];
  relatedPosts: string[];
  cta: VerificationEntryIntent;
  robots: string;
  body: string;
  heroesJourneyShowcase: boolean;
}

const postModules = import.meta.glob('../../content/braveheart/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/our-story': 'Our Story',
  '/who-we-serve': 'Who We Serve',
  '/savings-comparison': 'Savings Comparison',
  '/service-lines': 'Service Lines',
  '/our-guarantee': 'Our Guarantee',
  '/case-studies': 'Case Studies',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-service': 'Terms of Service',
  '/accessibility': 'Accessibility',
  '/blog': 'Blog',
};

const VALID_CTA_INTENTS: VerificationEntryIntent[] = [
  'verify',
  'founder',
  'matched',
  'intake',
  'contact',
];

function parseStatus(value: string): PostStatus {
  const normalized = value.toLowerCase() as PostStatus;
  if (
    normalized === 'draft' ||
    normalized === 'review' ||
    normalized === 'approved' ||
    normalized === 'published' ||
    normalized === 'archived'
  ) {
    return normalized;
  }
  return 'draft';
}

function parseCtaIntent(value: string): VerificationEntryIntent {
  const normalized = value.toLowerCase() as VerificationEntryIntent;
  return VALID_CTA_INTENTS.includes(normalized) ? normalized : 'verify';
}

function parsePost(source: string): BlogPost {
  const { data, body } = parseFrontmatter(source);
  const slug = getStringField(data, 'slug');
  const ogImage = getStringField(data, 'ogImage', DEFAULT_OG_IMAGE);
  const shareImage = getStringField(data, 'shareImage', ogImage);

  return {
    title: getStringField(data, 'title', 'Untitled Post'),
    slug,
    status: parseStatus(getStringField(data, 'status', 'draft')),
    excerpt: getStringField(data, 'excerpt'),
    author: getStringField(data, 'author', 'Brave Heart First Responders'),
    date: getStringField(data, 'date'),
    lastUpdated: getStringField(data, 'lastUpdated', getStringField(data, 'date')),
    primaryCategory: getStringField(data, 'primaryCategory'),
    tags: getStringArrayField(data, 'tags'),
    seoTitle: getStringField(data, 'seoTitle', getStringField(data, 'title')),
    seoDescription: getStringField(data, 'seoDescription', getStringField(data, 'excerpt')),
    canonicalUrl: getStringField(data, 'canonicalUrl'),
    ogImage,
    shareImage,
    relatedPages: getStringArrayField(data, 'relatedPages'),
    relatedPosts: getStringArrayField(data, 'relatedPosts'),
    cta: parseCtaIntent(getStringField(data, 'cta', 'verify')),
    robots: getStringField(data, 'robots', 'index,follow'),
    body,
    heroesJourneyShowcase: getStringField(data, 'heroesJourneyShowcase', 'false').toLowerCase() === 'true',
  };
}

function loadAllPosts(): BlogPost[] {
  const posts = Object.values(postModules).map(parsePost);
  const slugCounts = new Map<string, number>();

  for (const post of posts) {
    slugCounts.set(post.slug, (slugCounts.get(post.slug) ?? 0) + 1);
  }

  const duplicates = [...slugCounts.entries()].filter(([, count]) => count > 1);
  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate blog post slugs detected: ${duplicates.map(([slug]) => slug).join(', ')}`,
    );
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

const ALL_POSTS = loadAllPosts();

export function getAllPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getPublishedPosts(): BlogPost[] {
  return ALL_POSTS.filter((post) => post.status === 'published');
}

export function getPublishedPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  const post = ALL_POSTS.find((entry) => entry.slug === slug);
  if (!post || post.status !== 'published') return undefined;
  return post;
}

export function taxonomySlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getTaxonomyLabel(slug: string): string | undefined {
  for (const post of getPublishedPosts()) {
    if (taxonomySlug(post.primaryCategory) === slug) {
      return post.primaryCategory;
    }
    for (const tag of post.tags) {
      if (taxonomySlug(tag) === slug) {
        return tag;
      }
    }
  }
  return undefined;
}

export function getPublishedPostsByTaxonomySlug(slug: string): BlogPost[] {
  return getPublishedPosts().filter(
    (post) =>
      taxonomySlug(post.primaryCategory) === slug ||
      post.tags.some((tag) => taxonomySlug(tag) === slug),
  );
}

export function getRelatedPageLabel(path: string): string {
  return ROUTE_LABELS[path] ?? path.replace(/^\//, '').replace(/-/g, ' ');
}

export function getRelatedPostLinks(post: BlogPost): { label: string; to: string }[] {
  return post.relatedPosts
    .map((slug) => getPublishedPostBySlug(slug))
    .filter((related): related is BlogPost => Boolean(related))
    .map((related) => ({
      label: related.title,
      to: `/blog/${related.slug}`,
    }));
}

export function getPostCanonicalUrl(post: BlogPost): string {
  if (post.canonicalUrl) return post.canonicalUrl;
  return `${PRODUCTION_DOMAIN}/blog/${post.slug}`;
}

export function postToRouteSEO(post: BlogPost): RouteSEO {
  return {
    path: `/blog/${post.slug}`,
    title: post.seoTitle,
    description: post.seoDescription,
    ogImage: post.shareImage || post.ogImage || DEFAULT_OG_IMAGE,
    robots: post.robots,
    sitemap: post.status === 'published',
    ogType: 'article',
    canonicalUrl: getPostCanonicalUrl(post),
  };
}

const BLOG_INDEX_SEO: RouteSEO = {
  path: '/blog',
  title: 'Brave Heart Blog | Program Guidance and Updates',
  description:
    'Articles and guidance for eligible first responders and military members exploring Brave Heart program information.',
  ogImage: DEFAULT_OG_IMAGE,
  robots: 'index,follow',
  sitemap: true,
};

export function getBlogSEO(pathname: string): RouteSEO | null {
  if (pathname === '/blog') {
    return BLOG_INDEX_SEO;
  }

  const postMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const post = getPublishedPostBySlug(postMatch[1]);
    if (post) return postToRouteSEO(post);
    return {
      path: pathname,
      title: 'Article Not Found | Brave Heart Blog',
      description: 'This article is unavailable or not yet published.',
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'noindex,nofollow',
      sitemap: false,
    };
  }

  const topicMatch = pathname.match(/^\/topics\/([^/]+)$/);
  if (topicMatch) {
    const label = getTaxonomyLabel(topicMatch[1]);
    if (!label) {
      return {
        path: pathname,
        title: 'Topic Not Found | Brave Heart Blog',
        description: 'This category or tag archive is unavailable.',
        ogImage: DEFAULT_OG_IMAGE,
        robots: 'noindex,nofollow',
        sitemap: false,
      };
    }

    return {
      path: `/topics/${topicMatch[1]}`,
      title: `${label} | Brave Heart Blog`,
      description: `Published Brave Heart articles related to ${label.toLowerCase()}.`,
      ogImage: DEFAULT_OG_IMAGE,
      robots: 'index,follow',
      sitemap: false,
    };
  }

  return null;
}

export function getSitemapBlogEntries(): { loc: string; lastmod: string }[] {
  return getPublishedPosts().map((post) => ({
    loc: getPostCanonicalUrl(post),
    lastmod: post.lastUpdated || post.date,
  }));
}

export { getAbsoluteOgImageUrl };
