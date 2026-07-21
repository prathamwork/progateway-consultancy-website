import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeading } from "@/components/section";
import { LOCATIONS } from "@/lib/locations-data";
import { breadcrumbSchema, createSeo, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const seo = createSeo({
  title: "Areas Served in Gujarat | Progateway Consultancy Navsari",
  description:
    "Progateway Consultancy is based in Navsari and assists eligible clients in Surat, Ahmedabad, Vadodara and across Gujarat through remote and scheduled consultations.",
  path: "/locations",
});

export const Route = createFileRoute("/locations")({
  head: () => ({
    ...seo,
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]))],
  }),
  component: LocationsLayout,
});

function LocationsLayout() {
  const matches = useMatches();
  const isChild = matches.some((match) => match.routeId === "/locations/$slug");
  return isChild ? <Outlet /> : <LocationsIndex />;
}

function LocationsIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 -z-20 bg-aurora opacity-55" />
        <div className="container-page py-14 md:py-20 lg:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Locations" }]} />
          <div className="mt-6 max-w-4xl">
            <span className="chip"><MapPin className="size-4" aria-hidden /> Service areas</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">Based in Navsari, serving eligible clients across Gujarat</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Our only stated physical office is in Navsari. Other pages explain remote or scheduled assistance accurately and do not claim fake local offices.</p>
          </div>
        </div>
      </section>
      <Section>
        <SectionHeading align="left" eyebrow="Where we help" title="Accurate location information for every service area" description="Service availability depends on the matter, required verification and whether documents can be handled remotely." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {LOCATIONS.map((location) => <article key={location.slug} className="rounded-2xl border border-border bg-card p-6 shadow-soft"><div className="flex items-center justify-between gap-3"><span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary"><Navigation className="size-5" aria-hidden /></span><span className={`rounded-full px-3 py-1 text-xs font-semibold ${location.isOfficeLocation ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>{location.isOfficeLocation ? "Physical office" : "Service area"}</span></div><h2 className="mt-5 text-2xl font-bold">{location.name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{location.introduction}</p><Link to="/locations/$slug" params={{ slug: location.slug }} className="mt-5 inline-flex items-center gap-2 font-bold text-primary">View {location.name} service information <ArrowRight className="size-4" aria-hidden /></Link></article>)}
        </div>
      </Section>
      <Section surface>
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-10"><div><h2 className="text-2xl font-bold">Actual office location</h2><p className="mt-3 max-w-2xl text-muted-foreground">{SITE.address}. Office hours: {SITE.hours}. Call before travelling for a service that may require an appointment or specific original documents.</p></div><a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground"><MapPin className="size-4" aria-hidden /> Get directions</a></div>
      </Section>
      <CtaBand title="Not sure whether your location can be served remotely?" description="Send your city and service requirement on WhatsApp. The team will confirm whether remote assistance, an office visit or local specialist support is appropriate." />
    </>
  );
}
