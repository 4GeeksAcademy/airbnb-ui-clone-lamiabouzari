type DescriptionBlockProps = {
  description: string;
  isExpanded: boolean;
  onToggle?: () => void;
};

export function DescriptionBlock({ description, isExpanded }: DescriptionBlockProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Description</h2>
      <p className="mt-2 text-sm text-neutral-700">{isExpanded ? description : `${description.slice(0, 140)}...`}</p>
    </section>
  );
}
