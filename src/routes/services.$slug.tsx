import { createFileRoute, notFound, Link, redirect } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Info,
  ListChecks,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";
import { SERVICES_BY_SLUG, SERVICE_REDIRECTS, type Service } from "@/lib/services-data";
import { getServiceVisual } from "@/lib/service-images";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, createSeo, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const canonicalSlug = SERVICE_REDIRECTS[params.slug];
    if (canonicalSlug) {
      throw redirect({
        to: "/services/$slug",
        params: { slug: canonicalSlug },
        statusCode: 301,
      });
    }

    const service = SERVICES_BY_SLUG[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) return {};
    const visual = getServiceVisual(service);
    const path = `/services/${params.slug}`;
    const seo = createSeo({
      title: service.metaTitle,
      description: service.metaDescription,
      path,
      image: visual.src,
      imageAlt: visual.alt,
    });

    return {
      ...seo,
      scripts: [
        jsonLd(
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path,
            image: visual.src,
          }),
        ),
        jsonLd(faqSchema(service.faqs)),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        ),
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = service.icon;
  const visual = getServiceVisual(service);
  const related = service.related
    .map((slug: string) => SERVICES_BY_SLUG[slug])
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-aurora opacity-55"
        />
        <div
          aria-hidden
          className="absolute -left-32 bottom-0 -z-10 size-80 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
          <div className="reveal">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.title },
              ]}
            />
            <span className="chip mt-6">
              <Sparkles className="size-3.5" aria-hidden />
              {service.hero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]">
              {service.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {service.hero.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition hover:bg-primary-hover"
              >
                Get started <ArrowRight className="size-4" aria-hidden />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border-strong bg-background/70 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-muted"
              >
                Talk to an expert
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                  `Hello Progateway Consultancy, I need assistance with ${service.title}. Please share the required documents and next steps.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-6 py-3.5 text-sm font-semibold text-success transition hover:bg-success hover:text-white"
              >
                <MessageCircleMore className="size-4" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative reveal [animation-delay:120ms]">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl"
            />
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lift">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={visual.src}
                  alt={visual.alt}
                  width={visual.width}
                  height={visual.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-card backdrop-blur-md">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">
                    {service.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Professional guidance in Navsari
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-xs font-bold text-foreground shadow-card sm:flex">
              <FileCheck2 className="size-4 text-accent" aria-hidden />
              Required documents listed
            </div>
            <div className="absolute -right-3 top-7 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-xs font-bold text-foreground shadow-card md:flex">
              <ListChecks className="size-4 text-primary" aria-hidden />
              Clear step-by-step process
            </div>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-5 md:-mt-7">
        <div className="grid gap-3 rounded-3xl border border-border bg-background/92 p-3 shadow-card backdrop-blur md:grid-cols-3 md:p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <FileCheck2 className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold">
                {service.documents.length} document checkpoints
              </p>
              <p className="text-xs text-muted-foreground">
                Know what to prepare
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
            <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
              <ListChecks className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold">
                {service.process.length} clear steps
              </p>
              <p className="text-xs text-muted-foreground">
                A simple process from start to finish
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
            <span className="grid size-10 place-items-center rounded-xl bg-success/10 text-success">
              <MessageCircleMore className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold">WhatsApp assistance</p>
              <p className="text-xs text-muted-foreground">
                Share your requirement conveniently
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            {service.sections.map((sec, i) => (
              <div key={i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-5 top-1 hidden h-10 w-1 rounded-full bg-gradient-to-b from-primary to-accent lg:block"
                />
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  {sec.heading}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {sec.body}
                </p>
                {sec.bullets && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {sec.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-success"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Documents required
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.documents.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2.5 rounded-2xl border border-border bg-surface p-4 text-sm transition hover:border-primary/20 hover:bg-primary/[0.035]"
                  >
                    <FileCheck2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <Info
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                Final documents may vary by applicant type, government
                department, bank, NBFC, insurer or case-specific requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                How it works
              </h2>
              <ol className="mt-5 space-y-3">
                {service.process.map((step, i) => (
                  <li
                    key={step}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:border-primary/20 hover:shadow-card"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground transition-transform group-hover:scale-105">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Expected timeline</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                The expected timeline is explained after checking document completeness, applicant type and the current process of the relevant portal, authority, bank, NBFC, insurer or certification body. Progateway can coordinate the work but cannot guarantee an external processing date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Common mistakes to avoid</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Submitting inconsistent names, addresses or financial figures",
                  "Using outdated, incomplete or unreadable documents",
                  "Missing authentication, signature or clarification deadlines",
                  "Assuming filing automatically guarantees approval",
                ].map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft">
                    <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Why choose Progateway Consultancy</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Work with a Navsari-based team that explains the scope, documents, fees, limitations and next steps before proceeding. Clients in Surat, Ahmedabad, Vadodara and other parts of Gujarat may be assisted remotely where the service permits.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/locations/$slug" params={{ slug: "navsari" }} className="rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold hover:text-primary">Navsari office</Link>
                <Link to="/locations" className="rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold hover:text-primary">Areas served</Link>
                <Link to="/documents-required" className="rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold hover:text-primary">Document guidance</Link>
              </div>
            </div>
          </div>

          <aside
            id="enquire"
            className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 size-40 rounded-full bg-accent/10 blur-3xl"
              />
              <div className="relative">
                <span className="chip">Quick enquiry</span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  Get a free quote
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Share your requirement and continue the conversation securely
                  on WhatsApp.
                </p>
                <div className="mt-6">
                  <ContactForm defaultService={service.title} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {(service.category === "Loans" ||
        service.category === "Investment & Insurance") && (
        <Section surface>
          <div className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-soft">
            <strong className="text-foreground">Important:</strong>{" "}
            {service.category === "Loans"
              ? "Loan approval, interest rate, tenure and disbursement are subject to applicant eligibility and the final policy of the selected bank or NBFC. Progateway Consultancy provides application and documentation assistance and is not the lender."
              : "Investment returns are market-linked where applicable, and insurance benefits depend on policy terms, underwriting and exclusions. Review all official product documents before making a decision."}
          </div>
        </Section>
      )}

      <Section>
        <GoogleReviewCta serviceName={service.title} />
      </Section>

      <Section surface>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQs"
            title={`Common ${service.title} questions`}
          />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHeading
            align="left"
            eyebrow="Related"
            title="You may also need"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} visual />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
