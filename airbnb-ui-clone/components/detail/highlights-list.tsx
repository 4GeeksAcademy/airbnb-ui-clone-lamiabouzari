type HighlightsListProps = {
  highlights: string[];
};

export function HighlightsList({ highlights }: HighlightsListProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Highlights</h2>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  );
}
