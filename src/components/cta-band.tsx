import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Landmark,
  Building2,
  ShieldCheck,
  ScrollText,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

interface CtaBandProps {
  title?: string;
  description?: string;
}

const services = [
  { icon: ScrollText, label: "Tax Filing" },
  { icon: Building2, label: "Business Registration" },
  { icon: Landmark, label: "Loan Assistance" },
  { icon: ShieldCheck, label: "Insurance" },
];

export function CtaBand({
  title = "Need help with tax, registration, loans or insurance?",
  description = "Speak with Progateway Consultancy for clear guidance on the process, documents required and the next steps.",
}: CtaBandProps) {
  const whatsappMessage = encodeURIComponent(
    "Hello Progateway Consultancy, I would like to book a consultation regarding your services.",
  );

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      className="container-page py-14 md:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary-foreground/10 bg-primary shadow-lift">
        {/* Decorative background — restrained, single accent glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-aurora opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 -z-10 size-64 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          {/* Left: message + CTAs */}
          <div className="px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-sm sm:text-sm">
              <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
              Professional guidance, start to finish
            </div>

            <h2
              id="cta-heading"
              className="text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-primary-foreground/80 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group/button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Book Free Consultation
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover/button:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Chat with Progateway Consultancy on WhatsApp at ${SITE.phone}`}
                onClick={() => trackEvent("whatsapp_click", { placement: "cta_band" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-success px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-success/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-primary-foreground/60">
              No obligation • Clear document checklist • Call or WhatsApp {SITE.phone}
            </p>
          </div>

          {/* Right: signature element — a real services checklist, not decoration */}
          <div className="relative flex items-center justify-center border-t border-primary-foreground/10 bg-black/10 px-6 py-10 sm:px-8 lg:border-l lg:border-t-0">
            <div className="w-full max-w-xs rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 backdrop-blur-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-foreground/50">
                What we help with
              </p>
              <ul className="space-y-3">
                {services.map(({ icon: Icon, label }, i) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-primary-foreground/[0.04] px-3 py-2.5 opacity-0 [animation:fadeInUp_0.5s_ease_forwards]"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-primary-foreground">
                      {label}
                    </span>
                    <CheckCircle2
                      className="ml-auto size-4 text-success"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Move to your global stylesheet if you have one; kept here for drop-in convenience */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          li[style] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}