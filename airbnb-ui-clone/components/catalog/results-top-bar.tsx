"use client";

import { SearchSummaryBar } from "@/components/shared/search-summary-bar";
import type { SearchSummary } from "@/types";

type SortOrder = "asc" | "desc";

type ResultsTopBarProps = {
  summary: SearchSummary;
  resultsCount?: number;
  sortOrder?: SortOrder;
  onSortOrderChange?: (order: SortOrder) => void;
};

export function ResultsTopBar({
  summary,
  resultsCount = 0,
  sortOrder = "asc",
  onSortOrderChange,
}: ResultsTopBarProps) {
  return (
    <section className="grid gap-4 rounded-2xl bg-white p-4">
      <SearchSummaryBar summary={summary} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-neutral-700">{resultsCount} stays found</p>

        <label className="flex items-center gap-2 text-sm text-neutral-700" htmlFor="catalog-price-sort">
          <span>Sort by price:</span>
          <select
            id="catalog-price-sort"
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900"
            value={sortOrder}
            onChange={(event) => onSortOrderChange?.(event.target.value as SortOrder)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
    </section>
  );
}
