type AmenitiesGridProps = {
  amenities: string[];
};

export function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">Browse by amenities</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {amenities.map((amenity) => (
          <span key={amenity} className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700">
            {amenity}
          </span>
        ))}
      </div>
    </section>
  );
}
