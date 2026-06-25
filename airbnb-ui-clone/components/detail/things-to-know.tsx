type ThingsToKnowProps = {
  houseRules: string[];
  safetyItems: string[];
  cancellationNotes: string[];
};

export function ThingsToKnow({ houseRules, safetyItems, cancellationNotes }: ThingsToKnowProps) {
  return (
    <section className="grid gap-4 rounded-2xl bg-white p-5 md:grid-cols-3">
      <article>
        <h3 className="font-semibold text-neutral-900">House rules</h3>
        <ul className="mt-2 space-y-1 text-sm text-neutral-700">{houseRules.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article>
        <h3 className="font-semibold text-neutral-900">Safety</h3>
        <ul className="mt-2 space-y-1 text-sm text-neutral-700">{safetyItems.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article>
        <h3 className="font-semibold text-neutral-900">Cancellation</h3>
        <ul className="mt-2 space-y-1 text-sm text-neutral-700">{cancellationNotes.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
    </section>
  );
}
