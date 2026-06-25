import type { RatingCategory } from "@/types";

type RatingsSummaryProps = {
  overallRating: number;
  reviewCount: number;
  categoryRatings: RatingCategory;
};

export function RatingsSummary({ overallRating, reviewCount, categoryRatings }: RatingsSummaryProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Ratings summary</h2>
      <p className="mt-2 text-sm text-neutral-700">{overallRating} ({reviewCount} reviews)</p>
      <p className="mt-2 text-sm text-neutral-600">Category metrics loaded: {Object.keys(categoryRatings).length}</p>
    </section>
  );
}
