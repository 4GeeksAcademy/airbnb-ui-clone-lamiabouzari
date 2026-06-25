type FilterChipProps = {
  label: string;
  isActive: boolean;
  onClick?: () => void;
  icon?: string;
};

export function FilterChip({ label, isActive, icon }: FilterChipProps) {
  return (
    <span className={`rounded-full border px-3 py-1 text-sm ${isActive ? "border-neutral-900" : "border-neutral-300"}`}>
      {icon ? `${icon} ` : ""}
      {label}
    </span>
  );
}
