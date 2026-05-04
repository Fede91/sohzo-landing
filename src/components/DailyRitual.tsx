import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { categories } from '../data/categories';

const ROTATION_MS = 4200;

const sampleByCategory: Record<string, { topic: string; title: string; body: string }> = {
  arts: {
    topic: 'Painting',
    title: 'The unfinished sketches of Leonardo',
    body: 'He left more half-drawings than finished works. Why incompleteness was, for him, a kind of thinking out loud.',
  },
  philosophy: {
    topic: 'Stoicism',
    title: 'A short defense of doubt',
    body: 'Marcus Aurelius wrote at night, in pencil, doubting himself. The journal we still read was never meant for us.',
  },
  nature: {
    topic: 'Forests',
    title: 'How trees talk underground',
    body: 'A thread of fungi, kilometers wide, carries sugar from old trees to young ones. The wood is a slow internet.',
  },
  history: {
    topic: 'Antiquity',
    title: 'A Tuesday in Pompeii',
    body: 'The bread was in the oven. The dog was on the leash. The eruption took eighteen hours, and most people stayed.',
  },
  science: {
    topic: 'Cosmology',
    title: 'Why ice is stranger than water',
    body: 'It is one of the few solids less dense than its liquid. Because of that, fish survive winter, and you exist.',
  },
  technology: {
    topic: 'Interfaces',
    title: 'A brief life of the cursor',
    body: 'Engelbart drew it on a Saturday in 1968. Sixty years later, we still nudge a small arrow to find the world.',
  },
  psychology: {
    topic: 'Attention',
    title: 'What boredom is for',
    body: 'It is not a failure to be entertained. It is the brain searching for somewhere new to point itself.',
  },
  culture: {
    topic: 'Letters',
    title: 'The lost art of letter-writing',
    body: 'A letter waits a week to be read. A text vanishes in seconds. The slowness, it turns out, was the point.',
  },
  economy: {
    topic: 'Markets',
    title: 'What a tulip taught us',
    body: 'In 1637 a single bulb cost more than a townhouse. The mania ended in March, on a Tuesday, with no warning.',
  },
  health: {
    topic: 'Sleep',
    title: 'A short history of sleep',
    body: 'Until the 1700s, people slept twice a night, with an hour of waking in between. We invented the eight-hour night.',
  },
  politics: {
    topic: 'Civics',
    title: 'The Athenian lottery, revisited',
    body: 'Most public roles in ancient Athens were filled by drawing names from a stone. They thought elections were elitist.',
  },
  society: {
    topic: 'Cities',
    title: 'The third place, after work',
    body: 'A café, a barber, a bench. Ray Oldenburg argued democracies need places that are neither home nor office.',
  },
};

export function DailyRitual() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % categories.length), ROTATION_MS);
    return () => clearInterval(t);
  }, [reduce]);

  const cat = categories[i];
  const sample = sampleByCategory[cat.id];

  return (
    <section className="px-6 md:px-10 pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="label text-[color:var(--color-ink-muted)] mb-8 md:mb-10">№ 02 — One a day</p>
          <h2 className="display-2 text-balance">
            Not a feed.
            <br />
            A morning.
          </h2>
          <p className="mt-8 md:mt-10 text-lg md:text-xl text-[color:var(--color-ink-soft)] max-w-md text-pretty leading-snug">
            Sohzo opens with one piece, chosen for you. No swipe, no scroll, no badge counting up. You read it slowly. You mark how it landed. You close the app. The day belongs to you again.
          </p>

          <ul className="mt-12 md:mt-16 grid grid-cols-2 gap-y-2 gap-x-6 max-w-md">
            {categories.map((c, idx) => (
              <li
                key={c.id}
                onMouseEnter={() => setI(idx)}
                className="flex items-baseline gap-3 cursor-pointer group"
              >
                <span
                  className="font-mono text-[10px] tabular-nums tracking-widest transition-colors duration-300"
                  style={{ color: idx === i ? c.hex : 'var(--color-ink-faint)' }}
                >
                  {c.index}
                </span>
                <span
                  className={`text-sm transition-colors duration-300 ${idx === i ? 'font-medium' : ''}`}
                  style={{ color: idx === i ? 'var(--color-ink)' : 'var(--color-ink-muted)' }}
                >
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7 md:col-start-7 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[560px] aspect-[5/6] md:aspect-[5/6]">
            <AnimatePresence mode="wait">
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.985 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-[36px] p-8 md:p-10 flex flex-col justify-between overflow-hidden"
                style={{
                  background: `linear-gradient(155deg, var(--color-paper-soft) 0%, var(--color-paper-soft) 45%, ${cat.hex}26 100%)`,
                  boxShadow: '0 1px 0 rgba(26, 24, 20, 0.04), 0 24px 60px -28px rgba(26, 24, 20, 0.18)',
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: cat.hex }}>
                      {cat.index} — {cat.name}
                    </p>
                    <p className="mt-1 label text-[color:var(--color-ink-muted)]">Today’s piece</p>
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-ink-muted)] uppercase">
                    {sample.topic}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-[2rem] leading-[1.1] font-bold tracking-tight text-balance">
                    {sample.title}
                  </h3>
                  <p className="mt-5 text-base md:text-lg text-[color:var(--color-ink-soft)] leading-snug max-w-md text-pretty">
                    {sample.body}
                  </p>
                </div>

                <div className="flex items-end justify-between pt-4">
                  <div className="flex items-center gap-3 text-[color:var(--color-ink-muted)] label">
                    <span>4 min</span>
                    <span className="rule w-8" />
                    <span>{cat.whisper}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="size-9 rounded-full border border-[color:var(--color-rule)] grid place-items-center text-base">↑</span>
                    <span className="size-9 rounded-full border border-[color:var(--color-rule)] grid place-items-center text-base">↓</span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
