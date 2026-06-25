import { StayMiniCard } from "@/components/home/stay-mini-card";

type FeaturedStay = {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  priceLabel: string;
};

type FeaturedStaysSectionProps = {
  title: string;
  stays: FeaturedStay[];
};

export function FeaturedStaysSection({ title, stays }: FeaturedStaysSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
        <button type="button" className="text-sm font-medium text-neutral-700">
          Show all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {stays.map((stay) => (
          <div key={stay.id} className="min-w-[260px] lg:min-w-0">
            <StayMiniCard
              title={stay.title}
              location={stay.location}
              imageUrl={stay.imageUrl}
              priceLabel={stay.priceLabel}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
