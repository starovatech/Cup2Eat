import type { Metadata } from "next";
import { Check, Gift, MapPin, PackageCheck, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { contact, formatINR, perCup, pricing } from "@/config/site";
import { OrderForm } from "@/components/forms";
import { Reveal } from "@/components/Reveal";
import { PageHero, PriceCard, SectionHeading } from "@/components/sections";
import { CupIllustration } from "@/components/CupIllustration";
import { cn, waLink, waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Wholesale & Bulk Edible Cups",
  description: `Order edible cups in bulk: ${formatINR(pricing.main.price)} for ${pricing.main.cups} cups, delivery included all over India. Sample box available. Order on WhatsApp.`,
  alternates: { canonical: "/wholesale" },
  openGraph: { title: "CUP2EAT Wholesale — Edible Cups in Bulk", url: "/wholesale" },
};

const included = [
  { icon: PackageCheck, title: `${pricing.main.cups} edible cups`, body: "100 ml each, in Chocolate, Vanilla, Elaichi or a mix." },
  { icon: Truck, title: "Delivery included", body: "Free shipping to any address in India. No extra charges at the door." },
  { icon: ShieldCheck, title: "Safe protective packing", body: "Packed so the cups reach you whole, even on long routes." },
  { icon: Check, title: "FSSAI registered", body: "Food-safety details printed on every pack." },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale & bulk orders"
        title={
          <>
            Stock up for the <span className="font-script text-gold-600">rush.</span>
          </>
        }
        intro={`One clear price: ${formatINR(pricing.main.price)} for ${pricing.main.cups} cups, delivered anywhere in India. That works out to about ${perCup(pricing.main.price, pricing.main.cups)} a cup.`}
        aside={<PriceCard compact />}
      >
        <a href="#order" className="btn-primary">
          Fill the order form
        </a>
        <a href={waLink(waMessages.wholesale)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
        </a>
      </PageHero>

      {/* Pricing tiers */}
      <section className="py-20 sm:py-28" aria-labelledby="tiers">
        <div className="container-site">
          <SectionHeading eyebrow={pricing.label} title={<span id="tiers">Choose how you want to start.</span>} />
          <ul className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.25fr_1fr] lg:items-center">
            {pricing.tiers.map((t, i) => (
              <Reveal
                as="li"
                key={t.id}
                delay={i * 90}
                className={cn(
                  "flex flex-col rounded-card p-7 shadow-card sm:p-8",
                  t.featured ? "bg-green-900 text-cream-50 lg:py-12" : "card"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={cn("text-2xl", t.featured ? "text-cream-50" : "text-choco-800")}>{t.name}</h3>
                  {t.featured ? (
                    <span className="rounded-full bg-grad-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-green-900">Most ordered</span>
                  ) : null}
                </div>
                <p className={cn("mt-5 font-display text-5xl leading-none", t.featured ? "text-gold-gradient" : "text-green-800")}>
                  {t.price ? formatINR(t.price) : t.priceNote}
                </p>
                <p className={cn("mt-2 text-sm font-semibold", t.featured ? "text-gold-300" : "text-choco-800")}>
                  {t.price && t.cups ? `${t.cups} cups · ${t.priceNote}` : t.cups ? `${t.cups} cups` : " "}
                </p>
                <p className={cn("mt-4", t.featured ? "text-cream-50/85" : "text-choco-950/80")}>{t.description}</p>
                <ul className="mt-6 grid gap-2.5">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[0.95rem]">
                      <Check className={cn("mt-0.5 h-5 w-5 shrink-0", t.featured ? "text-gold-300" : "text-green-500")} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                {t.id === "wholesale" ? (
                  <a href="#order" className="btn-gold mt-8">
                    {t.cta}
                  </a>
                ) : (
                  <a
                    href={waLink(t.id === "sample" ? waMessages.sample : waMessages.quote)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-8"
                  >
                    {t.cta}
                  </a>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included + delivery */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="What's included" title="Everything in the price." />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {included.map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-grad-biscuit text-choco-950">
                    <it.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-green-900">{it.title}</h3>
                    <p className="mt-1 text-choco-950/80">{it.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 lg:col-span-5 lg:col-start-8">
            <Reveal className="card p-7">
              <MapPin className="h-7 w-7 text-green-800" aria-hidden="true" />
              <h3 className="mt-3 text-2xl text-choco-800">Delivery across India</h3>
              <p className="mt-2 text-choco-950/80">
                We keep stock ready and ship to every state. We&apos;ve already delivered to businesses in several states, including Odisha.
                Send us your pin code and we&apos;ll confirm the delivery date before you pay.
              </p>
            </Reveal>
            <Reveal delay={100} className="card relative overflow-hidden p-7">
              <CupIllustration tone="vanilla" fill="empty" steam={false} className="absolute -bottom-6 -right-6 h-32 w-auto opacity-60" />
              <Gift className="h-7 w-7 text-green-800" aria-hidden="true" />
              <h3 className="mt-3 text-2xl text-choco-800">Try a sample box first</h3>
              <p className="relative mt-2 max-w-[85%] text-choco-950/80">
                All three flavours, so you can test them with your own chai, coffee or desserts before ordering in bulk.
              </p>
              <a href={waLink(waMessages.sample)} target="_blank" rel="noopener noreferrer" className="btn-primary relative mt-5">
                Ask for a sample
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="scroll-mt-28 py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Order form"
              title="Place your order."
              intro="Fill this in and we'll get your order on WhatsApp with everything we need. We'll confirm stock, flavour and delivery date there."
            />
            <ol className="mt-8 grid gap-4 text-choco-950">
              {["Fill the form", "WhatsApp opens with your details", "We confirm & share payment details", "Your box is packed and shipped"].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-cream-50">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-choco-950/75">
              Prefer to talk? Call{" "}
              <a href={`tel:${contact.phoneE164}`} className="link">
                {contact.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="card p-6 sm:p-9 lg:col-span-8">
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
