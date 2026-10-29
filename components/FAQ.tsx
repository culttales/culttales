import SectionMarker from "./SectionMarker";

const QUESTIONS = [
  {
    q: "What do you cover at a wedding?",
    a: "We document every wedding across photography, wedding cinema and culture. Photography holds the detail, cinema carries the emotion, and our culture work places the day within its culture and traditions.",
  },
  {
    q: "Do you travel for weddings?",
    a: "Yes. We travel across every region of India, and internationally for Pan-Indian and diaspora weddings. Timelines and budgets are discussed individually.",
  },
  {
    q: "How long are your wedding films?",
    a: "Our wedding films are cinematic, usually three to five minutes long, built around the emotional arc of your day.",
  },
  {
    q: "How do you prepare for our wedding?",
    a: "We spend time understanding your region, your family and the specific version of each ritual your family practices, so the final story feels entirely yours.",
  },
  {
    q: "How do we book you?",
    a: "Tell us about your wedding through the enquiry form. We reply within 48 hours to talk through your dates, your plans and your story.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-line-dark bg-paper px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <SectionMarker title="Questions" aside="Before you write to us" />
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-[2.5rem] leading-[1.05] text-obsidian sm:text-5xl">
              Everything you may <em>wish</em> to ask.
            </h2>
          </div>

          <div className="border-t border-line-dark lg:col-span-7 lg:col-start-6">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="faq group border-b border-line-dark">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[1.4rem] leading-snug text-obsidian transition-colors hover:text-bronze md:py-7 md:text-2xl">
                  {item.q}
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-obsidian/20 text-lg text-obsidian/60 transition-all duration-500 group-open:rotate-45 group-open:border-bronze group-open:text-bronze"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-7 text-base font-light leading-[1.7] text-char/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
