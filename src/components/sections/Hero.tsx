import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-24 lg:py-36">
      <Container size="narrow" className="text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-warm-900 sm:text-5xl lg:text-6xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-600 sm:text-xl">
          {SITE.description}
        </p>
        <div className="mt-10">
          <Link href="#book">
            <Button size="lg">Book a Consultation</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
