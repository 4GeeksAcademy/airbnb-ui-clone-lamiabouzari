"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { AppLayout } from "@/components/shared/app-layout";

interface AmenityItem {
  icon: string;
  label: string;
}

interface HostInfo {
  name: string;
  yearsHosting: number;
  avatarUrl?: string;
}

interface RoomData {
  id: string;
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
  pricePerNight: number;
  photos: string[];
  host: HostInfo;
  amenities: AmenityItem[];
}

const roomsById: Record<string, RoomData> = {
  "listing-1": {
    id: "listing-1",
    title: "Modern apartment with balcony",
    rating: 4.9,
    reviewCount: 121,
    location: "Barcelona, Spain",
    pricePerNight: 189,
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
    ],
    host: {
      name: "Lucia",
      yearsHosting: 8,
    },
    amenities: [
      { icon: "Wi-Fi", label: "Fast wifi" },
      { icon: "Kitchen", label: "Full kitchen" },
      { icon: "Car", label: "Free parking" },
      { icon: "AC", label: "Air conditioning" },
      { icon: "TV", label: "50in HDTV" },
      { icon: "Shower", label: "Walk-in shower" },
    ],
  },
  "listing-2": {
    id: "listing-2",
    title: "Stylish loft near Sagrada Familia",
    rating: 4.8,
    reviewCount: 88,
    location: "Barcelona, Spain",
    pricePerNight: 145,
    photos: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    ],
    host: {
      name: "Marco",
      yearsHosting: 5,
    },
    amenities: [
      { icon: "Wi-Fi", label: "Fast wifi" },
      { icon: "Desk", label: "Dedicated workspace" },
      { icon: "Kitchen", label: "Kitchenette" },
      { icon: "Washer", label: "Washer" },
      { icon: "Heat", label: "Heating" },
      { icon: "Lift", label: "Elevator" },
    ],
  },
  "listing-3": {
    id: "listing-3",
    title: "Family home with patio and parking",
    rating: 4.95,
    reviewCount: 174,
    location: "Barcelona, Spain",
    pricePerNight: 239,
    photos: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    ],
    host: {
      name: "Sofia",
      yearsHosting: 11,
    },
    amenities: [
      { icon: "Pool", label: "Shared pool" },
      { icon: "Car", label: "Driveway parking" },
      { icon: "Kitchen", label: "Chef's kitchen" },
      { icon: "BBQ", label: "BBQ grill" },
      { icon: "Washer", label: "Washer and dryer" },
      { icon: "Family", label: "Family friendly" },
    ],
  },
  "listing-4": {
    id: "listing-4",
    title: "Minimal studio in the Gothic Quarter",
    rating: 4.7,
    reviewCount: 63,
    location: "Barcelona, Spain",
    pricePerNight: 132,
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448075-bb4caa6f9f9f?auto=format&fit=crop&w=1600&q=80",
    ],
    host: {
      name: "Daniel",
      yearsHosting: 3,
    },
    amenities: [
      { icon: "Wi-Fi", label: "Wifi" },
      { icon: "Coffee", label: "Coffee maker" },
      { icon: "Kitchen", label: "Kitchenette" },
      { icon: "TV", label: "Smart TV" },
      { icon: "AC", label: "Air conditioning" },
      { icon: "Metro", label: "Near metro" },
    ],
  },
};

