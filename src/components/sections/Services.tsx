import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
          What I Offer
        </h2>
        <p className="mt-4 text-lg text-warm-600">
          Straightforward AI consulting for individuals and businesses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {SERVICES.map((service) => (
          <Card key={service.title} hover className="flex flex-col">
            <div className="mb-4">
              {service.badge && (
                <Badge variant="indigo">{service.badge}</Badge>
              )}
            </div>

            <h3 className="text-2xl font-bold text-warm-900">
              {service.title}
            </h3>

            <p className="mt-2 text-warm-600 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-indigo-600">
                {service.price}
              </span>
              <span className="text-warm-500">{service.rate}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-warm-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
