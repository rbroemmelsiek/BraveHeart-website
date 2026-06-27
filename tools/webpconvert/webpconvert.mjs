/**
 * Convert JPEG, PNG, and PDF files in one directory to WebP.
 * Current folder only — no subfolders.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { pdf } from 'pdf-to-img';

const DEFAULT_QUALITY = 82;
const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

function parseArgs(argv) {
  const options = {
    directory: process.cwd(),
    quality: DEFAULT_QUALITY,
    force: false,
  };

  for (const arg of argv) {
    if (arg === '--force' || arg === '-f') {
      options.force = true;
      continue;
    }
    if (arg === '--help' || arg === '-h' || arg === '/?') {
      printHelp();
      process.exit(0);
    }
    if (arg.startsWith('--quality=')) {
      options.quality = Number.parseInt(arg.slice('--quality='.length), 10);
      continue;
    }
    if (arg.startsWith('-') || arg.startsWith('/')) {
      throw new Error(`Unknown option: ${arg}`);
    }
    options.directory = path.resolve(arg);
  }

  if (!Number.isFinite(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error('Quality must be an integer between 1 and 100.');
  }

  return options;
}

function printHelp() {
  console.log(`
Convert JPEG, PNG, and PDF files in the current folder to WebP.

Usage:
  webpconvert.bat
  node E:\\webpconvert\\webpconvert.mjs [directory] [--quality=82] [--force]

PDF output:
  My-Brochure.pdf (3 pages) -> My-Brochure-P1.webp, My-Brochure-P2.webp, My-Brochure-P3.webp
`);
}

function webSafeName(raw) {
  const safe = String(raw).trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_.]+|[-_.]+$/g, '');

  return safe || 'document';
}

function webSafeBaseName(sourcePath) {
  return webSafeName(path.basename(sourcePath, path.extname(sourcePath)));
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function isUpToDate(sourcePath, targetPath) {
  if (!(await pathExists(targetPath))) return false;
  const [sourceStat, targetStat] = await Promise.all([
    fs.stat(sourcePath),
    fs.stat(targetPath),
  ]);
  return targetStat.mtimeMs >= sourceStat.mtimeMs;
}

async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(directory, entry.name))
    .filter((filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      return RASTER_EXTENSIONS.has(ext) || ext === '.pdf';
    })
    .sort();
}

function pdfPageName(directory, title, pageNumber) {
  return path.join(directory, `${title}-P${pageNumber}.webp`);
}

async function convertRaster(sourcePath, quality, force) {
  const targetPath = `${sourcePath.slice(0, -path.extname(sourcePath).length)}.webp`;
  if (!force && (await isUpToDate(sourcePath, targetPath))) {
    return { sourcePath, targetPath, status: 'skipped', pages: 1 };
  }

  await sharp(sourcePath)
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(targetPath);

  return {
    sourcePath,
    targetPath,
    status: 'converted',
    pages: 1,
  };
}

async function convertPdf(sourcePath, quality, force) {
  const directory = path.dirname(sourcePath);
  const doc = await pdf(sourcePath, { scale: 2 });
  const title = doc.metadata?.Title
    ? webSafeName(doc.metadata.Title)
    : webSafeBaseName(sourcePath);
  /** @type {string[]} */
  const targetPaths = [];
  let pageNumber = 0;
  let wroteAny = false;

  for await (const page of doc) {
    pageNumber += 1;
    const targetPath = pdfPageName(directory, title, pageNumber);
    targetPaths.push(targetPath);

    if (!force && (await isUpToDate(sourcePath, targetPath))) {
      continue;
    }

    await sharp(page)
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(targetPath);
    wroteAny = true;
  }

  if (pageNumber === 0) {
    throw new Error('PDF has no pages.');
  }

  const allSkipped = !force && !wroteAny;

  return {
    sourcePath,
    targetPath: pageNumber === 1 ? targetPaths[0] : `${title}-P1..P${pageNumber}.webp`,
    targetPaths,
    status: allSkipped ? 'skipped' : 'converted',
    pages: pageNumber,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const directoryStat = await fs.stat(options.directory).catch(() => null);
  if (!directoryStat?.isDirectory()) {
    throw new Error(`Directory not found: ${options.directory}`);
  }

  const files = await collectFiles(options.directory);
  if (files.length === 0) {
    console.log(`No JPEG, PNG, or PDF files found in ${options.directory}`);
    return;
  }

  console.log(`Converting ${files.length} file(s) in ${options.directory}`);
  console.log(`Quality: ${options.quality}${options.force ? ' | force' : ''}\n`);

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const sourcePath of files) {
    const ext = path.extname(sourcePath).toLowerCase();
    const label = path.basename(sourcePath);

    try {
      const result = ext === '.pdf'
        ? await convertPdf(sourcePath, options.quality, options.force)
        : await convertRaster(sourcePath, options.quality, options.force);

      if (result.status === 'skipped') {
        skipped += 1;
        console.log(`- skip  ${label}`);
        continue;
      }

      converted += 1;
      if (result.pages > 1) {
        const names = result.targetPaths.map((p) => path.basename(p)).join(', ');
        console.log(`- ok    ${label} -> ${names}`);
      } else {
        console.log(`- ok    ${label} -> ${path.basename(result.targetPath)}`);
      }
    } catch (error) {
      failed += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`- fail  ${label}: ${message}`);
    }
  }

  console.log(`\nDone. Converted: ${converted}, skipped: ${skipped}, failed: ${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
