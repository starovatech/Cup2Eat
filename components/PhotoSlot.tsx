import Image from "next/image";
import { CupIllustration } from "./CupIllustration";
import { cn } from "@/lib/whatsapp";

/**
 * Shows a real photo when `src` is set (files live in /public/images/...).
 * When `src` is empty it falls back to an on-brand cup illustration, so the
 * layout never shows a broken image while photos are being collected.
 */
export function PhotoSlot({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  tone = "biscuit",
  fill = "chai",
  background = "bg-grad-spotlight",
  caption,
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "biscuit" | "chocolate" | "vanilla" | "elaichi";
  fill?: "chai" | "coffee" | "scoop" | "empty";
  background?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("relative overflow-hidden rounded-img", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className={cn("absolute inset-0 flex items-center justify-center", background)}>
          <CupIllustration tone={tone} fill={fill} title={alt} className="h-[78%] w-auto max-w-[80%] drop-shadow-sm" />
        </div>
      )}
      {caption ? (
        <figcaption className="absolute inset-x-3 bottom-3 rounded-full bg-cream-50/90 px-4 py-2 text-center text-xs font-semibold text-choco-950 backdrop-blur-sm sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
