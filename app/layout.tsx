import type { Metadata, Viewport } from "next";
import { Jost, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import HideOnPreview from "@/components/HideOnPreview";
import Intro from "@/components/Intro";
import MotionProvider from "@/components/MotionProvider";
import { contact } from "@/lib/site";

// Headings: Noto Serif Display, a light, high-contrast Didone in the
// fashion-editorial style, set slightly condensed (see globals.css).
// Text and labels: Jost, a Futura-style geometric sans that holds up in
// wide-spaced capitals. Both are variable fonts, self-hosted by next/font,
// so no request leaves the site.
const display = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://culttales.com"),
  title: {
    default: "CULT. tales — Pan Indian Wedding Stories",
    template: "%s — CULT. tales",
  },
  description:
    "CULT. tales — where culture becomes story. Wedding photography, cinema and culture: unearthing the real rituals, colourful traditions, and beautiful tales of love across India.",
  openGraph: {
    title: "CULT. tales — Pan Indian Wedding Stories",
    description:
      "Where culture becomes story. Wedding photography, cinema and culture from across India.",
    url: "https://culttales.com",
    siteName: "CULT. tales",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CULT. tales — Pan Indian Wedding Stories",
    description:
      "Where culture becomes story. Wedding photography, cinema and culture from across India.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EF",
};

// Tells search engines who the studio is, using only details published on the site.
const studio = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CULT. tales",
  slogan: "Where Culture Becomes Story",
  description:
    "A Pan-Indian wedding photography and wedding cinema team documenting weddings in their most authentic form.",
  url: "https://culttales.com",
  logo: "https://culttales.com/logo/cult-tales-logo-black.png",
  image: "https://culttales.com/opengraph-image.jpg",
  email: contact.email,
  telephone: contact.phone,
  areaServed: "India",
  serviceType: ["Wedding photography", "Wedding cinema"],
  sameAs: [contact.instagramUrl, contact.youtubeUrl, contact.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${jost.variable}`} suppressHydrationWarning>
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-obsidian focus:px-5 focus:py-3 focus:text-[11px] focus:font-medium focus:uppercase focus:tracking-editorial focus:text-paper"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(studio).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Intro />
          <SmoothScroll />
          <CustomCursor />
          <HideOnPreview>
            <Header />
          </HideOnPreview>
          <main id="main">{children}</main>
          <HideOnPreview>
            <Footer />
          </HideOnPreview>
        </MotionProvider>
      </body>
    </html>
  );
}
