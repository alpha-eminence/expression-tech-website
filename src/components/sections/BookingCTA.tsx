import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function BookingCTA() {
  return (
    <Container size="narrow" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
        Ready to get started?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-warm-600">
        Pick the option that fits your needs and book a session.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/book/individual">
          <Button size="lg">
            Individual ($50/hr)
          </Button>
        </Link>
        <Link href="/book/business">
          <Button size="lg" variant="outline">
            Business ($150/hr)
          </Button>
        </Link>
      </div>
    </Container>
  );
}
