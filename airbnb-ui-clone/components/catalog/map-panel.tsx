import type { ListingMarker } from "@/types";

type MapPanelProps = {
  center: { lat: number; lng: number };
  zoom: number;
  markers: ListingMarker[];
  onMarkerSelect?: (id: string) => void;
};

export function MapPanel({ center, zoom, markers }: MapPanelProps) {
  return (
    <aside className="rounded-2xl border border-neutral-200 bg-white p-4">
      <h3 className="text-base font-semibold text-neutral-900">Map panel placeholder</h3>
      <p className="mt-2 text-sm text-neutral-600">Center: {center.lat}, {center.lng} • Zoom: {zoom}</p>
      <p className="mt-2 text-sm text-neutral-600">Markers: {markers.length}</p>
    </aside>
  );
}
