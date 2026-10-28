"use client";

import { useSyncExternalStore } from "react";

// A slow four-chord pad (D, G, Bm, A), one chord every eight seconds.
const CHORDS = [
  [146.83, 220.0, 329.63, 369.99],
  [196.0, 293.66, 369.99, 440.0],
  [123.47, 185.0, 293.66, 440.0],
  [110.0, 164.81, 277.18, 392.0],
];
const CHORD_SECONDS = 8;
const LEVEL = 0.09;

type Engine = {
  ctx: AudioContext;
  master: GainNode;
  next: number;
  chord: number;
  timer?: number;
  sleep?: number;
};

// One engine for the whole page, shared by every toggle (the header and the
// phone menu), so closing the menu does not silence the music.
let engine: Engine | null = null;
let playing = false;
const listeners = new Set<() => void>();

function setPlaying(value: boolean) {
  playing = value;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// A soft room: decaying noise used as a reverb impulse.
function roomImpulse(ctx: AudioContext, seconds = 6, decay = 3) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return buffer;
}

function getEngine(): Engine {
  if (engine) return engine;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new Ctx();
  const master = ctx.createGain();
  master.gain.value = 0;

  const reverb = ctx.createConvolver();
  reverb.buffer = roomImpulse(ctx);
  const wet = ctx.createGain();
  wet.gain.value = 0.7;
  const dry = ctx.createGain();
  dry.gain.value = 0.3;

  master.connect(dry).connect(ctx.destination);
  master.connect(reverb).connect(wet).connect(ctx.destination);
  engine = { ctx, master, next: 0, chord: 0 };

  // Films have their own sound; step aside while one plays, and when the
  // tab is hidden.
  window.addEventListener("ct:media-play", stop);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
  });
  return engine;
}

function playChord(e: Engine, at: number) {
  for (const frequency of CHORDS[e.chord]) {
    const osc = e.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = frequency;
    const envelope = e.ctx.createGain();
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(0.18, at + 2.5);
    envelope.gain.setTargetAtTime(0, at + 4, 1.4);
    osc.connect(envelope).connect(e.master);
    osc.start(at);
    osc.stop(at + 12);
  }
  e.chord = (e.chord + 1) % CHORDS.length;
}

async function start() {
  const e = getEngine();
  window.clearTimeout(e.sleep);
  await e.ctx.resume();
  const now = e.ctx.currentTime;
  e.master.gain.cancelScheduledValues(now);
  e.master.gain.setTargetAtTime(LEVEL, now, 0.8);
  e.next = Math.max(e.next, now + 0.1);
  const schedule = () => {
    while (e.next < e.ctx.currentTime + 1) {
      playChord(e, e.next);
      e.next += CHORD_SECONDS;
    }
  };
  schedule();
  window.clearInterval(e.timer);
  e.timer = window.setInterval(schedule, 500);
  setPlaying(true);
}

function stop() {
  const e = engine;
  if (!e || !playing) return;
  window.clearInterval(e.timer);
  e.master.gain.cancelScheduledValues(e.ctx.currentTime);
  e.master.gain.setTargetAtTime(0, e.ctx.currentTime, 0.5);
  e.sleep = window.setTimeout(() => e.ctx.suspend(), 3000);
  setPlaying(false);
}

/**
 * Optional ambient score, off until the visitor turns it on. Built on the
 * Web Audio API so no audio files or libraries are loaded.
 */
export default function AmbientToggle({ light = false }: { light?: boolean }) {
  const on = useSyncExternalStore(subscribe, () => playing, () => false);

  return (
    <button
      type="button"
      onClick={() => (on ? stop() : start())}
      aria-pressed={on}
      aria-label={on ? "Turn ambient music off" : "Turn ambient music on"}
      title="Ambient music"
      className={`flex items-center gap-2.5 whitespace-nowrap rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-editorial transition-colors hover:border-bronze ${
        light ? "border-paper/25" : "border-obsidian/15"
      }`}
    >
      <span aria-hidden className={`flex h-3.5 w-3.5 items-end gap-[2px] ${on ? "eq-on" : ""}`}>
        <span className="eq-bar h-1 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-2 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-1.5 w-[2px] rounded-full bg-bronze" />
        <span className="eq-bar h-1 w-[2px] rounded-full bg-bronze" />
      </span>
      <span>{on ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
