/**
 * The three CUP2EAT flavours.
 * To add a real photo: put the file in /public/images/flavours/ and set `image`
 * (e.g. "/images/flavours/chocolate.jpg"). Leave `image` empty to show the
 * built-in illustration instead.
 */
export type Flavour = {
  slug: "chocolate" | "vanilla" | "elaichi";
  name: string;
  short: string;
  tasteNotes: string;
  pairsWith: string[];
  image: string;
  imageAlt: string;
  /** Tailwind classes — keep these in sync with the brand file. */
  gradient: string;
  textClass: string;
  cupTone: "chocolate" | "vanilla" | "elaichi";
};

export const flavours: Flavour[] = [
  {
    slug: "chocolate",
    name: "Chocolate",
    short: "Rich, cocoa-baked and a little bit indulgent.",
    tasteNotes:
      "A deep cocoa biscuit with a gentle sweetness. The last few bites taste like a chocolate cookie dipped in whatever you were drinking.",
    pairsWith: ["Cold coffee & mocha", "Vanilla or chocolate ice cream", "Hot chocolate", "Brownie sundaes"],
    image: "",
    imageAlt: "Chocolate CUP2EAT edible cup filled with cold coffee",
    gradient: "bg-grad-chocolate",
    textClass: "text-cream-50",
    cupTone: "chocolate",
  },
  {
    slug: "vanilla",
    name: "Vanilla",
    short: "Soft, buttery and easy to love.",
    tasteNotes:
      "A light, golden vanilla bake that lets the drink lead. Kids like it, grown-ups like it — it goes with almost everything on a menu.",
    pairsWith: ["Filter coffee & latte", "Fruit custard & rabri", "Kulfi and ice cream", "Milkshakes"],
    image: "",
    imageAlt: "Vanilla CUP2EAT edible cup with a latte",
    gradient: "bg-grad-vanilla",
    textClass: "text-choco-950",
    cupTone: "vanilla",
  },
  {
    slug: "elaichi",
    name: "Elaichi",
    short: "Made for a proper cup of chai.",
    tasteNotes:
      "Warm cardamom baked right into the cup, so every sip of chai picks up a little more spice. The one most tea stalls ask for first.",
    pairsWith: ["Masala & adrak chai", "Kesar doodh", "Badam milk", "Kheer and phirni"],
    image: "",
    imageAlt: "Elaichi CUP2EAT edible cup filled with hot masala chai",
    gradient: "bg-grad-elaichi",
    textClass: "text-choco-950",
    cupTone: "elaichi",
  },
];
