import {
  braveheartImageSrc,
  infographicDefaultSrc,
  infographicDimensions,
  infographicSrcSet,
  INFOGRAPHIC_SIZES,
} from '../../lib/braveheartAssets';

interface BraveHeartImageProps {
  alt: string;
  file: string;
  priority?: boolean;
  className?: string;
  /** When false, skips hover scale (prevents clipping on detail infographics). Default true. */
  zoomOnHover?: boolean;
  imgClassName?: string;
  /** Override default content-column sizes attribute. */
  sizes?: string;
  /** Skip responsive srcset (logos, one-off assets). Default true for marketing infographics. */
  responsive?: boolean;
}

export default function BraveHeartImage({
  alt,
  file,
  priority = false,
  className = '',
  zoomOnHover = true,
  imgClassName = '',
  sizes = INFOGRAPHIC_SIZES,
  responsive = true,
}: BraveHeartImageProps) {
  const src = responsive ? infographicDefaultSrc(file) : braveheartImageSrc(file);
  const srcSet = responsive ? infographicSrcSet(file) : undefined;
  const dims = responsive ? infographicDimensions(file) : null;

  return (
    <figure
      className={`w-full ${zoomOnHover ? 'image-zoom reveal-motion' : 'overflow-visible'} ${className}`.trim()}
      style={
        dims
          ? { aspectRatio: `${dims.width} / ${dims.height}` }
          : undefined
      }
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        width={dims?.width}
        height={dims?.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`w-full h-auto max-w-full block ${zoomOnHover ? 'rounded-md' : ''} ${imgClassName}`.trim()}
      />
    </figure>
  );
}
