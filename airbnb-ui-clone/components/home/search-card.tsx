type SearchCardProps = {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  childrenCount?: number;
  children?: number;
  onChange?: (field: string, value: string | number) => void;
  onSubmit?: () => void;
};

export function SearchCard({ location, checkInDate, checkOutDate, adults, childrenCount = 0, children, onSubmit }: SearchCardProps) {
  const totalChildren = children ?? childrenCount;

  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-900">Find your next stay</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">Search homes in over 190 countries and start planning with flexible options.</p>

      <div className="mt-6 grid gap-3">
        <div className="rounded-2xl border border-neutral-300 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Location</p>
          <p className="mt-1 text-sm font-medium text-neutral-900">{location}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-300 p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Check in</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">{checkInDate}</p>
          </div>
          <div className="rounded-2xl border border-neutral-300 p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Check out</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">{checkOutDate}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-300 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Guests</p>
          <p className="mt-1 text-sm font-medium text-neutral-900">{adults} adults · {totalChildren} children</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        className="mt-6 w-full rounded-xl bg-airbnb-rose px-4 py-3 text-sm font-semibold text-white"
      >
        Search stays
      </button>
    </article>
  );
}
