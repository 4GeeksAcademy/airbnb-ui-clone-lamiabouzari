type IconButtonProps = {
  label: string;
  icon: string;
  onClick?: () => void;
};

export function IconButton({ label, icon }: IconButtonProps) {
  return (
    <button type="button" className="rounded-full border border-neutral-300 px-3 py-2 text-sm text-neutral-800">
      {icon} {label}
    </button>
  );
}
