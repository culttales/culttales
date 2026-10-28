"use client";

import { useEffect, useRef, useState } from "react";

const LABELS: Record<string, string> = {
  view: "View",
  play: "Play",
};

/**
 * A fine gold point with a ring that trails it softly. Over elements tagged
 * `data-cursor="view"` or `data-cursor="play"` the ring opens into a
 * labelled circle. Hidden on touch devices and under reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let frame = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      const cursorType = target?.getAttribute("data-cursor") ?? null;
      setLabel(cursorType ? LABELS[cursorType] ?? null : null);
    };

    const tick = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} style={{ opacity: 0 }} className={`cursor-ring${label ? " is-expanded" : ""}`}>
        <span>{label}</span>
      </div>
      <div ref={dotRef} style={{ opacity: 0 }} className={`cursor-dot${label ? " is-hidden" : ""}`} />
    </>
  );
}
