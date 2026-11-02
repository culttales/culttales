import { useSyncExternalStore } from "react";

// Site-wide sound setting, shared by every toggle and every video that has
// audio. It makes no sound itself: only a playing video reads it, so without a
// video there is silence. It starts off because browsers refuse sound before
// the visitor has clicked something.
let soundOn = false;
let chosen = false;
const listeners = new Set<() => void>();

function update(value: boolean) {
  if (value === soundOn) return;
  soundOn = value;
  listeners.forEach((listener) => listener());
}

export function setSoundOn(value: boolean) {
  chosen = true;
  update(value);
}

/** Pressing play on a film asks for its sound, unless the visitor turned sound off. */
export function allowFilmSound() {
  if (!chosen) update(true);
  return soundOn;
}

/** Plays a video, falling back to silence if the browser refuses to play it with sound. */
export function playWithSound(video: HTMLVideoElement) {
  void video.play().catch((err: DOMException) => {
    if (err.name !== "NotAllowedError" || video.muted) return;
    update(false);
    video.muted = true;
    void video.play().catch(() => {});
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useSoundOn() {
  return useSyncExternalStore(subscribe, () => soundOn, () => false);
}
