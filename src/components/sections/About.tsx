import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Monogram } from "@/components/icons/Logo";
import { ABOUT, SITE } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "X / Twitter", href: SITE.social.twitter, icon: Twitter },
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
] as const;

export function About() {
  return (
    <Container size="narrow">
      <div className="flex flex-col items-center text-center">
        {/* Monogram */}
        <Monogram className="h-20 w-20" />

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-warm-900 sm:text-4xl">
          {ABOUT.heading}
        </h2>

        <div className="mt-6 space-y-4">
          {ABOUT.bio.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-warm-600">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-8 flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-warm-400 transition-colors hover:text-indigo-600"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* CTA text */}
        <p className="mt-8 text-lg font-medium text-warm-800">
          {ABOUT.cta}
        </p>
      </div>
    </Container>
  );
}
