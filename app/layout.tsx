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
import { SITE_NAME, SITE_URL, jsonLd } from "@/lib/seo";

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

const homeTitle = "CULT. tales — Where Culture Becomes Story | Wedding Photography India";
const homeDescription =
  "Pan-Indian wedding photography and cinematic wedding films by CULT. tales, based in Kerala and Rajasthan and travelling across India for every ritual.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s — ${SITE_NAME}`,
  },
  description: homeDescription,
  alternates: { canonical: "./" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EF",
  // Lets the fixed header draw under the iPhone status bar; Header pads
  // itself by env(safe-area-inset-top) so its content stays clear of it.
  viewportFit: "cover",
};

// Tells search engines who the studio is, using only details published on the site.
const studio = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#studio`,
  name: SITE_NAME,
  slogan: "Where Culture Becomes Story",
  description:
    "A Pan-Indian wedding photography and wedding cinema team based in Kerala and Rajasthan, documenting weddings in their most authentic form.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/cult-tales-logo-black.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: contact.email,
  telephone: contact.phone,
  address: [
    { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
    { "@type": "PostalAddress", addressRegion: "Rajasthan", addressCountry: "IN" },
  ],
  areaServed: { "@type": "Country", name: "India" },
  serviceType: ["Wedding photography", "Wedding cinematography", "Engagement photography"],
  knowsAbout: ["Indian wedding rituals", "Kerala weddings", "Rajasthani weddings", "Bengali weddings"],
  sameAs: [contact.instagramUrl, contact.youtubeUrl, contact.facebookUrl],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["CULT tales", "Cult Tales", "culttales"],
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#studio` },
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
          dangerouslySetInnerHTML={jsonLd(studio)}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(website)} />
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
