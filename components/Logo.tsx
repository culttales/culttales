import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "white" | "black";
  className?: string;
  priority?: boolean;
};

/**
 * Renders the official CULT. tales wordmark logo.
 * Two transparent variants are generated from the source artwork:
 *  - white: for use on dark (ink) backgrounds
 *  - black: for use on light (paper) backgrounds
 */
export default function Logo({ variant = "white", className, priority }: LogoProps) {
  const src =
    variant === "white"
      ? "/logo/cult-tales-logo-white.png"
      : "/logo/cult-tales-logo-black.png";

  return (
    <Link
      href="/"
      aria-label="CULT. tales — home"
      className={clsx("relative block", className)}
    >
      <Image
        src={src}
        alt="CULT. tales"
        width={510}
        height={331}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
