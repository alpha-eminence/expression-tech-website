import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "X / Twitter", href: SITE.social.twitter, icon: Twitter },
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Logo size="lg" />

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-500 transition-colors hover:text-warm-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book"
              className="text-sm font-medium text-warm-500 transition-colors hover:text-warm-900"
            >
              Book
            </Link>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-5">
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

          {/* Location + legal */}
          <div className="space-y-2 text-sm text-warm-400">
            <p>{SITE.location}</p>
            <p>&copy; 2026 {SITE.name}. All rights reserved.</p>
            <p>Media by Swazi Socials</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
