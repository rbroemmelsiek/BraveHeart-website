import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const postsDir = path.join(rootDir, 'content', 'braveheart', 'posts');
const outputPath = path.join(rootDir, 'public', 'sitemap.xml');

const PRODUCTION_DOMAIN = 'https://braveheartfirstresponders.com';

const PHASE_1_ROUTES = [
  { loc: `${PRODUCTION_DOMAIN}/`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '1.0' },
  { loc: `${PRODUCTION_DOMAIN}/our-story`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.8' },
  { loc: `${PRODUCTION_DOMAIN}/who-we-serve`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.8' },
  { loc: `${PRODUCTION_DOMAIN}/savings-comparison`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.8' },
  { loc: `${PRODUCTION_DOMAIN}/service-lines`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.8' },
  { loc: `${PRODUCTION_DOMAIN}/our-guarantee`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.8' },
  { loc: `${PRODUCTION_DOMAIN}/case-studies`, lastmod: '2026-06-21', changefreq: 'monthly', priority: '0.7' },
  { loc: `${PRODUCTION_DOMAIN}/privacy-policy`, lastmod: '2026-06-21', changefreq: 'yearly', priority: '0.3' },
  { loc: `${PRODUCTION_DOMAIN}/terms-of-service`, lastmod: '2026-06-21', changefreq: 'yearly', priority: '0.3' },
  { loc: `${PRODUCTION_DOMAIN}/accessibility`, lastmod: '2026-06-21', changefreq: 'yearly', priority: '0.3' },
  { loc: `${PRODUCTION_DOMAIN}/blog`, lastmod: '2026-06-21', changefreq: 'weekly', priority: '0.7' },
];

function parseFrontmatter(source) {
  const trimmed = source.replace(/^\uFEFF/, '');
  if (!trimmed.startsWith('---')) {
    return { data: {}, body: trimmed };
  }

  const closingIndex = trimmed.indexOf('---', 3);
  if (closingIndex === -1) {
    return { data: {}, body: trimmed };
  }

  const yamlBlock = trimmed.slice(3, closingIndex).trim();
  const data = {};

  for (const line of yamlBlock.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    const value = match[2].trim().replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }

  return { data };
}

function loadPublishedPostEntries() {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const source = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = parseFrontmatter(source);
      return data;
    })
    .filter((data) => (data.status || 'draft').toLowerCase() === 'published')
    .map((data) => ({
      loc:
        data.canonicalUrl ||
        `${PRODUCTION_DOMAIN}/blog/${data.slug}`,
      lastmod: data.lastUpdated || data.date || '2026-06-21',
      changefreq: 'monthly',
      priority: '0.6',
    }));
}

function renderSitemap(entries) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const entries = [...PHASE_1_ROUTES, ...loadPublishedPostEntries()];
fs.writeFileSync(outputPath, renderSitemap(entries), 'utf8');
console.log(`Generated sitemap with ${entries.length} entries at ${outputPath}`);
