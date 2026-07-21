import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, ExternalLink, ShieldCheck, User } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { Section } from "@/components/section";
import { RESOURCE_ARTICLES, RESOURCE_BY_SLUG, type ResourceArticle } from "@/lib/resources-data";
import { SERVICES_BY_SLUG } from "@/lib/services-data";
import { articleSchema, breadcrumbSchema, createSeo, faqSchema, jsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }): { article: ResourceArticle } => {
    const article = RESOURCE_BY_SLUG[params.slug];
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};
    const path = `/resources/${params.slug}`;
    const seo = createSeo({
      title: `${article.title} | Progateway Consultancy`,
      description: article.description,
      path,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.updated,
    });
    return {
      ...seo,
      scripts: [
        jsonLd(articleSchema({
          title: article.title,
          description: article.description,
          path,
          published: article.published,
          updated: article.updated,
          author: article.author,
        })),
        jsonLd(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path },
        ])),
        ...(article.faqs.length ? [jsonLd(faqSchema(article.faqs))] : []),
      ],
    };
  },
  component: ResourceArticlePage,
});

function ResourceArticlePage() {
  const { article } = Route.useLoaderData() as { article: ResourceArticle };
  const relatedServices = article.relatedServiceSlugs
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter(Boolean)
    .slice(0, 4);
  const relatedArticles = RESOURCE_ARTICLES.filter(
    (candidate) => candidate.slug !== article.slug && candidate.category === article.category,
  ).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12 md:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: article.title }]} />
          <div className="mt-6 max-w-4xl">
            <span className="chip">{article.category}</span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{article.title}</h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{article.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="size-4" aria-hidden /> {article.author}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="size-4" aria-hidden /> Updated {new Date(article.updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4" aria-hidden /> {article.readTime}</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4" aria-hidden /> Reviewed by {article.reviewedBy}</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
            <nav aria-label="Article contents">
              <ul className="mt-3 space-y-1 text-sm">
                {article.sections.map((section, index) => (
                  <li key={section.heading}><a href={`#section-${index}`} className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">{section.heading}</a></li>
                ))}
                {article.faqs.length > 0 && <li><a href="#article-faqs" className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">Frequently asked questions</a></li>}
                <li><a href="#official-sources" className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">Official sources</a></li>
              </ul>
            </nav>
          </aside>

          <article className="max-w-3xl">
            <div className="rounded-2xl border border-accent/25 bg-accent/5 p-5 text-sm leading-relaxed text-foreground/85">
              <strong>Important:</strong> This guide is general educational information. Rules, forms, thresholds, fees and due dates can change. Verify current requirements with the official source and obtain advice for your facts.
            </div>
            <div className="mt-10 space-y-12">
              {article.sections.map((section, index) => (
                <section id={`section-${index}`} key={section.heading} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-foreground/85 md:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && <ul className="mt-5 grid gap-3 text-base text-foreground/85">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-hidden /> <span>{bullet}</span></li>)}</ul>}
                </section>
              ))}
            </div>

            {article.faqs.length > 0 && <section id="article-faqs" className="mt-16 scroll-mt-28"><h2 className="font-display text-2xl font-bold md:text-3xl">Frequently asked questions</h2><div className="mt-6"><FaqAccordion faqs={article.faqs} /></div></section>}

            <section id="official-sources" className="mt-16 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Official sources and further reading</h2>
              <ul className="mt-5 grid gap-3">
                {article.officialSources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">{source.label}<ExternalLink className="size-4" aria-hidden /></a></li>)}
              </ul>
            </section>

            {relatedServices.length > 0 && <section className="mt-16 rounded-3xl border border-border bg-surface p-7 md:p-9"><h2 className="text-2xl font-bold">Related Progateway services</h2><div className="mt-5 flex flex-wrap gap-3">{relatedServices.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-2.5 text-sm font-semibold hover:border-primary/40 hover:text-primary">{service.title}<ArrowRight className="size-4" aria-hidden /></Link>)}</div></section>}
          </article>
        </div>
      </Section>

      {relatedArticles.length > 0 && <Section surface><h2 className="text-2xl font-bold md:text-3xl">Related guides</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{relatedArticles.map((related) => <Link key={related.slug} to="/resources/$slug" params={{ slug: related.slug }} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"><span className="chip">{related.category}</span><h3 className="mt-4 font-bold leading-snug">{related.title}</h3><p className="mt-2 text-sm text-muted-foreground">{related.description}</p></Link>)}</div></Section>}
      <CtaBand title={`Need help with ${article.category.toLowerCase()} or business documentation?`} description="Contact Progateway Consultancy for a requirement review, document checklist and clear next steps. Final decisions remain with the relevant authority or institution." />
    </>
  );
}
