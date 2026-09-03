import Link from "next/link";
import RevealText from "./RevealText";

export default function ContactCTA() {
  return (
    <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <RevealText as="h2" className="font-display text-display-lg text-balance">
          Let&rsquo;s tell your story.
        </RevealText>
        <p className="mx-auto mt-8 max-w-editorial text-base leading-relaxed text-char/70">
          Begin a refined wedding storytelling experience rooted in culture,
          emotion and authenticity.
        </p>
        <Link
          href="/contact"
          className="link-draw mt-10 inline-block font-display text-2xl text-char"
        >
          Start a Conversation &rarr;
        </Link>
      </div>
    </section>
  );
}
