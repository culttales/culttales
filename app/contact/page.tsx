import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Inquire from "@/components/home/Inquire";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell CULT. tales about your wedding: your dates, your rituals and your story. We reply within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact — begin your story"
        aside="We reply within 48 hours"
        title={
          <>
            Let&rsquo;s tell <em>your</em> story.
          </>
        }
        intro="Whether you are planning a Pan-Indian wedding, a diaspora celebration or a cultural documentation project, we would love to hear about your vision."
      />
      <Inquire eyebrow="The enquiry" />
      <FAQ />
    </>
  );
}
