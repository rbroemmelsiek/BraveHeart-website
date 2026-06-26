import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CtaBlock from '../components/braveheart/CtaBlock';
import ProgramDisclaimer from '../components/braveheart/ProgramDisclaimer';
import BraveHeartImage from '../components/braveheart/BraveHeartImage';
import HeroesJourneyShowcase from '../components/braveheart/HeroesJourneyShowcase';
import {
  getPublishedPostBySlug,
  getRelatedPageLabel,
  getRelatedPostLinks,
  taxonomySlug,
} from '../lib/blog';
import { MarkdownBody } from '../lib/markdownBody';

function formatDate(value: string): string {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="pt-48 pb-24">
          <div className="max-w-3xl mx-auto px-8 text-center reveal">
            <h1 className="font-serif font-light text-4xl md:text-5xl text-on-surface mb-6">
              Article Not Found
            </h1>
            <p className="text-on-surface/80 font-light mb-8">
              This article is unavailable. It may be unpublished or still in review.
            </p>
            <Link
              to="/blog"
              className="text-primary uppercase text-xs tracking-widest hover:opacity-80 transition-opacity"
            >
              Back to blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const relatedPosts = getRelatedPostLinks(post);
  const relatedPages = post.relatedPages.map((path) => ({
    label: getRelatedPageLabel(path),
    to: path,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-40 md:pt-48 pb-24">
        <article className="max-w-[42rem] mx-auto px-6 md:px-8">
          <header className="mb-10 md:mb-12 reveal">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-primary text-xs uppercase tracking-[0.18em] hover:opacity-80 transition-opacity mb-8"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_back
              </span>
              All articles
            </Link>

            {post.primaryCategory && (
              <p className="mb-4">
                <Link
                  to={`/topics/${taxonomySlug(post.primaryCategory)}`}
                  className="text-primary text-[10px] uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
                >
                  {post.primaryCategory}
                </Link>
              </p>
            )}

            <h1 className="font-serif font-light text-3xl md:text-4xl lg:text-[2.75rem] text-on-surface leading-tight mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-on-surface-variant font-light">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.lastUpdated && post.lastUpdated !== post.date && (
                <>
                  <span aria-hidden="true" className="text-outline-variant">
                    ·
                  </span>
                  <span>Updated {formatDate(post.lastUpdated)}</span>
                </>
              )}
              {post.author && (
                <>
                  <span aria-hidden="true" className="text-outline-variant">
                    ·
                  </span>
                  <span>{post.author}</span>
                </>
              )}
            </div>

            {post.excerpt && (
              <p className="mt-6 text-lg md:text-xl text-on-surface/75 font-light leading-relaxed border-l-2 border-primary/40 pl-5">
                {post.excerpt}
              </p>
            )}

            {post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      to={`/topics/${taxonomySlug(tag)}`}
                      className="inline-block text-[10px] uppercase tracking-[0.15em] border border-outline-variant/30 px-3 py-1 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </header>

          {(post.ogImage || post.shareImage) && !post.heroesJourneyShowcase && (
            <div className="mb-10 md:mb-12 reveal -mx-2 md:-mx-4">
              <BraveHeartImage
                file={post.shareImage || post.ogImage}
                alt={`Featured image for ${post.title}`}
                className="w-full rounded-lg overflow-hidden"
              />
            </div>
          )}

          {post.heroesJourneyShowcase && (
            <div className="mb-10 md:mb-12 -mx-6 md:-mx-[calc((100vw-42rem)/2+1.5rem)]">
              <HeroesJourneyShowcase variant="feature" showSteps={false} />
            </div>
          )}

          <div className="reveal">
            <MarkdownBody content={post.body} variant="article" />
          </div>

          {(relatedPages.length > 0 || relatedPosts.length > 0) && (
            <nav
              className="mt-14 pt-8 border-t border-outline-variant/20 reveal"
              aria-label="Related content"
            >
              {relatedPages.length > 0 && (
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
                    Related Pages
                  </p>
                  <ul className="space-y-2">
                    {relatedPages.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-primary hover:opacity-80 text-base font-light transition-opacity"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedPosts.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
                    Related Posts
                  </p>
                  <ul className="space-y-2">
                    {relatedPosts.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-primary hover:opacity-80 text-base font-light transition-opacity"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          )}

          <div className="mt-14 pt-8 border-t border-outline-variant/20 reveal">
            <CtaBlock
              primaryLabel="Verify Eligibility"
              primaryIntent={post.cta}
              secondaryLabel="All Articles"
              secondaryTo="/blog"
            />
          </div>

          <div className="mt-10">
            <ProgramDisclaimer />
          </div>
        </article>
      </main>
    </div>
  );
}
