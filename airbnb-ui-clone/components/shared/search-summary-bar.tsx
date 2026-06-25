import type { SearchSummary } from "@/types";

type SearchSummaryBarProps = {
  summary: SearchSummary;
};

export function SearchSummaryBar({ summary }: SearchSummaryBarProps) {
  return (
    <div className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700">
      {summary.destination} • {summary.dates} • {summary.guests}
    </div>
  );
}
