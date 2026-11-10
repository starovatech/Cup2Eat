import type { Config } from "tailwindcss";

/**
 * CUP2EAT design tokens.
 * Colours and gradients are copied 1:1 from cup2eat-brand-colors.md.
 * The palette REPLACES Tailwind's default colours, so nobody can accidentally
 * use a colour that isn't part of the brand.
 */
const brandColors = {
  green: { 900: "#0B3B2C", 800: "#0F4D3A", 700: "#16634A", 500: "#2E8B57", 100: "#E3EFE7" },
  gold: { 600: "#B8862F", 500: "#D4A84B", 300: "#EBCB7E", 100: "#FBF1D9" },
  cream: { 50: "#FFFBF3", 100: "#F7EEDC" },
  biscuit: { 400: "#C8955A", 600: "#9C6B3C" },
  choco: { 800: "#4A2C1D", 950: "#2A1810" },
  vanilla: { 200: "#F1DFB4" },
  elaichi: { 400: "#B9B25A", 600: "#8A8A3A" },
  chai: { 500: "#B87333" },
  saffron: { 500: "#F28C28" },
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./config/**/*.ts"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ...brandColors,
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "grad-forest": "var(--grad-forest)",
        "grad-forest-glow": "var(--grad-forest-glow)",
        "grad-gold": "var(--grad-gold)",
        "grad-cream": "var(--grad-cream)",
        "grad-biscuit": "var(--grad-biscuit)",
        "grad-chai": "var(--grad-chai)",
        "grad-chocolate": "var(--grad-chocolate)",
        "grad-vanilla": "var(--grad-vanilla)",
        "grad-elaichi": "var(--grad-elaichi)",
        "grad-spotlight": "var(--grad-spotlight)",
      },
      borderRadius: { card: "20px", img: "16px" },
      boxShadow: {
        card: "0 10px 30px -12px rgba(74,44,29,0.18)",
        lift: "0 18px 40px -14px rgba(74,44,29,0.28)",
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};

export default config;
