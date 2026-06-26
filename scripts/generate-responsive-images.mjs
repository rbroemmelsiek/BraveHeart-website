/**
 * Generates width-based WebP variants for responsive srcset.
 * Reads production assets from public/assets/images/braveheart/ and writes
 * sibling files named `{basename}-{width}w.webp`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const IMAGE_DIR = path.join(ROOT, 'public', 'assets', 'images', 'braveheart');

/** Infographic widths — phones get 640/960, tablets 1280, desktop uses original. */
const INFOGRAPHIC_WIDTHS = [640, 960, 1280];

/** Portrait display max ~224px — 256 and 512 cover 1x/2x without shipping full asset. */
const PORTRAIT_WIDTHS = [256, 384, 512];

const QUALITY = 82;
const PORTRAIT_QUALITY = 88;

/** Basenames to skip (logos/icons handled separately or not full-bleed). */
const SKIP = new Set([
  'brave-heart-logo-landscape',
  'brave-heart-logo-square',
  'braveheart-icon',
]);

function basename(file) {
  return file.replace(/\.webp$/i, '');
}

function variantName(file, width) {
  return `${basename(file)}-${width}w.webp`;
}

async function generateVariants(file, widths, quality) {
  const sourcePath = path.join(IMAGE_DIR, file);
  const sourceMeta = await sharp(sourcePath).metadata();
  const sourceWidth = sourceMeta.width ?? 0;

  const results = [];
  for (const width of widths) {
    if (width >= sourceWidth) continue;

    const target = variantName(file, width);
    const targetPath = path.join(IMAGE_DIR, target);

    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(targetPath);

    const stat = await fs.stat(targetPath);
    results.push({ file: target, width, bytes: stat.size });
  }

  return results;
}

async function main() {
  const entries = await fs.readdir(IMAGE_DIR);
  const sources = entries.filter(
    (f) => f.endsWith('.webp') && !/-\d+w\.webp$/i.test(f),
  );

  let total = 0;
  for (const file of sources) {
    const base = basename(file);
    if (SKIP.has(base)) {
      console.log(`⊘ skip ${file}`);
      continue;
    }

    const isPortrait = base === 'karen-van-ness-portrait';
    const widths = isPortrait ? PORTRAIT_WIDTHS : INFOGRAPHIC_WIDTHS;
    const quality = isPortrait ? PORTRAIT_QUALITY : QUALITY;

    const variants = await generateVariants(file, widths, quality);
    if (variants.length === 0) {
      console.log(`⊘ ${file} — no smaller variants needed`);
      continue;
    }

    for (const v of variants) {
      console.log(`✓ ${v.file} (${v.width}px, ${(v.bytes / 1024).toFixed(1)} KB)`);
      total += 1;
    }
  }

  console.log(`\nGenerated ${total} responsive variant(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
