"use client";

import { useEffect, useRef, useState } from "react";

const LABELS: Record<string, string> = {
  view: "VIEW",
  play: "PLAY",
};

/**
 * Subtle custom cursor: a small dot that expands into a labelled circle over
 * elements tagged `data-cursor="view"` or `data-cursor="play"`. Disabled
 * automatically on touch devices via CSS (see globals.css) and respects
 * prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      const cursorType = target?.getAttribute("data-cursor") ?? null;
      setLabel(cursorType ? LABELS[cursorType] ?? null : null);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={dotRef} className={`cursor-dot${label ? " is-expanded" : ""}`}>
      <span>{label}</span>
    </div>
  );
}
