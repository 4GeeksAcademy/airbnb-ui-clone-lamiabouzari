import { SearchSummaryBar } from "@/components/shared/search-summary-bar";
import type { SearchSummary } from "@/types";

type ResultsTopBarProps = {
  summary: SearchSummary;
};

export function ResultsTopBar({ summary }: ResultsTopBarProps) {
  return (
    <section className="rounded-2xl bg-white p-4">
      <SearchSummaryBar summary={summary} />
    </section>
  );
}
