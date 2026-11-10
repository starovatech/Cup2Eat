/**
 * ============================================================
 *  CUP2EAT — SITE SETTINGS
 *  Edit this file to change contact details, prices and the
 *  product spec. Every page reads from here.
 * ============================================================
 */

export const site = {
  name: "CUP2EAT",
  tagline: "Eat Your Drink",
  description:
    "CUP2EAT makes edible cups for chai, coffee, ice cream and desserts. 100 ml, three flavours, FSSAI registered, delivered free across India.",
  /** Change this to your real domain once it's connected on Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cup2eat.in",
  /** Swap for /logo.png once you drop the original logo file into /public. */
  logo: "/logo.svg",
  locale: "en_IN",
} as const;

export const contact = {
  phoneDisplay: "+91 98181 92575",
  phoneE164: "+919818192575",
  /** WhatsApp number in wa.me format: country code + number, no "+" or spaces. */
  whatsapp: "919818192575",
  email: "varunkhera6@gmail.com",
  instagramHandle: "@cup2eat",
  instagramUrl: "https://www.instagram.com/cup2eat/",
  /** Shown in the footer and used in search-engine data. */
  city: "Ghaziabad",
  region: "Uttar Pradesh",
  country: "IN",
  hours: "Mon–Sat, 10 am – 7 pm",
} as const;

export const founder = {
  name: "Varun Khera",
  role: "Founder, CUP2EAT",
  college: "BBA, IPEM Ghaziabad",
} as const;

/* ------------------------------------------------------------
 *  PRICES  —  update here whenever prices change.
 *  `price` is in rupees. Use `null` for "ask on WhatsApp".
 * ------------------------------------------------------------ */
export type PriceTier = {
  id: string;
  name: string;
  cups: number | null;
  price: number | null;
  priceNote: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  cta: string;
};

export const pricing = {
  /** Small label shown above the main price, e.g. "New price 2026". */
  label: "New price 2026",
  currency: "INR",
  /** The headline wholesale offer used on the home page. */
  main: { cups: 396, price: 3999 },
  deliveryNote: "Delivery included all over India",
  tiers: [
    {
      id: "sample",
      name: "Sample box",
      cups: null,
      price: null,
      priceNote: "Ask on WhatsApp",
      description: "Try all three flavours with your own chai, coffee or dessert before you order in bulk.",
      highlights: ["Chocolate, Vanilla & Elaichi", "Packed the same way as bulk orders", "Shipped anywhere in India"],
      cta: "Ask for a sample",
    },
    {
      id: "wholesale",
      name: "Wholesale box",
      cups: 396,
      price: 3999,
      priceNote: "Delivery included",
      description: "Our standard bulk pack for cafés, tea stalls and restaurants.",
      highlights: ["396 edible cups, 100 ml each", "Choose one flavour or mix", "Free delivery across India", "Safe protective packing"],
      featured: true,
      cta: "Order this box",
    },
    {
      id: "events",
      name: "Events & large orders",
      cups: null,
      price: null,
      priceNote: "Custom quote",
      description: "Weddings, corporate events, caterers and repeat monthly orders.",
      highlights: ["Multiple boxes at a better rate", "Planned delivery date", "Ask us about custom branding"],
      cta: "Get a quote",
    },
  ] as PriceTier[],
};

/* ------------------------------------------------------------
 *  PRODUCT SPEC — owner: please confirm the marked values.
 * ------------------------------------------------------------ */
export const productSpec = {
  capacity: "100 ml",
  format: "Baked biscuit / wafer-style cup",
  flavours: "Chocolate, Vanilla, Elaichi",
  /** EDIT: how long a cup holds a hot / cold drink, once tested. */
  holdsHot: "Best enjoyed within a few minutes of pouring — sip, then eat",
  holdsCold: "Holds chilled drinks, shakes and ice cream comfortably",
  /** EDIT: shelf life printed on the pack. */
  shelfLife: "As printed on each pack (best before date)",
  storage: "Store sealed in a cool, dry place, away from direct sunlight and moisture",
  packing: "Safe protective packing to prevent breakage in transit",
  certification: "FSSAI registered",
  /** EDIT: your FSSAI licence / registration number, shown in the footer if filled. */
  fssaiNumber: "",
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/for-business", label: "For Business" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const perCup = (price: number, cups: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
    price / cups
  );
