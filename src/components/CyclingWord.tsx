import { useState, useEffect, useRef } from "react";

// Words that capture the "I didn't know I cared about this" moment.
// Kept inside Sohzo's tone: precise, a little private, unhurried.
const WORDS = [
  "love",
  "need",
  "cherish",
  "crave",
  "miss",
  "want",
  "keep",
  "remember",
] as const;

// Timing (ms)
const TYPE_SPEED = 72;   // per character, typing forward
const DELETE_SPEED = 44; // per character, deleting backward
const HOLD_DURATION = 2200; // how long the full word stays
const INTER_WORD_PAUSE = 260; // pause after last char deleted, before next word

type Phase = "typing" | "holding" | "deleting" | "pausing";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  /** Skip animation, just render first word. Passed via prefers-reduced-motion. */
  reduced?: boolean;
}

export function CyclingWord({ className, style, reduced }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(
    reduced ? WORDS[0] : ""
  );
  const [phase, setPhase] = useState<Phase>(reduced ? "holding" : "typing");
  const [showCursor, setShowCursor] = useState(!reduced);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) return;

    function clear() {
      if (frameRef.current) clearTimeout(frameRef.current);
    }

    const word = WORDS[wordIndex % WORDS.length];

    if (phase === "typing") {
      if (displayed.length < word.length) {
        frameRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        frameRef.current = setTimeout(() => setPhase("holding"), 0);
      }
    }

    if (phase === "holding") {
      frameRef.current = setTimeout(() => setPhase("deleting"), HOLD_DURATION);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        frameRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        frameRef.current = setTimeout(() => setPhase("pausing"), 0);
      }
    }

    if (phase === "pausing") {
      frameRef.current = setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setPhase("typing");
      }, INTER_WORD_PAUSE);
    }

    return clear;
  }, [phase, displayed, wordIndex, reduced]);

  // Blink cursor: visible while typing or pausing; steady-off while holding
  useEffect(() => {
    if (reduced) return;
    if (phase === "holding") {
      setShowCursor(false);
      return;
    }
    const interval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, [phase, reduced]);

  return (
    <em className={className} style={style} aria-live="polite" aria-atomic="true">
      {displayed}
      {!reduced && (
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: "0.04em",
            height: "0.9em",
            verticalAlign: "text-bottom",
            marginLeft: "0.06em",
            background: "currentColor",
            opacity: showCursor ? 1 : 0,
            // No transition: hard-blink feels more typographic
          }}
        />
      )}
      {reduced && "."}
    </em>
  );
}
