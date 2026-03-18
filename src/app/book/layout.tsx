import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/layout/Container";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-warm-50">
      <header className="border-b border-warm-200 bg-white">
        <Container size="narrow" className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-warm-500 hover:text-indigo-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link href="/">
            <Logo size="sm" />
          </Link>
        </Container>
      </header>
      <main className="py-12 pb-24">
        <Container size="narrow">{children}</Container>
      </main>
    </div>
  );
}
