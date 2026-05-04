import { motion, useReducedMotion } from "motion/react";
import { categories } from "../data/categories";

const EASE = [0.22, 1, 0.36, 1] as const;

// Three pieces that show breadth: something unexpected from each end of the spectrum
const STACK_IDS = ["philosophy", "nature", "history"] as const;

const SAMPLES: Record<
  string,
  { topic: string; title: string; body: string; mins: number }
> = {
  philosophy: {
    topic: "Stoicism",
    title: "A short defense of doubt",
    body: "Marcus Aurelius wrote at night, in pencil, doubting himself. The journal we still read was never meant for us.",
    mins: 5,
  },
  nature: {
    topic: "Forests",
    title: "How trees talk underground",
    body: "A thread of fungi, kilometres wide, carries sugar from old trees to young ones. The wood is a slow internet.",
    mins: 4,
  },
  history: {
    topic: "Antiquity",
    title: "A Tuesday in Pompeii",
    body: "The bread was in the oven. The dog was on the leash. The eruption took eighteen hours, and most people stayed.",
    mins: 6,
  },
};

// Stack configs: bottom card is index 0, top card is index 2.
// All cards fully opaque — depth comes from shadow, scale, and rotation only.
const STACK: Array<{
  rotate: number;
  tx: number;
  ty: number;
  scale: number;
  zIndex: number;
}> = [
  { rotate: -4.5, tx: -18, ty: 20, scale: 0.96, zIndex: 1 },
  { rotate: 2.5, tx: 10, ty: 10, scale: 0.98, zIndex: 2 },
  { rotate: -1, tx: 0, ty: 0, scale: 1, zIndex: 3 },
];

// On hover the stack fans out: back cards translate away from center
const STACK_HOVER: Array<{ rotate: number; tx: number; ty: number }> = [
  { rotate: -7, tx: -36, ty: 28 },
  { rotate: 4, tx: 20, ty: 14 },
  { rotate: -1, tx: 0, ty: 0 },
];

export function HeroCardStack() {
  const reduce = useReducedMotion();

  const cards = STACK_IDS.map((id) => {
    const cat = categories.find((c) => c.id === id)!;
    const sample = SAMPLES[id];
    return { cat, sample };
  });

  return (
    <motion.div
      className="relative select-none"
      style={{ width: 380, height: 460 }}
      initial="rest"
      whileHover={reduce ? undefined : "hover"}
    >
      {cards.map(({ cat, sample }, i) => {
        const base = STACK[i];
        const hov = STACK_HOVER[i];

        return (
          <motion.article
            key={cat.id}
            aria-hidden={i < cards.length - 1}
            className="absolute inset-0 rounded-[36px] p-8 flex flex-col justify-between overflow-hidden"
            style={{
              zIndex: base.zIndex,
              background: `linear-gradient(155deg, var(--color-paper-soft) 0%, var(--color-paper-soft) 45%, ${cat.hex}AA 100%)`,
              boxShadow:
                "0 1px 0 rgba(26,24,20,0.04), 0 24px 60px -28px rgba(26,24,20,0.18)",
              scale: base.scale,
              rotate: base.rotate,
              x: base.tx,
              y: base.ty,
              transformOrigin: "bottom center",
            }}
            variants={{
              rest: {
                rotate: base.rotate,
                x: base.tx,
                y: base.ty,
                scale: base.scale,
              },
              hover: {
                rotate: hov.rotate,
                x: hov.tx,
                y: hov.ty,
                scale: base.scale,
                transition: { duration: 0.55, ease: EASE },
              },
            }}
            initial={{ opacity: 0, y: base.ty + 24, scale: base.scale - 0.04 }}
            animate={{
              opacity: 1,
              y: base.ty,
              scale: base.scale,
              transition: {
                delay: reduce ? 0 : 0.6 + i * 0.12,
                duration: 0.8,
                ease: EASE,
              },
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="font-mono text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: cat.hex }}
                >
                  {cat.index} — {cat.name}
                </p>
                <p
                  className="mt-1 label"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Today's piece
                </p>
              </div>
              <span
                className="font-mono text-[11px] tracking-widest uppercase"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {sample.topic}
              </span>
            </div>

            {/* Body */}
            <div>
              <h3
                className="text-[1.6rem] leading-[1.1] font-bold tracking-tight text-balance"
                style={{ color: "var(--color-ink)" }}
              >
                {sample.title}
              </h3>
              <p
                className="mt-4 text-base leading-snug text-pretty"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {sample.body}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between pt-2">
              <div
                className="flex items-center gap-3 label"
                style={{ color: "var(--color-ink-muted)" }}
              >
                <span>{sample.mins} min</span>
                <span
                  className="inline-block h-px w-8"
                  style={{ background: "var(--color-rule)" }}
                />
                <span className="truncate max-w-[140px]">{cat.whisper}</span>
              </div>
              <div className="flex gap-2">
                <span
                  className="size-9 rounded-full grid place-items-center text-base border"
                  style={{ borderColor: "var(--color-rule)" }}
                >
                  ↑
                </span>
                <span
                  className="size-9 rounded-full grid place-items-center text-base border"
                  style={{ borderColor: "var(--color-rule)" }}
                >
                  ↓
                </span>
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
