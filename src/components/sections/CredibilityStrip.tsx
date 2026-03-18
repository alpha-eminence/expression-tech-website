import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { CREDIBILITY } from "@/lib/constants";

export function CredibilityStrip() {
  return (
    <div className="border-y border-warm-200 bg-white py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {CREDIBILITY.map((item) => (
            <Badge
              key={item.name}
              variant={item.name === "Native Nomads" ? "indigo" : "gold"}
            >
              {item.label} {item.name}
            </Badge>
          ))}
        </div>
      </Container>
    </div>
  );
}
