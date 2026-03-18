import { Container } from "@/components/layout/Container";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-warm-600">
          Simple process, real results.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className="relative"
          >
            {/* Divider between steps on desktop */}
            {index > 0 && (
              <div className="absolute -left-4 top-0 hidden h-full w-px bg-warm-200 md:block" />
            )}

            <div className="pl-0 md:pl-4">
              <span className="text-5xl font-bold text-indigo-100">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-bold text-warm-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-warm-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
