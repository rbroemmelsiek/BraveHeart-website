import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CtaBlock from '../components/braveheart/CtaBlock';
import ProgramDisclaimer from '../components/braveheart/ProgramDisclaimer';
import BraveHeartImage from '../components/braveheart/BraveHeartImage';
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
      <main className="pt-48 pb-24">
        <article className="max-w-4xl mx-auto px-8">
          <header className="text-center mb-12 reveal">
            <span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">
              Brave Heart Blog
            </span>
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-secondary mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.lastUpdated && post.lastUpdated !== post.date && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>Updated {formatDate(post.lastUpdated)}</span>
                </>
              )}
              {post.author && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
            {post.primaryCategory && (
              <p className="mb-4">
                <Link
                  to={`/topics/${taxonomySlug(post.primaryCategory)}`}
                  className="text-primary text-xs uppercase tracking-[0.18em] hover:opacity-80 transition-opacity"
                >
                  {post.primaryCategory}
                </Link>
              </p>
            )}
            {post.excerpt && (
              <p className="text-on-surface/80 font-light leading-relaxed text-lg max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
            {post.tags.length > 0 && (
              <ul className="flex flex-wrap justify-center gap-2 mt-6">
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

          {(post.ogImage || post.shareImage) && (
            <div className="mb-12 reveal">
              <BraveHeartImage
                file={post.shareImage || post.ogImage}
                alt={`Featured image for ${post.title}`}
                className="w-full rounded-sm border border-outline-variant/20"
              />
            </div>
          )}

          <div className="reveal">
            <MarkdownBody content={post.body} />
          </div>

          <CtaBlock primaryLabel="Verify Eligibility" primaryIntent={post.cta} secondaryLabel="All Articles" secondaryTo="/blog" />

          {(relatedPages.length > 0 || relatedPosts.length > 0) && (
            <nav className="mt-12 reveal" aria-label="Related content">
              {relatedPages.length > 0 && (
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-4 text-center">
                    Related Pages
                  </p>
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {relatedPages.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-primary hover:opacity-80 text-sm font-light transition-opacity"
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
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-4 text-center">
                    Related Posts
                  </p>
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {relatedPosts.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-primary hover:opacity-80 text-sm font-light transition-opacity"
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

          <ProgramDisclaimer />
        </article>
      </main>
    </div>
  );
}
