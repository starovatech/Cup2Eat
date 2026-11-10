import { contact } from "@/config/site";

/** Build a wa.me link with a pre-filled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Turn label/value pairs into a tidy WhatsApp message, skipping empty values. */
export function buildMessage(intro: string, fields: Array<[string, string | undefined]>) {
  const lines = fields
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `*${k}:* ${v!.trim()}`);
  return [intro, "", ...lines].join("\n");
}

export const waMessages = {
  general: "Hi CUP2EAT! I'd like to know more about your edible cups.",
  wholesale: "Hi CUP2EAT! I'd like to place a wholesale order for edible cups.",
  sample: "Hi CUP2EAT! I'd like to order a sample box to try all three flavours.",
  quote: "Hi CUP2EAT! I need a quote for an event / large order.",
};

/** Indian mobile: optional +91 / 0, then 10 digits starting 6–9. */
export function isValidIndianPhone(value: string) {
  const digits = value.replace(/[\s\-()]/g, "");
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
