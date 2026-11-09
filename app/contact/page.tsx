import type { Metadata } from "next";
import { breadcrumbs, jsonLd, pageMetadata } from "@/lib/seo";
import FAQ from "@/components/FAQ";
import Inquire from "@/components/home/Inquire";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = pageMetadata({
  title: "Book a Wedding Photographer in India",
  description:
    "Planning a wedding in Kerala, Rajasthan or anywhere in India? Tell CULT. tales your dates, rituals and story. We reply to every enquiry within 48 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: "Contact", path: "/contact" }]))} />
      <PageIntro
        label="Contact — begin your story"
        aside="We reply within 48 hours"
        title={
          <>
            Let&rsquo;s tell <em>your</em> wedding story.
          </>
        }
        intro="Whether you are planning a Pan-Indian wedding, a diaspora celebration or a cultural documentation project, we would love to hear about your vision."
      />
      <Inquire eyebrow="The enquiry" />
      <FAQ />
    </>
  );
}
