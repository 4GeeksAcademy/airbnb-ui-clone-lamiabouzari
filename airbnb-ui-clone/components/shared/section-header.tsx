type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold text-neutral-900">{title}</h2>
      {subtitle ? <p className="text-sm text-neutral-600">{subtitle}</p> : null}
    </div>
  );
}
