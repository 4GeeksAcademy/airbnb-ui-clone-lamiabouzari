import Image from "next/image";

type StayMiniCardProps = {
  title: string;
  location: string;
  imageUrl: string;
  priceLabel: string;
};

export function StayMiniCard({ title, location, imageUrl, priceLabel }: StayMiniCardProps) {
  return (
    <article className="overflow-hidden rounded-xl bg-white transition hover:opacity-95">
      <div className="relative h-40 overflow-hidden rounded-xl">
        <Image src={imageUrl} alt={title} fill sizes="(max-width: 1024px) 260px, 25vw" className="object-cover" />
      </div>

      <div className="pb-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-700">★ 4.9</p>
        </div>
        <p className="mt-0.5 text-sm text-neutral-600">{location}</p>
        <p className="mt-1.5 text-sm font-medium text-neutral-900 underline-offset-2">
          <span className="font-semibold">{priceLabel}</span> total before taxes
        </p>
      </div>
    </article>
  );
}
