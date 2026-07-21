import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Info,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section, SectionHeading } from "@/components/section";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services-data";
import { SITE } from "@/lib/site";
import { createSeo, jsonLd } from "@/lib/seo";

type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

type CategoryVisual = {
  src: string;
  alt: string;
  description: string;
  position?: string;
};

const CATEGORY_VISUALS: Partial<Record<ServiceCategory, CategoryVisual>> = {
  Tax: {
    src: "/images/documents/tax-documents.webp",
    alt: "Tax consultant reviewing GST and income tax documents",
    description:
      "Prepare the essential documents required for GST, income tax and accounting services.",
    position: "object-center",
  },
  Registration: {
    src: "/images/documents/registration-documents.webp",
    alt: "Business registration documents being reviewed by a consultant",
    description:
      "Check the paperwork needed for company, FSSAI, trademark, ISO and business registrations.",
    position: "object-center",
  },
  Loans: {
    src: "/images/documents/loan-documents.webp",
    alt: "Loan advisor helping a client review financial documents",
    description:
      "Organise your identity, income, banking and property documents before applying for a loan.",
    position: "object-center",
  },
  "Investment & Insurance": {
    src: "/images/documents/investment-insurance-documents.webp",
    alt: "Financial advisor discussing insurance and investment documents",
    description:
      "Keep the required KYC, financial and policy documents ready for investment and insurance assistance.",
    position: "object-center",
  },
};

const FALLBACK_VISUAL: CategoryVisual = {
  src: "/images/documents/business-documents.webp",
  alt: "Professional consultant reviewing business documents",
  description:
    "Review the basic documents required before beginning your application or consultation.",
  position: "object-center",
};

const DOCUMENTS_DESCRIPTION =
  "Check basic document requirements for GST, income tax, company registration, FSSAI, trademark, loans and other Progateway Consultancy services.";
const DOCUMENTS_SEO = createSeo({
  title: "Documents Required for GST, Registration & Loans | Progateway",
  description: DOCUMENTS_DESCRIPTION,
  path: "/documents-required",
  image: "/images/documents/documents-required-hero.webp",
  imageAlt: "Organised service documents for tax, registration and loan applications",
});

export const Route = createFileRoute("/documents-required")({
  head: () => ({
    ...DOCUMENTS_SEO,
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Documents Required for Progateway Consultancy Services",
        description: DOCUMENTS_DESCRIPTION,
        url: `${SITE.url}/documents-required`,
        isPartOf: { "@id": `${SITE.url}/#website` },
      }),
    ],
  }),
  component: DocumentsRequiredPage,
});

function DocumentsRequiredPage() {
  return (
    <>
      <DocumentsHero />

      <Section className="pb-6 md:pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 shadow-sm md:p-6">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Info className="size-5" aria-hidden />
            </span>

            <div>
              <h2 className="font-display text-base font-bold text-foreground">
                Important document notice
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                Final requirements vary according to the applicant type,
                transaction, government portal, bank, NBFC, insurer and current
                department rules. The Progateway team will confirm the exact
                checklist after reviewing your case.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {SERVICE_CATEGORIES.map((category, categoryIndex) => {
        const services = SERVICES.filter(
          (service) => service.category === category,
        );

        if (!services.length) return null;

        const visual = CATEGORY_VISUALS[category] ?? FALLBACK_VISUAL;

        return (
          <Section
            key={category}
            surface={categoryIndex % 2 !== 0}
            className="overflow-hidden"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow={category}
                  title={`${category} document checklists`}
                  description={visual.description}
                />

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                    <FileCheck2
                      className="size-4 text-primary"
                      aria-hidden
                    />
                    {services.length}{" "}
                    {services.length === 1 ? "service" : "services"}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                    <CheckCircle2
                      className="size-4 text-success"
                      aria-hidden
                    />
                    Easy-to-follow checklists
                  </span>
                </div>
              </div>

              <CategoryPhoto visual={visual} category={category} />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.slug}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl md:p-7"
                  >
                    <div
                      aria-hidden
                      className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/5 blur-3xl transition-colors duration-300 group-hover:bg-primary/10"
                    />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary/75 text-primary-foreground shadow-md shadow-primary/15">
                          <Icon className="size-5" aria-hidden />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h2 className="font-display text-xl font-bold leading-tight text-foreground">
                              {service.title}
                            </h2>

                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              {service.documents.length} documents
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.short}
                          </p>
                        </div>
                      </div>

                      <div className="my-6 h-px bg-gradient-to-r from-border via-border to-transparent" />

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.documents.map((document) => (
                          <li
                            key={document}
                            className="flex items-start gap-2.5 rounded-xl bg-muted/45 p-3 text-sm leading-relaxed text-foreground/85"
                          >
                            <FileCheck2
                              className="mt-0.5 size-4 shrink-0 text-success"
                              aria-hidden
                            />
                            <span>{document}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        View full service details
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Section>
        );
      })}
    </>
  );
}

function DocumentsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/10 via-background to-background"
      />

      <div
        aria-hidden
        className="absolute left-0 top-0 -z-10 size-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/15 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 size-80 translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:gap-14 lg:py-24">
        <div>
          <Breadcrumbs
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Documents Required",
              },
            ]}
          />

          <div className="mt-7 max-w-3xl">
            <span className="chip">
              <Sparkles className="size-3.5" aria-hidden />
              Document Checklists
            </span>

            {/* <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Prepare the right documents before you apply
            </h1> */}

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#18235F] md:text-5xl lg:text-6xl">
              Prepare the right documents{" "}
              <span className="block">
                <span className="relative inline-block text-[#E86F1C]">
                  before you apply
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Find basic document checklists for GST, income tax, company
              registration, business licences, loans, investment and insurance
              services.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur">
                <CheckCircle2
                  className="size-4 text-success"
                  aria-hidden
                />
                Service-wise checklists
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur">
                <CheckCircle2
                  className="size-4 text-success"
                  aria-hidden
                />
                Professional verification
              </span>
            </div>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-card shadow-2xl">
            <img
              src="/images/documents/documents-required-hero.webp"
              alt="Consultant helping a client organise financial and business documents"
              width={900}
              height={700}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
            />

            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                <FileCheck2 className="size-4" aria-hidden />
                Progateway Consultancy
              </span>

              <p className="mt-3 max-w-md font-display text-xl font-bold leading-snug md:text-2xl">
                Get a clear checklist based on your exact service and
                application.
              </p>
            </figcaption>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-success/10 text-success">
                <CheckCircle2 className="size-5" aria-hidden />
              </span>

              <div>
                <p className="text-xs text-muted-foreground">
                  Document support
                </p>
                <p className="text-sm font-bold text-foreground">
                  Clear and organised
                </p>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function CategoryPhoto({
  visual,
  category,
}: {
  visual: CategoryVisual;
  category: ServiceCategory;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <img
        src={visual.src}
        alt={visual.alt}
        width={1000}
        height={600}
        loading="lazy"
        decoding="async"
        className={`aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          visual.position ?? "object-center"
        }`}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
      />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            Document support
          </p>
          <p className="mt-1 font-display text-xl font-bold">
            {category} services
          </p>
        </div>

        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md">
          <FileCheck2 className="size-5" aria-hidden />
        </span>
      </figcaption>
    </figure>
  );
}