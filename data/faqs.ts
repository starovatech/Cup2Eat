import { pricing, productSpec } from "@/config/site";

/**
 * FAQs. Edit questions/answers freely.
 * Answers marked `// CONFIRM` are written from what we know today — please
 * check them against your product before going live.
 */
export type Faq = { q: string; a: string; group: "Product" | "Ordering" | "Business" };

export const faqs: Faq[] = [
  {
    group: "Product",
    q: "Does the cup get soggy?",
    // CONFIRM
    a: "The cup is baked to hold your drink while you sip. Like any biscuit, it slowly softens the longer a liquid sits in it — so it's made to be enjoyed fresh: pour, sip, and then eat the cup.",
  },
  {
    group: "Product",
    q: "How long does it hold hot chai?",
    // CONFIRM — update productSpec.holdsHot in config/site.ts once tested
    a: `${productSpec.holdsHot}. Serve the chai at drinking temperature rather than straight off the boil, and the cup holds up best. Cold drinks and ice cream are even easier on it.`,
  },
  {
    group: "Product",
    q: "Is it vegetarian?",
    // CONFIRM
    a: "Yes, CUP2EAT cups are vegetarian. The full ingredient list is printed on every pack — please check it if you have a specific allergy.",
  },
  {
    group: "Product",
    q: "What is the shelf life, and how should I store the cups?",
    a: `Shelf life: ${productSpec.shelfLife}. ${productSpec.storage}. Keep opened packs sealed so the cups stay crisp.`,
  },
  {
    group: "Product",
    q: "Is CUP2EAT FSSAI approved?",
    a: "Yes. CUP2EAT is FSSAI registered, and the details are printed on our packaging. Ask us on WhatsApp if you need a copy for your records.",
  },
  {
    group: "Ordering",
    q: "What is the minimum order?",
    a: `Our wholesale box is ${pricing.main.cups} cups for ₹${pricing.main.price.toLocaleString("en-IN")}, delivery included. If you just want to try them first, ask for a sample box.`,
  },
  {
    group: "Ordering",
    q: "How long does delivery take?",
    // CONFIRM
    a: "We keep stock ready and dispatch quickly. Delivery time depends on your city — metro cities are usually fastest. We've already delivered to many states, including Odisha. Message us your pin code and we'll give you a date.",
  },
  {
    group: "Ordering",
    q: "Do you deliver all over India?",
    a: "Yes. Delivery is included in the wholesale price, anywhere in India.",
  },
  {
    group: "Ordering",
    q: "Can I get a sample before ordering in bulk?",
    a: "Yes — we have a sample box with all three flavours. Message us on WhatsApp and we'll share the current sample price and send it over.",
  },
  {
    group: "Business",
    q: "Can you print our brand or logo on the cups?",
    // CONFIRM
    a: "Custom branding is something we're happy to discuss for larger and repeat orders, especially events and corporate gifting. Tell us your quantity and date and we'll let you know what's possible.",
  },
  {
    group: "Business",
    q: "Which flavour should my café start with?",
    a: "Tea stalls usually start with Elaichi, coffee places with Chocolate or Vanilla. If you aren't sure, order a mixed box and see what your customers pick.",
  },
];
