# CUP2EAT — Website

Multi-page site for **CUP2EAT — "Eat Your Drink"**. Built with Next.js 15 (App Router), TypeScript and Tailwind CSS. Ready to deploy on Vercel.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
```

**Deploy on Vercel:** push the folder to GitHub, import it at vercel.com, and you're done. No settings needed. In Vercel → Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` to your real domain (for example `https://cup2eat.in`) so the sitemap, Open Graph tags and search-engine data use it.

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/products` | Flavours + specification table |
| `/wholesale` | Price tiers, what's included, delivery, sample box, order form |
| `/for-business` | Cafés, restaurants, events & weddings, corporate |
| `/sustainability` | Why disposable cups are a problem, how CUP2EAT is zero waste |
| `/about` | Founder story, journey, achievements, gallery |
| `/faq` | FAQ accordion |
| `/contact` | Contact channels + enquiry form |
| anything else | On-brand 404 |

Also generated automatically: `/sitemap.xml`, `/robots.txt`, and a social share image at `/opengraph-image`.

---

## Editing content (no component changes needed)

| What | File |
|---|---|
| **Prices**, the "New price 2026" label, price tiers | `config/site.ts` → `pricing` |
| **Phone, WhatsApp, email, Instagram**, hours, city | `config/site.ts` → `contact` |
| Product spec (capacity, hold time, shelf life, storage, **FSSAI number**) | `config/site.ts` → `productSpec` |
| Navigation menu | `config/site.ts` → `nav` |
| Flavours (taste notes, pairings, photos) | `data/flavours.ts` |
| **Customer feedback** | `data/testimonials.ts` |
| FAQs | `data/faqs.ts` |
| How it works, Perfect for, Why CUP2EAT, achievements, journey, gallery, business sections, sustainability facts | `data/content.ts` |
| Hero / founder / sustainability photos | `data/images.ts` |

### Changing the price
Open `config/site.ts`, find `pricing`, and edit `main: { cups: 396, price: 3999 }` plus the matching tier in `tiers`. The home page, wholesale page, FAQ, the per-cup price and the search-engine data all update from these values.

### Customer feedback
`data/testimonials.ts` holds empty templates. Fill in a real quote and set `published: true`. Until at least one is published, the home page shows a "Share your feedback" card instead of reviews, so nothing fake is ever shown.

---

## Swapping in the logo and photos

**Logo:** a stand-in `public/logo.svg` is included. Put the original logo at `public/logo.png` (square, at least 512×512) and change `logo: "/logo.svg"` to `logo: "/logo.png"` in `config/site.ts`.

**Photos:** every image slot shows a drawn cup illustration until you give it a photo, so nothing appears broken. To add a photo:

1. Put the file in the matching folder in `public/images/` (`hero/`, `flavours/`, `business/`, `about/`, `gallery/`).
2. Set its path in the data file, for example in `data/flavours.ts`:
   ```ts
   image: "/images/flavours/chocolate.jpg",
   ```
3. Check that the `imageAlt` / `alt` text still describes the photo.

Images are optimised automatically by `next/image` (resized, converted to WebP/AVIF, lazy-loaded). JPGs around 2000px on the long side are plenty.

| Slot | Set in | Shape |
|---|---|---|
| Home hero | `data/images.ts` → `heroImage` | square |
| Flavour cards | `data/flavours.ts` → `image` | 4:3 to 5:4 |
| "Perfect for" tiles | `data/content.ts` → `perfectFor[].image` | landscape |
| Business sections | `data/content.ts` → `businessSegments[].image` | 4:5 portrait |
| Founder photo | `data/images.ts` → `aboutImages.founder` | 4:5 portrait |
| Achievements | `data/content.ts` → `achievements[].image` | 16:9 |
| Gallery (6) | `data/content.ts` → `gallery[].image` | square |

---

## ⚠️ Facts to confirm before launch

Some copy is written from what we know today. Please check these against the actual product (search the code for `CONFIRM` / `EDIT`):

- **How long a cup holds hot chai:** `productSpec.holdsHot` in `config/site.ts` (used on Products and in the FAQ)
- **Shelf life** and **FSSAI licence number:** `productSpec.shelfLife`, `productSpec.fssaiNumber`
- FAQ answers on **sogginess, vegetarian, delivery time, custom branding**: `data/faqs.ts`
- **Business hours** and **city** (`contact.hours`, `contact.city`)
- Sample box price: currently "Ask on WhatsApp" (`pricing.tiers`)
- Sustainability numbers in `data/content.ts → sustainabilityFacts` and the `CUPS_PER_DAY` example in `app/sustainability/page.tsx`. These are simple maths from the pack size, not external statistics. If you add a figure from a report, fill in its `source`.

---

## Design system

- Colours and gradients are copied exactly from `cup2eat-brand-colors.md` (CSS variables in `app/globals.css`, Tailwind tokens in `tailwind.config.ts`). The brand palette **replaces** Tailwind's default colours, so colours outside the brand can't be used by accident.
- Fonts (via `next/font`): **Fraunces** for display, **Manrope** for body, **Kaushan Script** for a few accent words.
- Icons come only from `lucide-react`.
- Motion: gentle fade-up on scroll and hover lift. All of it is turned off for users who choose reduced motion, and content is never hidden if JavaScript doesn't load.

## Forms

Both forms check the fields in the browser (name, a 10-digit Indian mobile number, and so on), then open `https://wa.me/919818192575?text=…` with every field filled in. The contact form also has a "Send by email instead" button that opens a pre-filled `mailto:`. Nothing is stored on a server.

## Quality checks

```bash
npm run build && npm run start      # terminal 1
npm run check:overflow              # terminal 2
```

`check:overflow` opens every page in headless Chrome/Edge at 320, 375, 414, 768, 1024, 1280 and 1440 px and reports any horizontal scroll, along with the elements that cause it. Set `SCREENSHOTS=./shots` to also save full-page screenshots. If your browser isn't detected, set `CHROME_PATH`.
