import Image from "next/image";
import { moments } from "@/lib/moments";

/**
 * A slow, endless strip of wedding photographs in mixed proportions, like a
 * contact sheet drifting past. Pauses on hover; static under reduced motion.
 */
export default function Filmstrip() {
  const frames = [...moments, ...moments];

  return (
    <section aria-label="Moments from our weddings" className="overflow-hidden bg-ink py-16 md:py-24">
      <div className="filmstrip flex w-max">
        {frames.map((m, i) => (
          <div
            key={i}
            aria-hidden={i >= moments.length}
            className="relative mr-4 h-[260px] shrink-0 overflow-hidden md:mr-6 md:h-[420px]"
            style={{ aspectRatio: `${m.w} / ${m.h}` }}
          >
            <Image
              src={m.src}
              alt={i >= moments.length ? "" : m.alt}
              fill
              sizes="(min-width: 768px) 640px, 400px"
              className="object-cover"
            />
            <span aria-hidden className="pointer-events-none absolute inset-2.5 ring-1 ring-gold/25" />
          </div>
        ))}
      </div>
    </section>
  );
}
