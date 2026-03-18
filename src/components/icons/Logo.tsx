import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <span
      className={cn(
        "font-bold tracking-tight select-none",
        sizes[size],
        className,
      )}
    >
      <span className="text-indigo-600">XPRSV</span>
      <span className="text-warm-900"> Tech</span>
    </span>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-16 w-16", className)}
      aria-label="XPRSV Tech monogram"
    >
      <rect width="64" height="64" rx="16" className="fill-indigo-600" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        className="fill-white"
        fontSize="24"
        fontWeight="700"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        XT
      </text>
    </svg>
  );
}
