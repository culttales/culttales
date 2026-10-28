const QUESTIONS = [
  {
    q: "What do you cover at a wedding?",
    a: "We document every wedding across photography, cinematography and editorial storytelling. Photography holds the detail, film carries the emotion, and our editorial work places the day within its culture and traditions.",
  },
  {
    q: "Do you travel for weddings?",
    a: "Yes. We travel across every region of India, and internationally for Pan-Indian and diaspora weddings. Timelines and budgets are discussed individually.",
  },
  {
    q: "How long are your wedding films?",
    a: "Our wedding films are cinematic documentaries, usually three to five minutes long, built around the emotional arc of your day.",
  },
  {
    q: "How do you prepare for our wedding?",
    a: "We spend time understanding your community, your region and the specific version of each ritual your family practices, so the final story feels entirely yours.",
  },
  {
    q: "How do we book you?",
    a: "Tell us about your wedding through the enquiry form. We reply within 48 hours to talk through your dates, your plans and your story.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-44">
      <div className="mx-auto grid max-w-frame grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-6">Questions</p>
          <h2 className="font-display text-display-md text-balance">
            Everything you may wish to ask.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="faq group border-t border-gold/25 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-display text-xl italic md:text-2xl">
                {item.q}
                <span
                  aria-hidden
                  className="relative block h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-gold after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:bg-gold after:transition-transform after:duration-500 group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-xl pb-8 text-base leading-relaxed text-bone/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
