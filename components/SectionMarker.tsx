/**
 * The numbered hairline row that opens each section, e.g.
 * "01 / Who we are ........ Rooted in culture".
 */
export default function SectionMarker({
  index,
  title,
  aside,
  className,
}: {
  index?: string;
  title: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div className={`section-marker ${className ?? ""}`}>
      <span>
        {index && <>{index} / </>}
        {title}
      </span>
      {aside && <span className="hidden sm:inline">{aside}</span>}
    </div>
  );
}
