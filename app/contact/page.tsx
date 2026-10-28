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
      <section className="bg-paper px-6 pb-20 pt-36 md:px-10 md:pb-32 md:pt-52">
        <div className="mx-auto grid w-full max-w-frame grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div>
          <p className="eyebrow mb-6">Contact</p>
          <RevealText as="h1" className="max-w-3xl font-display text-display-lg text-balance">
            Let&rsquo;s tell <em>your</em> story.
          </RevealText>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-char/75">
            Begin a refined wedding storytelling experience rooted in culture,
            emotion and authenticity. Whether you&rsquo;re planning a Pan-Indian
            wedding, a diaspora celebration, or want to explore a cultural
            documentation project, we&rsquo;d love to hear about your vision.
          </p>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-t-full ring-1 ring-bronze/30 ring-offset-8 ring-offset-paper">
          <Image
            src="/images/moment-8.jpg"
            alt="A couple in a quiet moment under red drapes"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-28 text-char md:px-10 md:py-48">
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
                    className="link-draw text-xl text-char"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Phone
                  </p>
                  <a href={contact.phoneHref} className="link-draw text-xl text-char">
                    {contact.phone}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Instagram
                  </p>
                  <a href={contact.instagramUrl} className="link-draw text-xl text-char">
                    {contact.instagramHandle}
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-2">
                    Travel Availability
                  </p>
                  <p className="text-sm text-char/80">
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
