type TagBadgeProps = {
  label: string;
};

export function TagBadge({ label }: TagBadgeProps) {
  return <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">{label}</span>;
}
