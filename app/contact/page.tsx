import type { Metadata } from "next";
import { Clock, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/config/site";
import { EnquiryForm } from "@/components/forms";
import { PageHero, SectionHeading } from "@/components/sections";
import { waLink, waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact CUP2EAT — WhatsApp, Phone & Email",
  description: `Talk to CUP2EAT about edible cups, wholesale orders and sample boxes. WhatsApp or call ${contact.phoneDisplay}, email ${contact.email}, Instagram ${contact.instagramHandle}.`,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact CUP2EAT", url: "/contact" },
};

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phoneDisplay,
    note: "Fastest way to reach us",
    href: waLink(waMessages.general),
    external: true,
    featured: true,
  },
  { icon: Phone, label: "Call", value: contact.phoneDisplay, note: contact.hours, href: `tel:${contact.phoneE164}`, external: false },
  { icon: Mail, label: "Email", value: contact.email, note: "For invoices & detailed enquiries", href: `mailto:${contact.email}`, external: false },
  {
    icon: Instagram,
    label: "Instagram",
    value: contact.instagramHandle,
    note: "Photos, reels and new prices",
    href: contact.instagramUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say hello. <span className="text-gold-600">We reply fast.</span>
          </>
        }
        intro="Questions about flavours, a bulk order, a sample box or an event? Pick whatever's easiest for you."
      />

      <section className="py-16 sm:py-20" aria-label="Ways to contact us">
        <div className="container-site">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={
                    c.featured
                      ? "card-hover flex h-full flex-col rounded-card bg-green-800 p-6 text-cream-50 shadow-card"
                      : "card card-hover flex h-full flex-col p-6"
                  }
                >
                  <c.icon className={c.featured ? "h-7 w-7 text-gold-300" : "h-7 w-7 text-green-800"} aria-hidden="true" strokeWidth={1.75} />
                  <span className={c.featured ? "mt-5 text-sm font-bold uppercase tracking-[0.14em] text-gold-300" : "mt-5 text-sm font-bold uppercase tracking-[0.14em] text-biscuit-600"}>
                    {c.label}
                  </span>
                  <span className={c.featured ? "mt-1 break-all font-display text-xl" : "mt-1 break-all font-display text-xl text-choco-800"}>{c.value}</span>
                  <span className={c.featured ? "mt-2 text-sm text-cream-50/80" : "mt-2 text-sm text-choco-950/75"}>{c.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Enquiry form"
              title="Send us a message."
              intro="Fill this in and send it on WhatsApp — or by email if you prefer. We'll reply with prices, availability and delivery dates."
            />
            <p className="mt-8 flex items-center gap-3 text-choco-950/85">
              <Clock className="h-5 w-5 text-green-800" aria-hidden="true" /> {contact.hours}
            </p>
          </div>
          <div className="card p-6 sm:p-9 lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
