import type { Metadata } from "next";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs, type Faq } from "@/data/faqs";
import { contact } from "@/config/site";
import { CtaBand, JsonLd, PageHero } from "@/components/sections";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FAQ — Edible Cups Questions Answered",
  description:
    "Does an edible cup get soggy? How long does it hold hot chai? Is it vegetarian? Shelf life, minimum order, delivery time, FSSAI and custom branding — answered.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "CUP2EAT FAQ", url: "/faq" },
};

const groups: Faq["group"][] = ["Product", "Ordering", "Business"];

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions we get <span className="text-gold-600">every day.</span>
          </>
        }
        intro="The short answers. If yours isn't here, ask us on WhatsApp — a real person replies."
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <nav aria-label="FAQ topics">
                <ul className="flex flex-wrap gap-2 lg:flex-col">
                  {groups.map((g) => (
                    <li key={g}>
                      <a
                        href={`#faq-${g.toLowerCase()}`}
                        className="inline-flex min-h-[44px] items-center rounded-full border border-biscuit-600/25 px-5 font-semibold text-choco-950 transition-colors hover:border-green-800 hover:text-green-800"
                      >
                        {g}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 hidden rounded-card bg-green-900 p-6 text-cream-50 lg:block">
                <p className="font-display text-2xl">Still wondering?</p>
                <p className="mt-2 text-cream-50/85">We usually reply within a few hours ({contact.hours}).</p>
                <a href={waLink("Hi CUP2EAT! I have a question:")} target="_blank" rel="noopener noreferrer" className="btn-gold mt-5 w-full">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </aside>

          <div className="grid gap-14 lg:col-span-8">
            {groups.map((g) => (
              <section key={g} id={`faq-${g.toLowerCase()}`} aria-labelledby={`h-${g}`} className="scroll-mt-28">
                <h2 id={`h-${g}`} className="text-3xl text-choco-800 sm:text-4xl">
                  {g}
                </h2>
                <div className="mt-6 divide-y divide-biscuit-600/15 overflow-hidden rounded-card border border-biscuit-600/15 bg-cream-50 shadow-card">
                  {faqs
                    .filter((f) => f.group === g)
                    .map((f) => (
                      <details key={f.q} className="group">
                        <summary className="flex min-h-[60px] cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-sans text-lg font-semibold text-green-900 transition-colors hover:bg-cream-100 sm:px-7">
                          <span>{f.q}</span>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                            <ChevronDown className="faq-chevron h-5 w-5 transition-transform duration-200" aria-hidden="true" />
                          </span>
                        </summary>
                        <div className="px-5 pb-6 text-[1.02rem] leading-relaxed text-choco-950/85 sm:px-7">{f.a}</div>
                      </details>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Didn't find your answer?" body="Send us your question on WhatsApp and we'll get back to you the same day." message="Hi CUP2EAT! I have a question:" cta="Ask on WhatsApp" />
    </>
  );
}
