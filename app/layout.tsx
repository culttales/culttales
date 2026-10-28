import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import HideOnPreview from "@/components/HideOnPreview";
import Intro from "@/components/Intro";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://culttales.com"),
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
    url: "https://culttales.com",
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Show the logo intro once per visit; mark it seen before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('ct-intro'))document.documentElement.classList.add('intro-seen');sessionStorage.setItem('ct-intro','1')}catch(e){}",
          }}
        />
      </head>
      <body>
        <Intro />
        <SmoothScroll />
        <CustomCursor />
        <HideOnPreview>
          <Header />
        </HideOnPreview>
        <main>{children}</main>
        <HideOnPreview>
          <Footer />
        </HideOnPreview>
      </body>
    </html>
  );
}
