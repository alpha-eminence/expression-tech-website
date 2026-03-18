import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "indigo" | "gold" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-warm-100 text-warm-700",
  indigo: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  gold: "bg-gold-50 text-gold-800 border border-gold-200",
  outline: "border border-warm-300 text-warm-600",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
