"use client";

import { useMemo, useState } from "react";

import { FiltersRow } from "@/components/catalog/filters-row";
import { ListingGrid } from "@/components/catalog/listing-grid";
import { MapPanel } from "@/components/catalog/map-panel";
import { Pagination } from "@/components/catalog/pagination";
import { ResultsTopBar } from "@/components/catalog/results-top-bar";
import { SimilarDatesCarousel } from "@/components/catalog/similar-dates-carousel";
import { AppLayout } from "@/components/shared/app-layout";

type SortOrder = "asc" | "desc";

const filters = [
  { id: "price", label: "Price", isActive: false },
  { id: "type", label: "Type of place", isActive: false },
  { id: "washer", label: "Washer", isActive: true },
  { id: "parking", label: "Parking", isActive: true },
  { id: "ac", label: "Air conditioning", isActive: false },
];

const listings = [
  {
    id: "listing-1",
    title: "Modern apartment with balcony",
    locationLabel: "Barcelona, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
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
  {
    id: "listing-2",
    title: "Stylish loft near Sagrada Familia",
    locationLabel: "Barcelona, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    isGuestFavorite: false,
    isSuperhost: true,
    rating: 4.8,
    reviewCount: 88,
    pricePerNight: 145,
    totalPrice: 580,
    nights: 4,
    bedroomText: "1 bedroom",
    bathroomText: "1 bath",
    isSaved: false,
  },
  {
    id: "listing-3",
    title: "Family home with patio and parking",
    locationLabel: "Barcelona, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    isGuestFavorite: true,
    isSuperhost: false,
    rating: 4.95,
    reviewCount: 174,
    pricePerNight: 239,
    originalPricePerNight: 269,
    totalPrice: 956,
    nights: 4,
    bedroomText: "3 bedrooms",
    bathroomText: "2 baths",
    isSaved: false,
  },
  {
    id: "listing-4",
    title: "Minimal studio in the Gothic Quarter",
    locationLabel: "Barcelona, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    isGuestFavorite: false,
    isSuperhost: false,
    rating: 4.7,
    reviewCount: 63,
    pricePerNight: 132,
    totalPrice: 528,
    nights: 4,
    bedroomText: "Studio",
    bathroomText: "1 bath",
    isSaved: false,
  },
];

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(() => {
    const listingsCopy = [...listings];

    listingsCopy.sort((firstListing, secondListing) => {
      if (sortOrder === "asc") {
        return firstListing.pricePerNight - secondListing.pricePerNight;
      }

      return secondListing.pricePerNight - firstListing.pricePerNight;
    });

    return listingsCopy;
  }, [sortOrder]);

  return (
    <AppLayout
      headerMode="results"
      searchSummary={{ destination: "Barcelona", dates: "Jul 4 - Jul 8", guests: "2 guests" }}
    >
      <div className="grid gap-5">
        <ResultsTopBar
          summary={{ destination: "Barcelona", dates: "Jul 4 - Jul 8", guests: "2 guests" }}
          resultsCount={sortedListings.length}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />

        <FiltersRow filters={filters} />

        <section className="grid gap-5 md:grid-cols-[minmax(0,1fr),340px] md:items-start">
          <div className="grid gap-5">
            <ListingGrid listings={sortedListings} />
            <SimilarDatesCarousel
              options={[
                { id: "alt-1", label: "Jul 10 - Jul 14", priceHint: "$172/night" },
                { id: "alt-2", label: "Jul 17 - Jul 21", priceHint: "$165/night" },
              ]}
            />
            <Pagination currentPage={1} totalPages={8} />
          </div>

          <MapPanel
            center={{ lat: 41.3874, lng: 2.1686 }}
            zoom={12}
            markers={[
              { id: "listing-1", lat: 41.3874, lng: 2.1686, priceLabel: "$189", isSelected: true },
              { id: "listing-2", lat: 41.3942, lng: 2.1744, priceLabel: "$145", isSelected: false },
              { id: "listing-3", lat: 41.3812, lng: 2.1604, priceLabel: "$239", isSelected: false },
              { id: "listing-4", lat: 41.3794, lng: 2.1767, priceLabel: "$132", isSelected: false },
            ]}
          />
        </section>
      </div>
    </AppLayout>
  );
}
