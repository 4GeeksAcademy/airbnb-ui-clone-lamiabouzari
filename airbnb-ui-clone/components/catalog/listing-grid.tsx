import { ListingCard } from "@/components/catalog/listing-card";

type ListingGridItem = {
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
};

type ListingGridProps = {
  listings: ListingGridItem[];
};

export function ListingGrid({ listings }: ListingGridProps) {
  return (
    <section className="grid gap-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </section>
  );
}
