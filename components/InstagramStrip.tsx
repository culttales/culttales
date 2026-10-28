import Image from "next/image";
import { contact } from "@/lib/site";
import { moments } from "@/lib/moments";

export default function InstagramStrip() {
  const tiles = [moments[1], moments[0], moments[3], moments[6], moments[5], moments[4]];

  return (
    <section className="bg-sand px-6 py-24 text-char md:px-10 md:py-36">
      <div className="mx-auto max-w-frame">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="eyebrow mb-5">Follow the Journey</p>
          <a
            href={contact.instagramUrl}
            className="link-draw font-display text-display-sm italic"
          >
            {contact.instagramHandle}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {tiles.map((m) => (
            <a
              key={m.src}
              href={contact.instagramUrl}
              aria-label={`${m.alt} — on Instagram`}
              className="group relative block aspect-square overflow-hidden bg-char/10"
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 16vw, 50vw"
                className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.06]"
              />
              <span aria-hidden className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
