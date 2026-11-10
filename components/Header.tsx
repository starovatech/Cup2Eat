"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X, ArrowUpRight } from "lucide-react";
import { contact, nav } from "@/config/site";
import { waLink, waMessages, cn } from "@/lib/whatsapp";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, trap Escape, move focus into the menu
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green-800 focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "mx-auto flex w-full max-w-site items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300 sm:px-4",
          scrolled || open
            ? "border-biscuit-600/20 bg-cream-50/95 shadow-card"
            : "border-biscuit-600/10 bg-cream-50/90"
        )}
      >
        <Logo className="pl-1" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[0.94rem] font-semibold transition-colors",
                    isActive(item.href)
                      ? "bg-green-100 text-green-800"
                      : "text-choco-950 hover:bg-cream-100 hover:text-green-800"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(waMessages.wholesale)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !min-h-[44px] !px-5 !py-2 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
          <button
            ref={menuBtn}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-800 text-cream-50 transition-colors hover:bg-green-700 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="mx-auto mt-2 w-full max-w-site overflow-y-auto rounded-card border border-biscuit-600/20 bg-cream-50 p-3 shadow-lift xl:hidden"
        style={{ maxHeight: "calc(100dvh - 6rem)" }}
      >
        <nav aria-label="Mobile">
          <ul className="grid gap-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-[52px] items-center justify-between rounded-2xl px-4 font-display text-xl transition-colors",
                    isActive(item.href) ? "bg-green-100 text-green-800" : "text-choco-950 hover:bg-cream-100"
                  )}
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5 text-biscuit-600" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-3 grid gap-2 border-t border-biscuit-600/15 pt-3 sm:grid-cols-2">
          <a href={waLink(waMessages.wholesale)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
          </a>
          <a href={`tel:${contact.phoneE164}`} className="btn-secondary">
            Call {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
