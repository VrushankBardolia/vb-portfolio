interface GridBackgroundProps {
  className?: string;
  size?: number;
}

export function GridBackground({
  className = "",
  size = 48,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full stroke-white/[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid-pattern"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path d={`M.5 ${size}V.5H${size}`} fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero-grid-pattern)"
        />
      </svg>
    </div>
  );
}
