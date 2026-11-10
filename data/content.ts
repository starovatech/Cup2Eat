/**
 * Smaller content blocks used across the site. Edit freely.
 * Icon names come from lucide-react (https://lucide.dev/icons).
 */

export const howItWorks = [
  {
    step: "Pour",
    title: "Pour your drink in",
    body: "Hot chai, coffee, a cold shake or a scoop of ice cream — up to 100 ml.",
  },
  {
    step: "Sip",
    title: "Sip like any other cup",
    body: "It holds the drink while you enjoy it. No plastic lid, no paper sleeve.",
  },
  {
    step: "Eat",
    title: "Eat the cup",
    body: "Finish with a crunchy biscuit. Nothing goes in the bin.",
  },
] as const;

export const perfectFor = [
  {
    icon: "Coffee",
    title: "Chai & coffee",
    body: "The everyday hero. A kulhad-style serve that people end up eating.",
    image: "",
  },
  {
    icon: "IceCreamCone",
    title: "Ice-cream serves",
    body: "A scoop in a cup you can crunch — no spoon-and-bowl washing.",
    image: "",
  },
  {
    icon: "CakeSlice",
    title: "Desserts & more",
    body: "Mousse, kheer, rabri, fruit custard, even chaat for a party.",
    image: "",
  },
  {
    icon: "PartyPopper",
    title: "Weddings & events",
    body: "A counter guests talk about, and far fewer bins to clear at the end.",
    image: "",
  },
] as const;

export const whyCup2eat = [
  {
    icon: "Leaf",
    title: "Eco-friendly",
    body: "Made from food, not plastic or wax-lined paper.",
  },
  {
    icon: "Recycle",
    title: "Zero waste",
    body: "The cup is eaten. There's nothing left to throw away.",
  },
  {
    icon: "ShieldCheck",
    title: "FSSAI registered",
    body: "Made and packed to Indian food-safety standards.",
  },
  {
    icon: "Truck",
    title: "Free pan-India delivery",
    body: "Included in the wholesale price, packed safely so cups arrive whole.",
  },
  {
    icon: "PackageCheck",
    title: "Stock available",
    body: "We keep stock ready, so you're not waiting weeks for an order.",
  },
  {
    icon: "Gift",
    title: "Sample box",
    body: "Try all three flavours before committing to a bulk order.",
  },
] as const;

export const achievements = [
  {
    title: "1st position — Business Plan Competition",
    event: "Spectra 2025",
    place: "IPEM Ghaziabad, inter-institutional fest",
    date: "2025",
    body: "CUP2EAT's business plan took first place at IPEM Ghaziabad's inter-institutional fest.",
    image: "",
    imageAlt: "Varun Khera receiving the first-place award at Spectra 2025",
  },
  {
    title: "Showcased at Startup Mahakumbh 2025",
    event: "Startup Mahakumbh",
    place: "Bharat Mandapam, New Delhi",
    date: "3–5 April 2025",
    body: "CUP2EAT was showcased at Startup Mahakumbh, one of India's biggest startup events, held at Bharat Mandapam.",
    image: "",
    imageAlt: "The CUP2EAT stall at Startup Mahakumbh 2025, Bharat Mandapam",
  },
] as const;

export const journey = [
  {
    when: "The idea",
    title: "A tea break, and a bin full of cups",
    body: "Studying BBA at IPEM Ghaziabad, Varun kept noticing the same thing at every chai stall and college canteen — overflowing bins of paper and plastic cups after just a few sips each.",
  },
  {
    when: "Testing",
    title: "Baking a cup you can drink from",
    body: "The goal was simple to say and hard to bake: a cup that holds a drink, tastes good on its own, and survives the trip from kitchen to customer.",
  },
  {
    when: "2025",
    title: "First prize at Spectra 2025",
    body: "The CUP2EAT business plan took 1st position at IPEM's inter-institutional fest.",
  },
  {
    when: "April 2025",
    title: "Startup Mahakumbh, Bharat Mandapam",
    body: "CUP2EAT was showcased in New Delhi from 3–5 April 2025, in front of founders, investors and visitors from across India.",
  },
  {
    when: "Today",
    title: "FSSAI registered, shipping across India",
    body: "Three flavours, stock ready, and orders delivered to cafés and businesses in multiple states, Odisha included.",
  },
] as const;

