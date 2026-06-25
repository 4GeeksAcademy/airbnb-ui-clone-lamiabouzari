import Image from "next/image";

import { SearchCard } from "@/components/home/search-card";

type HeroSectionProps = {
  imageUrl: string;
  location: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  childGuests: number;
  onSubmit?: () => void;
};

export function HeroSection({ imageUrl, location, checkInDate, checkOutDate, adults, childGuests, onSubmit }: HeroSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[390px,minmax(0,1fr)]">
      <SearchCard
        location={location}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        adults={adults}
        childrenCount={childGuests}
        onSubmit={onSubmit}
      />

      <div className="relative min-h-[360px] overflow-hidden rounded-3xl text-white shadow-sm sm:min-h-[430px]">
        <Image
          src={imageUrl}
          alt="Couple enjoying a modern vacation home"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />

        <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-7 sm:min-h-[430px] sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/85">Live Anywhere</p>
            <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Stylish stays for city breaks and mountain escapes.
            </h1>
          </div>

          <div className="max-w-md rounded-2xl border border-white/35 bg-white/15 p-4 backdrop-blur-md">
            <p className="text-sm font-semibold">Featured destination collection</p>
            <p className="mt-1 text-sm text-white/90">Handpicked homes with pools, kitchens, and fast Wi-Fi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
