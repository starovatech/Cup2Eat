import Link from "next/link";
import { ArrowRight, Award, Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { formatINR, pricing, productSpec } from "@/config/site";
import { flavours } from "@/data/flavours";
import { achievements, howItWorks, perfectFor, whyCup2eat } from "@/data/content";
import { heroImage } from "@/data/images";
import { CupIllustration } from "@/components/CupIllustration";
import { Icon } from "@/components/Icon";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, CtaBand, FlavourCard, IndiaBadge, PriceCard, SectionHeading, Testimonials } from "@/components/sections";
import { waLink, waMessages, cn } from "@/lib/whatsapp";

export default function HomePage() {
  const stats = [
    { value: productSpec.capacity, label: "per cup" },
    { value: `${flavours.length}`, label: "flavours" },
    { value: `${pricing.main.cups}`, label: "cups a box" },
    { value: formatINR(pricing.main.price), label: "delivered" },
  ];

  return (
    <>
      {/* ============ HERO — forest glow ============ */}
      <section className="relative overflow-hidden bg-grad-forest-glow pb-28 pt-28 text-cream-50 sm:pb-36 sm:pt-36 lg:pb-40">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold-300">
              <span className="h-px w-6 bg-gold-300" aria-hidden="true" />
              Edible cups · Made in India
            </p>
            <h1 className="mt-5 text-[3.4rem] leading-[0.95] sm:text-[5.2rem] lg:text-[6.4rem]">
              Eat Your <span className="text-gold-gradient italic">Drink.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-50/90 sm:text-xl">
              A crisp, baked cup for your chai, coffee or ice cream. Drink from it, then eat it — no plastic, no paper, nothing left to throw
              away.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/wholesale" className="btn-gold !min-h-[56px] !px-7 !text-base">
                Order Wholesale <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={waLink(waMessages.sample)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light !min-h-[56px] !px-7 !text-base">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Get a Sample Box
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-cream-50/85">
              {["FSSAI registered", "Free delivery across India", "Stock ready to ship"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold-300" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-square w-full">
              {heroImage.src ? (
                <PhotoSlot src={heroImage.src} alt={heroImage.alt} priority className="absolute inset-0 !rounded-[32px]" sizes="(min-width: 1024px) 40vw, 90vw" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-grad-spotlight">
                  <CupIllustration tone="biscuit" fill="chai" title={heroImage.alt} className="h-[86%] w-auto" />
                </div>
              )}
              <span className="absolute left-0 top-[12%] rotate-[-6deg] rounded-full bg-cream-50 px-4 py-2 text-sm font-bold text-green-900 shadow-lift sm:left-2">
                {productSpec.capacity} cup
              </span>
              <span className="absolute bottom-[14%] right-0 rotate-[5deg] rounded-full bg-grad-gold px-4 py-2 text-sm font-bold text-green-900 shadow-lift sm:right-2">
                Sip it · Eat it
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stat cards overlapping hero */}
      <section aria-label="CUP2EAT at a glance" className="relative z-10 -mt-16 sm:-mt-20">
        <div className="container-site">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 70} className="card px-5 py-5 sm:px-7 sm:py-6">
                <p className="font-display text-3xl text-green-800 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-choco-800">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ HOW IT WORKS — cream wash ============ */}
      <section className="bg-grad-cream py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="How it works"
            title={
              <>
                Pour. Sip. <span className="font-script text-gold-600">Eat.</span>
              </>
            }
            intro="It works like any cup you already use — the only difference is how it ends."
          />
          <ol className="relative grid gap-8 sm:grid-cols-3 sm:gap-6 lg:col-span-8">
            <span className="absolute left-10 right-10 top-10 hidden border-t-2 border-dashed border-biscuit-600/30 sm:block" aria-hidden="true" />
            {howItWorks.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 120} className="relative flex gap-5 sm:block">
                <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-grad-biscuit font-display text-2xl text-choco-950 shadow-card ring-4 ring-cream-50">
                  {i + 1}
                </span>
                <div className="sm:mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-biscuit-600">{s.step}</p>
                  <h3 className="mt-1 text-2xl text-choco-800">{s.title}</h3>
                  <p className="mt-2 text-choco-950/80">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FLAVOURS ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Three flavours" title="Pick the cup that suits your drink." />
            <ArrowLink href="/products">See flavours & specs</ArrowLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {flavours.map((f, i) => (
              <Reveal key={f.slug} delay={i * 100} className={cn(i === 1 && "md:mt-10")}>
                <FlavourCard flavour={f} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PERFECT FOR — bento ============ */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Perfect for"
            title="From the chai tapri to the wedding dessert counter."
            intro="If it fits in 100 ml, it fits in a CUP2EAT."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {perfectFor.map((p, i) => {
              const big = i === 0;
              return (
                <Reveal
                  key={p.title}
                  delay={i * 80}
                  className={cn(
                    "card card-hover overflow-hidden",
                    big ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : "",
                    i === 3 ? "md:col-span-2 lg:col-span-2" : ""
                  )}
                >
                  <div className={cn("flex h-full", big ? "flex-col" : "flex-col sm:flex-row")}>
                    <PhotoSlot
                      src={p.image}
                      alt={`${p.title} served in a CUP2EAT edible cup`}
                      fill={p.title.startsWith("Ice") || p.title.startsWith("Dessert") ? "scoop" : "chai"}
                      tone={i === 2 ? "chocolate" : i === 1 ? "vanilla" : "biscuit"}
                      background="bg-gold-100"
                      className={cn("!rounded-none", big ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[16/10] sm:aspect-auto sm:w-2/5")}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                      <Icon name={p.icon} className="h-7 w-7 text-biscuit-600" />
                      <h3 className={cn("mt-3 text-choco-800", big ? "text-3xl sm:text-4xl" : "text-2xl")}>{p.title}</h3>
                      <p className="mt-2 text-choco-950/80">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ WHOLESALE OFFER ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Wholesale offer"
              title={
                <>
                  One box. {pricing.main.cups} cups.
                  <br className="hidden sm:block" /> Delivered anywhere in India.
                </>
              }
              intro="Built for cafés, tea stalls, restaurants, caterers and event planners who want a cup people remember."
            />
            <div className="mt-6">
              <IndiaBadge />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/wholesale" className="btn-primary">
                See wholesale details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={waLink(waMessages.wholesale)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
              </a>
            </div>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <div className="mx-auto max-w-md lg:rotate-[1.5deg]">
              <PriceCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CUP2EAT ============ */}
      <section className="bg-green-100 py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why CUP2EAT"
              title="A cup that disappears — in the best way."
              intro="Every paper or plastic cup gets used for a few minutes and then thrown away. Ours gets eaten."
            />
            <div className="mt-8 flex items-center gap-4 rounded-card border border-green-800/15 bg-cream-50 p-5">
              <ShieldCheck className="h-10 w-10 shrink-0 text-green-800" aria-hidden="true" />
              <p className="text-choco-950">
                <strong className="block font-display text-xl font-semibold text-green-900">FSSAI registered</strong>
                Made and packed to Indian food-safety rules.
              </p>
            </div>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {whyCup2eat.map((w, i) => (
              <Reveal as="li" key={w.title} delay={(i % 2) * 80} className="flex gap-4 border-t border-green-800/15 py-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-800 text-gold-300">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-bold text-green-900">{w.title}</h3>
                  <p className="mt-1 text-choco-950/80">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ RECOGNITION ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Recognition" title="Noticed early." />
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Reveal className="card overflow-hidden lg:col-span-7">
              <div className="grid h-full sm:grid-cols-2">
                <PhotoSlot
                  src={achievements[1].image}
                  alt={achievements[1].imageAlt}
                  background="bg-grad-cream"
                  tone="elaichi"
                  className="aspect-[4/3] !rounded-none sm:aspect-auto sm:min-h-[280px]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="flex flex-col justify-center p-7">
                  <Sparkles className="h-7 w-7 text-gold-600" aria-hidden="true" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-biscuit-600">{achievements[1].date}</p>
                  <h3 className="mt-1 text-2xl text-choco-800 sm:text-3xl">{achievements[1].title}</h3>
                  <p className="mt-2 text-choco-950/80">{achievements[1].place}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-between rounded-card bg-green-900 p-7 text-cream-50 shadow-card lg:col-span-5">
              <Award className="h-8 w-8 text-gold-300" aria-hidden="true" />
              <div className="mt-8">
                <p className="font-display text-7xl leading-none sm:text-8xl">
                  <span className="text-gold-gradient">1st</span>
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl">Business Plan Competition</h3>
                <p className="mt-2 text-cream-50/85">
                  {achievements[0].event} · {achievements[0].place}
                </p>
              </div>
              <ArrowLink href="/about" className="mt-6 !text-gold-300 hover:!text-cream-50">
                Read our story
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEEDBACK ============ */}
      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Customer feedback" title="What people say after the last bite." className="mb-10" />
          <Testimonials />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
