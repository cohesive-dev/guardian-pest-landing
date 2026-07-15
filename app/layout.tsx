import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guardianpestdefense.com"),
  title: "Guardian Pest & Termite Defense | San Diego Pest Control",
  description:
    "San Diego's trusted pest and termite defense. Family-safe treatments for ants, rodents, termites, spiders, roaches, and more — backed by a 100% satisfaction guarantee. Free inspections, fast service.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Guardian Pest & Termite Defense | San Diego Pest Control",
    description:
      "Family-safe pest and termite control across San Diego County. Free inspections, same-week service, 100% satisfaction guarantee.",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-[var(--font-sans)]">{children}</body>
    </html>
  );
}
