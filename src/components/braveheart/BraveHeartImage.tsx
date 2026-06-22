import { braveheartImageSrc } from '../../lib/braveheartAssets';

interface BraveHeartImageProps {
  alt: string;
  file: string;
  priority?: boolean;
  className?: string;
}

export default function BraveHeartImage({
  alt,
  file,
  priority = false,
  className = '',
}: BraveHeartImageProps) {
  return (
    <figure className={`w-full reveal image-zoom ${className}`.trim()}>
      <img
        src={braveheartImageSrc(file)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className="w-full h-auto rounded-md"
      />
    </figure>
  );
}
