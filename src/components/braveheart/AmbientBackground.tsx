/**
 * Fixed ambient layers: center spotlight + bottom diamond grid (page-load reveal).
 * Inspired by Gemini-style depth; palette stays Brave Heart navy/gold.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-layers" aria-hidden="true">
      <div className="ambient-spotlight" />
      <div className="ambient-diamond-grid" />
    </div>
  );
}
