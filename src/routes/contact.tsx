import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SITE } from "@/lib/site";
import { createSeo } from "@/lib/seo";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";

const CONTACT_SEO = createSeo({
  title: "Contact Progateway Consultancy | Navsari, Gujarat",
  description:
    "Call, WhatsApp, email or visit Progateway Consultancy in Navsari for GST, tax, registration, loan documentation, investment and insurance assistance.",
  path: "/contact",
});

export const Route = createFileRoute("/contact")({
  head: () => CONTACT_SEO,
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-aurora opacity-50"
        />

        <div
          aria-hidden="true"
          className="absolute -right-28 top-10 -z-10 size-80 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="container-page py-12 sm:py-16 md:py-20 lg:py-24">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Contact" }]}
          />

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14 xl:gap-20">
            {/* Hero content */}
            <div className="min-w-0">
              <span className="chip">Get in touch</span>

              <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#18235F] sm:text-5xl lg:text-6xl">
                Let&apos;s talk about your{" "}
                <span className="text-[#E86F1C]">financial service needs</span>
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                Book a free first consultation to discuss your requirements,
                required documents and the next steps for your application.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chat with Progateway Consultancy on WhatsApp"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>

                <a
                  href={`tel:${SITE.phoneRaw}`}
                  aria-label={`Call Progateway Consultancy at ${SITE.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </div>
            </div>

            {/* Consultation information card */}
            <aside className="relative hidden lg:block">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-[#E86F1C]/15 blur-2xl"
              />

              <div className="rounded-3xl border border-border/80 bg-card/90 p-7 shadow-lift backdrop-blur-xl xl:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                    <MessageCircle className="size-6" aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Free first consultation
                    </p>

                    <h2 className="mt-1 font-display text-2xl font-bold leading-tight text-foreground">
                      Speak directly with our consultancy team
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-4 border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Office hours
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                        {SITE.hours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Office location
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                        Navsari, Gujarat
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 rounded-2xl bg-muted/70 px-4 py-3 text-sm leading-6 text-muted-foreground">
                  Get guidance for GST, income tax, business registrations,
                  loans, investments and insurance services.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <Section>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,1fr)] lg:items-start lg:gap-12 xl:gap-14">
          {/* Contact form */}
          <div className="min-w-0 rounded-2xl border border-border bg-card p-4 shadow-card sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <h2 className="text-balance font-display text-xl font-bold sm:text-2xl">
              Send us a message
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Complete the form to prepare a WhatsApp message for the Progateway
              Consultancy team.
            </p>

            <div className="mt-6 min-w-0 sm:mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact information */}
          <aside
            className="flex min-w-0 flex-col gap-4 sm:gap-5"
            aria-label="Contact information"
          >
            <ContactCard
              icon={Phone}
              title="Call us"
              detail={SITE.phone}
              href={`tel:${SITE.phoneRaw}`}
              ariaLabel={`Call Progateway Consultancy at ${SITE.phone}`}
            />

            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              detail="Chat with our team"
              href={`https://wa.me/${SITE.whatsapp}`}
              ariaLabel="Chat with Progateway Consultancy on WhatsApp"
              accent
            />

            <ContactCard
              icon={Mail}
              title="Email"
              detail={SITE.email}
              href={`mailto:${SITE.email}`}
              ariaLabel={`Email Progateway Consultancy at ${SITE.email}`}
            />

            <ContactCard
              icon={MapPin}
              title="Visit us"
              detail={SITE.address}
              href={SITE.mapUrl}
              ariaLabel="Open Progateway Consultancy location in Google Maps"
            />

            <ContactCard
              icon={Clock}
              title="Office hours"
              detail={SITE.hours}
            />
          </aside>
        </div>

        {/* Google Map */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft sm:mt-12 sm:rounded-3xl lg:mt-14">
          <iframe
            title="Progateway Consultancy location on Google Maps"
            src={SITE.mapEmbed}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[280px] w-full border-0 sm:h-[340px] md:h-[400px] lg:h-[450px]"
          />
        </div>
      </Section>
    </>
  );
}

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  detail: string;
  href?: string;
  ariaLabel?: string;
  accent?: boolean;
};

function ContactCard({
  icon: Icon,
  title,
  detail,
  href,
  ariaLabel,
  accent = false,
}: ContactCardProps) {
  const cardClassName = `
    group flex w-full min-w-0 items-start gap-3 rounded-2xl border p-4
    transition-all duration-200
    sm:gap-4 sm:p-5
    ${
      accent
        ? "border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10"
        : "border-border bg-card hover:border-primary/25 hover:bg-muted/60"
    }
  `;

  const content = (
    <>
      <span
        className={`
          grid size-10 shrink-0 place-items-center rounded-xl
          transition-transform duration-200
          group-hover:scale-105
          sm:size-11
          ${
            accent
              ? "bg-primary text-primary-foreground"
              : "bg-primary/10 text-primary"
          }
        `}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-medium leading-6 text-foreground sm:text-base">
          {detail}
        </p>
      </div>
    </>
  );

  if (!href) {
    return <div className={cardClassName}>{content}</div>;
  }

  const isExternalLink = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer noopener" : undefined}
      className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
    >
      {content}
    </a>
  );
}
