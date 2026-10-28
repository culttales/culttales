import type { ReactNode } from "react";
import SectionMarker from "./SectionMarker";

/**
 * Opening of every inner page: the numbered hairline row, a large serif
 * title and, beside it, a short introduction.
 */
export default function PageIntro({
  label,
  aside,
  title,
  intro,
  children,
}: {
  label: string;
  aside?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-paper px-5 pb-14 pt-32 md:px-12 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-site">
        <SectionMarker title={label} aside={aside} />
        <div className="mt-12 grid grid-cols-1 items-end gap-8 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <h1 className="text-[2.75rem] font-light leading-[1.02] text-obsidian sm:text-6xl md:text-[76px] lg:col-span-8">
            {title}
          </h1>
          {intro && (
            <div className="text-[15px] font-light leading-[1.8] text-char/80 sm:text-base lg:col-span-4">{intro}</div>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
