import { braveheartImageSrc } from '../../lib/braveheartAssets';

interface BraveHeartImageProps {
  alt: string;
  file: string;
  priority?: boolean;
  className?: string;
  /** When false, skips hover scale (prevents clipping on detail infographics). Default true. */
  zoomOnHover?: boolean;
  imgClassName?: string;
}

export default function BraveHeartImage({
  alt,
  file,
  priority = false,
  className = '',
  zoomOnHover = true,
  imgClassName = '',
}: BraveHeartImageProps) {
  return (
    <figure
      className={`w-full reveal ${zoomOnHover ? 'image-zoom' : 'overflow-visible'} ${className}`.trim()}
    >
      <img
        src={braveheartImageSrc(file)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`w-full h-auto max-w-full block ${zoomOnHover ? 'rounded-md' : ''} ${imgClassName}`.trim()}
      />
    </figure>
  );
}
