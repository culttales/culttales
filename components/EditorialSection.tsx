import clsx from "clsx";
import RevealText from "./RevealText";

type EditorialSectionProps = {
  eyebrow?: string;
  statement: string;
  body?: string;
  tone?: "ivory" | "sand";
  align?: "left" | "center";
  id?: string;
};

export default function EditorialSection({
  eyebrow,
  statement,
  body,
  tone = "ivory",
  align = "left",
  id,
}: EditorialSectionProps) {
  
  return (
    <section
      id={id}
      className={clsx(
        "px-6 py-28 md:px-10 md:py-48",
        tone === "sand" ? "bg-sand text-char" : "bg-paper text-char"
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-4xl",
          align === "center" && "text-center"
        )}
      >
        {align === "center" && (
          <div aria-hidden className="ornament mb-12">
            <i />
          </div>
        )}
        {eyebrow && (
          <p className="eyebrow mb-6">
            {eyebrow}
          </p>
        )}
        <RevealText
          as="h2"
          className="font-display text-display-md text-balance"
        >
          {statement}
        </RevealText>
        {body && (
          <p
            className={clsx(
              "mt-8 max-w-editorial text-base leading-relaxed text-char/70",
              align === "center" && "mx-auto"
            )}
          >
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
