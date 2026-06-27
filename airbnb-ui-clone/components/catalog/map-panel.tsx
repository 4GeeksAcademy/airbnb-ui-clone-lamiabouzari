import Image from "next/image";

import type { ListingMarker } from "@/types";

const TILE_SIZE = 256;
const TILE_GRID_RADIUS = 1;
const MAX_MERCATOR_LAT = 85.05112878;

function projectToWorld(lat: number, lng: number, zoom: number) {
  const clampedLat = Math.max(Math.min(lat, MAX_MERCATOR_LAT), -MAX_MERCATOR_LAT);
  const latitudeRadians = (clampedLat * Math.PI) / 180;
  const scale = TILE_SIZE * 2 ** zoom;

  return {
    x: ((lng + 180) / 360) * scale,
    y:
      (0.5 - Math.log((1 + Math.sin(latitudeRadians)) / (1 - Math.sin(latitudeRadians))) / (4 * Math.PI)) *
      scale,
  };
}

type MapPanelProps = {
  center: { lat: number; lng: number };
  zoom: number;
  markers: ListingMarker[];
  onMarkerSelect?: (id: string) => void;
};

export function MapPanel({ center, zoom, markers, onMarkerSelect }: MapPanelProps) {
  const centerWorld = projectToWorld(center.lat, center.lng, zoom);
  const centerTileX = Math.floor(centerWorld.x / TILE_SIZE);
  const centerTileY = Math.floor(centerWorld.y / TILE_SIZE);
  const gridSize = TILE_GRID_RADIUS * 2 + 1;
  const layerSize = TILE_SIZE * gridSize;
  const layerOriginX = (centerTileX - TILE_GRID_RADIUS) * TILE_SIZE;
  const layerOriginY = (centerTileY - TILE_GRID_RADIUS) * TILE_SIZE;
  const layerOffsetX = centerWorld.x - layerOriginX;
  const layerOffsetY = centerWorld.y - layerOriginY;

  const tiles = Array.from({ length: gridSize * gridSize }, (_, index) => {
    const xOffset = index % gridSize;
    const yOffset = Math.floor(index / gridSize);
    const tileX = centerTileX - TILE_GRID_RADIUS + xOffset;
    const tileY = centerTileY - TILE_GRID_RADIUS + yOffset;

    return {
      id: `${zoom}-${tileX}-${tileY}`,
      src: `https://tile.openstreetmap.org/${zoom}/${tileX}/${tileY}.png`,
    };
  });

  const positionedMarkers = markers.map((marker) => {
    const markerWorld = projectToWorld(marker.lat, marker.lng, zoom);

    return {
      ...marker,
      left: markerWorld.x - layerOriginX,
      top: markerWorld.y - layerOriginY,
    };
  });

  return (
    <aside
      aria-label="Map"
      className="relative min-h-72 overflow-hidden rounded-2xl border border-neutral-300 bg-[#d7e7d4] md:min-h-[540px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f4f7ef_0%,#d7e7d4_65%,#c2d7c4_100%)]" />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute"
          style={{
            width: `${layerSize}px`,
            height: `${layerSize}px`,
            left: `calc(50% - ${layerOffsetX}px)`,
            top: `calc(50% - ${layerOffsetY}px)`,
          }}
        >
          <div className="grid h-full w-full grid-cols-3 grid-rows-3">
            {tiles.map((tile) => (
              <Image
                key={tile.id}
                src={tile.src}
                alt=""
                aria-hidden="true"
                width={TILE_SIZE}
                height={TILE_SIZE}
                unoptimized
                className="h-64 w-64 max-w-none select-none object-cover"
              />
            ))}
          </div>

          {positionedMarkers.map((marker) => (
            <button
              key={marker.id}
              type="button"
              onClick={() => onMarkerSelect?.(marker.id)}
              className={`absolute -translate-x-1/2 -translate-y-full rounded-full border px-3 py-1.5 text-xs font-semibold shadow-lg transition ${
                marker.isSelected
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-white bg-white text-neutral-800 hover:border-neutral-300"
              }`}
              style={{ left: `${marker.left}px`, top: `${marker.top}px` }}
            >
              {marker.priceLabel}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0)_72%,rgba(255,255,255,0.16)_100%)]" />

      <div className="relative h-full min-h-72 p-4 md:min-h-[540px]">
        <div className="flex items-start justify-between gap-2 text-xs text-neutral-600">
          <span className="rounded-full bg-white/85 px-3 py-1 font-medium">Map</span>
          <span className="rounded-full bg-white/85 px-3 py-1 font-medium">
            {center.lat.toFixed(2)}, {center.lng.toFixed(2)} · z{zoom}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-sm">
          Barcelona · Eixample and Gothic Quarter
        </div>

        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-sm"
        >
          © OpenStreetMap contributors
        </a>
      </div>
    </aside>
  );
}
