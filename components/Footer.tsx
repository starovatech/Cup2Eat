import Link from "next/link";
import { Instagram, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { contact, nav, productSpec, site } from "@/config/site";
import { waLink, waMessages } from "@/lib/whatsapp";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-green-900 text-cream-50">
      <div className="h-px w-full bg-grad-gold opacity-80" aria-hidden="true" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-5 max-w-sm font-display text-3xl leading-tight">
            Eat your <span className="text-gold-gradient">drink.</span>
          </p>
          <p className="mt-4 max-w-sm text-cream-50/80">
            Edible cups for chai, coffee, ice cream and desserts. Made in India, delivered across India.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-4 py-2 text-sm text-gold-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {productSpec.certification}
            {productSpec.fssaiNumber ? ` · Lic. No. ${productSpec.fssaiNumber}` : ""}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center text-cream-50/85 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Talk to us</h2>
          <ul className="mt-4 grid gap-1">
            <li>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 text-cream-50/85 hover:text-gold-300"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                WhatsApp {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneE164}`} className="inline-flex min-h-[44px] items-center gap-3 text-cream-50/85 hover:text-gold-300">
                <Phone className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                Call {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex min-h-[44px] min-w-0 items-center gap-3 break-all text-cream-50/85 hover:text-gold-300">
                <Mail className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 text-cream-50/85 hover:text-gold-300"
              >
                <Instagram className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                {contact.instagramHandle} on Instagram
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-cream-50/70">{contact.hours}</p>
        </div>
      </div>
      <div className="border-t border-cream-50/10">
        <div className="container-site flex flex-col gap-2 py-6 pb-24 text-sm text-cream-50/65 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Founded by Varun Khera · Ghaziabad, India</p>
        </div>
      </div>
    </footer>
  );
}
