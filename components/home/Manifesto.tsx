import Image from "next/image";
import Reveal from "../Reveal";
import RotatingBadge from "../RotatingBadge";
import SectionMarker from "../SectionMarker";

// What the studio is, in plain facts rather than invented numbers.
const FACTS = [
  { value: <>Kerala <em>&amp;</em> Rajasthan</>, label: "Where our team is based" },
  { value: <>Across India</>, label: "And beyond, wherever the wedding is" },
  { value: <>Photography <em>+</em> Wedding Cinema</>, label: "One team telling one story" },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-paper px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <SectionMarker index="01" title="The manifesto — why we exist" aside="Where love meets legacy · Pan-India & beyond" />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-sm lg:mx-0">
              <div className="group overflow-hidden rounded-xl bg-sand shadow-lg">
                <Image
                  src="/images/moment-1.jpg"
                  alt="A bride in red laughing with the women of her family"
                  width={1214}
                  height={1296}
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 100vw"
                  className="card-img aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>Fig. 01 — Among family</span>
                <span className="font-display text-[13px] normal-case italic tracking-normal">The hour before</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="eyebrow mb-4">We are more than wedding photographers</p>
            <h2 className="text-[2.5rem] leading-[1.06] text-obsidian sm:text-5xl md:text-[56px]">
              Preserving the <em>unspoken</em> poetry between rituals &amp; generations.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] font-light leading-[1.8] text-char/85 sm:text-base">
              <p>
                We are a Pan-Indian wedding photography and filmmaking team, documenting weddings in
                their most authentic form. From intimate rituals and sacred traditions to spontaneous
                laughter and grand celebrations, we look beyond the obvious to the moments that truly
                matter.
              </p>
              <p>
                Our approach joins the art of cinematic filmmaking with the honesty of raw, unscripted
                storytelling. We don&rsquo;t simply photograph how a wedding looks; we capture how it
                feels.
              </p>
            </div>

            <div className="mt-9 flex items-center justify-between gap-6 border-t border-line-dark pt-7">
              <div>
                <p className="font-display text-2xl italic text-obsidian">The CULT. tales team</p>
                <p className="mt-1 text-[10px] uppercase tracking-editorial text-muted">
                  Visual storytellers &middot; Memory keepers
                </p>
              </div>
              <RotatingBadge
                id="manifesto-seal"
                text="Short for culture · Long on tales · "
                className="relative h-20 w-20 shrink-0 text-bronze"
              >
                <span className="font-display text-lg italic">CT</span>
              </RotatingBadge>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-between gap-10 lg:col-span-3">
            <div className="group hidden overflow-hidden rounded-xl bg-sand shadow-md sm:block">
              <Image
                src="/images/moment-9.jpg"
                alt="The bride and groom walking hand in hand among their guests"
                width={1350}
                height={1800}
                sizes="(min-width: 1024px) 20rem, 50vw"
                className="card-img aspect-[3/4] h-auto w-full object-cover"
              />
            </div>
            <blockquote className="rounded-xl border border-line-dark bg-sand p-6">
              <span className="eyebrow mb-2 block text-[10px]">Our promise</span>
              <p className="font-display text-xl italic leading-snug text-obsidian">
                &ldquo;Years from now, these frames won&rsquo;t only show you how your wedding looked.
                They will remind you how it felt.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-dark pt-12 md:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">{fact.label}</dt>
              <dd className="em-accent font-display text-[1.7rem] leading-tight text-obsidian sm:text-4xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
