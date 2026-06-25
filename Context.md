# Airbnb UI Clone - Step 0 Context

## 1) Project Overview

This project recreates the core Airbnb browsing and booking experience using Next.js and React.
The goal is to build a realistic, component-driven UI clone that includes:

1. A marketing-style home page.
2. A search/catalog results page with map preview and listing cards.
3. A room detail page with gallery, amenities, host info, reviews, and booking panel.

Primary objective for Step 0:
Define the visual structure, user flow, component architecture, and data/state requirements before writing code.


## 2) User Description

Primary user personas:

1. Traveler planning a trip.
2. Family or group looking for specific amenities (pool, kitchen, free parking, etc.).
3. Remote worker looking for suitable stays (workspace, Wi-Fi, long stay options).

User goals:

1. Discover attractive places quickly.
2. Filter listings by destination, dates, guests, and amenities.
3. Compare options using images, ratings, location, and price.
4. Open a listing and evaluate details before reserving.
5. Confirm availability, date range, and total pricing context.


## 3) Page Breakdown (From Screenshots)

## 3.1 Home Page

Purpose:
Landing/marketing page to inspire exploration and start search.

Key visible sections:

1. Top navigation/header.
2. Hero section with:
	- Large lifestyle property image.
	- Left search card (location, check-in/check-out, adults/children, CTA button).
3. Value proposition strip (flexibility, listing scale, smart filters).
4. Category cards section (houses, apartments, private rooms).
5. Horizontal product rows (pool stays, kitchen stays).
6. Amenity chips section (pool, parking, washer, AC, fireplace, TV, heating, barbecue).
7. FAQ accordion section.
8. Footer with region breadcrumb and support/hosting/company links.

UX intent:

1. Inspire first.
2. Guide into search journey.
3. Build trust through social proof and clear categories.


## 3.2 Catalog / Search Results Page

Purpose:
Show filtered listings in a dense, comparable format.

Key visible sections:

1. Compact top bar with destination/date/guest summary.
2. Filter chips row (price, type of place, washer, parking, AC, etc.).
3. Main content split:
	- Left: grid/list of listing cards.
	- Right: map preview panel with price bubbles.
4. Listing card details:
	- Image, badges (Guest favorite, Superhost), heart/save icon.
	- Title + location snippet.
	- Beds/baths summary.
	- Rating + number of reviews.
	- Old price + discounted price + nights context.
5. Similar dates recommendation carousel block.
6. Pagination row.
7. Footer links.

UX intent:

1. Fast comparison between many options.
2. Keep map awareness while browsing cards.
3. Encourage refinement with filters and similar-date suggestions.


## 3.3 Room Detail Page

Purpose:
Provide all information required for booking decision.

Key visible sections:

1. Sticky/compact header with search summary and user actions.
2. Property title and image gallery mosaic.
3. Main two-column layout:
	- Left: details.
	- Right: booking card with price, date inputs, guest count, reserve CTA.
4. Host and property quick facts (type, guests, bedrooms, beds, baths).
5. Highlights/feature callouts.
6. Full description with show-more toggle.
7. Sleeping arrangement summary.
8. Amenities list + show all amenities button.
9. Availability calendar block.
10. Ratings summary with category breakdown.
11. Review cards.
12. Map/location section.
13. Host profile card.
14. House rules, safety, cancellation sections.
15. Nearby/explore links + footer.

UX intent:

1. Reduce uncertainty before reservation.
2. Present trust signals (reviews, host quality, policy transparency).
3. Keep booking action always obvious.


## 4) Main Components

Global/shared components:

1. AppLayout
2. Header
3. Footer
4. SearchBar / SearchSummaryBar
5. FilterChip
6. SectionHeader
7. Button
8. IconButton
9. TagBadge (Guest favorite, Superhost)
10. Accordion (FAQ / policy toggles)

Home page components:

1. HeroSection
2. SearchCard
3. ValuePropsSection
4. CategoryCard
5. FeaturedStaysSection
6. StayMiniCard
7. AmenitiesGrid
8. FAQSection

Catalog page components:

1. ResultsTopBar
2. FiltersRow
3. ListingGrid
4. ListingCard
5. MapPanel
6. SimilarDatesCarousel
7. Pagination

Room detail page components:

1. ListingTitleBlock
2. ImageGalleryMosaic
3. PropertySummary
4. BookingCard
5. HighlightsList
6. DescriptionBlock
7. SleepingArrangements
8. AmenitiesList
9. AvailabilityCalendar
10. RatingsSummary
11. ReviewGrid
12. LocationMap
13. HostCard
14. ThingsToKnow
15. ExploreNearbyLinks


## 5) Component Hierarchy

High-level app tree:

1. AppLayout
2. Header
3. PageContent
4. Footer

Home page hierarchy:

1. HomePage
2. HeroSection
3. SearchCard
4. ValuePropsSection
5. CategoryCardsSection
6. FeaturedStaysSection (reusable, appears multiple times)
7. AmenitiesGrid
8. FAQSection

Catalog page hierarchy:

1. SearchResultsPage
2. ResultsTopBar
3. FiltersRow
4. ResultsContent
5. ListingsColumn
6. ListingGrid
7. ListingCard (repeated)
8. SimilarDatesCarousel
9. Pagination
10. MapColumn
11. MapPanel

Room detail page hierarchy:

1. ListingDetailPage
2. ListingTitleBlock
3. ImageGalleryMosaic
4. DetailContent
5. LeftColumn
6. PropertySummary
7. HighlightsList
8. DescriptionBlock
9. SleepingArrangements
10. AmenitiesList
11. AvailabilityCalendar
12. RatingsSummary
13. ReviewGrid
14. LocationMap
15. HostCard
16. ThingsToKnow
17. RightColumn
18. BookingCard


