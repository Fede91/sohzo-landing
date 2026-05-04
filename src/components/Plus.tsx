import { track } from '../lib/analytics';

const APP_STORE_URL = 'https://apps.apple.com/app/sohzo/id0000000000';

const free = [
  'One piece a day',
  'Both Explore and Related modes',
  'Curiosity constellation',
  'Streak rewards',
  'English & Italian',
];

const plus = [
  'Multiple pieces, when you want them',
  'Deeper interest analytics',
  'Priority access to new worlds',
  'Custom learning paths',
  'Export & sharing',
  'No ads, ever',
];

export function Plus() {
  return (
    <section id="plus" className="px-6 md:px-10 pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
        <p className="label text-[color:var(--color-ink-muted)] md:col-span-2">№ 06 — Plans</p>
        <h2 className="display-2 md:col-span-9 text-balance">
          Free, mostly.
          <br />
          More if you want it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-rule)]">
        <div className="bg-[color:var(--color-paper)] p-8 md:p-12">
          <div className="flex items-baseline justify-between">
            <p className="display-3">Sohzo</p>
            <p className="font-mono text-sm tracking-widest uppercase text-[color:var(--color-ink-muted)]">Free</p>
          </div>
          <p className="mt-4 italic text-[color:var(--color-ink-soft)] max-w-md">
            The whole core ritual. Forever.
          </p>
          <ul className="mt-10 space-y-3">
            {free.map((f, i) => (
              <li key={f} className="flex items-baseline gap-3 text-base text-[color:var(--color-ink-soft)]">
                <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-faint)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="p-8 md:p-12 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(155deg, var(--color-paper-soft) 0%, var(--color-paper-soft) 50%, oklch(92% 0.03 80) 100%)',
          }}
        >
          <div className="flex items-baseline justify-between">
            <p className="display-3">Sohzo Plus</p>
            <p className="font-mono text-sm tracking-widest uppercase text-[color:var(--color-ink-muted)]">Coming</p>
          </div>
          <p className="mt-4 italic text-[color:var(--color-ink-soft)] max-w-md">
            For the curious who want a little more.
          </p>
          <ul className="mt-10 space-y-3">
            {plus.map((f, i) => (
              <li key={f} className="flex items-baseline gap-3 text-base text-[color:var(--color-ink-soft)]">
                <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-faint)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 md:mt-28 text-center">
        <p className="label text-[color:var(--color-ink-muted)] mb-6">№ 07 — Begin</p>
        <h3 className="display-2 text-balance">
          Make a habit of <em className="italic font-light">discovery.</em>
        </h3>
        <a
          href={APP_STORE_URL}
          onClick={() => track('app_store_click', { surface: 'cta' })}
          className="group inline-flex items-baseline gap-3 mt-12 text-[color:var(--color-ink)]"
        >
          <span className="display-3">Download for iOS</span>
          <span aria-hidden className="text-2xl translate-y-[2px] transition-transform duration-500 group-hover:translate-x-1 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
        </a>
        <p className="mt-6 text-sm text-[color:var(--color-ink-muted)]">
          iPhone, iOS 16 and up. Android arriving later this year.
        </p>
      </div>
    </section>
  );
}
