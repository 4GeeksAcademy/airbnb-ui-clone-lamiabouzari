type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  openItemId?: string | null;
  onToggleItem?: (id: string) => void;
};

export function Accordion({ items, openItemId, onToggleItem }: AccordionProps) {
  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item) => (
        <div key={item.id} className="p-5">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
            onClick={() => onToggleItem?.(item.id)}
          >
            <span className="font-medium text-neutral-900">{item.title}</span>
            <span className="text-xl text-neutral-500">{openItemId === item.id ? "−" : "+"}</span>
          </button>
          {openItemId === item.id ? <p className="pt-3 text-sm leading-6 text-neutral-600">{item.content}</p> : null}
        </div>
      ))}
    </div>
  );
}
