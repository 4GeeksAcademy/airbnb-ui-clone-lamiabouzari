type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function Button({ label, variant = "primary" }: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-lg px-4 py-2 text-sm font-semibold ${
        variant === "primary" ? "bg-rose-600 text-white" : "border border-neutral-300 bg-white text-neutral-900"
      }`}
    >
      {label}
    </button>
  );
}
