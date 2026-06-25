type ValueProp = {
  id: string;
  title: string;
  description: string;
};

type ValuePropsSectionProps = {
  items: ValueProp[];
};

export function ValuePropsSection({ items }: ValuePropsSectionProps) {
  return (
    <section className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-3 sm:grid-cols-3 sm:gap-4 sm:p-5">
      {items.map((item) => (
        <article key={item.id} className="rounded-xl bg-neutral-50 p-4">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Why guests choose us</p>
          <h3 className="mt-1 text-base font-semibold text-neutral-900">{item.title}</h3>
          <p className="mt-1 text-sm leading-6 text-neutral-600">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
