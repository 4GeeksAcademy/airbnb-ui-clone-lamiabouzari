type PropertySummaryProps = {
  propertyType: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

export function PropertySummary({ propertyType, guests, bedrooms, beds, baths }: PropertySummaryProps) {
  return (
    <section className="rounded-2xl bg-white p-5 text-sm text-neutral-700">
      {propertyType} • {guests} guests • {bedrooms} bedrooms • {beds} beds • {baths} baths
    </section>
  );
}
