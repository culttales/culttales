import type { Metadata } from "next";
import Image from "next/image";
import ClosingInvite from "@/components/ClosingInvite";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionMarker from "@/components/SectionMarker";

export const metadata: Metadata = {
  title: "About",
  description:
    "CULT. tales is a Pan-Indian wedding photography and wedding cinema team based in Kerala and Rajasthan, documenting weddings in their most authentic form.",
};

const APPROACH = [
  {
    title: "Photography",
    body: "For the detail. Every ritual, every gesture, every fleeting glance, held still.",
  },
  {
    title: "Cinematography",
    body: "For the emotion. Films that carry how a wedding feels, not only how it looks.",
  },
  {
    title: "Cultural documentation",
    body: "For the context. The meaning behind each ritual, kept as your family practises it.",
  },
];

const DOCUMENT = [
  { title: "The rituals", body: "Honouring how each region, and each family, keeps them.", src: "/images/moment-3.jpg", alt: "Family showering the couple with rose petals", focus: "52% 45%" },
  { title: "The people", body: "Family, friends and the quiet edges of every moment.", src: "/images/moment-9.jpg", alt: "The couple walking hand in hand among their guests" },
  { title: "The place", body: "Regional architecture, light and landscape.", src: "/images/moment-4.jpg", alt: "The couple at sunset on a palace terrace", focus: "42% 50%" },
  { title: "The emotion", body: "The unguarded feeling underneath every ceremony.", src: "/images/moment-5.jpg", alt: "A bride in red smiling beside a window", focus: "68% 40%" },
];

const SERVICES = [
  {
    title: "Wedding stories",
    body: "Full coverage across photography and wedding cinema, delivered as one visual story of the wedding, its people and its rituals.",
  },
  {
    title: "Wedding films",
    body: "Cinematic wedding films, built around the emotional arc of the day.",
  },
  {
    title: "Cultural stories",
    body: "Raw culture storytelling: the rituals, traditions and celebrations beyond individual weddings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About us — who we are"
        aside="Based in Kerala & Rajasthan"
        title={
          <>
            Storytellers of <em>culture, love</em> &amp; tradition.
          </>
        }
        intro="A Pan-Indian wedding photography and wedding cinema team, travelling across India and beyond to document weddings in their most authentic form."
      />

      <section className="bg-paper px-5 pb-24 md:px-12 md:pb-36">
        <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-12 border-t border-line-dark pt-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-xl">
                <Image
                  src="/images/moment-1.jpg"
                  alt="A bride laughing among the women of her family"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>Fig. 01 — Among family</span>
                <span className="font-display text-[13px] normal-case italic tracking-normal">Not how it looks, how it feels</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 text-base font-light leading-[1.75] text-char/85 lg:col-span-7 lg:pt-6 md:text-[17px]">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.5rem] first-letter:leading-[0.8] first-letter:text-obsidian">
              We are a Pan-Indian wedding photography and wedding cinema team dedicated to documenting
              weddings in their most authentic form. From intimate rituals and sacred traditions to
              spontaneous laughter, heartfelt emotions and grand celebrations, we look beyond the
              obvious to capture the moments that truly matter.
            </p>
            <p>
              Our approach combines the art of cinematic filmmaking with the honesty of raw, unscripted
              storytelling. We don&rsquo;t simply photograph how a wedding looks; we capture how it
              feels.
            </p>
            <p>
              Every frame, every ritual, every fleeting glance becomes part of a larger story, one that
              reflects your culture, your relationships and your individuality.
            </p>
            <p>
              Travelling across India, we explore the diverse traditions and unique expressions of love
              that make every wedding different. We approach each celebration with curiosity,
              sensitivity and a deep respect for the customs and people who bring it to life.
            </p>
            <p>
              For us, exceptional wedding storytelling is not just about beautiful visuals. It is about
              understanding your story, anticipating meaningful moments, preserving the details, and
              creating films and photographs that grow more valuable with time.
            </p>
            <p className="font-display text-2xl italic text-bronze">Where culture becomes story.</p>
          </Reveal>
        </div>
      </section>

      <section className="on-dark bg-obsidian px-5 py-24 text-paper md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <SectionMarker title="Our approach" aside="Photography · Cinema · Culture" />
          <h2 className="mt-14 max-w-4xl text-[2.5rem] font-light leading-[1.05] sm:text-6xl md:text-[68px]">
            Photography and wedding cinema, <em>woven into one story.</em>
          </h2>
          <div className="mt-16 grid grid-cols-1 border-t border-line-light md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-line-light py-10 md:border-b-0 md:px-10 md:py-14 ${i > 0 ? "md:border-l" : "md:pl-0"}`}
              >
                <p className="font-display text-lg italic text-gold">{String(i + 1).padStart(2, "0")} /</p>
                <h3 className="mt-5 text-3xl md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-xs text-base font-light leading-[1.7] text-paper/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <SectionMarker title="What we document" aside="Beyond the obvious" />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {DOCUMENT.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand shadow-md">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="card-img object-cover"
                    style={item.focus ? { objectPosition: item.focus } : undefined}
                  />
                </div>
                <h3 className="mt-5 text-2xl text-obsidian md:text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-char/75">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line-dark bg-sand px-5 py-24 md:px-12 md:py-32">
        <p className="mx-auto max-w-4xl text-center font-display text-[2rem] italic leading-[1.25] text-obsidian sm:text-4xl md:text-5xl">
          &ldquo;Understanding a wedding means understanding a culture, a family, a moment in time that
          will never happen again.&rdquo;
        </p>
      </section>

      <section className="bg-paper px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <SectionMarker title="What we offer" aside="Timelines and budgets discussed individually" />
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="rounded-2xl border border-line-dark bg-sand/50 p-8">
                <p className="font-display text-lg italic text-bronze">{String(i + 1).padStart(2, "0")} /</p>
                <h3 className="mt-4 text-3xl text-obsidian">{service.title}</h3>
                <p className="mt-3 text-base font-light leading-[1.7] text-char/80">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingInvite eyebrow="Let's tell your story" title="We travel across India and beyond for Pan-Indian weddings." />
    </>
  );
}
