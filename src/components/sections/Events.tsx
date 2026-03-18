import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EVENTS } from "@/lib/constants";

export function Events() {
  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
          Upcoming Events
        </h2>
        <p className="mt-4 text-lg text-warm-600">
          Free, community-driven AI workshops in Los Angeles.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {EVENTS.map((event) => (
          <Card key={event.title} hover>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="indigo">{event.level}</Badge>
              <Badge variant="gold">{event.price}</Badge>
            </div>

            <h3 className="text-2xl font-bold text-warm-900">
              {event.title}
            </h3>

            <p className="mt-2 leading-relaxed text-warm-600">
              {event.description}
            </p>

            <p className="mt-4 text-sm font-medium text-warm-500">
              {event.details}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
