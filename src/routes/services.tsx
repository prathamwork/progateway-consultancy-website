import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
} from "@tanstack/react-router";
import {
  ArrowRight,
  FileCheck2,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services-data";
import { SERVICES_OVERVIEW_VISUAL } from "@/lib/service-images";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createSeo } from "@/lib/seo";

const CATEGORY_DESCRIPTIONS: Record<
  (typeof SERVICE_CATEGORIES)[number],
  string
> = {
  Tax: "Stay organised, compliant and ready for every filing deadline with practical tax and accounting support.",
  Registration:
    "Set up and protect your business with clear documentation support for registrations, licences and certificates.",
  Loans:
    "Explore suitable funding options and get help preparing a clear, complete loan application.",
  "Investment & Insurance":
    "Plan for long-term goals with investment guidance and protection-focused insurance support.",
  Other:
    "Get step-by-step help with important personal and professional applications.",
};

const SERVICES_SEO = createSeo({
  title: "Financial, Tax, Registration & Loan Services | Progateway",
  description:
    "Explore accounting, GST, income tax, business registration, loan documentation, FSSAI, trademark, ISO, IEC, insurance and investment assistance in Navsari.",
  path: "/services",
  image: SERVICES_OVERVIEW_VISUAL.src,
  imageAlt: SERVICES_OVERVIEW_VISUAL.alt,
});

export const Route = createFileRoute("/services")({
  head: () => SERVICES_SEO,
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/services/$slug");
  if (isChild) return <Outlet />;
  return <ServicesIndex />;
}

function ServicesIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-aurora opacity-55"
        />
        <div
          aria-hidden
          className="absolute -right-24 top-16 -z-10 size-72 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-page py-14 md:py-20 lg:py-24">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services" }]}
          />

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="reveal">
              <span className="chip">
                <Sparkles className="size-3.5" aria-hidden />
                All Services
              </span>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#18235F] md:text-5xl lg:text-6xl">
                Practical support for your
                <span className="block">
                  {" "}
                  <span className="relative inline-block text-[#E86F1C]">
                    business and financial goals
                  </span>
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Explore GST, income tax, registrations, licences, loans,
                investment and insurance support. Every service page includes
                the required documents, process and a simple way to contact our
                team.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#service-categories"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition hover:bg-primary-hover"
                >
                  Explore services <ArrowRight className="size-4" aria-hidden />
                </a>
                <Link
                  to="/documents-required"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/75 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-muted"
                >
                  <FileCheck2 className="size-4 text-primary" aria-hidden />
                  View documents
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full bg-primary/10 font-bold text-primary">
                    {SERVICES.length}
                  </span>
                  service options
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircleMore
                    className="size-4 text-accent"
                    aria-hidden
                  />
                  WhatsApp assistance
                </span>
              </div>
            </div>

            <div className="relative reveal [animation-delay:120ms]">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/18 via-transparent to-accent/18 blur-2xl"
              />
              <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lift">
                <img
                  src={SERVICES_OVERVIEW_VISUAL.src}
                  alt={SERVICES_OVERVIEW_VISUAL.alt}
                  width={SERVICES_OVERVIEW_VISUAL.width}
                  height={SERVICES_OVERVIEW_VISUAL.height}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/9] h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/88 px-4 py-3 shadow-card backdrop-blur-md">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      One team, many solutions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Tax · Registration · Loans · Investment · Insurance
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">
                    Clear guidance
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {SERVICE_CATEGORIES.map((cat, index) => {
        const items = SERVICES.filter((s) => s.category === cat);
        return (
          <Section
            key={cat}
            id={index === 0 ? "service-categories" : undefined}
            surface={cat === "Registration" || cat === "Loans"}
            className="relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute right-0 top-10 -z-10 size-48 rounded-full bg-primary/5 blur-3xl"
            />
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                align="left"
                eyebrow={cat}
                title={`${cat} services`}
                description={CATEGORY_DESCRIPTIONS[cat]}
              />
              <span className="w-fit rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-soft">
                {items.length} {items.length === 1 ? "service" : "services"}
              </span>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <ServiceCard key={s.slug} service={s} visual />
              ))}
            </div>
          </Section>
        );
      })}

      <CtaBand />
    </>
  );
}
