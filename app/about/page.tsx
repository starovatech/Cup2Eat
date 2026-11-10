import type { Metadata } from "next";
import { Award, Instagram, Sparkles } from "lucide-react";
import { contact, founder } from "@/config/site";
import { achievements, gallery, journey } from "@/data/content";
import { aboutImages } from "@/data/images";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cn } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About CUP2EAT — Founded by Varun Khera",
  description:
    "The story behind CUP2EAT: founded by Varun Khera, a BBA student at IPEM Ghaziabad. 1st position at Spectra 2025 and showcased at Startup Mahakumbh 2025, Bharat Mandapam.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About CUP2EAT", url: "/about" },
};

const tones = ["biscuit", "elaichi", "vanilla", "biscuit", "chocolate", "vanilla"] as const;
const fills = ["empty", "chai", "coffee", "empty", "scoop", "empty"] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            It started with a <span className="text-gold-600">bin full of cups.</span>
          </>
        }
        intro={`CUP2EAT was started by ${founder.name}, a ${founder.college.replace("BBA, ", "BBA student at ")}, who wanted chai breaks to stop ending in a pile of rubbish.`}
      />

      {/* Founder story */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
            <PhotoSlot
              src={aboutImages.founder.src}
              alt={aboutImages.founder.alt}
              tone="elaichi"
              fill="chai"
              background="bg-grad-cream"
              className="aspect-[4/5] w-full shadow-card"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <p className="mt-4 font-display text-2xl text-choco-800">{founder.name}</p>
            <p className="text-choco-950/75">
              {founder.role} · {founder.college}
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Founder's story" title="Why an edible cup?" />
            <div className="mt-6 grid gap-5 text-lg leading-relaxed text-choco-950/85">
              <p>
                Between classes, the chai stall is where everyone ends up. And after every rush there&apos;s the same sight: a bin overflowing
                with paper and plastic cups that were used for about three minutes each.
              </p>
              <p>
                {founder.name.split(" ")[0]} started asking a simple question — what if the cup was part of the snack? Kulhads already showed
                that people love a cup with character. A baked, flavoured cup could go one step further: hold the drink, then get eaten.
              </p>
              <p>
                That idea became CUP2EAT. Three flavours — Chocolate, Vanilla and Elaichi — each made to go with something Indians already
                love to drink. It&apos;s now FSSAI registered and shipping to cafés, tea stalls and event organisers across the country.
              </p>
              <blockquote className="border-l-4 border-gold-500 pl-5 font-display text-2xl italic leading-snug text-green-800">
                &ldquo;Drink your chai, then eat the cup. Nothing left to throw away.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="The journey" title="From a classroom idea to orders across India." />
          <ol className="mt-14">
            {journey.map((j, i) => {
              const last = i === journey.length - 1;
              return (
                <Reveal as="li" key={j.title} delay={i * 60} className="grid md:grid-cols-[200px_1fr] md:gap-10">
                  <p className="hidden pt-1 text-right text-sm font-bold uppercase tracking-[0.16em] text-biscuit-600 md:block">{j.when}</p>
                  <div className={cn("relative border-l-2 pl-7 sm:pl-9", last ? "border-transparent" : "border-biscuit-600/25 pb-10")}>
                    <span
                      className={cn(
                        "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full ring-4 ring-cream-100",
                        last ? "bg-green-800" : "bg-gold-500"
                      )}
                      aria-hidden="true"
                    />
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-biscuit-600 md:hidden">{j.when}</p>
                    <h3 className="mt-1 text-2xl text-choco-800 md:mt-0">{j.title}</h3>
                    <p className="mt-2 max-w-2xl text-choco-950/80">{j.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Achievements" title="Recognised along the way." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 100} className={cn("card overflow-hidden", i === 0 && "md:translate-y-8")}>
                <PhotoSlot
                  src={a.image}
                  alt={a.imageAlt}
                  tone={i === 0 ? "biscuit" : "elaichi"}
                  fill={i === 0 ? "empty" : "chai"}
                  background={i === 0 ? "bg-gold-100" : "bg-green-100"}
                  className="aspect-[16/9] w-full !rounded-none"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="p-7">
                  {i === 0 ? <Award className="h-7 w-7 text-gold-600" aria-hidden="true" /> : <Sparkles className="h-7 w-7 text-gold-600" aria-hidden="true" />}
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-biscuit-600">
                    {a.event} · {a.date}
                  </p>
                  <h3 className="mt-1 text-2xl text-choco-800 sm:text-3xl">{a.title}</h3>
                  <p className="mt-1 font-semibold text-green-800">{a.place}</p>
                  <p className="mt-3 text-choco-950/80">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Gallery" title="Behind the cups." />
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Instagram className="h-4 w-4" aria-hidden="true" /> More on {contact.instagramHandle}
            </a>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal
                as="li"
                key={g.alt}
                delay={(i % 4) * 70}
                className={cn(i === 0 && "col-span-2 row-span-2", i === 5 && "col-span-2 lg:col-span-1")}
              >
                <PhotoSlot
                  src={g.image}
                  alt={g.alt}
                  caption={g.caption}
                  tone={tones[i]}
                  fill={fills[i]}
                  background={i % 2 === 0 ? "bg-cream-50" : "bg-gold-100"}
                  className={cn("h-full w-full", i === 0 ? "aspect-square" : i === 5 ? "aspect-[2/1] lg:aspect-square" : "aspect-square")}
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Want to be part of the story?" body="Serve CUP2EAT at your café, stall or next event. Message us and we'll help you get started." />
    </>
  );
}
