interface ImagePlaceholderProps {
  alt: string;
  plannedFile: string;
  label?: string;
}

export default function ImagePlaceholder({ alt, plannedFile, label }: ImagePlaceholderProps) {
  return (
    <figure
      className="w-full aspect-[16/10] bg-surface-container border border-dashed border-outline-variant/40 rounded-sm flex flex-col items-center justify-center gap-3 px-6 text-center reveal"
      aria-label={`Image placeholder: ${alt}`}
    >
      <span className="material-symbols-outlined text-3xl text-secondary/60">image</span>
      <figcaption className="text-sm text-on-surface/70 font-light max-w-md">{alt}</figcaption>
      <p className="text-[10px] uppercase tracking-widest text-secondary/80">
        {label ?? 'Visual asset — Plan 03'}
      </p>
      <p className="text-[10px] text-secondary/60 font-mono">{plannedFile}</p>
    </figure>
  );
}
