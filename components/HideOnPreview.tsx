"use client";

import { usePathname } from "next/navigation";

// Private /preview pages are shared standalone, without the site navigation.
export default function HideOnPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith("/preview")) return null;
  return <>{children}</>;
}
