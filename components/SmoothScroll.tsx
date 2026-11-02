"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Initialises Lenis smooth scrolling site-wide, including in-page anchor
 * links. It pauses while a dialog holds the page (see lib/scrollLock) and is
 * skipped entirely under prefers-reduced-motion so the browser's native
 * scroll takes over instead.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      anchors: true,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    const onLock = (e: Event) => ((e as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start());
    window.addEventListener("ct:scroll-lock", onLock);

    return () => {
      window.removeEventListener("ct:scroll-lock", onLock);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
