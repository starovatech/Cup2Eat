import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/sections";
import { contact, founder, pricing, site } from "@/config/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const script = Kaushan_Script({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Eat Your Drink | Edible Cups for Chai, Coffee & Desserts`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "edible cups",
    "edible tea cups",
    "edible cups India",
    "biscuit cup",
    "eco-friendly cups",
    "zero waste cups",
    "wholesale edible cups",
    "chai cup",
    "CUP2EAT",
  ],
  authors: [{ name: founder.name }],
  icons: { icon: site.logo, apple: site.logo },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: "/",
    title: `${site.name} — Eat Your Drink`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: `${site.name} — Eat Your Drink`, description: site.description },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0F4D3A",
  width: "device-width",
  initialScale: 1,
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/opengraph-image`,
  telephone: contact.phoneE164,
  email: contact.email,
  founder: { "@type": "Person", name: founder.name },
  address: { "@type": "PostalAddress", addressLocality: contact.city, addressRegion: contact.region, addressCountry: contact.country },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [contact.instagramUrl],
  priceRange: `₹${pricing.main.price}`,
  award: ["1st position, Business Plan Competition — Spectra 2025, IPEM Ghaziabad"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${script.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen">
        <JsonLd data={orgLd} />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
