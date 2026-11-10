/**
 * ============================================================
 *  CUSTOMER FEEDBACK  —  OWNER TO FILL
 * ============================================================
 * Only entries with `published: true` are shown on the website.
 * Please add REAL feedback only (with the customer's permission).
 *
 * The entries below are empty templates so you can see the format.
 * Copy one, fill it in, and set `published: true`.
 *
 * Until at least one entry is published, the home page shows an
 * honest "Share your feedback" card instead of reviews.
 */
export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Owner, Sharma Tea Point" */
  role: string;
  city: string;
  /** Optional: "chocolate" | "vanilla" | "elaichi" */
  flavour?: string;
  published: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "",
    name: "",
    role: "",
    city: "",
    flavour: "elaichi",
    published: false,
  },
  {
    quote: "",
    name: "",
    role: "",
    city: "",
    flavour: "chocolate",
    published: false,
  },
  {
    quote: "",
    name: "",
    role: "",
    city: "",
    flavour: "vanilla",
    published: false,
  },
];

export const publishedTestimonials = testimonials.filter((t) => t.published && t.quote.trim().length > 0);
