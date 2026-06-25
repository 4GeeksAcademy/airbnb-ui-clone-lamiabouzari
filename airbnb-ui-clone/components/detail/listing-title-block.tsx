type ListingTitleBlockProps = {
  title: string;
  locationLabel: string;
  rating: number;
  reviewCount: number;
};

export function ListingTitleBlock({ title, locationLabel, rating, reviewCount }: ListingTitleBlockProps) {
  return (
    <section className="space-y-2 rounded-2xl bg-white p-5">
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <p className="text-sm text-neutral-600">{locationLabel}</p>
      <p className="text-sm text-neutral-700">{rating} ({reviewCount} reviews)</p>
    </section>
  );
}
