import { Accordion } from "@/components/shared/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  openItemId?: string | null;
  onToggleItem?: (id: string) => void;
};

export function FAQSection({ items, openItemId, onToggleItem }: FAQSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">Frequently asked questions</h2>
      <Accordion
        items={items.map((item) => ({
          id: item.id,
          title: item.question,
          content: item.answer,
        }))}
        openItemId={openItemId}
        onToggleItem={onToggleItem}
      />
    </section>
  );
}
