import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { pricing, productSpec, site } from "@/config/site";
import { flavours } from "@/data/flavours";
import { CupIllustration } from "@/components/CupIllustration";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/sections";
import { cn, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Edible Cups — Chocolate, Vanilla & Elaichi",
  description:
    "CUP2EAT edible cups in three flavours: Chocolate, Vanilla and Elaichi. 100 ml baked cups for chai, coffee, ice cream and desserts. Specs, taste notes and pairings.",
  alternates: { canonical: "/products" },
  openGraph: { title: "CUP2EAT Edible Cups — Chocolate, Vanilla & Elaichi", url: "/products" },
};

const specs: Array<[string, string]> = [
  ["Capacity", productSpec.capacity],
  ["Type", productSpec.format],
  ["Flavours", productSpec.flavours],
  ["Hot drinks", productSpec.holdsHot],
  ["Cold drinks & desserts", productSpec.holdsCold],
  ["Shelf life", productSpec.shelfLife],
  ["Storage", productSpec.storage],
  ["Packing", productSpec.packing],
  ["Food safety", productSpec.certification],
  ["Wholesale pack", `${pricing.main.cups} cups per box`],
];

export default function ProductsPage() {
  const productLd = {
    "@context": "https://schema.org",
    "@graph": flavours.map((f) => ({
      "@type": "Product",
      name: `CUP2EAT ${f.name} Edible Cup (100 ml)`,
      description: `${f.short} ${f.tasteNotes}`,
      brand: { "@type": "Brand", name: site.name },
      category: "Edible cups",
      image: `${site.url}/opengraph-image`,
      offers: {
        "@type": "Offer",
        priceCurrency: pricing.currency,
        price: pricing.main.price,
        eligibleQuantity: { "@type": "QuantitativeValue", value: pricing.main.cups, unitText: "cups" },
        availability: "https://schema.org/InStock",
        url: `${site.url}/wholesale`,
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: 0, currency: pricing.currency },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={productLd} />
      <PageHero
        eyebrow="Products"
        title={
          <>
            Three flavours. <span className="text-gold-600">One idea.</span>
          </>
        }
        intro="Every CUP2EAT is a baked, 100 ml cup that holds your drink and then becomes the snack. Choose the flavour that matches what you serve."
        aside={
          <div className="flex items-end justify-center gap-2 sm:gap-4" aria-hidden="true">
            <CupIllustration tone="chocolate" fill="coffee" className="h-36 w-auto sm:h-44" />
            <CupIllustration tone="vanilla" fill="scoop" className="h-44 w-auto sm:h-56" />
            <CupIllustration tone="elaichi" fill="chai" className="h-36 w-auto sm:h-44" />
          </div>
        }
      >
        <a href="#specs" className="btn-secondary">
          See specifications
        </a>
        <Link href="/wholesale" className="btn-primary">
          Wholesale price <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Flavour rows — alternate sides */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-16 sm:gap-24">
          {flavours.map((f, i) => {
            const dark = f.slug === "chocolate";
            return (
              <article key={f.slug} id={f.slug} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <Reveal className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                  <div className={cn("overflow-hidden rounded-card shadow-card", f.gradient)}>
                    <PhotoSlot
                      src={f.image}
                      alt={f.imageAlt}
                      tone={f.cupTone}
                      fill={f.slug === "chocolate" ? "coffee" : f.slug === "vanilla" ? "scoop" : "chai"}
                      background="bg-transparent"
                      className="aspect-[5/4] w-full !rounded-none"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </Reveal>
                <Reveal delay={100} className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-1")}>
                  <p className="eyebrow text-biscuit-600">0{i + 1} · {dark ? "Rich & cocoa" : f.slug === "vanilla" ? "Soft & golden" : "Spiced & warm"}</p>
                  <h2 className="mt-3 text-5xl text-choco-800 sm:text-6xl">{f.name}</h2>
                  <p className="mt-4 text-xl text-choco-950">{f.short}</p>
                  <h3 className="mt-8 font-sans text-xs font-bold uppercase tracking-[0.18em] text-green-800">Taste notes</h3>
                  <p className="mt-2 leading-relaxed text-choco-950/85">{f.tasteNotes}</p>
                  <h3 className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-green-800">Best paired with</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {f.pairsWith.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-choco-950">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hi CUP2EAT! I'm interested in the ${f.name} edible cups. Can you share details?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-8"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask about {f.name}
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="scroll-mt-28 bg-grad-cream py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="Specifications"
            title="The details."
            intro="Need something specific for your menu or event? Ask us — we're happy to share more."
          />
          <div className="lg:col-span-8">
            <div className="card overflow-hidden">
              <table className="w-full table-fixed text-left">
                <caption className="sr-only">CUP2EAT edible cup specifications</caption>
                <tbody>
                  {specs.map(([k, v], i) => (
                    <tr key={k} className={cn(i % 2 === 0 ? "bg-cream-50" : "bg-cream-100/60")}>
                      <th scope="row" className="w-[38%] px-5 py-4 align-top text-sm font-bold text-green-900 sm:w-1/3 sm:px-7">
                        {k}
                      </th>
                      <td className="px-5 py-4 align-top text-choco-950 sm:px-7">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which flavour to start with?"
        body="Get a sample box with all three and try them with what you already serve."
      />
    </>
  );
}
