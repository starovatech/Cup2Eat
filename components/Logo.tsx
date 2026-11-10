import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/whatsapp";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-h-[44px] shrink-0 items-center gap-2.5 rounded-full", className)}
      aria-label={`${site.name} — home`}
    >
      <Image src={site.logo} alt="" width={44} height={44} className="h-10 w-10 sm:h-11 sm:w-11" priority />
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight sm:text-[1.35rem]",
          light ? "text-cream-50" : "text-green-800"
        )}
      >
        CUP<span className={light ? "text-gold-300" : "text-gold-600"}>2</span>EAT
      </span>
    </Link>
  );
}
