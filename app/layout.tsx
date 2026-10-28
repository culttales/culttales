import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Show the logo intro once per visit; mark it seen before first paint.
            "intro-done" lets later page visits skip the wait for it. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('ct-intro'))document.documentElement.classList.add('intro-seen');sessionStorage.setItem('ct-intro','1')}catch(e){}setTimeout(function(){document.documentElement.classList.add('intro-done')},4000);",
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
