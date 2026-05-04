import { categories } from '../data/categories';

type Props = {
  height?: number;
  className?: string;
  animate?: boolean;
};

export function Spectrum({ height = 4, className, animate = true }: Props) {
  return (
    <div
      className={className}
      role="img"
      aria-label="Twelve category accents"
      style={{ display: 'flex', width: '100%', height }}
    >
      {categories.map((c, i) => (
        <span
          key={c.id}
          style={{
            background: c.hex,
            flex: 1,
            transform: animate ? 'scaleY(0.4)' : undefined,
            transformOrigin: 'bottom',
            animation: animate ? `spectrum-rise 900ms ${i * 40}ms cubic-bezier(0.22, 1, 0.36, 1) forwards` : undefined,
          }}
        />
      ))}
      <style>{`@keyframes spectrum-rise{to{transform:scaleY(1)}}`}</style>
    </div>
  );
}

export function SpectrumLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 1"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
      style={{ display: 'block', width: '100%', height: 1 }}
    >
      {categories.map((c, i) => (
        <rect key={c.id} x={i * 40} y={0} width={40} height={1} fill={c.hex} />
      ))}
    </svg>
  );
}
