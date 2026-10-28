import type { Metadata } from "next";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CULT. tales to discuss your wedding story.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-ink px-6 pb-20 pt-36 md:px-10 md:pb-32 md:pt-44">
        <Image
          src="/images/contact-bg.jpg"
          alt="Background"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

        <div className="relative z-10 mx-auto w-full max-w-frame">
          <RevealText as="h1" className="max-w-3xl font-display text-display-lg text-bone text-balance">
            Let&rsquo;s tell your story.
          </RevealText>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/80">
            Begin a refined wedding storytelling experience rooted in culture,
            emotion and authenticity. Whether you&rsquo;re planning a Pan-Indian
            wedding, a diaspora celebration, or want to explore a cultural
            documentation project, we&rsquo;d love to hear about your vision.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-36">
        <div className="mx-auto max-w-frame">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-8">Get in touch</p>

              <div className="space-y-12">
                <div>
                  <p className="eyebrow mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-draw text-xl text-bone"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Phone
                  </p>
                  <a href={contact.phoneHref} className="link-draw text-xl text-bone">
                    {contact.phone}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Instagram
                  </p>
                  <a href={contact.instagramUrl} className="link-draw text-xl text-bone">
                    {contact.instagramHandle}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Travel Availability
                  </p>
                  <p className="text-sm text-bone/80">
                    We travel across all regions of India and internationally
                    for Pan-Indian and diaspora weddings. Timelines and budgets
                    discussed individually.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-8">Tell us about your wedding</p>

              <ContactForm />

              <p className="eyebrow mt-12">
                We&rsquo;ll get back to you within 48 hours. Looking forward to
                learning about your wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-char md:px-10 md:py-24">
        <div className="mx-auto max-w-frame text-center">
          <p className="text-sm text-char/70">
            Short for Culture. Long on Tales. Documenting India, one wedding at
            a time.
          </p>
        </div>
      </section>
    </>
  );
}
