import { contact } from "@/lib/site";
import InquiryForm from "../InquiryForm";

export default function Inquire({ eyebrow = "06 / Begin your story" }: { eyebrow?: string }) {
  return (
    <section id="inquire" className="relative border-t border-line-dark bg-sand px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-5">
          <div>
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="text-[2.6rem] leading-[1.03] text-obsidian sm:text-6xl">
              Tell us about your <em>celebration.</em>
            </h2>
          </div>

          <p className="text-[15px] font-light leading-[1.8] text-char/85 sm:text-base">
            Every wedding we document is planned with you from the first conversation. Share a few
            details and we will reply within 48 hours to talk through your dates, your plans and
            your story.
          </p>

          <div className="space-y-3 rounded-2xl border border-line-dark bg-paper p-6">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-bronze" />
              <span className="text-[11px] font-semibold uppercase tracking-editorial text-obsidian">
                Travelling across India &amp; beyond
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Based in Kerala and Rajasthan, we travel to every region of India and abroad for
              Pan-Indian weddings. Timelines and budgets are discussed individually.
            </p>
          </div>

          <dl className="space-y-5 border-t border-line-dark pt-6">
            <div>
              <dt className="text-[10px] uppercase tracking-editorial text-muted">Email the studio</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="break-all font-display text-2xl text-obsidian transition-colors hover:text-bronze">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-editorial text-muted">Call us</dt>
              <dd>
                <a href={contact.phoneHref} className="font-display text-2xl text-obsidian transition-colors hover:text-bronze">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-editorial text-muted">Instagram</dt>
              <dd>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-obsidian transition-colors hover:text-bronze"
                >
                  {contact.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
