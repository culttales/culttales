import Image from "next/image";

/**
 * Logo intro that plays once per visit, entirely in CSS (see .intro in
 * globals.css). An inline script in the root layout hides it on later loads.
 */
export default function Intro() {
  return (
    <div aria-hidden className="intro">
      <Image
        src="/logo/cult-tales-logo-black.png"
        alt=""
        width={510}
        height={331}
        priority
        className="h-auto w-28 md:w-36"
      />
      <span />
    </div>
  );
}
