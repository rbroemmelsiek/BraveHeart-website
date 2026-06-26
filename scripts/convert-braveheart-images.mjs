/**
 * Converts Brave Heart source assets from assets-sources/braveheart/ to production WebP under
 * public/assets/images/braveheart/
 *
 * Source PNG/JPG/PSD files live outside public/ so they are not copied into dist/ on build.
 * Preserves original dimensions. Does not delete source files.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'assets-sources', 'braveheart');
const OUTPUT_DIR = path.join(ROOT, 'public', 'assets', 'images', 'braveheart');
const QUALITY = 82;

/** @type {{ source: string; target: string; action: 'convert' | 'copy-reencode' }[]} */
const ASSETS = [
  { source: 'first-responder-real-estate-benefits.png', target: 'first-responder-real-estate-benefits.webp', action: 'convert' },
  { source: 'braveheart-legacy-of-support-history.png', target: 'braveheart-legacy-of-support-history.webp', action: 'convert' },
  { source: 'ai-guardian-team-real-estate-support.png', target: 'ai-guardian-team-real-estate-support.webp', action: 'convert' },
  { source: 'braveheart-hometohome-secure-verification.png', target: 'braveheart-hometohome-secure-verification.webp', action: 'convert' },
  { source: 'talentscout-ai-agent-matching-system.png', target: 'talentscout-ai-agent-matching-system.webp', action: 'convert' },
  { source: 'automated-escrow-title-closing-precision.png', target: 'automated-escrow-title-closing-precision.webp', action: 'convert' },
  { source: 'major-transaction-savings-brokerage-lender.png', target: 'major-transaction-savings-brokerage-lender.webp', action: 'convert' },
  { source: 'real-estate-power-of-aggregation-benefits.png', target: 'real-estate-power-of-aggregation-benefits.webp', action: 'convert' },
  { source: 'real-world-impact-benefit-credit-example.png', target: 'real-world-impact-benefit-credit-example.webp', action: 'convert' },
  { source: 'reduced-closing-costs-discounts.png', target: 'reduced-closing-costs-discounts.webp', action: 'convert' },
  { source: 'comprehensive-lifecycle-real-estate-benefits.png', target: 'comprehensive-lifecycle-real-estate-benefits.webp', action: 'convert' },
  { source: 'first-responder-testimonial-captain-lopez.png', target: 'first-responder-testimonial-captain-lopez.webp', action: 'convert' },
  { source: 'police-history-generational-wealth.png', target: 'police-history-generational-wealth.webp', action: 'convert' },
  { source: 'braveheart-advantage-benefits-list.png', target: 'braveheart-advantage-benefits-list.webp', action: 'convert' },
  { source: 'braveheart-app-qr-code-signup.png', target: 'braveheart-app-qr-code-signup.webp', action: 'convert' },
  { source: 'Brave Heart Logo 2.png', target: 'brave-heart-logo-landscape.webp', action: 'convert' },
  { source: 'icon-final.png', target: 'braveheart-icon.webp', action: 'convert' },
  { source: 'inbox/Karen-Van-Ness-portrait.jpg', target: 'karen-van-ness-portrait.webp', action: 'convert', quality: 95, smartSubsample: false },
  { source: 'BraveHeartHerosJourney.webp', target: 'braveheart-client-heroes-journey.webp', action: 'copy-reencode' },
  { source: 'braveheart-client-heroes-journey.png', target: 'braveheart-client-heroes-journey.webp', action: 'convert' },
  { source: 'Brave Heart LogoDarkSqu.webp', target: 'brave-heart-logo-square.webp', action: 'copy-reencode' },
];

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function getMeta(filePath) {
  const meta = await sharp(filePath).metadata();
  return { width: meta.width ?? 0, height: meta.height ?? 0 };
}

async function convertAsset({ source, target, action, quality = QUALITY, smartSubsample = true }) {
  const sourcePath = path.join(SOURCE_DIR, source);
  const targetPath = path.join(OUTPUT_DIR, target);

  const sourceStat = await fs.stat(sourcePath);
  const sourceMeta = await getMeta(sourcePath);

  const webpOptions = { quality, effort: 6, smartSubsample };
  const pipeline = sharp(sourcePath).webp(webpOptions);
  if (action === 'copy-reencode') {
    pipeline.webp({ ...webpOptions, alphaQuality: quality });
  }

  await pipeline.toFile(targetPath);

  const targetStat = await fs.stat(targetPath);
  const targetMeta = await getMeta(targetPath);

  return {
    originalFile: source,
    originalFormat: path.extname(source).slice(1).toUpperCase(),
    originalDimensions: `${sourceMeta.width}×${sourceMeta.height}`,
    originalSize: formatBytes(sourceStat.size),
    webpFile: target,
    webpPath: `public/assets/images/braveheart/${target}`,
    webpDimensions: `${targetMeta.width}×${targetMeta.height}`,
    webpSize: formatBytes(targetStat.size),
    status: 'Complete',
    notes: action === 'copy-reencode' ? 'Relocated and re-encoded from existing WebP' : 'Converted from PNG',
  };
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];
  for (const asset of ASSETS) {
    const result = await convertAsset(asset);
    results.push(result);
    console.log(`✓ ${result.originalFile} → ${result.webpFile} (${result.webpSize})`);
  }

  const reportPath = path.join(ROOT, 'scripts', '.braveheart-conversion-results.json');
  await fs.writeFile(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nWrote ${results.length} conversion results to ${reportPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
