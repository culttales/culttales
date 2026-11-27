import type { ReactNode } from "react";

// A template remounts on every navigation, so the fade in .page-enter
// (globals.css) replays for each new page.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
