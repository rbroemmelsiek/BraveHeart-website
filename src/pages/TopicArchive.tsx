import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getPublishedPostsByTaxonomySlug,
  getTaxonomyLabel,
  taxonomySlug,
} from '../lib/blog';

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

export default function TopicArchive() {
  const { taxonomySlug: slugParam } = useParams<{ taxonomySlug: string }>();
  const label = slugParam ? getTaxonomyLabel(slugParam) : undefined;
  const posts = slugParam ? getPublishedPostsByTaxonomySlug(slugParam) : [];

  if (!label) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="pt-48 pb-24">
          <div className="max-w-3xl mx-auto px-8 text-center reveal">
            <h1 className="font-serif font-light text-4xl md:text-5xl text-on-surface mb-6">
              Topic Not Found
            </h1>
            <p className="text-on-surface/80 font-light mb-8">
              This category or tag archive is unavailable.
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

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-48 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="glass-hero rounded-2xl px-6 py-12 md:px-12 md:py-16 mb-16 text-center reveal editorial-shadow max-w-4xl mx-auto">
            <span className="text-primary uppercase text-xs tracking-[0.25rem] mb-6 block font-medium">
              Brave Heart Blog Archive
            </span>
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
              {label}
            </h1>
            <p className="mt-8 text-on-surface/85 font-light leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
              Published articles related to {label.toLowerCase()}.
            </p>
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-8 space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="reveal glass-panel rounded-xl p-8 card-lift editorial-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-secondary mb-4">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.primaryCategory && (
                  <>
                    <span aria-hidden="true">•</span>
                    <Link
                      to={`/topics/${taxonomySlug(post.primaryCategory)}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.primaryCategory}
                    </Link>
                  </>
                )}
              </div>
              <h2 className="font-serif font-light text-2xl md:text-3xl text-on-surface mb-4">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-on-surface/80 font-light leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
