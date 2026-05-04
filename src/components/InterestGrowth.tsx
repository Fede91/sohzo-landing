import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { categories } from '../data/categories';

const RADII_T1 = [0.62, 0.36, 0.28, 0.45, 0.51, 0.74, 0.88, 0.30, 0.55, 0.69, 0.42, 0.58];

const W = 560;
const H = 480;
const C = { x: W / 2, y: H / 2 };
const MAX_R = 168;

function pointAt(angle: number, r: number) {
  return {
    x: C.x + Math.cos(angle) * r,
    y: C.y + Math.sin(angle) * r,
  };
}

function angleFor(i: number) {
  return (i / categories.length) * Math.PI * 2 - Math.PI / 2;
}

export function InterestGrowth() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  const endPoints = RADII_T1.map((r, i) => pointAt(angleFor(i), r * MAX_R));
  const endPath = endPoints.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z';

  return (
    <section ref={ref} className="px-6 md:px-10 pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <p className="label text-[color:var(--color-ink-muted)] mb-8 md:mb-10">№ 05 — Constellation</p>
          <h2 className="display-2 text-balance">
            Watch your
            <br />
            curiosity, drawn.
          </h2>
          <p className="mt-8 md:mt-10 text-lg md:text-xl text-[color:var(--color-ink-soft)] max-w-md text-pretty leading-snug">
            Every morning shifts the shape. The worlds you spend more time in pull outward, the ones you’ve barely touched stay close to the center. After a month, your map looks nothing like anyone else’s.
          </p>
          <p className="mt-6 italic text-[color:var(--color-ink-muted)] text-sm max-w-md">
            A private picture of the mind you’re becoming.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-7">
          <div className="relative mx-auto" style={{ aspectRatio: `${W} / ${H}` }}>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
              {/* Concentric guides */}
              {[0.25, 0.5, 0.75, 1].map((f) => (
                <circle
                  key={f}
                  cx={C.x}
                  cy={C.y}
                  r={MAX_R * f}
                  fill="none"
                  stroke="var(--color-rule)"
                  strokeWidth={0.6}
                  strokeDasharray={f === 1 ? '' : '2 4'}
                />
              ))}

              {/* Spoke rules */}
              {categories.map((c, i) => {
                const a = angleFor(i);
                const tip = pointAt(a, MAX_R);
                return (
                  <line
                    key={c.id + '-spoke'}
                    x1={C.x}
                    y1={C.y}
                    x2={tip.x}
                    y2={tip.y}
                    stroke="var(--color-rule)"
                    strokeWidth={0.6}
                  />
                );
              })}

              {/* Polygon — animates from a tight baseline to the interest shape */}
              <motion.g
                style={{ transformOrigin: `${C.x}px ${C.y}px` }}
                initial={{ scale: 0.18, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.18, opacity: 0 }}
                transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <path
                  d={endPath}
                  fill="var(--color-ink)"
                  fillOpacity={0.04}
                  stroke="var(--color-ink)"
                  strokeWidth={1.25}
                />
              </motion.g>

              {/* Vertex dots in category colors */}
              {endPoints.map((p, i) => {
                const c = categories[i];
                return (
                  <motion.circle
                    key={c.id + '-dot'}
                    cx={p.x}
                    cy={p.y}
                    r={5}
                    fill={c.hex}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: `${p.x}px ${p.y}px`, transformBox: 'fill-box' as const }}
                  />
                );
              })}

              {/* Labels at outer ring */}
              {categories.map((c, i) => {
                const a = angleFor(i);
                const labelP = pointAt(a, MAX_R + 22);
                const cosA = Math.cos(a);
                const anchor = cosA > 0.25 ? 'start' : cosA < -0.25 ? 'end' : 'middle';
                return (
                  <text
                    key={c.id + '-label'}
                    x={labelP.x}
                    y={labelP.y}
                    textAnchor={anchor}
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize={9.5}
                    letterSpacing="0.16em"
                    fill="var(--color-ink-muted)"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {c.name}
                  </text>
                );
              })}
            </svg>
          </div>

          <p className="mt-4 text-[color:var(--color-ink-faint)] text-xs font-mono tracking-widest uppercase text-center">
            Sample shape, after 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
