import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { breadcrumbSchema, createSeo, jsonLd } from "@/lib/seo";

const TERMS_SEO = createSeo({
  title: "Terms of Service | Progateway Consultancy",
  description:
    "Read the general terms governing use of the Progateway Consultancy website and the scope, responsibilities and limitations of service engagements.",
  path: "/terms",
});

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...TERMS_SEO,
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]))],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <div className="mt-6 max-w-3xl space-y-6">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground">
          These terms govern your use of the Progateway Consultancy website and engagement of our
          professional services. By using this website you agree to the terms set out below.
        </p>
        <h2 className="font-display text-2xl font-bold">Scope of service</h2>
        <p className="text-muted-foreground">
          Each engagement is governed by a separate written quote describing the scope, timeline
          and fees. Outcomes are subject to applicable laws, government portal availability and
          the accuracy of information provided by the client.
        </p>
        <h2 className="font-display text-2xl font-bold">No legal opinion</h2>
        <p className="text-muted-foreground">
          Website content is general information and does not replace advice from a chartered accountant, advocate, company secretary, tax practitioner, investment adviser or other appropriately qualified professional where required.
        </p>
        <h2 className="font-display text-2xl font-bold">Limitation of liability</h2>
        <p className="text-muted-foreground">
          Responsibilities, exclusions and any limitation of liability are governed by the written scope agreed for the engagement and applicable law. Progateway does not control government portals, authorities, lenders, insurers, certification bodies or other third parties.
        </p>
      </div>
    </Section>
  );
}
