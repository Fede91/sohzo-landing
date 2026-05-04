import { Wordmark } from './Wordmark';
import { Spectrum } from './Spectrum';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-rule)] mt-12">
      <Spectrum height={2} animate={false} />
      <div className="px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-baseline">
        <div className="md:col-span-4">
          <Wordmark size={20} />
          <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] max-w-xs leading-snug">
            A daily ritual of curiosity. Made slowly, for slow mornings.
          </p>
        </div>

        <nav className="md:col-span-5 grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="#twelve-worlds">Twelve worlds</a>
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="#modes">Modes</a>
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="#plus">Plans</a>
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="/privacy">Privacy</a>
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="/terms">Terms</a>
          <a className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] transition-colors" href="mailto:hello@sohzo.app">Contact</a>
        </nav>

        <div className="md:col-span-3 md:text-right">
          <p className="label text-[color:var(--color-ink-muted)]">Sohzo, № {year}</p>
          <p className="mt-2 italic text-sm text-[color:var(--color-ink-muted)]">
            Discover what you didn’t know you’d love.
          </p>
        </div>
      </div>
    </footer>
  );
}
