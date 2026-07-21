import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, MessageCircle, Phone, Video } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { Section, SectionHeading } from "@/components/section";
import { LOCATIONS_BY_SLUG, type ServiceLocation } from "@/lib/locations-data";
import { getServiceVisual } from "@/lib/service-images";
import { SERVICES_BY_SLUG } from "@/lib/services-data";
import { breadcrumbSchema, createSeo, faqSchema, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }): { location: ServiceLocation } => {
    const location = LOCATIONS_BY_SLUG[params.slug];
    if (!location) throw notFound();
    return { location };
  },
  head: ({ params, loaderData }) => {
    const location = loaderData?.location;
    if (!location) return {};
    const path = `/locations/${params.slug}`;
    const seo = createSeo({ title: location.title, description: location.metaDescription, path });
    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: location.headline,
      description: location.metaDescription,
      url: `${SITE.url}${path}`,
      about: { "@id": `${SITE.url}/#business` },
      mainEntity: {
        "@type": "Service",
        name: `Consultancy assistance for ${location.name}`,
        provider: { "@id": `${SITE.url}/#business` },
        areaServed: { "@type": location.slug === "gujarat" ? "State" : "City", name: location.name },
      },
    };
    return {
      ...seo,
      scripts: [
        jsonLd(pageSchema),
        jsonLd(faqSchema(location.faqs)),
        jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: location.name, path }])),
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { location } = Route.useLoaderData() as { location: ServiceLocation };
  const services = location.serviceSlugs.map((slug) => SERVICES_BY_SLUG[slug]).filter(Boolean);
  const whatsappText = encodeURIComponent(`Hello Progateway Consultancy, I am from ${location.name} and need assistance with a service. Please share the required documents and next steps.`);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-20 bg-aurora opacity-55" />
        <div className="container-page py-14 md:py-20 lg:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: location.name }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="chip"><MapPin className="size-4" aria-hidden /> {location.isOfficeLocation ? "Office location" : "Service area"}</span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">{location.headline}</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{location.introduction}</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3.5 text-sm font-bold text-white"><MessageCircle className="size-4" aria-hidden /> WhatsApp from {location.name}</a><a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-6 py-3.5 text-sm font-semibold"><Phone className="size-4" aria-hidden /> Call {SITE.phone}</a></div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card"><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">{location.isOfficeLocation ? <Building2 className="size-6" aria-hidden /> : <Video className="size-6" aria-hidden />}</span><div><p className="font-bold">{location.isOfficeLocation ? "Visit our Navsari office" : "Remote and scheduled support"}</p><p className="text-sm text-muted-foreground">{location.isOfficeLocation ? SITE.hours : "Phone · WhatsApp · Email · Scheduled consultation"}</p></div></div><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{location.consultation}</p>{location.isOfficeLocation && <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-primary">Open directions <ArrowRight className="size-4" aria-hidden /></a>}</div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2"><div><SectionHeading align="left" eyebrow={`${location.name} context`} title="How assistance works for this area" /><p className="mt-6 text-base leading-8 text-foreground/85 md:text-lg">{location.localContext}</p></div><div className="rounded-3xl border border-border bg-surface p-7 md:p-9"><h2 className="text-2xl font-bold">Office disclosure</h2><p className="mt-4 leading-relaxed text-muted-foreground">{location.isOfficeLocation ? `Progateway Consultancy's physical office is located at ${SITE.address}.` : `Progateway Consultancy's physical office is in Navsari at ${SITE.address}. This page describes service availability for ${location.name}; it does not claim a local office in ${location.name}.`}</p></div></div>
      </Section>

      <Section surface>
        <SectionHeading align="left" eyebrow="Available assistance" title={`Services commonly requested by ${location.name} clients`} description="The exact scope, eligibility, professional fee and required verification are confirmed after reviewing the enquiry." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const visual = getServiceVisual(service); return <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card"><img src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" /><div className="p-5"><h3 className="font-bold group-hover:text-primary">{service.title}</h3><p className="mt-2 text-sm text-muted-foreground">{service.short}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">View service <ArrowRight className="size-4" aria-hidden /></span></div></Link>; })}</div>
      </Section>

      <Section><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]"><SectionHeading align="left" eyebrow="FAQs" title={`${location.name} service questions`} /><FaqAccordion faqs={location.faqs} /></div></Section>
      <CtaBand title={`Discuss your requirement from ${location.name}`} description="Begin with a phone or WhatsApp consultation. Progateway will confirm whether the service can be handled remotely and which documents are required." />
    </>
  );
}
