import { FilterChip } from "@/components/shared/filter-chip";

type Filter = {
  id: string;
  label: string;
  isActive: boolean;
  icon?: string;
};

type FiltersRowProps = {
  filters: Filter[];
};

export function FiltersRow({ filters }: FiltersRowProps) {
  return (
    <section className="flex flex-wrap gap-2 rounded-2xl bg-white p-4">
      {filters.map((filter) => (
        <FilterChip key={filter.id} label={filter.label} isActive={filter.isActive} icon={filter.icon} />
      ))}
    </section>
  );
}
