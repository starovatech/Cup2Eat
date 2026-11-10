import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, MessageCircle, Quote, Instagram } from "lucide-react";
import { contact, formatINR, perCup, pricing } from "@/config/site";
import type { Flavour } from "@/data/flavours";
import { publishedTestimonials } from "@/data/testimonials";
import { cn, waLink, waMessages } from "@/lib/whatsapp";
import { PhotoSlot } from "./PhotoSlot";
import { Reveal } from "./Reveal";

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "light" ? "text-gold-300" : "text-green-800")}>
          <span className={cn("h-px w-6", tone === "light" ? "bg-gold-300" : "bg-gold-500")} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-5xl",
          tone === "light" ? "text-cream-50" : "text-choco-800"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn("mt-4 text-lg leading-relaxed", tone === "light" ? "text-cream-50/85" : "text-choco-950/80")}>{intro}</p>
      ) : null}
    </div>
  );
}

/* ---------- Inner-page hero (flat cream, asymmetric) ---------- */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-100 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-site grid items-end gap-10 lg:grid-cols-12">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <p className="eyebrow text-green-800">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[2.6rem] leading-[1.02] text-choco-800 sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-choco-950/80 sm:text-xl">{intro}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </div>
    </section>
  );
}

/* ---------- Final CTA band — chai gradient ---------- */
export function CtaBand({
  title = "Want to try it with your own chai?",
  body = "Message us on WhatsApp. We'll answer the same day, share current prices and send a sample box if you'd like one.",
  message = waMessages.sample,
  cta = "Chat on WhatsApp",
}: {
  title?: string;
  body?: string;
  message?: string;
  cta?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-grad-chai">
          <div className="absolute inset-0 bg-choco-950/25" aria-hidden="true" />
          <div className="relative grid items-center gap-8 px-6 py-12 sm:px-10 md:grid-cols-[1.4fr_1fr] md:py-16 lg:px-16">
            <div>
              <p className="font-script text-2xl text-gold-300 sm:text-3xl">Eat your drink</p>
              <h2 className="mt-2 text-[2rem] leading-[1.08] text-cream-50 sm:text-5xl">{title}</h2>
              <p className="mt-4 max-w-lg text-lg text-cream-50/90">{body}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full !min-h-[56px] !text-base md:w-auto">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> {cta}
              </a>
              <a href={`tel:${contact.phoneE164}`} className="btn-ghost-light w-full md:w-auto">
                or call {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Gold wholesale price card ---------- */
export function PriceCard({ compact = false }: { compact?: boolean }) {
  const { cups, price } = pricing.main;
  return (
    <div className="relative overflow-hidden rounded-card bg-grad-gold p-6 text-green-900 shadow-lift sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-green-900 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
          {pricing.label}
        </span>
        <span className="text-sm font-semibold">Wholesale box</span>
      </div>
      <p className="mt-6 font-display text-6xl leading-none sm:text-7xl" aria-label={`${formatINR(price)} for ${cups} cups`}>
        {formatINR(price)}
      </p>
      <p className="mt-3 text-lg font-semibold">for {cups} edible cups</p>
      <p className="mt-1 text-sm font-medium text-green-900/80">That&apos;s about {perCup(price, cups)} a cup, delivered.</p>
      {!compact ? (
        <ul className="mt-6 grid gap-2 border-t border-green-900/20 pt-5 text-[0.95rem] font-medium">
          {["100 ml cups · Chocolate, Vanilla or Elaichi", pricing.deliveryNote, "Safe protective packing"].map((li) => (
            <li key={li} className="flex gap-2.5">
              <Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              {li}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/* ---------- India delivery badge (saffron · cream · green) — used once ---------- */
export function IndiaBadge() {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-biscuit-600/20 bg-cream-50 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-choco-950">
      <span className="flex h-7 w-7 flex-col overflow-hidden rounded-full border border-biscuit-600/20" aria-hidden="true">
        <span className="flex-1 bg-saffron-500" />
        <span className="flex-1 bg-cream-50" />
        <span className="flex-1 bg-green-500" />
      </span>
      Free delivery all over India
    </span>
  );
}

/* ---------- Flavour card ---------- */
export function FlavourCard({ flavour, index = 0, detailed = false }: { flavour: Flavour; index?: number; detailed?: boolean }) {
  const dark = flavour.slug === "chocolate";
  return (
    <article className={cn("card-hover relative flex h-full flex-col overflow-hidden rounded-card shadow-card", flavour.gradient, flavour.textClass)}>
      <PhotoSlot
        src={flavour.image}
        alt={flavour.imageAlt}
        tone={flavour.cupTone}
        fill={flavour.slug === "chocolate" ? "coffee" : flavour.slug === "vanilla" ? "scoop" : "chai"}
        background="bg-transparent"
        className="aspect-[4/3] w-full !rounded-none"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-6 pt-2 sm:p-7 sm:pt-2">
        <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", dark ? "text-gold-300" : "text-choco-800")}>
          0{index + 1} · Flavour
        </p>
        <h3 className="mt-2 text-3xl sm:text-4xl">{flavour.name}</h3>
        <p className={cn("mt-2 text-base", dark ? "text-cream-50/90" : "text-choco-950")}>{flavour.short}</p>
        {detailed ? (
          <p className={cn("mt-3 text-[0.95rem] leading-relaxed", dark ? "text-cream-50/85" : "text-choco-950")}>{flavour.tasteNotes}</p>
        ) : null}
        <div className="mt-auto pt-5">
          <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", dark ? "text-gold-300" : "text-choco-800")}>Best with</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {flavour.pairsWith.slice(0, detailed ? 4 : 2).map((p) => (
              <li
                key={p}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-medium",
                  dark ? "bg-cream-50/10 text-cream-50" : "bg-cream-50/60 text-choco-950"
                )}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/* ---------- Testimonials (data-driven; honest empty state) ---------- */
export function Testimonials() {
  if (publishedTestimonials.length === 0) {
    return (
      <div className="card grid gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-biscuit text-choco-800">
          <Quote className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-2xl text-choco-800 sm:text-3xl">Served CUP2EAT at your café or event?</h3>
          <p className="mt-2 max-w-2xl text-choco-950/80">
            We&apos;d love to hear how your customers liked it. Send us a message or tag{" "}
            <a href={contact.instagramUrl} className="link" target="_blank" rel="noopener noreferrer">
              {contact.instagramHandle}
            </a>{" "}
            — with your permission, we&apos;ll feature your feedback here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={waLink("Hi CUP2EAT! Here's some feedback on your edible cups:")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Share feedback
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Instagram className="h-4 w-4" aria-hidden="true" /> See us on Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {publishedTestimonials.map((t, i) => (
        <Reveal as="li" key={`${t.name}-${i}`} delay={i * 80} className={cn("card flex flex-col p-7", i === 0 && "lg:row-span-2")}>
          <Quote className="h-7 w-7 text-gold-500" aria-hidden="true" />
          <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-choco-800">“{t.quote}”</blockquote>
          <p className="mt-6 font-semibold text-choco-950">{t.name}</p>
          <p className="text-sm text-choco-950/75">
            {t.role}
            {t.city ? ` · ${t.city}` : ""}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------- Simple CTA link with arrow ---------- */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex min-h-[44px] items-center gap-2 font-semibold text-green-800 hover:text-gold-600", className)}>
      <span className="underline decoration-[1.5px] underline-offset-4">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
    </Link>
  );
}

/* ---------- JSON-LD ---------- */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
