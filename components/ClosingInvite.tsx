import Link from "next/link";

/** Dark closing card that leads from any page to the enquiry form. */
export default function ClosingInvite({
  eyebrow = "Inspired by these celebrations?",
  title = "Let us tell your story with the same devotion.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-paper px-5 pb-24 md:px-12 md:pb-36">
      <div className="on-dark relative mx-auto max-w-site overflow-hidden rounded-3xl bg-obsidian px-6 py-16 text-center text-paper sm:px-10 md:py-24">
        <span aria-hidden className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-paper/10 md:inset-4" />
        <p className="text-[10px] font-medium uppercase tracking-editorial text-gold">{eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-[2.25rem] font-light leading-[1.08] sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-bronze">
            Enquire about your dates &rarr;
          </Link>
          <Link href="/films" className="btn-outline-light">
            Watch our films
          </Link>
        </div>
      </div>
    </section>
  );
}
