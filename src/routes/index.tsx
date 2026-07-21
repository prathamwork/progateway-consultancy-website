import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import heroImg from "@/assets/hero-consultancy.jpg";
import { SITE } from "@/lib/site";
import { createSeo, faqSchema, jsonLd } from "@/lib/seo";
import { LOCATIONS } from "@/lib/locations-data";
import { RESOURCE_ARTICLES } from "@/lib/resources-data";
import { SERVICES_BY_SLUG } from "@/lib/services-data";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { GoogleReviewCta } from "@/components/google-review-cta";

const HOME_FAQS = [
  {
    q: "Do you offer a free first consultation?",
    a: "Yes. Progateway Consultancy offers a free first consultation to understand your requirements and explain the next steps.",
  },
  {
    q: "Which services are available?",
    a: "Our services include accounting, GST registration and return filing, income tax services, company and firm registration, loan assistance, FSSAI licensing, trademark registration, ISO certification and import-export registration.",
  },
  {
    q: "Can I share documents digitally?",
    a: "Yes. After the initial discussion, our team will guide you on sharing the required documents through WhatsApp or email.",
  },
  {
    q: "How long will my application take?",
    a: "The timeline depends on the selected service, completeness of documents and the processing time of the relevant government department, bank, NBFC or certification authority.",
  },
  {
    q: "Are loan approvals guaranteed?",
    a: "No. Loan approval, interest rate and disbursement depend on applicant eligibility and the final policy of the bank or NBFC. Progateway Consultancy provides application and documentation assistance.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Consultation",
    desc: "Discuss your requirements, business needs and eligibility.",
  },
  {
    n: "02",
    title: "Document Checklist",
    desc: "Receive a complete service-specific list of required documents.",
  },
  {
    n: "03",
    title: "Verification",
    desc: "Your documents are checked for missing information or corrections.",
  },
  {
    n: "04",
    title: "Application",
    desc: "Your registration, filing or application is prepared accurately.",
  },
  {
    n: "05",
    title: "Follow-up",
    desc: "Queries, updates and application status are coordinated.",
  },
  {
    n: "06",
    title: "Completion",
    desc: "Receive the completed service and further compliance guidance.",
  },
];

/**
 * These nine services will be displayed on the homepage.
 *
 * Important:
 * Each slug must also exist inside:
 * src/lib/services-data.ts
 */
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
];

const HOME_SEO = createSeo({
  title: "Financial & Business Consultant in Navsari | Progateway Consultancy",
  description:
    "Progateway Consultancy in Navsari provides accounting, GST, income tax, business registration, loan documentation, FSSAI, trademark, ISO and IEC assistance.",
  path: "/",
  image: SITE.ogImage,
});

