"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type LogoProps = {
  variant?: "white" | "black";
  className?: string;
  /** Load straight away, for logos visible on first paint. */
  eager?: boolean;
};

/**
 * Renders the official CULT. tales wordmark logo.
 * Two transparent variants are generated from the source artwork:
 *  - white: for use on dark (ink) backgrounds
 *  - black: for use on light (paper) backgrounds
 */
export default function Logo({ variant = "white", className, eager }: LogoProps) {
  const pathname = usePathname();
  const src =
    variant === "white"
      ? "/logo/cult-tales-logo-white.png"
      : "/logo/cult-tales-logo-black.png";

  return (
    <Link
      href="/"
      // Already on the homepage: Next won't navigate, so scroll up ourselves.
      onClick={() => {
        if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="CULT. tales — home"
      className={clsx("relative block", className)}
    >
      <Image
        src={src}
        alt="CULT. tales"
        width={510}
        height={331}
        loading={eager ? "eager" : undefined}
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
