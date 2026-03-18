"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/60 bg-warm-50/80 backdrop-blur-md">
      <Container size="wide">
        <nav className="flex h-16 items-center justify-between">
          {/* Wordmark */}
          <Link href="/" aria-label="XPRSV Tech home">
            <Logo size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-600 transition-colors hover:text-warm-900"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#book">
              <Button size="sm">Book a Consultation</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-warm-600 transition-colors hover:bg-warm-100 hover:text-warm-900 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile slide-down menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-warm-200/60 bg-warm-50/95 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container>
          <div className="flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-warm-600 transition-colors hover:text-warm-900"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#book" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