/** About page gallery. Drop photos in /public/images/gallery/ and set `image`. */
export const gallery = [
  { image: "", alt: "Edible cups lined up fresh from the oven", caption: "Fresh batch, ready to pack" },
  { image: "", alt: "Masala chai being poured into an Elaichi edible cup", caption: "Elaichi + masala chai" },
  { image: "", alt: "CUP2EAT stall at Startup Mahakumbh 2025", caption: "Startup Mahakumbh 2025" },
  { image: "", alt: "Spectra 2025 first-place certificate", caption: "Spectra 2025 — 1st position" },
  { image: "", alt: "Chocolate edible cup with a scoop of ice cream", caption: "Chocolate cup, ice-cream serve" },
  { image: "", alt: "Wholesale box of 396 edible cups packed for delivery", caption: "396 cups, packed for delivery" },
] as const;

export const businessSegments = [
  {
    id: "cafes",
    icon: "Coffee",
    title: "Cafés & tea stalls",
    lead: "Give your regulars a reason to post about you.",
    body: "An edible cup turns a ₹20 chai into something people photograph. It also cuts down on the cups you buy, store and throw away every day.",
    points: ["Elaichi for chai, Chocolate for cold coffee", "Charge a small premium for the 'edible cup' serve", "No more overflowing bins near the counter"],
    image: "",
    imageAlt: "Tea stall counter serving chai in edible cups",
  },
  {
    id: "restaurants",
    icon: "UtensilsCrossed",
    title: "Restaurants & dessert bars",
    lead: "Desserts that finish themselves.",
    body: "Serve mousse, kheer, rabri or ice cream in a cup that's part of the dish. Fewer bowls to wash, and a plate that comes back empty.",
    points: ["A signature dessert serve", "Works for takeaway counters too", "Pairs well with Vanilla and Chocolate"],
    image: "",
    imageAlt: "Restaurant dessert served in a chocolate edible cup",
  },
  {
    id: "events",
    icon: "PartyPopper",
    title: "Weddings & events",
    lead: "The chai counter everyone ends up at.",
    body: "Caterers use CUP2EAT for welcome drinks, chai and dessert counters. Guests love it, and clean-up is much lighter at the end of the night.",
    points: ["Bulk boxes delivered before your date", "Mix all three flavours", "Ask about custom branding for big functions"],
    image: "",
    imageAlt: "Wedding dessert counter with edible cups",
  },
  {
    id: "corporate",
    icon: "Building2",
    title: "Corporate & campus",
    lead: "Make the office tea break your sustainability story.",
    body: "Swap disposable cups at offsite events, conferences and pantries for something your team can eat. Easy to talk about in your CSR and green-office updates.",
    points: ["Great for launches and conferences", "Repeat monthly supply", "One invoice, delivered anywhere in India"],
    image: "",
    imageAlt: "Corporate event coffee station using edible cups",
  },
] as const;

export const businessBenefits = [
  { icon: "Sparkles", title: "Novelty that sells", body: "People try it once out of curiosity and come back because it's tasty." },
  { icon: "Camera", title: "Instagram-worthy", body: "A cup you bite into is the kind of thing customers film and tag you in." },
  { icon: "Trash2", title: "Less waste to manage", body: "Fewer disposable cups to buy, store and clear away after a rush." },
  { icon: "BadgeIndianRupee", title: "Predictable cost", body: "One clear wholesale price with delivery included — no surprise shipping." },
] as const;

/**
 * Sustainability facts.
 * Every number here is EDITABLE — numbers are either simple maths from our
 * own pack size, or left as plain statements. Add a `source` if you add a
 * figure from a study or report.
 */
export const sustainabilityFacts = [
  {
    value: "396",
    unit: "cups",
    label: "fewer disposable cups thrown away for every wholesale box used",
    source: "",
  },
  {
    value: "0",
    unit: "g",
    label: "cup left to throw away — the cup is eaten",
    source: "",
  },
  {
    value: "100",
    unit: "%",
    label: "food-grade, edible cup — no plastic film, no wax lining",
    source: "",
  },
] as const;

export const cupProblems = [
  {
    title: "Plastic cups",
    body: "Used for a couple of minutes, then they can sit in drains and landfills for a very long time.",
  },
  {
    title: "'Paper' cups",
    body: "Most are lined with a thin plastic film so they don't leak. That lining makes them hard to recycle, so many end up as regular waste.",
  },
  {
    title: "Thermocol & foam",
    body: "Light, cheap and breaks into small pieces — the hardest of all to clean up after an event.",
  },
] as const;
