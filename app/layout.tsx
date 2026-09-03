import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://culttales.in"),
  title: {
    default: "CULT. tales — Pan Indian Wedding Stories",
    template: "%s — CULT. tales",
  },
  description:
    "CULT. tales documents Pan Indian wedding stories — unearthing the real rituals, colourful traditions, and beautiful tales of love across India.",
  openGraph: {
    title: "CULT. tales — Pan Indian Wedding Stories",
    description:
      "Unearthing the real rituals, colourful traditions, and beautiful tales of love across India.",
    url: "https://culttales.in",
    siteName: "CULT. tales",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CULT. tales — Pan Indian Wedding Stories",
    description:
      "Unearthing the real rituals, colourful traditions, and beautiful tales of love across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
