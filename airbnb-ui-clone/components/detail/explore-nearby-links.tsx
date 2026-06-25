type ExploreNearbyLinksProps = {
  links: { id: string; label: string }[];
};

export function ExploreNearbyLinks({ links }: ExploreNearbyLinksProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Explore nearby</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <span key={link.id} className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700">
            {link.label}
          </span>
        ))}
      </div>
    </section>
  );
}
