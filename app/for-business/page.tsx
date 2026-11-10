import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { businessBenefits, businessSegments } from "@/data/content";
import { Icon } from "@/components/Icon";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cn, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Edible Cups for Cafés, Restaurants, Weddings & Corporate Events",
  description:
    "How cafés, tea stalls, restaurants, caterers, weddings and corporate events use CUP2EAT edible cups — a memorable serve, Instagram-worthy, and far less waste.",
  alternates: { canonical: "/for-business" },
  openGraph: { title: "CUP2EAT for Businesses", url: "/for-business" },
};

const tones = ["elaichi", "chocolate", "vanilla", "biscuit"] as const;
const fills = ["chai", "scoop", "chai", "coffee"] as const;

export default function ForBusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For businesses"
        title={
          <>
            The cup your customers <span className="text-gold-600">talk about.</span>
          </>
        }
        intro="Cafés, tea stalls, restaurants, caterers and event teams across India use CUP2EAT to give a simple drink a memorable finish — and to send fewer cups to the bin."
      >
        <nav aria-label="Jump to section" className="flex flex-wrap gap-2">
          {businessSegments.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex min-h-[44px] items-center rounded-full border border-biscuit-600/30 bg-cream-50 px-4 text-sm font-semibold text-choco-950 transition-colors hover:border-green-800 hover:text-green-800"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Benefits strip */}
      <section className="py-16 sm:py-20" aria-label="How edible cups help your business">
        <div className="container-site">
          <ul className="grid gap-px overflow-hidden rounded-card border border-biscuit-600/15 bg-biscuit-600/15 sm:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 70} className="bg-cream-50 p-6 sm:p-7">
                <Icon name={b.icon} className="h-7 w-7 text-biscuit-600" />
                <h2 className="mt-4 font-sans text-lg font-bold text-green-900">{b.title}</h2>
                <p className="mt-1.5 text-choco-950/80">{b.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Segments */}
      {businessSegments.map((s, i) => (
        <section key={s.id} id={s.id} className={cn("scroll-mt-28 py-16 sm:py-24", i % 2 === 0 ? "bg-cream-100" : "")}>
          <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2 lg:col-start-8")}>
              <PhotoSlot
                src={s.image}
                alt={s.imageAlt}
                tone={tones[i]}
                fill={fills[i]}
                background={i % 2 === 0 ? "bg-cream-50" : "bg-gold-100"}
                className="aspect-[4/5] w-full shadow-card sm:aspect-[4/3] lg:aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>
            <Reveal delay={100} className={cn("lg:col-span-6", i % 2 === 0 ? "lg:col-start-7" : "lg:order-1")}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-gold-300">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-4xl text-choco-800 sm:text-5xl">{s.title}</h2>
              <p className="mt-3 font-display text-xl italic text-green-800 sm:text-2xl">{s.lead}</p>
              <p className="mt-4 text-lg leading-relaxed text-choco-950/85">{s.body}</p>
              <ul className="mt-6 grid gap-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-choco-950">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi CUP2EAT! I run a business (${s.title.toLowerCase()}) and I'd like to know more about edible cups.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Talk to us about {s.title.split(" ")[0].toLowerCase()}
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 rounded-card border border-biscuit-600/15 bg-gold-100 p-7 sm:p-10 md:flex-row md:items-center">
          <SectionHeading
            title="Ready to see the numbers?"
            intro="Our wholesale page has the current price per box, what's included and an order form."
          />
          <Link href="/wholesale" className="btn-primary shrink-0">
            Wholesale pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Planning an event or opening a café?"
        body="Tell us your date, city and how many guests or cups a day. We'll suggest flavours and quantities."
        message="Hi CUP2EAT! I'm planning an event / café and want to use edible cups."
        cta="Plan it on WhatsApp"
      />
    </>
  );
}
