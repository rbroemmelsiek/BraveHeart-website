/** Production WebP base path for Brave Heart marketing assets. */
export const BRAVEHEART_IMAGE_BASE = '/assets/images/braveheart/';

export function braveheartImageSrc(filename: string): string {
  return `${BRAVEHEART_IMAGE_BASE}${filename}`;
}
