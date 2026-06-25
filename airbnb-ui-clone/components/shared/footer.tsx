export function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 bg-[#f2f2f2]">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-8 sm:px-6 lg:px-10">
        <p className="text-sm text-neutral-600">Europe &gt; Spain &gt; Catalonia &gt; Barcelona</p>

        <div className="mt-6 grid gap-6 text-sm text-neutral-600 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-neutral-900">Support</h4>
            <ul className="mt-3 space-y-2">
              <li>Help Center</li>
              <li>AirCover</li>
              <li>Cancellation options</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">Hosting</h4>
            <ul className="mt-3 space-y-2">
              <li>Airbnb your home</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900">Airbnb</h4>
            <ul className="mt-3 space-y-2">
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-300 pt-4 text-xs text-neutral-500">
          © 2026 Airbnb, Inc. · Privacy · Terms · Sitemap
        </div>
      </div>
    </footer>
  );
}
