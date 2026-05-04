import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { categories } from '../data/categories';

function ExploreDiagram() {
  const positions = categories.map((c, i) => {
    const a = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
    const r = 90 + (i % 3) * 22;
    return { c, x: Math.cos(a) * r, y: Math.sin(a) * r };
  });
  return (
    <svg viewBox="-180 -180 360 360" className="w-full h-auto" aria-hidden>
      {positions.map((p, i) => (
        <line
          key={p.c.id}
          x1={0}
          y1={0}
          x2={p.x}
          y2={p.y}
          stroke="var(--color-rule)"
          strokeWidth={0.6}
          strokeDasharray="2 3"
          style={{
            opacity: 0,
            animation: `mode-line-in 900ms ${i * 60}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          }}
        />
      ))}
      {positions.map((p, i) => (
        <circle
          key={p.c.id + '-dot'}
          cx={p.x}
          cy={p.y}
          r={5}
          fill={p.c.hex}
          style={{
            opacity: 0,
            transformOrigin: `${p.x}px ${p.y}px`,
            animation: `mode-dot-in 700ms ${500 + i * 60}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          }}
        />
      ))}
      <circle cx={0} cy={0} r={3.5} fill="var(--color-ink)" />
      <style>{`
        @keyframes mode-line-in { to { opacity: 1; } }
        @keyframes mode-dot-in { to { opacity: 1; } from { transform: scale(0.4); opacity: 0; } }
      `}</style>
    </svg>
  );
}

function RelatedDiagram() {
  return (
    <svg viewBox="-180 -180 360 360" className="w-full h-auto" aria-hidden>
      {[40, 70, 100, 130, 160].map((r, i) => (
        <circle
          key={r}
          cx={0}
          cy={0}
          r={r}
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth={0.6}
          style={{
            opacity: 0,
            animation: `mode-ring-in 800ms ${i * 90}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          }}
        />
      ))}
      {/* Spiral path inward */}
      <path
        d="M 160 0 Q 110 90, 0 110 Q -90 90, -90 0 Q -70 -50, 0 -55 Q 40 -45, 40 0 Q 32 22, 0 22"
        fill="none"
        stroke="var(--color-philosophy)"
        strokeWidth={1.2}
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: `mode-spiral 1800ms 200ms cubic-bezier(0.22, 1, 0.36, 1) forwards` }}
      />
      {/* Anchor dots along the spiral */}
      {[
        { x: 160, y: 0, c: '--color-philosophy' },
        { x: 90, y: 70, c: '--color-philosophy' },
        { x: -70, y: 60, c: '--color-philosophy' },
        { x: -55, y: -30, c: '--color-philosophy' },
        { x: 25, y: -25, c: '--color-philosophy' },
      ].map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={4}
          fill={`var(${p.c})`}
          style={{
            opacity: 0,
            animation: `mode-dot-in 600ms ${800 + i * 140}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          }}
        />
      ))}
      <circle cx={0} cy={0} r={3.5} fill="var(--color-ink)" />
      <style>{`
        @keyframes mode-ring-in { to { opacity: 1; } }
        @keyframes mode-spiral { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  );
}

export function TwoModes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section id="modes" ref={ref} className="px-6 md:px-10 pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
        <p className="label text-[color:var(--color-ink-muted)] md:col-span-2">№ 04 — Modes</p>
        <h2 className="display-2 md:col-span-9 text-balance">
          Two ways to be curious.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-rule)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[color:var(--color-paper)] p-8 md:p-12"
        >
          <p className="label text-[color:var(--color-ink-muted)]">Explore</p>
          <h3 className="display-3 mt-4">Wander far.</h3>
          <p className="mt-6 text-base md:text-lg text-[color:var(--color-ink-soft)] leading-snug max-w-md text-pretty">
            Today’s piece comes from somewhere you don’t usually go. A field you’ve never tasted, a discipline you brushed past in school. The point is to surprise the person you’ll be at breakfast.
          </p>

          <div className="mt-12 mx-auto max-w-[340px]">
            {inView && <ExploreDiagram />}
          </div>

          <p className="mt-10 italic text-[color:var(--color-ink-muted)] text-sm">
            For the morning you want to be a little stranger to yourself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[color:var(--color-paper)] p-8 md:p-12"
        >
          <p className="label text-[color:var(--color-ink-muted)]">Related</p>
          <h3 className="display-3 mt-4">Wander deep.</h3>
          <p className="mt-6 text-base md:text-lg text-[color:var(--color-ink-soft)] leading-snug max-w-md text-pretty">
            Today’s piece holds your hand close to what you already love. It walks one step further in, then another. Over weeks, the steps add up to a quiet expertise you didn’t plan.
          </p>

          <div className="mt-12 mx-auto max-w-[340px]">
            {inView && <RelatedDiagram />}
          </div>

          <p className="mt-10 italic text-[color:var(--color-ink-muted)] text-sm">
            For the morning you want to know one thing very well.
          </p>
        </motion.div>
      </div>

      <p className="mt-10 text-[color:var(--color-ink-muted)] text-sm max-w-xl">
        You can switch modes any morning. Sohzo learns either way.
      </p>
    </section>
  );
}
