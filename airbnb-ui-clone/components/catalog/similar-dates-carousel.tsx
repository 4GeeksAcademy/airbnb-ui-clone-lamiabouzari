type SimilarDateOption = {
  id: string;
  label: string;
  priceHint: string;
};

type SimilarDatesCarouselProps = {
  options: SimilarDateOption[];
};

export function SimilarDatesCarousel({ options }: SimilarDatesCarouselProps) {
  return (
    <section className="rounded-2xl bg-white p-4">
      <h3 className="text-base font-semibold text-neutral-900">Similar dates</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <span key={option.id} className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700">
            {option.label} • {option.priceHint}
          </span>
        ))}
      </div>
    </section>
  );
}
