import Image from "next/image";
import Link from "next/link";

type ListingCardProps = {
  id: string;
  title: string;
  locationLabel: string;
  imageUrl: string;
  isGuestFavorite: boolean;
  isSuperhost: boolean;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  originalPricePerNight?: number;
  totalPrice: number;
  nights: number;
  bedroomText: string;
  bathroomText: string;
  isSaved: boolean;
  onToggleSave?: (id: string) => void;
  onClick?: (id: string) => void;
};

export function ListingCard({
  id,
  title,
  locationLabel,
  imageUrl,
  isGuestFavorite,
  isSuperhost,
  rating,
  reviewCount,
  pricePerNight,
  originalPricePerNight,
  totalPrice,
  nights,
  bedroomText,
  bathroomText,
}: ListingCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-4 transition hover:shadow-md">
      <Link href={`/rooms/${id}`} className="flex gap-4">
        <div className="relative h-44 w-60 shrink-0 overflow-hidden rounded-xl">
          <Image src={imageUrl} alt={title} fill sizes="240px" className="object-cover" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-neutral-600">{locationLabel}</p>
              <h3 className="mt-1 line-clamp-2 text-base font-semibold text-neutral-900">{title}</h3>
            </div>
            <span className="text-lg text-neutral-500" aria-hidden="true">♡</span>
          </div>

          <div className="mt-2 flex gap-2">
            {isGuestFavorite ? <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium">Guest favorite</span> : null}
            {isSuperhost ? <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium">Superhost</span> : null}
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            {bedroomText} · {bathroomText}
          </p>

          <div className="mt-auto flex items-end justify-between pt-3">
            <p className="text-sm text-neutral-700">★ {rating} ({reviewCount})</p>
            <div className="text-right text-sm">
              {originalPricePerNight ? <p className="text-neutral-500 line-through">${originalPricePerNight}/night</p> : null}
              <p className="font-semibold text-neutral-900">${pricePerNight}/night</p>
              <p className="text-neutral-600">${totalPrice} total · {nights} nights</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
