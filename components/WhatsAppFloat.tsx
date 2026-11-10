import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CUP2EAT on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-800 text-cream-50 shadow-lift ring-2 ring-gold-500 ring-offset-2 ring-offset-cream-50 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-green-700 motion-reduce:hover:translate-y-0 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-green-900 px-4 py-2 text-sm font-semibold text-cream-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
