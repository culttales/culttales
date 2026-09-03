"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import type React from "react";

type RevealTextProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  className?: string;
};

/**
 * The site's single deliberate scroll-entrance signature: a soft clip-path
 * reveal used for editorial headlines and statements. Applied sparingly —
 * not on every section — to avoid the generic fade-up-on-everything pattern.
 */
export default function RevealText({
  children,
  as = "div",
  delay = 0,
  className,
}: RevealTextProps) {
  // Cast to a generic component type: motion's indexed access typing doesn't
  // narrow cleanly across the small union of tags this wrapper supports.
  const Component = motion[as] as React.ElementType;

  return (
    <Component
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
