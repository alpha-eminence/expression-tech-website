import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  alternate?: boolean;
}

export function Section({
  alternate = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28",
        alternate && "bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
