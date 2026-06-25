import type { HeaderMode, SearchSummary } from "@/types";

type HeaderProps = {
  mode: HeaderMode;
  searchSummary?: SearchSummary;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
};

export function Header({ mode, searchSummary }: HeaderProps) {
  const summaryText = searchSummary
    ? `${searchSummary.destination} · ${searchSummary.dates} · ${searchSummary.guests}`
    : "Anywhere · Any week · Add guests";

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1260px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 text-airbnb-rose">
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
            <path d="M16 2.2c-1.67 0-3.18.98-3.98 2.5l-7.5 14.3c-.47.9-.72 1.93-.72 2.95C3.8 26.45 7.35 30 11.7 30c1.7 0 3.3-.53 4.3-1.5 1 .97 2.6 1.5 4.3 1.5 4.35 0 7.9-3.55 7.9-7.9 0-1.02-.25-2.05-.72-2.95l-7.5-14.3A4.49 4.49 0 0 0 16 2.2Zm0 6.1c.44 0 .84.25 1.04.63l5.65 10.78c.19.36.29.79.29 1.2a2.7 2.7 0 0 1-2.69 2.7c-.63 0-1.13-.18-1.5-.54-.53-.51-.8-1.37-.8-2.58 0-1.96-.53-3.51-1.99-5.87-1.45 2.36-1.98 3.91-1.98 5.87 0 1.21-.27 2.07-.8 2.58-.37.36-.87.54-1.5.54a2.7 2.7 0 0 1-2.69-2.7c0-.41.1-.84.29-1.2L14.96 8.93A1.16 1.16 0 0 1 16 8.3Z" />
          </svg>
          <span className="text-[26px] font-semibold tracking-[-0.02em]">airbnb</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 lg:flex">
          <button type="button" className="text-neutral-900">
            Stays
          </button>
          <button type="button">Experiences</button>
          <button type="button">Services</button>
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 sm:block">
            Become a host
          </button>
          <button type="button" className="hidden rounded-full p-2 text-neutral-600 hover:bg-neutral-100 sm:block" aria-label="Language settings">🌐</button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm"
          >
            <span className="text-sm">☰</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-neutral-500 text-white">●</span>
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1260px] border-t border-neutral-100 px-4 pb-4 pt-3 sm:px-6 lg:px-10">
        <div
          className={`mx-auto flex w-full items-center justify-between rounded-full border border-neutral-200 bg-white px-2 py-1.5 shadow-sm ${
            mode === "home" ? "" : "max-w-lg"
          }`}
        >
          <div className="hidden items-center divide-x divide-neutral-200 md:flex">
            <button type="button" className="px-5 py-2 text-sm font-semibold text-neutral-900">Anywhere</button>
            <button type="button" className="px-5 py-2 text-sm font-medium text-neutral-700">Any week</button>
            <button type="button" className="px-5 py-2 text-sm font-medium text-neutral-500">Add guests</button>
          </div>
          <p className="truncate px-3 text-sm font-medium text-neutral-700 md:hidden">{summaryText}</p>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-airbnb-rose text-sm font-semibold text-white"
            aria-label="Search"
          >
            ⌕
          </button>
        </div>
      </div>
    </header>
  );
}
