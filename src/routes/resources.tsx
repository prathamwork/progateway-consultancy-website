import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, FileText, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeading } from "@/components/section";
import { RESOURCE_ARTICLES } from "@/lib/resources-data";
import { breadcrumbSchema, createSeo, jsonLd } from "@/lib/seo";

const seo = createSeo({
  title: "Business, GST, Tax & Registration Resources | Progateway",
  description:
    "Read practical guides on GST, income tax, company registration, FSSAI, trademark, ISO, IEC, loans and small-business financial planning.",
  path: "/resources",
});

export const Route = createFileRoute("/resources")({
  head: () => ({
    ...seo,
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]),
      ),
    ],
  }),
  component: ResourcesLayout,
});

function ResourcesLayout() {
  const matches = useMatches();
  const isChild = matches.some((match) => match.routeId === "/resources/$slug");
  return isChild ? <Outlet /> : <ResourcesIndex />;
}

function ResourcesIndex() {
  const categories = [...new Set(RESOURCE_ARTICLES.map((article) => article.category))];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-20 bg-aurora opacity-55" />
        <div className="container-page py-14 md:py-20 lg:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources" }]} />
          <div className="mt-6 max-w-4xl reveal">
            <span className="chip"><BookOpen className="size-4" aria-hidden /> Helpful resources</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Practical guides for tax, registration and business decisions
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Original educational content reviewed by Progateway Consultancy and linked to official government or regulatory sources where appropriate.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((category) => <span key={category} className="chip">{category}</span>)}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          align="left"
          eyebrow="Resource centre"
          title="Guides built around real search questions"
          description="Dates, thresholds and portal procedures can change. Each article includes source links and a clear professional-advice disclaimer."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RESOURCE_ARTICLES.map((article) => (
            <article key={article.slug} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
              <div className="flex items-center justify-between gap-3">
                <span className="chip">{article.category}</span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold leading-snug group-hover:text-primary">
                <Link to="/resources/$slug" params={{ slug: article.slug }}>{article.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" aria-hidden /> Updated {new Date(article.updated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5" aria-hidden /> Reviewed</span>
              </div>
              <Link to="/resources/$slug" params={{ slug: article.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Read guide <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><FileText className="size-6" aria-hidden /></span>
            <div>
              <h2 className="text-2xl font-bold">Editorial and accuracy policy</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                Resource articles explain general processes and are not legal, tax, investment, lending or insurance guarantees. Readers should verify current requirements on the linked official portal and obtain advice for their specific facts.
              </p>
              <Link to="/editorial-policy" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Read the editorial policy <ArrowRight className="size-4" aria-hidden /></Link>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand title="Need help applying a guide to your situation?" description="Share your requirement with Progateway Consultancy and receive a service-specific document checklist and next-step explanation." />
    </>
  );
}
