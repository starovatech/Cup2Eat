import type { Metadata } from "next";
import { Leaf, Recycle, Trash2, Utensils, X } from "lucide-react";
import { cupProblems, sustainabilityFacts } from "@/data/content";
import { sustainabilityImage } from "@/data/images";
import { pricing } from "@/config/site";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sustainability — Zero-Waste Edible Cups",
  description:
    "Why plastic and paper cups are a problem, and how CUP2EAT edible cups leave zero waste behind. A simple swap for cafés, events and offices.",
  alternates: { canonical: "/sustainability" },
  openGraph: { title: "CUP2EAT Sustainability — The Cup That Leaves Nothing Behind", url: "/sustainability" },
};

/** EDITABLE: example stall size used in the "maths" box below. */
const CUPS_PER_DAY = 100;

const lifecycle = [
  { icon: Utensils, title: "Baked from food", body: "Made with food ingredients — no plastic film, no wax coating." },
  { icon: Leaf, title: "Used as a cup", body: "Holds 100 ml of chai, coffee, ice cream or dessert." },
  { icon: Recycle, title: "Eaten, not thrown", body: "The cup becomes the snack. Nothing goes to the bin, the drain or the landfill." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={
          <>
            The greenest cup is the one you <span className="font-script text-gold-600">eat.</span>
          </>
        }
        intro="India drinks a lot of chai — and most of it is served in something that gets thrown away a few minutes later. We think there's a tastier way to do it."
        aside={
          <PhotoSlot
            src={sustainabilityImage.src}
            alt={sustainabilityImage.alt}
            tone="elaichi"
            fill="empty"
            background="bg-green-100"
            className="aspect-[4/3] w-full shadow-card"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        }
      />

      {/* The problem */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow="The problem"
            title="A few minutes of use. A very long time as waste."
            intro="Disposable cups are convenient for the person drinking, and a headache for everyone who has to deal with them afterwards."
          />
          <ul className="grid gap-4 lg:col-span-7">
            {cupProblems.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="card flex gap-5 p-6 sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 text-chai-500">
                  <X className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl text-choco-800">{p.title}</h3>
                  <p className="mt-1.5 text-choco-950/80">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How CUP2EAT is zero waste — dark flat green */}
      <section className="bg-green-900 py-20 text-cream-50 sm:py-28">
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow="How CUP2EAT is zero waste"
            title="From oven to cup to snack."
            intro="There's no 'end of life' to manage, because the cup doesn't outlive the drink."
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {lifecycle.map((l, i) => (
              <Reveal as="li" key={l.title} delay={i * 110} className="relative border-t border-gold-300/30 pt-8">
                <span className="absolute -top-px left-0 h-px w-16 bg-gold-300" aria-hidden="true" />
                <l.icon className="h-8 w-8 text-gold-300" aria-hidden="true" strokeWidth={1.75} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Step {i + 1}</p>
                <h3 className="mt-1 text-3xl">{l.title}</h3>
                <p className="mt-2 text-cream-50/85">{l.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Facts */}
      <section className="bg-grad-cream py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Simple facts" title="The maths is short." />
          <dl className="mt-12 grid gap-6 md:grid-cols-3">
            {sustainabilityFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90} className="card p-7 sm:p-8">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <p className="font-display text-6xl leading-none text-green-800 sm:text-7xl">
                    {f.value}
                    <span className="ml-1 text-3xl text-gold-600">{f.unit}</span>
                  </p>
                  <p className="mt-4 text-choco-950/85">{f.label}</p>
                  {f.source ? <p className="mt-2 text-xs text-choco-950/70">Source: {f.source}</p> : null}
                </dd>
              </Reveal>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-4 rounded-card border border-green-800/15 bg-green-100 p-6 sm:flex-row sm:items-center sm:p-8">
            <Trash2 className="h-9 w-9 shrink-0 text-green-800" aria-hidden="true" />
            <p className="text-lg text-choco-950">
              A tea stall serving {CUPS_PER_DAY} cups a day uses one wholesale box ({pricing.main.cups} cups) about every{" "}
              {Math.round(pricing.main.cups / CUPS_PER_DAY)} days. Over a year, that&apos;s{" "}
              <strong className="text-green-900">{(CUPS_PER_DAY * 365).toLocaleString("en-IN")} disposable cups</strong> it doesn&apos;t
              have to throw away.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Make your next event a zero-cup-waste one."
        body="Tell us how many guests you're expecting and we'll work out the boxes you need."
        message="Hi CUP2EAT! I want to make my event zero-waste with edible cups."
        cta="Plan with us on WhatsApp"
      />
    </>
  );
}
