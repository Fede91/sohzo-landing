import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { categories } from '../data/categories';

export function TwelveWorlds() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="twelve-worlds" className="pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="px-6 md:px-10 mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6">
        <p className="label text-[color:var(--color-ink-muted)] md:col-span-2">№ 03 — Atlas</p>
        <h2 className="display-2 md:col-span-9 text-balance">
          Twelve worlds.
          <br />
          One a day, in turn.
        </h2>
      </div>

      <div role="list" className="border-y border-[color:var(--color-rule)]">
        {categories.map((c, idx) => {
          const isHover = hover === idx;
          return (
            <motion.div
              key={c.id}
              role="listitem"
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(null)}
              animate={{
                backgroundColor: isHover ? `${c.hex}0c` : 'rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b border-[color:var(--color-rule)] last:border-b-0"
            >
              <div className="px-6 md:px-10 py-7 md:py-9 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline">
                <span
                  className="col-span-2 md:col-span-1 font-mono text-xs tabular-nums tracking-widest transition-colors duration-500"
                  style={{ color: isHover ? c.hex : 'var(--color-ink-faint)' }}
                >
                  {c.index}
                </span>

                <div className="col-span-10 md:col-span-4 relative">
                  <h3 className="display-3 leading-none">
                    {c.name}
                  </h3>
                  <span
                    aria-hidden
                    className="block h-[2px] mt-3"
                    style={{
                      width: isHover ? '3.5rem' : '0.75rem',
                      backgroundColor: c.hex,
                      transition: 'width 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>

                <p className="hidden md:block md:col-span-3 italic text-[color:var(--color-ink-soft)] text-base lg:text-lg leading-snug">
                  {c.whisper}
                </p>

                <ul className="col-span-12 md:col-span-4 mt-4 md:mt-0 space-y-1.5">
                  {c.samples.map((s, sidx) => (
                    <motion.li
                      key={s}
                      initial={false}
                      animate={{
                        opacity: reduce ? 1 : isHover ? 1 : 0.55,
                        x: reduce ? 0 : isHover ? 0 : -4,
                      }}
                      transition={{ duration: 0.4, delay: isHover ? sidx * 0.04 : 0, ease: [0.22, 1, 0.36, 1] }}
                      className="text-sm md:text-[13px] text-[color:var(--color-ink-soft)] leading-snug"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-faint)] mr-2">
                        {String(sidx + 1).padStart(2, '0')}
                      </span>
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="px-6 md:px-10 mt-12 md:mt-16 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-6 md:col-start-4 text-[color:var(--color-ink-muted)] text-sm leading-snug max-w-md italic">
          Topics shown are illustrative. The piece you receive is generated for you, in your reading time, in your mood.
        </p>
      </div>
    </section>
  );
}
