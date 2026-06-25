"use client";

import { useEffect, useMemo, useState } from "react";

import { AmenitiesGrid } from "@/components/home/amenities-grid";
import { CategoryCard } from "@/components/home/category-card";
import { FAQSection } from "@/components/home/faq-section";
import { FeaturedStaysSection } from "@/components/home/featured-stays-section";
import { HeroSection } from "@/components/home/hero-section";
import { ValuePropsSection } from "@/components/home/value-props-section";
import { AppLayout } from "@/components/shared/app-layout";

const valuePropsSeed = [
  { id: "flex", title: "Flexible booking", description: "Plans change. Filter with confidence." },
  { id: "global", title: "Global inventory", description: "Homes in top destinations." },
  { id: "filter", title: "Smart filters", description: "Find exactly what your trip needs." },
];

const categoriesSeed = [
  {
    title: "Houses",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    description: "Entire homes for groups",
  },
  {
    title: "Apartments",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description: "City stays for couples",
  },
  {
    title: "Private Rooms",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Budget-friendly options",
  },
];

const poolStaysSeed = [
  {
    id: "stay-1",
    title: "Cliffside villa",
    location: "Lisbon",
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$220/night",
  },
  {
    id: "stay-2",
    title: "Urban loft",
    location: "Berlin",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$180/night",
  },
  {
    id: "stay-3",
    title: "Lake cabin",
    location: "Zurich",
    imageUrl:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$260/night",
  },
  {
    id: "stay-4",
    title: "Sunny flat",
    location: "Barcelona",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$150/night",
  },
];

const kitchenStaysSeed = [
  {
    id: "stay-5",
    title: "Boho townhouse",
    location: "Seville",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$170/night",
  },
  {
    id: "stay-6",
    title: "Harbor studio",
    location: "Porto",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$138/night",
  },
  {
    id: "stay-7",
    title: "Coastal home",
    location: "Valencia",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$205/night",
  },
  {
    id: "stay-8",
    title: "Design duplex",
    location: "Milan",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    priceLabel: "$249/night",
  },
];

const amenitiesSeed = ["Pool", "Free parking", "Washer", "Air conditioning", "Fireplace", "TV", "Heating", "Barbecue"];

const faqSeed = [
  { id: "faq-1", question: "Can I cancel anytime?", answer: "Policies vary by listing and booking dates." },
  { id: "faq-2", question: "Are service fees included?", answer: "Price breakdown appears before reserve." },
  { id: "faq-3", question: "How do I contact hosts?", answer: "Messaging becomes available after booking." },
];

type HomeData = {
  valueProps: typeof valuePropsSeed;
  categories: typeof categoriesSeed;
  poolStays: typeof poolStaysSeed;
  kitchenStays: typeof kitchenStaysSeed;
  amenities: typeof amenitiesSeed;
  faqItems: typeof faqSeed;
};

export default function HomePage() {
  const [heroSearchLocation, setHeroSearchLocation] = useState("Barcelona");
  const [heroCheckIn, setHeroCheckIn] = useState("Jul 4");
  const [heroCheckOut, setHeroCheckOut] = useState("Jul 8");
  const [heroAdults, setHeroAdults] = useState(2);
  const [heroChildren, setHeroChildren] = useState(1);
  const [openFaqItemId, setOpenFaqItemId] = useState<string | null>("faq-1");

  const [homeData, setHomeData] = useState<HomeData>({
    valueProps: [],
    categories: [],
    poolStays: [],
    kitchenStays: [],
    amenities: [],
    faqItems: [],
  });

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setHomeData({
        valueProps: valuePropsSeed,
        categories: categoriesSeed,
        poolStays: poolStaysSeed,
        kitchenStays: kitchenStaysSeed,
        amenities: amenitiesSeed,
        faqItems: faqSeed,
      });
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  const summaryGuests = useMemo(() => {
    const totalGuests = heroAdults + heroChildren;
    return `${totalGuests} guest${totalGuests === 1 ? "" : "s"}`;
  }, [heroAdults, heroChildren]);

  function handleSearchSubmit() {
    setHeroSearchLocation((current) => current.trim() || "Anywhere");
    setHeroCheckIn((current) => current.trim() || "Add date");
    setHeroCheckOut((current) => current.trim() || "Add date");
    setHeroAdults((current) => (current < 1 ? 1 : current));
    setHeroChildren((current) => (current < 0 ? 0 : current));
  }

  function handleToggleFaqItem(id: string) {
    setOpenFaqItemId((current) => (current === id ? null : id));
  }

  return (
    <AppLayout
      headerMode="home"
      searchSummary={{ destination: heroSearchLocation, dates: `${heroCheckIn} - ${heroCheckOut}`, guests: summaryGuests }}
    >
      <div className="grid gap-6 sm:gap-8">
        <HeroSection
          imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80"
          location={heroSearchLocation}
          checkInDate={heroCheckIn}
          checkOutDate={heroCheckOut}
          adults={heroAdults}
          childGuests={heroChildren}
          onSubmit={handleSearchSubmit}
        />
        <ValuePropsSection items={homeData.valueProps} />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Browse by property type</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {homeData.categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                imageUrl={category.imageUrl}
                description={category.description}
              />
            ))}
          </div>
        </section>

        <FeaturedStaysSection title="Pool stays" stays={homeData.poolStays} />
        <FeaturedStaysSection title="Kitchen stays" stays={homeData.kitchenStays} />
        <AmenitiesGrid amenities={homeData.amenities} />
        <FAQSection items={homeData.faqItems} openItemId={openFaqItemId} onToggleItem={handleToggleFaqItem} />
      </div>
    </AppLayout>
  );
}
