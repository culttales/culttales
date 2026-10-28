import Link from "next/link";
import RevealText from "./RevealText";

export default function ContactCTA() {
  return (
    <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-52">
      <div className="mx-auto max-w-4xl text-center">
        <div aria-hidden className="ornament mb-12">
          <i />
        </div>
        <RevealText as="h2" className="font-display text-display-lg text-balance">
          Let&rsquo;s tell your story.
        </RevealText>
        <p className="mx-auto mt-8 max-w-editorial text-base leading-relaxed text-char/70">
          Begin a refined wedding storytelling experience rooted in culture,
          emotion and authenticity.
        </p>
        <Link
          href="/contact"
          className="mt-12 inline-block border border-[#8a6f3a]/60 px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-[#8a6f3a] transition-colors duration-500 hover:bg-[#8a6f3a] hover:text-paper"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
