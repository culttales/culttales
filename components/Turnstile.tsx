"use client";

import { useEffect, useRef } from "react";

type TurnstileApi = {
  render(el: HTMLElement, options: { sitekey: string; theme?: "light" | "dark" | "auto" }): string;
  remove(id: string): void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptLoad: Promise<void> | null = null;

function loadScript() {
  scriptLoad ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptLoad = null;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptLoad;
}

/**
 * Cloudflare Turnstile bot check. Renders nothing unless
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY was set at build time. The widget adds a
 * hidden "cf-turnstile-response" input to the surrounding form.
 */
export default function Turnstile() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteKey) return;
    let id: string | undefined;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        id = window.turnstile.render(ref.current, { sitekey: siteKey, theme: "light" });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (id) window.turnstile?.remove(id);
    };
  }, [siteKey]);

  if (!siteKey) return null;
  return <div ref={ref} className="flex min-h-[65px] justify-center" />;
}