export const Route = createFileRoute("/")({
  head: () => ({
    ...HOME_SEO,
    links: [
      ...HOME_SEO.links,
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [jsonLd(faqSchema(HOME_FAQS))],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = FEATURED_SLUGS.map(
    (slug) => SERVICES_BY_SLUG[slug],
  ).filter(Boolean);

  /*
   * This warning helps you identify a missing service inside services-data.ts.
   * It only runs during development.
   */
  if (import.meta.env.DEV && featured.length !== FEATURED_SLUGS.length) {
    const missingServices = FEATURED_SLUGS.filter(
      (slug) => !SERVICES_BY_SLUG[slug],
    );

    console.warn(
      "The following homepage services are missing from services-data.ts:",
      missingServices,
    );
  }

  return (
    <>
      {/* ================================================================
          HERO SECTION
      ================================================================= */}

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-aurora opacity-60"
        />

        <div
          aria-hidden
          className="absolute inset-0 -z-10 surface-grid opacity-[0.28]"
        />

        <div className="container-page grid items-center gap-12 pb-20 pt-12 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="reveal">
            <span className="chip">
              GST · Tax Compliance · Financial Support
            </span>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#18235F] md:text-5xl lg:text-6xl">
              Financial &amp; Business

              <span className="block">
                Consultancy{" "}

                <span className="relative inline-block text-[#E86F1C]">
                  in Navsari

                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Professional assistance for GST, Tax compliance, Financial support,
              company registration, loans, FSSAI licensing, trademarks, ISO
              certification and import-export registration.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]"
              >
                Book Free Consultation

                <ArrowRight className="size-4" aria-hidden />
              </Link>

              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                  "Hello Progateway, I would like a free consultation.",
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/70 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-muted"
              >
                <MessageCircle
                  className="size-4 text-[#25D366]"
                  aria-hidden
                />

                WhatsApp Now
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:max-w-lg">
              {[
                "Free first consultation",
                "Service-specific checklists",
                "Digital document support",
                "Navsari-based assistance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-success"
                    aria-hidden
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero image */}

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-lift md:aspect-[5/6]">
              <img
                src={heroImg}
                alt="Progateway Consultancy financial and business consultation in Navsari"
                width={1600}
                height={1200}
                fetchPriority="high"
                className="absolute inset-0 size-full object-cover"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent"
              />
            </div>

            <a
              href={SITE.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -left-4 hidden w-64 rounded-2xl border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-1 sm:block"
            >
              <p className="text-sm font-semibold">Progateway on Google</p>

              <p className="mt-1 text-xs text-muted-foreground">
                View our business profile, location, directions and customer
                reviews.
              </p>
            </a>

            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block">
              <div className="flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Users className="size-5" aria-hidden />
                </span>

                <div>
                  <p className="text-sm font-semibold">Navsari-based consultancy</p>

                  <p className="text-xs text-muted-foreground">
                    In-person and digital assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business highlights */}

        <div className="border-y border-border bg-surface">
          <div className="container-page grid grid-cols-2 gap-px sm:grid-cols-4">
            {[
              {
                icon: Users,
                value: "Navsari",
                label: "Physical Office",
              },
              {
                icon: Clock,
                value: "9 AM–7 PM",
                label: "Monday–Saturday",
              },
              {
                icon: FileCheck2,
                value: "Clear",
                label: "Document Guidance",
              },
              {
                icon: WalletCards,
                value: "Multiple",
                label: "Services Under One Roof",
              },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 bg-surface px-4 py-6"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>

                <div>
                  <p className="font-display text-lg font-bold leading-none">
                    {value}
                  </p>

                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY CHOOSE US
      ================================================================= */}

      <Section>
        <SectionHeading
          eyebrow="Why choose us"
          title="Professional support that makes business processes simpler"
          description="Save time and receive clear assistance for applications, registrations, tax filings, certifications and financial requirements."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "Time Saving",
              desc: "Clear document checklists and an organised process help reduce unnecessary delays and follow-ups.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Handling",
              desc: "Your documents are handled carefully and only used for your enquiry, registration or application.",
            },
            {
              icon: MessageCircle,
              title: "Customer Support",
              desc: "Contact our team by phone or WhatsApp during office hours for guidance and updates.",
            },
            {
              icon: WalletCards,
              title: "Cost Effective",
              desc: "Understand the service requirements, scope and estimated charges before proceeding.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================================================================
          FEATURED SERVICES
      ================================================================= */}

      <Section surface className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute right-0 top-10 -z-10 size-48 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="Our most requested business services"
            description="Explore our top services for accounting, GST, income tax, business registration, loans, licences, certifications and international trade."
          />

          <Link
            to="/services"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border-strong bg-card px-5 py-2.5 text-sm font-semibold shadow-soft transition hover:bg-muted"
          >
            View all services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        {featured.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                visual
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border-strong bg-card p-8 text-center">
            <p className="font-semibold">Services are being updated.</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Please ensure the homepage service slugs are available inside
              services-data.ts.
            </p>
          </div>
        )}
      </Section>

      {/* ================================================================
          PROCESS
      ================================================================= */}

      <Section>
        <SectionHeading
          eyebrow="Our process"
          title="A clear six-step service journey"
          description="The exact requirements may differ by service, but our basic consultation and application process remains simple."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-display text-5xl font-extrabold tracking-tight text-primary/15">
                {step.n}
              </span>

              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Consultant"
              title={`Meet ${SITE.founder}`}
              description={`${SITE.founder} leads Progateway Consultancy from its Navsari office and helps clients understand service requirements, documents and next steps.`}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Progateway supports individuals, professionals and businesses with accounting, tax, registration, loan documentation, investment and insurance enquiries. Final approvals remain with the relevant authority, lender, insurer or certification body.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">About Progateway Consultancy <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
            <h2 className="text-2xl font-bold">Areas served accurately</h2>
            <p className="mt-3 text-muted-foreground">The physical office is in Navsari. Suitable clients elsewhere are assisted remotely or through scheduled consultations without claiming fake local offices.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {LOCATIONS.map((location) => (
                <Link key={location.slug} to="/locations/$slug" params={{ slug: location.slug }} className="rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold hover:border-primary/40 hover:text-primary">
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading align="left" eyebrow="Latest resources" title="Helpful guides before you apply" description="Read original, source-linked guidance for common GST, registration, tax and loan-document questions." />
          <Link to="/resources" className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold hover:bg-muted">View all resources <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {RESOURCE_ARTICLES.slice(0, 3).map((article) => (
            <Link key={article.slug} to="/resources/$slug" params={{ slug: article.slug }} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <span className="chip">{article.category}</span>
              <h3 className="mt-4 font-bold leading-snug">{article.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ================================================================
          GOOGLE REVIEWS
      ================================================================= */}

      <Section surface>
        <GoogleReviewCta />
      </Section>

      {/* ================================================================
          FAQ
      ================================================================= */}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="Common questions"
            title="Important information before getting started"
            description="For an answer specific to your business or application, call or WhatsApp our team during office hours."
          />

          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </Section>

      {/* ================================================================
          FINAL CTA
      ================================================================= */}

      <CtaBand />
    </>
  );
}