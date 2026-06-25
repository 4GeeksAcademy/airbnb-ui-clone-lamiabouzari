import { AppLayout } from "@/components/shared/app-layout";
import { FiltersRow } from "@/components/catalog/filters-row";
import { ListingGrid } from "@/components/catalog/listing-grid";
import { MapPanel } from "@/components/catalog/map-panel";
import { Pagination } from "@/components/catalog/pagination";
import { ResultsTopBar } from "@/components/catalog/results-top-bar";
import { SimilarDatesCarousel } from "@/components/catalog/similar-dates-carousel";

const filters = [
  { id: "price", label: "Price", isActive: false },
  { id: "type", label: "Type of place", isActive: false },
  { id: "washer", label: "Washer", isActive: true },
  { id: "parking", label: "Parking", isActive: true },
  { id: "ac", label: "AC", isActive: false },
];

const listings = [
  {
    id: "listing-1",
    title: "Modern apartment with balcony",
    locationLabel: "Barcelona, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    isGuestFavorite: true,
    isSuperhost: true,
    rating: 4.9,
    reviewCount: 121,
    pricePerNight: 189,
    originalPricePerNight: 219,
    totalPrice: 756,
    nights: 4,
    bedroomText: "2 bedrooms",
    bathroomText: "1 bath",
    isSaved: false,
  },
];

export default function SearchResultsPage() {
  return (
    <AppLayout
      headerMode="results"
      searchSummary={{ destination: "Anywhere", dates: "Any week", guests: "Add guests" }}
    >
      <div className="grid gap-5">
        <ResultsTopBar summary={{ destination: "Barcelona", dates: "Jul 4 - Jul 8", guests: "2 guests" }} />
        <FiltersRow filters={filters} />
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr),360px]">
          <div className="grid gap-5">
            <ListingGrid listings={listings} />
            <SimilarDatesCarousel options={[{ id: "alt-1", label: "Jul 10 - Jul 14", priceHint: "$172/night" }]} />
            <Pagination currentPage={1} totalPages={8} />
          </div>
          <MapPanel
            center={{ lat: 41.3874, lng: 2.1686 }}
            zoom={12}
            markers={[{ id: "listing-1", lat: 41.3874, lng: 2.1686, priceLabel: "$189", isSelected: true }]}
          />
        </section>
      </div>
    </AppLayout>
  );
}
