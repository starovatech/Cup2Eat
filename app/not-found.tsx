import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { nav } from "@/config/site";
import { CupIllustration } from "@/components/CupIllustration";
import { waLink, waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-grad-forest-glow pb-24 pt-32 text-cream-50 sm:pt-40">
      <div className="container-site grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow text-gold-300">Error 404</p>
          <h1 className="mt-4 text-5xl leading-[1.02] sm:text-7xl">
            Looks like someone <span className="text-gold-gradient italic">ate this page.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream-50/85">
            The link may be old, or the page has moved. Here&apos;s where you can go instead.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-gold">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
            </Link>
            <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask us on WhatsApp
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-cream-50/25 px-4 text-sm font-semibold text-cream-50/90 hover:border-gold-300 hover:text-gold-300"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center rounded-full bg-grad-spotlight">
          <CupIllustration tone="biscuit" fill="empty" steam={false} className="h-3/4 w-auto -rotate-12" />
        </div>
      </div>
    </section>
  );
}
