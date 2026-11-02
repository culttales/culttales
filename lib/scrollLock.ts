// Freezes page scrolling while a dialog is open. SmoothScroll listens for the
// event so Lenis pauses too; plain `overflow: hidden` alone does not stop it.
export function lockScroll(locked: boolean) {
  document.body.style.overflow = locked ? "hidden" : "";
  window.dispatchEvent(new CustomEvent("ct:scroll-lock", { detail: locked }));
}
