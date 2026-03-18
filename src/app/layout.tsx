import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expression Tech | AI Consulting by Travis Brown",
  description: "Navigate the AI landscape with confidence. Expert consulting for individuals and businesses looking to leverage AI effectively.",
  keywords: ["AI consulting", "artificial intelligence", "AI strategy", "Travis Brown", "Expression Tech"],
  authors: [{ name: "Travis Brown" }],
  openGraph: {
    title: "Expression Tech | AI Consulting",
    description: "Navigate the AI landscape with confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-dark-950`}
      >
        {children}
      </body>
    </html>
  );
}
