import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const BASE_URL = process.env.LH_BASE_URL ?? 'http://127.0.0.1:4173';
const OUT_DIR = path.resolve('.agent/validation/lighthouse');
const CHROME_DIR = path.join(OUT_DIR, 'chrome-profile');
const FORCE = process.env.LH_FORCE === '1';

const PAGES = [
  '/',
  '/our-story',
  '/who-we-serve',
  '/savings-comparison',
  '/service-lines',
  '/our-guarantee',
  '/case-studies',
  '/privacy-policy',
  '/terms-of-service',
  '/accessibility',
  '/blog',
  '/blog/how-eligibility-verification-works',
];

const FORM_FACTORS = [
  { id: 'mobile', args: ['--form-factor=mobile', '--screenEmulation.mobile=true'] },
  { id: 'desktop', args: ['--preset=desktop'] },
];

function slugify(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
}

function extractMetrics(report) {
  const perf = report.categories?.performance?.score;
  const audits = report.audits ?? {};
  const pick = (id) => audits[id]?.displayValue ?? audits[id]?.numericValue ?? null;

  return {
    performanceScore: perf != null ? Math.round(perf * 100) : null,
    fcp: pick('first-contentful-paint'),
    lcp: pick('largest-contentful-paint'),
    tbt: pick('total-blocking-time'),
    cls: pick('cumulative-layout-shift'),
    speedIndex: pick('speed-index'),
    tti: pick('interactive'),
    maxPotentialFid: pick('max-potential-fid'),
    serverResponseTime: pick('server-response-time'),
  };
}

function isValidReport(report) {
  return !report?.runtimeError && report?.categories?.performance?.score != null;
}

function readReport(jsonPath) {
  return JSON.parse(readFileSync(jsonPath, 'utf8'));
}

function runLighthouse(url, jsonPath, form) {
  mkdirSync(CHROME_DIR, { recursive: true });
  const chromeFlags = [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--user-data-dir=${CHROME_DIR.replace(/\\/g, '/')}`,
  ].join(' ');

  const args = [
    'lighthouse',
    url,
    '--only-categories=performance',
    '--output=json',
    `--output-path=${jsonPath}`,
    '--quiet',
    `--chrome-flags=${chromeFlags}`,
    ...form.args,
  ];

  const run = spawnSync('npx', args, {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (!existsSync(jsonPath)) {
    return {
      ok: false,
      error: (run.stderr || run.stdout || 'No report written').trim().slice(0, 500),
    };
  }

  try {
    const report = readReport(jsonPath);
    if (!isValidReport(report)) {
      return {
        ok: false,
        error: report?.runtimeError?.message ?? 'Report missing performance score',
      };
    }
    return { ok: true, report };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

mkdirSync(OUT_DIR, { recursive: true });

const results = [];

for (const page of PAGES) {
  const url = `${BASE_URL}${page}`;
  const pageSlug = slugify(page);

  for (const form of FORM_FACTORS) {
    const jsonPath = path.join(OUT_DIR, `${pageSlug}.${form.id}.json`);

    if (!FORCE && existsSync(jsonPath)) {
      try {
        const cached = readReport(jsonPath);
        if (isValidReport(cached)) {
          const metrics = extractMetrics(cached);
          process.stdout.write(`Skipping ${form.id} ${page} (valid cache) ... `);
          console.log(`score ${metrics.performanceScore}`);
          results.push({ page, url, formFactor: form.id, ...metrics, cached: true });
          continue;
        }
      } catch {
        // fall through and re-run
      }
    }

    process.stdout.write(`Auditing ${form.id} ${page} ... `);
    const outcome = runLighthouse(url, jsonPath, form);
    if (!outcome.ok) {
      console.log('FAILED');
      results.push({ page, url, formFactor: form.id, error: outcome.error });
      continue;
    }

    const metrics = extractMetrics(outcome.report);
    console.log(`score ${metrics.performanceScore}`);
    results.push({ page, url, formFactor: form.id, ...metrics, cached: false });
  }
}

try {
  rmSync(CHROME_DIR, { recursive: true, force: true });
} catch {
  // ignore cleanup issues on Windows
}

writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(results, null, 2));
console.log(`\nWrote ${path.join(OUT_DIR, 'summary.json')}`);
