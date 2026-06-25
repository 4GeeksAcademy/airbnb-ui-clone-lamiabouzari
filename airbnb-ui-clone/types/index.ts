export type HeaderMode = "home" | "results" | "detail";

export type SearchSummary = {
  destination: string;
  dates: string;
  guests: string;
};

export type SearchParamsState = {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
};

export type ListingMarker = {
  id: string;
  lat: number;
  lng: number;
  priceLabel: string;
  isSelected: boolean;
};

export type ListingAmenity = {
  name: string;
  icon?: string;
  available: boolean;
};

export type RatingCategory = {
  cleanliness: number;
  accuracy: number;
  "check-in": number;
  communication: number;
  location: number;
  value: number;
};

export type ReviewItem = {
  id: string;
  authorName: string;
  location: string;
  avatarUrl?: string;
  rating: number;
  date: string;
  text: string;
};
