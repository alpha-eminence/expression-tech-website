import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XPRSV Tech | AI Consulting by Travis Brown",
  description:
    "I help people and businesses in LA cut through the AI noise and build real solutions. Individual and business consultations available.",
  keywords: [
    "AI consulting",
    "AI consulting Los Angeles",
    "Travis Brown",
    "XPRSV Tech",
    "AI workshops LA",
  ],
  authors: [{ name: "Travis Brown" }],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://xprsvtech.com"),
  openGraph: {
    title: "XPRSV Tech | AI that actually works for you.",
    description:
      "I help people and businesses in LA cut through the AI noise and build real solutions.",
    type: "website",
    locale: "en_US",
    siteName: "XPRSV Tech",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XPRSV Tech | AI that actually works for you.",
    description:
      "I help people and businesses in LA cut through the AI noise and build real solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-warm-50 text-warm-900`}>
        {children}
      </body>
    </html>
  );
}
