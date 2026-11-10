"use client";

import { useId, useState, type FormEvent, type MouseEvent, type ReactNode } from "react";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { contact, pricing } from "@/config/site";
import { flavours } from "@/data/flavours";
import { buildMessage, isValidEmail, isValidIndianPhone, waLink } from "@/lib/whatsapp";

type Errors = Record<string, string>;

function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <span className="text-chai-500" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-choco-950/70"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-choco-950/70">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const describedBy = (id: string, error?: string, hint?: string) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined;

function openWhatsApp(text: string) {
  const url = waLink(text);
  // Note: passing "noopener" makes window.open return null, so we clear opener manually.
  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url; // pop-up blocked → open in the same tab
}

function focusFirstError(form: HTMLFormElement) {
  requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
}

/* ============================================================
 *  Wholesale order form → WhatsApp
 * ============================================================ */
export function OrderForm() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Errors = {};
    if (!d.name?.trim() || d.name.trim().length < 2) next.name = "Please enter your name.";
    if (!d.city?.trim()) next.city = "Please tell us which city to deliver to.";
    const qty = Number(d.quantity);
    if (!d.quantity || !Number.isFinite(qty) || qty < 1 || !Number.isInteger(qty)) next.quantity = "Enter the number of boxes (1 or more).";
    if (!d.flavour) next.flavour = "Choose a flavour, or pick Mixed.";
    if (!isValidIndianPhone(d.phone ?? "")) next.phone = "Enter a 10-digit mobile number, e.g. 98181 92575.";
    setErrors(next);
    if (Object.keys(next).length) {
      setSent(false);
      focusFirstError(form);
      return;
    }
    const cups = qty * pricing.main.cups;
    const text = buildMessage("Hi CUP2EAT! I'd like to place a wholesale order.", [
      ["Name", d.name],
      ["Business", d.business],
      ["City", d.city],
      ["Quantity", `${qty} box${qty > 1 ? "es" : ""} (${cups.toLocaleString("en-IN")} cups)`],
      ["Flavour", d.flavour],
      ["Phone", d.phone],
      ["Notes", d.notes],
    ]);
    openWhatsApp(text);
    setSent(true);
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5" aria-describedby={id("intro")}>
      <p id={id("intro")} className="sr-only">
        Fields marked with an asterisk are required. Submitting opens WhatsApp with your order details filled in.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label="Your name" required error={errors.name}>
          <input id={id("name")} name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={describedBy(id("name"), errors.name)} />
        </Field>
        <Field id={id("business")} label="Business name" error={errors.business}>
          <input id={id("business")} name="business" autoComplete="organization" className="field" placeholder="e.g. Chai Point, Lajpat Nagar" />
        </Field>
        <Field id={id("city")} label="City" required error={errors.city}>
          <input id={id("city")} name="city" autoComplete="address-level2" className="field" aria-invalid={!!errors.city} aria-describedby={describedBy(id("city"), errors.city)} />
        </Field>
        <Field id={id("phone")} label="Phone / WhatsApp" required error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            placeholder="98181 92575"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy(id("phone"), errors.phone)}
          />
        </Field>
        <Field id={id("quantity")} label="Number of boxes" required error={errors.quantity} hint={`1 box = ${pricing.main.cups} cups`}>
          <input
            id={id("quantity")}
            name="quantity"
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            defaultValue={1}
            className="field"
            aria-invalid={!!errors.quantity}
            aria-describedby={describedBy(id("quantity"), errors.quantity, "hint")}
          />
        </Field>
        <Field id={id("flavour")} label="Flavour" required error={errors.flavour}>
          <select
            id={id("flavour")}
            name="flavour"
            defaultValue=""
            className="field appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230F4D3A' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
            aria-invalid={!!errors.flavour}
            aria-describedby={describedBy(id("flavour"), errors.flavour)}
          >
            <option value="" disabled>
              Choose a flavour
            </option>
            {flavours.map((f) => (
              <option key={f.slug} value={f.name}>
                {f.name}
              </option>
            ))}
            <option value="Mixed (all three)">Mixed (all three)</option>
          </select>
        </Field>
      </div>
      <Field id={id("notes")} label="Anything else?">
        <textarea id={id("notes")} name="notes" rows={3} className="field resize-y" placeholder="Delivery date, event, custom branding…" />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary !min-h-[56px] w-full sm:w-auto">
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Send order on WhatsApp
        </button>
        <p className="text-sm text-choco-950/75">Opens WhatsApp with your details filled in. Nothing is sent until you press send there.</p>
      </div>
      <div aria-live="polite">
        {sent ? (
          <p className="flex items-start gap-2 rounded-xl bg-green-100 p-4 text-sm font-medium text-green-900">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            WhatsApp should be open with your order. If it didn&apos;t open, message us on {contact.phoneDisplay}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

/* ============================================================
 *  Contact / enquiry form → WhatsApp, with email fallback
 * ============================================================ */
export function EnquiryForm() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<"" | "whatsapp" | "email">("");

  function validate(form: HTMLFormElement) {
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Errors = {};
    if (!d.name?.trim() || d.name.trim().length < 2) next.name = "Please enter your name.";
    if (!isValidIndianPhone(d.phone ?? "")) next.phone = "Enter a 10-digit mobile number so we can reply.";
    if (d.email?.trim() && !isValidEmail(d.email)) next.email = "That email doesn't look right.";
    if (!d.message?.trim() || d.message.trim().length < 5) next.message = "Tell us a little about what you need.";
    setErrors(next);
    if (Object.keys(next).length) {
      setSent("");
      focusFirstError(form);
      return null;
    }
    return d;
  }

  function fields(d: Record<string, string>): Array<[string, string | undefined]> {
    return [
      ["Name", d.name],
      ["Business", d.business],
      ["Phone", d.phone],
      ["Email", d.email],
      ["Enquiry", d.topic],
      ["Message", d.message],
    ];
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = validate(e.currentTarget);
    if (!d) return;
    openWhatsApp(buildMessage("Hi CUP2EAT! I have an enquiry.", fields(d)));
    setSent("whatsapp");
  }

  function onEmail(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const d = validate(form);
    if (!d) return;
    const body = fields(d)
      .filter(([, v]) => v && v.trim())
      .map(([k, v]) => `${k}: ${v!.trim()}`)
      .join("\n");
    const subject = `CUP2EAT enquiry${d.topic ? ` — ${d.topic}` : ""} from ${d.name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent("email");
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label="Your name" required error={errors.name}>
          <input id={id("name")} name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={describedBy(id("name"), errors.name)} />
        </Field>
        <Field id={id("business")} label="Business name">
          <input id={id("business")} name="business" autoComplete="organization" className="field" />
        </Field>
        <Field id={id("phone")} label="Phone / WhatsApp" required error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy(id("phone"), errors.phone)}
          />
        </Field>
        <Field id={id("email")} label="Email" error={errors.email}>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy(id("email"), errors.email)}
          />
        </Field>
      </div>
      <fieldset>
        <legend className="field-label">
          What&apos;s it about? <span className="font-normal text-choco-950/70">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {["Wholesale order", "Sample box", "Event / wedding", "Corporate", "Something else"].map((t) => (
            <label key={t} className="relative">
              <input type="radio" name="topic" value={t} className="peer sr-only" />
              <span className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-biscuit-600/30 bg-cream-50 px-4 text-sm font-semibold text-choco-950 transition-colors hover:border-green-800 peer-checked:border-green-800 peer-checked:bg-green-800 peer-checked:text-cream-50 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold-500">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field id={id("message")} label="Message" required error={errors.message}>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          className="field resize-y"
          placeholder="Quantity, city, date, flavour — whatever helps."
          aria-invalid={!!errors.message}
          aria-describedby={describedBy(id("message"), errors.message)}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary !min-h-[56px]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Send on WhatsApp
        </button>
        <button type="button" onClick={onEmail} className="btn-secondary !min-h-[56px]">
          <Mail className="h-5 w-5" aria-hidden="true" /> Send by email instead
        </button>
      </div>
      <div aria-live="polite">
        {sent ? (
          <p className="flex items-start gap-2 rounded-xl bg-green-100 p-4 text-sm font-medium text-green-900">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {sent === "whatsapp"
              ? "WhatsApp should be open with your message — just press send."
              : "Your email app should be open with the message ready to send."}{" "}
            Nothing came up? Write to {contact.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
