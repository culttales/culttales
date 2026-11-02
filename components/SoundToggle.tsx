"use client";

import { setSoundOn, useSoundOn } from "@/lib/sound";

/**
 * Turns video sound on or off across the site. The bars only move when
 * `playing` says a video is running, since the toggle itself makes no sound.
 */
export default function SoundToggle({ light = false, playing = false }: { light?: boolean; playing?: boolean }) {
  const on = useSoundOn();

  return (
    <button
      type="button"
      onClick={() => setSoundOn(!on)}
      aria-pressed={on}
      aria-label={on ? "Turn video sound off" : "Turn video sound on"}
      title="Video sound"
      className={`flex items-center gap-2.5 whitespace-nowrap rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-editorial transition-colors hover:border-bronze ${
        light ? "border-paper/25" : "border-obsidian/15"
      }`}
    >
      <span aria-hidden className={`flex h-3.5 w-3.5 items-end gap-[2px] ${on && playing ? "eq-on" : ""}`}>
        <span className="eq-bar h-1 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-2 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-1.5 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-1 w-[2px] rounded-full bg-bronze" />
      </span>
      <span>{on ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
