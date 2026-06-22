import React from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPosts, taxonomySlug } from '../lib/blog';

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

export default function BlogIndex() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-48 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col items-center mb-16 text-center reveal">
            <span className="text-secondary uppercase text-xs tracking-[0.2rem] mb-6 block font-medium">
              Brave Heart First Responders
            </span>
            <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-on-surface leading-tight max-w-4xl">
              Program Guidance and Updates
            </h1>
            <p className="mt-8 text-on-surface/80 font-light leading-relaxed max-w-2xl text-lg">
              Published articles for eligible first responders and military members exploring
              program information, eligibility context, and transaction-support topics.
            </p>
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-8 space-y-8">
          {posts.length === 0 ? (
            <p className="text-center text-on-surface/70 font-light reveal">
              No published articles are available yet.
            </p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="reveal border border-outline-variant/20 rounded-sm bg-surface-container-low/40 p-8"
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
                <p className="text-on-surface/80 font-light leading-relaxed mb-6">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-6">
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
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  Read article
                </Link>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
