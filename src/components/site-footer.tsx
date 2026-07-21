import { Link } from "@tanstack/react-router";
import {
  AtSign,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  Youtube,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

const SOCIAL_META = {
  instagram: { label: "Instagram", Icon: Instagram },
  facebook: { label: "Facebook", Icon: Facebook },
  linkedin: { label: "LinkedIn", Icon: Linkedin },
  youtube: { label: "YouTube", Icon: Youtube },
  threads: { label: "Threads", Icon: AtSign },
} as const;

const FEATURED_SLUGS = [
  "accounting",
  "gst",
  "income-tax",
  "company-firm-registration",
  "loans",
  "fssai-registration",
  "trademark-registration",
  "iso-certification",
  "import-export-code",
  "investment",
  "insurance",
];

export function SiteFooter() {
  const featured = FEATURED_SLUGS.map((slug) => SERVICES_BY_SLUG[slug]).filter(
    Boolean,
  );
  const socialLinks = Object.entries(SITE.socials).map(([key, href]) => ({
    href,
    ...SOCIAL_META[key as keyof typeof SOCIAL_META],
  }));

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={SITE.name}
          >
            <img
              src="/logo.png"
              alt="Progateway Consultancy logo"
              className="h-14 w-20 shrink-0 object-contain"
            />
            <span className="font-display text-lg font-bold">
              Progateway Consultancy
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tax, registration, loan, investment and insurance consultancy in{" "}
            {SITE.city}, {SITE.region}. Call or WhatsApp for a free first
            consultation.
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border-strong text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Popular services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {featured.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="font-semibold text-primary hover:text-primary-hover"
              >
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-foreground">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-foreground">
                Areas Served
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/documents-required" className="hover:text-foreground">
                Documents Required
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-foreground">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/refund-cancellation" className="hover:text-foreground">
                Refund & Cancellation
              </Link>
            </li>
          </ul>
          <a
            href={SITE.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            <MessageSquareQuote className="size-4" aria-hidden /> Write a Google
            Review
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {SITE.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden />
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="hover:text-foreground"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-foreground"
              >
                {SITE.email}
              </a>
            </li>
            <li className="text-xs">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Navsari, Gujarat.</p>
        </div>
      </div>
    </footer>
  );
}
