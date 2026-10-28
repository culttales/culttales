import type { ReactNode } from "react";

/**
 * A slowly turning ring of small caps, used as a seal on imagery and as the
 * frame around play buttons. `id` must be unique on the page because the
 * text follows an SVG path referenced by id. Pass a position class
 * (relative or absolute) in `className`.
 */
export default function RotatingBadge({
  id,
  text,
  className,
  children,
}: {
  id: string;
  text: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span className={`block ${className ?? ""}`}>
      <svg viewBox="0 0 120 120" aria-hidden className="rotate-slow absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
        </defs>
        <text fill="currentColor" fontSize="9" letterSpacing="2.6" style={{ textTransform: "uppercase" }}>
          <textPath href={`#${id}`} textLength="292" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </span>
  );
}
