import type { Metadata } from "next";
import Image from "next/image";
import RevealText from "@/components/RevealText";

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
              <p className="mb-8 text-sm text-dust">Get in touch</p>

              <div className="space-y-12">
                <div>
                  <p className="mb-2 text-xs tracking-label uppercase text-dust">
                    Email
                  </p>
                  <a
                    href="mailto:hello@culttales.in"
                    className="link-draw text-xl text-bone"
                  >
                    hello@culttales.in
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs tracking-label uppercase text-dust">
                    Phone
                  </p>
                  <a href="tel:+910000000000" className="link-draw text-xl text-bone">
                    +91 00000 00000
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs tracking-label uppercase text-dust">
                    Instagram
                  </p>
                  <a href="https://instagram.com" className="link-draw text-xl text-bone">
                    @culttales
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs tracking-label uppercase text-dust">
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
              <p className="mb-8 text-sm text-dust">Tell us about your wedding</p>

              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs tracking-label uppercase text-dust">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Couple names or contact name"
                    className="w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-bone focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs tracking-label uppercase text-dust">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-bone focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="wedding" className="mb-2 block text-xs tracking-label uppercase text-dust">
                    Wedding date
                  </label>
                  <input
                    id="wedding"
                    type="text"
                    placeholder="Month & Year or Tentative"
                    className="w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-bone focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="mb-2 block text-xs tracking-label uppercase text-dust">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="City / Region"
                    className="w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-bone focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs tracking-label uppercase text-dust">
                    Tell us your story
                  </label>
                  <textarea
                    id="message"
                    placeholder="What makes your wedding unique? Are there specific rituals or traditions we should know about? Any questions?"
                    rows={5}
                    className="w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-bone focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="link-draw mt-10 inline-block text-sm text-bone"
                >
                  Send Message &rarr;
                </button>
              </form>

              <p className="mt-12 text-xs text-dust">
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
