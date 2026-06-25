import type { ReviewItem } from "@/types";

type ReviewGridProps = {
  reviews: ReviewItem[];
  visibleCount: number;
  onShowAllReviews?: () => void;
};

export function ReviewGrid({ reviews, visibleCount }: ReviewGridProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Reviews</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {reviews.slice(0, visibleCount).map((review) => (
          <article key={review.id} className="rounded-xl border border-neutral-200 p-3 text-sm text-neutral-700">
            <p className="font-medium text-neutral-900">{review.authorName}</p>
            <p className="text-xs text-neutral-500">{review.date}</p>
            <p className="mt-2">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