## 6) Expected Props (By Important Components)

Header props:

1. `mode` ("home" | "results" | "detail")
2. `searchSummary` (destination, dates, guests)
3. `onSearchClick`
4. `onProfileClick`

SearchCard props:

1. `location`
2. `checkInDate`
3. `checkOutDate`
4. `adults`
5. `children`
6. `onChange`
7. `onSubmit`

ListingCard props:

1. `id`
2. `title`
3. `locationLabel`
4. `imageUrl`
5. `isGuestFavorite`
6. `isSuperhost`
7. `rating`
8. `reviewCount`
9. `pricePerNight`
10. `originalPricePerNight` (optional)
11. `totalPrice`
12. `nights`
13. `bedroomText`
14. `bathroomText`
15. `isSaved`
16. `onToggleSave`
17. `onClick`

MapPanel props:

1. `center` (lat/lng)
2. `zoom`
3. `markers` (id, lat, lng, priceLabel, isSelected)
4. `onMarkerSelect`

FilterChip props:

1. `label`
2. `isActive`
3. `onClick`
4. `icon` (optional)

BookingCard props:

1. `pricePerNight`
2. `originalPricePerNight` (optional)
3. `rating`
4. `reviewCount`
5. `checkInDate`
6. `checkOutDate`
7. `guestCount`
8. `serviceFee` (optional)
9. `cleaningFee` (optional)
10. `taxes` (optional)
11. `totalPrice`
12. `isAvailable`
13. `onDateChange`
14. `onGuestChange`
15. `onReserve`

AmenitiesList props:

1. `amenities` (name, icon, available)
2. `visibleCount`
3. `onShowAll`

RatingsSummary props:

1. `overallRating`
2. `reviewCount`
3. `categoryRatings` (cleanliness, accuracy, check-in, communication, location, value)

ReviewGrid props:

1. `reviews` (id, authorName, location, avatarUrl, rating, date, text)
2. `visibleCount`
3. `onShowAllReviews`


## 7) State Requirements (useState)

Global/shared state candidates:

1. `searchParams`
2. `activeFilters`
3. `savedListingIds`
4. `isMobileMenuOpen`

Home page local state:

1. `heroSearchLocation`
2. `heroCheckIn`
3. `heroCheckOut`
4. `heroAdults`
5. `heroChildren`
6. `openFaqItemId`

Catalog page local state:

1. `results`
2. `isLoadingResults`
3. `resultsError`
4. `selectedListingId`
5. `mapCenter`
6. `mapZoom`
7. `currentPage`
8. `sortOption`
9. `showFilterModal` (mobile)

Room detail page local state:

1. `listingDetail`
2. `isLoadingDetail`
3. `detailError`
4. `selectedGalleryImageIndex`
5. `showAllPhotos`
6. `showFullDescription`
7. `showAllAmenities`
8. `selectedCheckIn`
9. `selectedCheckOut`
10. `selectedGuests`
11. `reserveInProgress`
12. `reviewsPage`
13. `calendarVisibleMonth`


## 8) Data Loading Requirements (useEffect)

General strategy:

1. Trigger data fetches on mount and when query-relevant state changes.
2. Keep loading and error state explicit for each page.
3. Separate API data transformation from rendering components.

Home page useEffect needs:

1. Load featured categories.
2. Load curated stay collections (pool, kitchen).
3. Load amenity shortcuts and FAQ content.

Typical dependencies:

1. On mount only for static marketing content.
2. Optionally locale/region dependency if content is regionalized.

Catalog page useEffect needs:

1. Fetch listings when `searchParams`, `activeFilters`, `currentPage`, or `sortOption` changes.
2. Update map markers when results change.
3. Fetch similar-date alternatives when base search dates exist.

Typical dependencies:

1. `[searchParams, activeFilters, currentPage, sortOption]`
2. Separate effect for map sync: `[results, selectedListingId]`

Room detail page useEffect needs:

1. Fetch listing detail when listing `id` changes.
2. Fetch reviews for selected listing and current reviews page.
3. Fetch availability/calendar pricing when date range or month context changes.
4. Recompute booking price breakdown when date/guest inputs change.

Typical dependencies:

1. `[listingId]`
2. `[listingId, reviewsPage]`
3. `[listingId, selectedCheckIn, selectedCheckOut, selectedGuests, calendarVisibleMonth]`


## 9) Navigation and User Flow

Core flow:

1. User lands on Home page.
2. User enters destination/dates/guests and submits search.
3. User reaches Catalog page with prefilled query and visible filters.
4. User scans cards, map, and prices; optionally saves favorites.
5. User opens one listing.
6. User reviews details, amenities, host, calendar, and ratings.
7. User selects date + guests and presses reserve CTA.


## 10) UX/Visual Notes to Preserve in Clone

1. Generous whitespace and clean card-based composition.
2. Rounded corners, subtle borders, and low-contrast gray backgrounds.
3. Strong imagery as primary visual driver.
4. Trust and quality cues (ratings, badges, host signals).
5. Sticky or always-visible booking actions on detail page.
6. Mobile-ready responsive behavior for all major sections.


## 11) Scope Boundary for Step 0

Included now:

1. Product understanding.
2. Component architecture.
3. Props/state/effect planning.
4. Page and user flow analysis.

Not included now:

1. Code implementation.
2. Project scaffolding.
3. Styling implementation.
4. API integration coding.

This document is ready to guide Step 1 implementation.
