type LocationMapProps = {
  lat: number;
  lng: number;
  locationLabel: string;
};

export function LocationMap({ lat, lng, locationLabel }: LocationMapProps) {
  return (
    <section className="rounded-2xl bg-white p-5 text-sm text-neutral-700">
      Location map placeholder • {locationLabel} • {lat}, {lng}
    </section>
  );
}
