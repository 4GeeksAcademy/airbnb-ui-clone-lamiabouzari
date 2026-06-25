import { AppLayout } from "@/components/shared/app-layout";
import { AmenitiesList } from "@/components/detail/amenities-list";
import { AvailabilityCalendar } from "@/components/detail/availability-calendar";
import { BookingCard } from "@/components/detail/booking-card";
import { DescriptionBlock } from "@/components/detail/description-block";
import { ExploreNearbyLinks } from "@/components/detail/explore-nearby-links";
import { HighlightsList } from "@/components/detail/highlights-list";
import { HostCard } from "@/components/detail/host-card";
import { ImageGalleryMosaic } from "@/components/detail/image-gallery-mosaic";
import { ListingTitleBlock } from "@/components/detail/listing-title-block";
import { LocationMap } from "@/components/detail/location-map";
import { PropertySummary } from "@/components/detail/property-summary";
import { RatingsSummary } from "@/components/detail/ratings-summary";
import { ReviewGrid } from "@/components/detail/review-grid";
import { SleepingArrangements } from "@/components/detail/sleeping-arrangements";
import { ThingsToKnow } from "@/components/detail/things-to-know";

type RoomDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;

  return (
    <AppLayout headerMode="detail" searchSummary={{ destination: "Barcelona", dates: "Jul 4 - Jul 8", guests: "2 guests" }}>
      <div className="grid gap-5">
        <ListingTitleBlock
          title={`Room detail scaffold: listing ${id}`}
          locationLabel="Barcelona, Spain"
          rating={4.92}
          reviewCount={201}
        />
        <ImageGalleryMosaic images={["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-5.jpg"]} />

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr),360px]">
          <div className="grid gap-5">
            <PropertySummary propertyType="Entire rental unit" guests={4} bedrooms={2} beds={3} baths={2} />
            <HighlightsList highlights={["Self check-in", "Great location", "Free cancellation available"]} />
            <DescriptionBlock
              description="This page intentionally contains structure-only placeholders for the Airbnb detail experience. Visual implementation and interaction behavior will be added in the next step."
              isExpanded={false}
            />
            <SleepingArrangements items={[{ id: "room-1", label: "Bedroom 1: 1 queen bed" }, { id: "room-2", label: "Bedroom 2: 2 single beds" }]} />
            <AmenitiesList
              amenities={[
                { name: "Wifi", available: true },
                { name: "Kitchen", available: true },
                { name: "Washer", available: true },
                { name: "Air conditioning", available: true },
              ]}
              visibleCount={4}
            />
            <AvailabilityCalendar visibleMonth="July 2026" selectedCheckIn="2026-07-04" selectedCheckOut="2026-07-08" />
            <RatingsSummary
              overallRating={4.92}
              reviewCount={201}
              categoryRatings={{ cleanliness: 4.8, accuracy: 4.9, "check-in": 4.9, communication: 5.0, location: 4.9, value: 4.7 }}
            />
            <ReviewGrid
              reviews={[
                {
                  id: "review-1",
                  authorName: "Camila",
                  location: "Madrid",
                  rating: 5,
                  date: "March 2026",
                  text: "Great place and smooth check-in.",
                },
                {
                  id: "review-2",
                  authorName: "Noah",
                  location: "Toronto",
                  rating: 5,
                  date: "February 2026",
                  text: "Exactly like photos and excellent host communication.",
                },
              ]}
              visibleCount={2}
            />
            <LocationMap lat={41.3874} lng={2.1686} locationLabel="Eixample, Barcelona" />
            <HostCard hostName="Lucia" hostSince="2018" isSuperhost={true} bio="Designer and local city guide." />
            <ThingsToKnow
              houseRules={["No smoking", "No parties", "Check-in after 3 PM"]}
              safetyItems={["Smoke alarm", "First aid kit"]}
              cancellationNotes={["Free cancellation for 48 hours", "Partial refund after that"]}
            />
            <ExploreNearbyLinks
              links={[
                { id: "near-1", label: "Beachfront stays" },
                { id: "near-2", label: "Family-friendly stays" },
              ]}
            />
          </div>

          <BookingCard
            pricePerNight={189}
            originalPricePerNight={219}
            rating={4.92}
            reviewCount={201}
            checkInDate="2026-07-04"
            checkOutDate="2026-07-08"
            guestCount={2}
            serviceFee={48}
            cleaningFee={35}
            taxes={22}
            totalPrice={861}
            isAvailable={true}
          />
        </section>
      </div>
    </AppLayout>
  );
}