const minimumGuests = 1;
const maximumGuests = 10;

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const roomId = params?.id ?? "";

  const [room, setRoom] = useState<RoomData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(2);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const selectedRoom = roomsById[roomId] ?? null;
      setRoom(selectedRoom);
      setCurrentPhotoIndex(0);
      setIsLoading(false);
    }, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [roomId]);

  const goToNextPhoto = () => {
    if (!room) {
      return;
    }

    setCurrentPhotoIndex((previousIndex) => (previousIndex + 1) % room.photos.length);
  };

  const goToPreviousPhoto = () => {
    if (!room) {
      return;
    }

    setCurrentPhotoIndex((previousIndex) =>
      previousIndex === 0 ? room.photos.length - 1 : previousIndex - 1,
    );
  };

  const increaseGuests = () => {
    setGuestCount((previousGuests) => Math.min(maximumGuests, previousGuests + 1));
  };

  const decreaseGuests = () => {
    setGuestCount((previousGuests) => Math.max(minimumGuests, previousGuests - 1));
  };

  return (
    <AppLayout
      headerMode="detail"
      searchSummary={{ destination: room?.location ?? "Room details", dates: "Add dates", guests: `${guestCount} guests` }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
          >
            <span aria-hidden="true">←</span>
            Back to catalog
          </Link>
        </div>

        {isLoading ? (
          <section className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-16 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Loading room</p>
              <p className="mt-3 text-lg text-neutral-700">Fetching listing details for {roomId}...</p>
            </div>
          </section>
        ) : null}

        {!isLoading && !room ? (
          <section className="rounded-2xl border border-neutral-200 bg-white px-6 py-14 text-center">
            <h1 className="text-2xl font-semibold text-neutral-900">Room not found</h1>
            <p className="mt-3 text-neutral-600">No listing data was found for id: {roomId}</p>
          </section>
        ) : null}

        {!isLoading && room ? (
          <div className="grid gap-7 pb-8">
            <section className="grid gap-3">
              <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-[30rem]">
                <Image
                  src={room.photos[currentPhotoIndex]}
                  alt={`${room.title} photo ${currentPhotoIndex + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-3">
                <button
                  type="button"
                  onClick={goToPreviousPhoto}
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                >
                  Previous
                </button>
                <p className="text-sm text-neutral-600">
                  Photo {currentPhotoIndex + 1} of {room.photos.length}
                </p>
                <button
                  type="button"
                  onClick={goToNextPhoto}
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                >
                  Next
                </button>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr),340px] lg:items-start">
              <div className="grid gap-7">
                <header className="border-b border-neutral-200 pb-6">
                  <h1 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">{room.title}</h1>
                  <p className="mt-3 text-sm text-neutral-700">
                    <span className="font-medium">★ {room.rating.toFixed(2)}</span>
                    <span className="mx-2">·</span>
                    <span>{room.reviewCount} reviews</span>
                    <span className="mx-2">·</span>
                    <span className="underline decoration-neutral-400 underline-offset-2">{room.location}</span>
                  </p>
                </header>

                <section className="grid gap-4 border-b border-neutral-200 pb-7">
                  <h2 className="text-xl font-semibold text-neutral-900">Hosted by {room.host.name}</h2>
                  <div className="flex items-center gap-4">
                    {room.host.avatarUrl ? (
                      <Image
                        src={room.host.avatarUrl}
                        alt={`Host ${room.host.name}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 text-lg font-semibold text-neutral-700">
                        {room.host.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <p className="font-medium text-neutral-900">{room.host.name}</p>
                      <p className="text-sm text-neutral-600">{room.host.yearsHosting} years hosting</p>
                    </div>
                  </div>
                </section>

                <section className="grid gap-4">
                  <h2 className="text-xl font-semibold text-neutral-900">What this place offers</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {room.amenities.map((amenity) => (
                      <article
                        key={amenity.label}
                        className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3"
                      >
                        <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">
                          {amenity.icon}
                        </span>
                        <span className="text-sm font-medium text-neutral-800">{amenity.label}</span>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
                <div className="flex items-end justify-between">
                  <p className="text-lg text-neutral-700">
                    <span className="text-2xl font-semibold text-neutral-900">${room.pricePerNight}</span> / night
                  </p>
                  <p className="text-sm text-neutral-600">★ {room.rating.toFixed(2)}</p>
                </div>

                <div className="mt-5 grid gap-3 rounded-xl border border-neutral-200 p-4">
                  <p className="text-sm font-medium text-neutral-800">Guests</p>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={decreaseGuests}
                      disabled={guestCount <= minimumGuests}
                      className="h-9 w-9 rounded-full border border-neutral-300 text-lg text-neutral-800 transition enabled:hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      -
                    </button>

                    <p className="text-base font-semibold text-neutral-900">{guestCount} guests</p>

                    <button
                      type="button"
                      onClick={increaseGuests}
                      disabled={guestCount >= maximumGuests}
                      className="h-9 w-9 rounded-full border border-neutral-300 text-lg text-neutral-800 transition enabled:hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-xs text-neutral-500">
                    Up to {maximumGuests} guests. Minimum {minimumGuests} guest.
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-xl bg-rose-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-rose-600"
                >
                  Reserve
                </button>
              </aside>
            </section>
          </div>
        ) : null}
      </div>
    </AppLayout>
  );
}
