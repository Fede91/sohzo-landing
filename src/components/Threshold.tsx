import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

/**
 * The crossing from discovery (light) to introspection (dark).
 * No gradient — a hard cut is the statement. The cut is defined by a
 * single bright hairline against dark, and one editorial sentence that
 * names what the crossing means. Like a chapter break in a well-made book.
 */
export function Threshold() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      style={{
        background: 'oklch(11% 0.009 80)',
        // A single bright hairline at the very top — the boundary, not a fade
        borderTop: '1px solid oklch(97.5% 0.005 80)',
        padding: 'clamp(5rem, 12vw, 9rem) 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center',
      }}
    >
      {/* Section index — same editorial convention as all other sections */}
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'oklch(36% 0.005 80)',
        }}
      >
        From the piece
      </motion.p>

      {/* The sentence — the whole narrative of the product in one line */}
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: 'oklch(62% 0.005 80)',
          maxWidth: '20ch',
          textWrap: 'balance',
        } as React.CSSProperties}
      >
        to the habit, to the mind.
      </motion.p>

      {/* A thin rule below — signals the next section begins */}
      <motion.div
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          marginTop: '1rem',
          height: '1px',
          width: '3rem',
          background: 'oklch(28% 0.007 80)',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
