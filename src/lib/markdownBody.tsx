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

export function MarkdownBody({ content }: { content: string }) {
  const lines = content.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let blockIndex = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`list-${blockIndex}`} className="list-disc pl-6 space-y-2 text-on-surface/85">
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
          className="font-serif font-light text-2xl md:text-3xl text-on-surface mt-10 mb-4"
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
          className="font-serif font-light text-xl md:text-2xl text-on-surface mt-8 mb-3"
        >
          {renderInline(trimmed.slice(4), `h3-${blockIndex}`)}
        </h3>,
      );
      blockIndex += 1;
      continue;
    }

    blocks.push(
      <p key={`p-${blockIndex}`} className="text-on-surface/85 font-light leading-relaxed">
        {renderInline(trimmed, `p-${blockIndex}`)}
      </p>,
    );
    blockIndex += 1;
  }

  flushList();

  return <div className="space-y-4">{blocks}</div>;
}
