import clsx from "clsx";
import RevealText from "./RevealText";

type EditorialSectionProps = {
  eyebrow?: string;
  statement: string;
  body?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  id?: string;
};

export default function EditorialSection({
  eyebrow,
  statement,
  body,
  tone = "dark",
  align = "left",
  id,
}: EditorialSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={clsx(
        "px-6 py-28 md:px-10 md:py-36",
        isDark ? "bg-ink text-bone" : "bg-paper text-char"
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-4xl",
          align === "center" && "text-center"
        )}
      >
        {eyebrow && (
          <p className={clsx("mb-6 text-sm", isDark ? "text-dust" : "text-dust")}>
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
              "mt-8 max-w-editorial text-base leading-relaxed",
              isDark ? "text-bone/75" : "text-char/70",
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
