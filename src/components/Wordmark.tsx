type Props = {
  size?: number;
  className?: string;
};

export function Wordmark({ size = 18, className }: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 900,
        fontSize: size,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color: 'var(--color-ink)',
      }}
    >
      sohz<span style={{ display: 'inline-block', transform: 'translateY(-0.02em)' }}>ō</span>
    </span>
  );
}

export function Glyph({ size = 32 }: { size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 900,
        fontSize: size,
        letterSpacing: '-0.06em',
        lineHeight: 1,
        color: 'var(--color-ink)',
      }}
    >
      ō
    </span>
  );
}
