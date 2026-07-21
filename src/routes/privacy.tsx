import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, createSeo, jsonLd } from "@/lib/seo";

const PRIVACY_SEO = createSeo({
  title: "Privacy Policy | Progateway Consultancy",
  description:
    "Read how Progateway Consultancy collects, uses, stores and protects information shared through enquiries and professional service engagements.",
  path: "/privacy",
});

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...PRIVACY_SEO,
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]))],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <div className="mt-6 max-w-3xl space-y-6">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This page is maintained by Progateway Consultancy to explain how we collect, use and
          protect personal information shared by visitors and clients.
        </p>
        <h2 className="font-display text-2xl font-bold">Information we collect</h2>
        <p className="text-muted-foreground">
          We collect only the information you voluntarily share — typically your name, phone,
          email and the specific service-related documents required to deliver our engagement.
        </p>
        <h2 className="font-display text-2xl font-bold">How we use it</h2>
        <p className="text-muted-foreground">
          Your information is used solely to respond to enquiries, deliver agreed services and
          comply with regulatory filings. We do not sell or share your information with third
          parties for marketing.
        </p>
        <h2 className="font-display text-2xl font-bold">Data retention</h2>
        <p className="text-muted-foreground">
          Records are retained only for as long as reasonably required for the agreed service, legal or regulatory obligations, dispute handling and legitimate business records. Retention can vary by service and document type.
        </p>
        <h2 className="font-display text-2xl font-bold">Contact</h2>
        <p className="text-muted-foreground">
          For privacy-related questions, write to us at {SITE.email}.
        </p>
      </div>
    </Section>
  );
}
