import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { categories } from '../data/categories';

const EASE = [0.22, 1, 0.36, 1] as const;

function ExploreDiagram({ inView, reduce }: { inView: boolean; reduce: boolean }) {
  const positions = categories.map((c, i) => {
    const a = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
    const r = 90 + (i % 3) * 22;
    return { c, x: Math.cos(a) * r, y: Math.sin(a) * r };
  });

  return (
    <svg viewBox="-180 -180 360 360" className="w-full h-auto" aria-hidden>
      {/* Spokes — use ink-faint so they read on both light and dark-zone panels */}
      {positions.map((p, i) => (
        <motion.line
          key={p.c.id}
          x1={0} y1={0} x2={p.x} y2={p.y}
          stroke="var(--color-ink-faint)"
          strokeWidth={0.7}
          strokeDasharray="2 3"
          initial={reduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
        />
      ))}
      {/* Dots — stroke halo makes dark-valued accents legible in the dark-zone */}
      {positions.map((p, i) => (
        <motion.circle
          key={p.c.id + '-dot'}
          cx={p.x} cy={p.y} r={5}
          fill={p.c.hex}
          stroke="var(--color-ink-faint)"
          strokeWidth={1}
          initial={reduce ? false : { scale: 0.3, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.45 + i * 0.05, ease: EASE }}
          style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
        />
      ))}
      {/* Centre anchor */}
      <circle cx={0} cy={0} r={3.5} fill="var(--color-ink)" />
    </svg>
  );
}

function RelatedDiagram({ inView, reduce }: { inView: boolean; reduce: boolean }) {
  const spiralDots = [
    { x: 160, y: 0 },
    { x: 90,  y: 70 },
    { x: -70, y: 60 },
    { x: -55, y: -30 },
    { x: 25,  y: -25 },
  ];

  return (
    <svg viewBox="-180 -180 360 360" className="w-full h-auto" aria-hidden>
      {/* Concentric rings — ink-faint adapts to both light and dark-zone */}
      {[40, 70, 100, 130, 160].map((r, i) => (
        <motion.circle
          key={r}
          cx={0} cy={0} r={r}
          fill="none"
          stroke="var(--color-ink-faint)"
          strokeWidth={0.7}
          initial={reduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
        />
      ))}
      {/* Spiral — ink-soft adapts to dark-zone; dots carry the philosophy color */}
      <motion.path
        d="M 160 0 Q 110 90, 0 110 Q -90 90, -90 0 Q -70 -50, 0 -55 Q 40 -45, 40 0 Q 32 22, 0 22"
        fill="none"
        stroke="var(--color-ink-soft)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
      />
      {/* Anchor dots — fill ink-soft so they read on dark bg; ring carries philosophy color */}
      {spiralDots.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x} cy={p.y} r={5}
          fill="var(--color-philosophy)"
          stroke="var(--color-ink-soft)"
          strokeWidth={1}
          initial={reduce ? false : { scale: 0.3, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.75 + i * 0.12, ease: EASE }}
          style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
        />
      ))}
      {/* Centre anchor */}
      <circle cx={0} cy={0} r={3.5} fill="var(--color-ink)" />
    </svg>
  );
}

export function TwoModes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const reduce = useReducedMotion();

  return (
    <section id="modes" ref={ref} className="px-6 md:px-10 pt-32 md:pt-48 pb-24 md:pb-32">
      {/* Section header — scroll-reveal entrance */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="label text-[color:var(--color-ink-muted)] md:col-span-2">№ 04 — Modes</p>
        <h2 className="display-2 md:col-span-9 text-balance">
          Two ways to be curious.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-rule)]">
        {/* Explore panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="bg-[color:var(--color-paper)] p-8 md:p-12"
        >
          <p className="label text-[color:var(--color-ink-muted)]">Explore</p>
          <h3 className="display-3 mt-4">Wander far.</h3>
          <p className="mt-6 text-base md:text-lg text-[color:var(--color-ink-soft)] leading-snug max-w-md text-pretty">
            Today's piece comes from somewhere you don't usually go. A field you've never tasted, a discipline you brushed past in school. The point is to surprise the person you'll be at breakfast.
          </p>

          <div className="mt-12 mx-auto max-w-[340px]">
            <ExploreDiagram inView={inView} reduce={!!reduce} />
          </div>

          <p className="mt-10 italic text-[color:var(--color-ink-muted)] text-sm">
            For the morning you want to be a little stranger to yourself.
          </p>
        </motion.div>

        {/* Related panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="bg-[color:var(--color-paper)] p-8 md:p-12"
        >
          <p className="label text-[color:var(--color-ink-muted)]">Related</p>
          <h3 className="display-3 mt-4">Wander deep.</h3>
          <p className="mt-6 text-base md:text-lg text-[color:var(--color-ink-soft)] leading-snug max-w-md text-pretty">
            Today's piece holds your hand close to what you already love. It walks one step further in, then another. Over weeks, the steps add up to a quiet expertise you didn't plan.
          </p>

          <div className="mt-12 mx-auto max-w-[340px]">
            <RelatedDiagram inView={inView} reduce={!!reduce} />
          </div>

          <p className="mt-10 italic text-[color:var(--color-ink-muted)] text-sm">
            For the morning you want to know one thing very well.
          </p>
        </motion.div>
      </div>

      <motion.p
        className="mt-10 text-[color:var(--color-ink-muted)] text-sm max-w-xl"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        You can switch modes any morning. Sohzo learns either way.
      </motion.p>
    </section>
  );
}
