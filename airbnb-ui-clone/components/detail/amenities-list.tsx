import type { ListingAmenity } from "@/types";

type AmenitiesListProps = {
  amenities: ListingAmenity[];
  visibleCount: number;
  onShowAll?: () => void;
};

export function AmenitiesList({ amenities, visibleCount }: AmenitiesListProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Amenities</h2>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700">
        {amenities.slice(0, visibleCount).map((amenity) => (
          <li key={amenity.name}>{amenity.name}</li>
        ))}
      </ul>
    </section>
  );
}
