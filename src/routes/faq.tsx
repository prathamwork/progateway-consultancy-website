import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { Section, SectionHeading } from "@/components/section";
import { breadcrumbSchema, createSeo, faqSchema, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const FAQ_GROUPS: Array<{ title: string; faqs: Array<{ q: string; a: string }> }> = [
  {
    title: "Consultations and service process",
    faqs: [
      { q: "Does Progateway Consultancy offer a free first consultation?", a: "Yes. The first discussion is used to understand the requirement, explain the likely process and identify the initial documents. Any professional fee, government fee or third-party cost is explained before work begins." },
      { q: "Can documents be shared digitally?", a: "Many initial document checks can begin through WhatsApp or email. The selected service may still require original documents, signatures, authentication or an in-person step." },
      { q: "How long does a service take?", a: "Timelines depend on document readiness and the processing time of the relevant government portal, authority, bank, NBFC, insurer or certification body. Progateway can give an expected range, not an unconditional guarantee." },
      { q: "Which languages are available?", a: "The team can assist in Gujarati, Hindi and English during office hours." },
    ],
  },
  {
    title: "GST, tax and accounting",
    faqs: [
      { q: "Do you handle both GST registration and GST return filing?", a: "Yes. The unified GST service covers registration assistance, return preparation, reconciliation and ongoing compliance guidance where applicable." },
      { q: "Can you help organise incomplete books before tax filing?", a: "Yes. Accounting records can be reviewed and organised, but the scope depends on the number of transactions, available evidence and period involved." },
      { q: "Do you guarantee that no tax notice will be issued?", a: "No. Accurate preparation and complete disclosure can reduce avoidable errors, but no consultant can guarantee that an authority will never issue a query or notice." },
    ],
  },
  {
    title: "Registrations, licences and certifications",
    faqs: [
      { q: "Can you help choose between a proprietorship, partnership, LLP and company?", a: "Progateway can explain practical differences and documents. Complex legal, ownership or tax decisions should also be reviewed by the appropriate qualified professional." },
      { q: "Does filing a trademark application guarantee registration?", a: "No. The application is examined and may face objections or opposition. Final registration is decided through the statutory process." },
      { q: "Is an ISO certificate issued directly by ISO?", a: "No. ISO develops standards. Certification is performed by certification bodies after the applicable assessment process." },
    ],
  },
  {
    title: "Loans, investment and insurance",
    faqs: [
      { q: "Are loan approvals guaranteed?", a: "No. Approval, interest rate, tenure, security and disbursement are decided by the bank or NBFC. Progateway provides eligibility, documentation and coordination assistance." },
      { q: "Are investment returns guaranteed?", a: "No. Market-linked products involve risk, and returns depend on the product and market. Review official documents, risk, liquidity and suitability before investing." },
      { q: "Does insurance assistance replace the policy document?", a: "No. The policy wording, exclusions, underwriting and insurer decision control the coverage. Read the official policy documents before purchase." },
    ],
  },
  {
    title: "Locations and office information",
    faqs: [
      { q: "Where is the physical office?", a: `The stated physical office is at ${SITE.address}.` },
      { q: "Do you have offices in Surat, Ahmedabad or Vadodara?", a: "No additional physical offices are claimed. Eligible clients in those cities can be served remotely or through scheduled consultations from the Navsari office." },
      { q: "Can clients elsewhere in Gujarat or India enquire?", a: "Yes, for services that can be handled remotely. The team confirms availability, documents and any required local or in-person step after reviewing the matter." },
    ],
  },
];

const ALL_FAQS = FAQ_GROUPS.flatMap((group) => group.faqs);
const seo = createSeo({
  title: "Frequently Asked Questions | Progateway Consultancy Navsari",
  description:
    "Answers about Progateway's GST, tax, registration, loan, investment, insurance, documents, timelines, office location and remote service process.",
  path: "/faq",
});

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo,
    scripts: [
      jsonLd(faqSchema([...ALL_FAQS])),
      jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])),
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border"><div aria-hidden className="absolute inset-0 -z-20 bg-aurora opacity-55" /><div className="container-page py-14 md:py-20 lg:py-24"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "FAQ" }]} /><div className="mt-6 max-w-4xl"><span className="chip"><HelpCircle className="size-4" aria-hidden /> Frequently asked questions</span><h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">Clear answers before you begin</h1><p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Review common questions about documents, timelines, fees, approvals, locations and the difference between professional assistance and the final decision of an authority or institution.</p></div></div></section>
      {FAQ_GROUPS.map((group, index) => <Section key={group.title} surface={index % 2 === 1}><div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]"><div><SectionHeading align="left" eyebrow={`FAQ ${String(index + 1).padStart(2, "0")}`} title={group.title} /><div className="mt-6 flex flex-wrap gap-3"><Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">Explore services <ArrowRight className="size-4" aria-hidden /></Link>{index === 4 && <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary">Open office directions <ArrowRight className="size-4" aria-hidden /></a>}</div></div><FaqAccordion faqs={[...group.faqs]} /></div></Section>)}
      <CtaBand title="Still have a question about your specific case?" description="Send the service, city and basic requirement on WhatsApp. The team will explain the likely documents and next step without promising an authority or lender outcome." />
    </>
  );
}
