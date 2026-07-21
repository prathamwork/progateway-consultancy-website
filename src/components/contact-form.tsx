import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services-data";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s-]+$/, "Only digits, spaces, + and - allowed"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(200)
    .or(z.literal("")),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(form.entries());
  //   const parsed = schema.safeParse(data);
  //   if (!parsed.success) {
  //     const errs: Record<string, string> = {};
  //     parsed.error.issues.forEach((i) => {
  //       errs[i.path[0] as string] = i.message;
  //     });
  //     setErrors(errs);
  //     return;
  //   }
  //   setErrors({});
  //   setStatus("loading");
  //   // Simulated submission — wire to backend later
  //   setTimeout(() => setStatus("success"), 900);
  // };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    const { name, phone, email, service, message } = parsed.data;
    const text = [
      `*New enquiry*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      service ? `Service: ${service}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    trackEvent("form_submit", {
      form_name: "whatsapp_enquiry",
      service: service || defaultService || "not_selected",
    });
    trackEvent("whatsapp_click", {
      placement: "contact_form",
      service: service || defaultService || "not_selected",
    });

    // Small delay just so the "Sending…" state is visible; not required
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("success");
    }, 500);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success/40 bg-success/8 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-success" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold">
          WhatsApp is ready to send.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Send the prepared message in WhatsApp and the Progateway team will respond during office hours.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            required
            className={inputCls}
            placeholder="Rahul Patel"
          />
        </Field>
        <Field label="Phone" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            required
            className={inputCls}
            placeholder="+91 90000 00000"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            className={inputCls}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Service" error={errors.service} htmlFor="service">
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue={defaultService ?? ""}
              className={`${inputCls} appearance-none pr-10 ${
                // greys out placeholder-like option
                "cursor-pointer"
              }`}
            >
              <option value="">Select a service…</option>
              {SERVICE_CATEGORIES.map((category) => {
                const items = SERVICES.filter((s) => s.category === category);
                if (items.length === 0) return null;
                return (
                  <optgroup key={category} label={category}>
                    {items.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
          </div>
        </Field>
      </div>
      <Field label="How can we help?" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputCls}
          placeholder="Briefly describe your requirement…"
        />
      </Field>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover disabled:opacity-70"
      >
        {status === "loading" && (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        )}
        {status === "loading" ? "Opening WhatsApp…" : "Continue on WhatsApp"}
      </button>
      <p className="text-xs text-muted-foreground">
        Your details are added to a WhatsApp message and are not submitted to this website.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}
