type SleepingArrangement = {
  id: string;
  label: string;
};

type SleepingArrangementsProps = {
  items: SleepingArrangement[];
};

export function SleepingArrangements({ items }: SleepingArrangementsProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Sleeping arrangements</h2>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700">
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
}
