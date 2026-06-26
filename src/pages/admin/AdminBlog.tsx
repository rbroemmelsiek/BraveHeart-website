import React from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPosts } from '../../lib/blog';

export default function AdminBlog() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-40 md:pt-48 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 reveal">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-3">Admin</p>
          <h1 className="font-serif font-light text-3xl md:text-4xl text-on-surface mb-4">
            Blog management
          </h1>
          <p className="text-on-surface/80 font-light leading-relaxed mb-10 max-w-2xl">
            Signed in as an administrator. This workspace will host blog authoring once the CMS
            workflow is connected. For now, posts remain markdown files under{' '}
            <code className="text-primary">content/braveheart/posts/</code>.
          </p>

          <section className="glass-panel rounded-xl p-6 md:p-8 editorial-shadow mb-8">
            <h2 className="font-serif text-xl text-on-surface mb-4">Published posts</h2>
            {posts.length === 0 ? (
              <p className="text-on-surface/70 font-light">No published posts yet.</p>
            ) : (
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li key={post.slug} className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-on-surface font-light">{post.title}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
                    >
                      View
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <p className="text-on-surface-variant text-sm font-light">
            Draft editing, publish controls, and media uploads will be added in the next CMS phase.
          </p>
        </div>
      </main>
    </div>
  );
}
