type Tone = "biscuit" | "chocolate" | "vanilla" | "elaichi";
type Fill = "chai" | "coffee" | "scoop" | "empty";

/** Brand-palette stops for each cup bake (from cup2eat-brand-colors.md). */
const tones: Record<Tone, { a: string; b: string; c: string; rim: string; grid: string }> = {
  biscuit: { a: "#F1DFB4", b: "#C8955A", c: "#9C6B3C", rim: "#C8955A", grid: "#9C6B3C" },
  chocolate: { a: "#6B3F27", b: "#4A2C1D", c: "#2A1810", rim: "#6B3F27", grid: "#2A1810" },
  vanilla: { a: "#FFF7E3", b: "#F1DFB4", c: "#E2C68A", rim: "#F1DFB4", grid: "#C8955A" },
  elaichi: { a: "#DCD58C", b: "#B9B25A", c: "#8A8A3A", rim: "#B9B25A", grid: "#8A8A3A" },
};

const fills: Record<Exclude<Fill, "scoop" | "empty">, { top: string; edge: string }> = {
  chai: { top: "#B87333", edge: "#9C6B3C" },
  coffee: { top: "#4A2C1D", edge: "#2A1810" },
};

/**
 * Hand-drawn style SVG of a CUP2EAT edible cup.
 * Used wherever a real product photo hasn't been added yet.
 */
export function CupIllustration({
  tone = "biscuit",
  fill = "chai",
  steam = fill === "chai" || fill === "coffee",
  className,
  title,
}: {
  tone?: Tone;
  fill?: Fill;
  steam?: boolean;
  className?: string;
  title?: string;
}) {
  const t = tones[tone];
  const id = `cup-${tone}-${fill}`;
  return (
    <svg
      viewBox="0 0 240 280"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={t.a} />
          <stop offset="60%" stopColor={t.b} />
          <stop offset="100%" stopColor={t.c} />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFBF3" stopOpacity="0" />
          <stop offset="22%" stopColor="#FFFBF3" stopOpacity="0.35" />
          <stop offset="40%" stopColor="#FFFBF3" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d="M38 92 L74 244 Q120 262 166 244 L202 92 Z" />
        </clipPath>
        <pattern id={`${id}-wafer`} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0 H18 M0 0 V18" stroke={t.grid} strokeOpacity="0.28" strokeWidth="2" fill="none" />
        </pattern>
      </defs>

      {/* soft shadow */}
      <ellipse cx="120" cy="256" rx="62" ry="10" fill="#4A2C1D" opacity="0.18" />

      {/* body */}
      <path d="M38 92 L74 244 Q120 262 166 244 L202 92 Z" fill={`url(#${id}-body)`} />
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="80" width="240" height="190" fill={`url(#${id}-wafer)`} />
        <rect x="0" y="80" width="240" height="190" fill={`url(#${id}-shine)`} />
        {/* baked band near the rim */}
        <rect x="0" y="92" width="240" height="18" fill={t.c} opacity="0.18" />
      </g>

      {/* rim */}
      <ellipse cx="120" cy="92" rx="84" ry="20" fill={t.rim} />
      <ellipse cx="120" cy="92" rx="84" ry="20" fill="none" stroke={t.c} strokeOpacity="0.5" strokeWidth="2" />

      {/* contents */}
      {fill === "chai" || fill === "coffee" ? (
        <>
          <ellipse cx="120" cy="94" rx="72" ry="14" fill={fills[fill].edge} />
          <ellipse cx="120" cy="95" rx="68" ry="12" fill={fills[fill].top} />
          <ellipse cx="102" cy="92" rx="22" ry="3.5" fill="#FFFBF3" opacity="0.22" />
        </>
      ) : null}
      {fill === "scoop" ? (
        <>
          <ellipse cx="120" cy="94" rx="72" ry="14" fill={t.c} opacity="0.5" />
          <path d="M60 92 Q58 34 120 30 Q182 34 180 92 Q164 104 150 94 Q136 106 120 96 Q104 106 90 94 Q76 104 60 92 Z" fill="#F7EEDC" />
          <path d="M76 60 Q90 40 114 40" stroke="#FFFBF3" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
          <circle cx="140" cy="58" r="3" fill="#4A2C1D" />
          <circle cx="104" cy="70" r="2.5" fill="#4A2C1D" />
          <circle cx="156" cy="76" r="2.5" fill="#4A2C1D" />
        </>
      ) : null}
      {fill === "empty" ? <ellipse cx="120" cy="95" rx="70" ry="13" fill={t.c} opacity="0.55" /> : null}

      {/* steam */}
      {steam ? (
        <g className="steam" fill="none" stroke="#F7EEDC" strokeWidth="5" strokeLinecap="round" opacity="0.85">
          <path d="M96 66 C86 52 106 42 96 26" />
          <path d="M120 62 C110 46 132 36 120 16" />
          <path d="M144 66 C134 52 154 42 144 26" />
        </g>
      ) : null}
    </svg>
  );
}
