import { motion } from 'motion/react';
import { useReducedMotion } from 'motion/react';
import { Spectrum } from './Spectrum';
import { Wordmark } from './Wordmark';
import { HeroCardStack } from './HeroCardStack';
import { CyclingWord } from './CyclingWord';
import { track } from '../lib/analytics';

const APP_STORE_URL =
  'https://apps.apple.com/app/sohzo/id0000000000';

export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="relative min-h-svh flex flex-col">
      <header className="flex items-baseline justify-between px-6 md:px-10 pt-6 md:pt-8">
        <Wordmark size={20} />
        <nav className="label text-ink-muted flex gap-7">
          <a href="#twelve-worlds" className="hover:text-ink transition-colors">Worlds</a>
          <a href="#modes" className="hidden sm:inline hover:text-ink transition-colors">Modes</a>
          <a href="#plus" className="hidden sm:inline hover:text-ink transition-colors">Plus</a>
        </nav>
      </header>

      {/* Main hero body — two columns on desktop */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center px-6 md:px-10 py-12 md:py-16 gap-12 md:gap-8">

        {/* Left column: text content */}
        <div className="md:flex-1 md:pr-8 lg:pr-16 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="label text-ink-muted mb-8 md:mb-12"
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
            you didn't know
            <br />
            you'd{" "}
            <CyclingWord
              reduced={reduced}
              className="italic font-light"
            />
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
            className="mt-10 md:mt-14"
          >
            <p className="text-lg md:text-xl text-ink-soft leading-snug max-w-md text-pretty mb-10 md:mb-14">
              One carefully crafted piece. Every morning. Twelve worlds: from philosophy to cartography, nature to code. Chosen for you, not by you.
            </p>

            <a
              href={APP_STORE_URL}
              onClick={() => track('app_store_click', { surface: 'hero' })}
              className="group inline-flex items-baseline gap-3 text-ink"
            >
              <span className="display-3">Download for iOS</span>
              <span aria-hidden className="text-2xl translate-y-[2px] transition-transform duration-500 group-hover:translate-x-1 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right column: card stack */}
        <div className="hidden md:flex items-center justify-center md:w-[480px] lg:w-[520px] shrink-0">
          <HeroCardStack />
        </div>
      </div>

      <div className="px-6 md:px-10 pb-8 md:pb-10 mt-auto text-ink-muted label">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
