import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <Container size="narrow">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
          Common Questions
        </h2>
      </div>

      <Accordion items={FAQ_ITEMS} />
    </Container>
  );
}
