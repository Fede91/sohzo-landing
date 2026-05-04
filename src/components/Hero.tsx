import { motion } from 'motion/react';
import { Spectrum } from './Spectrum';
import { Wordmark } from './Wordmark';
import { track } from '../lib/analytics';

const APP_STORE_URL =
  'https://apps.apple.com/app/sohzo/id0000000000';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      <header className="flex items-baseline justify-between px-6 md:px-10 pt-6 md:pt-8">
        <Wordmark size={20} />
        <nav className="label text-[color:var(--color-ink-muted)] flex gap-7">
          <a href="#twelve-worlds" className="hover:text-[color:var(--color-ink)] transition-colors">Worlds</a>
          <a href="#modes" className="hidden sm:inline hover:text-[color:var(--color-ink)] transition-colors">Modes</a>
          <a href="#plus" className="hidden sm:inline hover:text-[color:var(--color-ink)] transition-colors">Plus</a>
        </nav>
      </header>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 pt-16 md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="label text-[color:var(--color-ink-muted)] mb-8 md:mb-12"
        >
          № 01 — A daily ritual of curiosity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-1 text-balance"
        >
          Discover what
          <br />
          you didn’t know
          <br />
          you’d <em className="italic font-light">love.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
          className="mt-12 md:mt-16 max-w-3xl"
        >
          <Spectrum height={3} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
        >
          <p className="md:col-span-6 lg:col-span-5 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-snug max-w-xl text-pretty">
            One carefully crafted piece. Every morning. Across twelve worlds — from philosophy to nature, history to code. Sohzo turns curiosity into a quiet daily habit.
          </p>

          <div className="md:col-span-6 lg:col-span-7 flex md:justify-end">
            <a
              href={APP_STORE_URL}
              onClick={() => track('app_store_click', { surface: 'hero' })}
              className="group inline-flex items-baseline gap-3 text-[color:var(--color-ink)]"
            >
              <span className="display-3">Download for iOS</span>
              <span aria-hidden className="text-2xl translate-y-[2px] transition-transform duration-500 group-hover:translate-x-1 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="px-6 md:px-10 pb-6 md:pb-8 pt-20 md:pt-24 flex items-baseline justify-between text-[color:var(--color-ink-muted)] label">
        <span>Scroll</span>
        <span>Twelve worlds, one a day</span>
      </div>
    </section>
  );
}
