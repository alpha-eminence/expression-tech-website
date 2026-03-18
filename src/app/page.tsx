import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Events } from "@/components/sections/Events";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero — no alternate bg, sits on warm-50 */}
        <Reveal>
          <Hero />
        </Reveal>

        {/* Credibility strip */}
        <CredibilityStrip />

        {/* Services — white alternate */}
        <Section id="services" alternate>
          <Reveal>
            <Services />
          </Reveal>
        </Section>

        {/* How It Works — warm-50 */}
        <Section>
          <Reveal>
            <HowItWorks />
          </Reveal>
        </Section>

        {/* Events — white alternate */}
        <Section id="events" alternate>
          <Reveal>
            <Events />
          </Reveal>
        </Section>

        {/* About — warm-50 */}
        <Section id="about">
          <Reveal>
            <About />
          </Reveal>
        </Section>

        {/* FAQ — white alternate */}
        <Section alternate>
          <Reveal>
            <FAQ />
          </Reveal>
        </Section>

        {/* Booking CTA — warm-50 */}
        <Section id="book">
          <Reveal>
            <BookingCTA />
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}
