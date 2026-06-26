import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const href = match[2];
    const label = match[1];
    const linkKey = `${keyPrefix}-link-${index}`;
    index += 1;

    if (href.startsWith('/')) {
      nodes.push(
        <Link key={linkKey} to={href} className="text-primary hover:opacity-80 transition-opacity">
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a
          key={linkKey}
          href={href}
          className="text-primary hover:opacity-80 transition-opacity"
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function MarkdownBody({
  content,
  variant = 'default',
}: {
  content: string;
  variant?: 'default' | 'article';
}) {
  const isArticle = variant === 'article';
  const bodyClass = isArticle
    ? 'space-y-6 text-[1.0625rem] md:text-lg leading-[1.75] md:leading-[1.8]'
    : 'space-y-4';
  const paragraphClass = isArticle
    ? 'text-on-surface/90 font-light'
    : 'text-on-surface/85 font-light leading-relaxed';
  const listClass = isArticle
    ? 'list-disc pl-6 space-y-3 text-on-surface/90 font-light'
    : 'list-disc pl-6 space-y-2 text-on-surface/85';
  const h2Class = isArticle
    ? 'font-serif font-light text-2xl md:text-[1.75rem] text-on-surface mt-12 mb-5 first:mt-0'
    : 'font-serif font-light text-2xl md:text-3xl text-on-surface mt-10 mb-4';
  const h3Class = isArticle
    ? 'font-serif font-light text-xl md:text-2xl text-on-surface mt-10 mb-4'
    : 'font-serif font-light text-xl md:text-2xl text-on-surface mt-8 mb-3';
  const lines = content.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let blockIndex = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`list-${blockIndex}`} className={listClass}>
        {listItems.map((item, itemIndex) => (
          <li key={`list-${blockIndex}-item-${itemIndex}`}>{renderInline(item, `list-${blockIndex}-${itemIndex}`)}</li>
        ))}
      </ul>,
    );
    blockIndex += 1;
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();

    if (trimmed.startsWith('## ')) {
      blocks.push(
        <h2
          key={`h2-${blockIndex}`}
          className={h2Class}
        >
          {renderInline(trimmed.slice(3), `h2-${blockIndex}`)}
        </h2>,
      );
      blockIndex += 1;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      blocks.push(
        <h3
          key={`h3-${blockIndex}`}
          className={h3Class}
        >
          {renderInline(trimmed.slice(4), `h3-${blockIndex}`)}
        </h3>,
      );
      blockIndex += 1;
      continue;
    }

    blocks.push(
      <p key={`p-${blockIndex}`} className={paragraphClass}>
        {renderInline(trimmed, `p-${blockIndex}`)}
      </p>,
    );
    blockIndex += 1;
  }

  flushList();

  return <div className={bodyClass}>{blocks}</div>;
}
