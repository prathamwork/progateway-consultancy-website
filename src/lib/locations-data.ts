import { SITE } from "@/lib/site";

export interface ServiceLocation {
  slug: "navsari" | "surat" | "ahmedabad" | "vadodara" | "gujarat";
  name: string;
  region: string;
  isOfficeLocation: boolean;
  title: string;
  metaDescription: string;
  headline: string;
  introduction: string;
  localContext: string;
  consultation: string;
  serviceSlugs: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const LOCATIONS: ServiceLocation[] = [
  {
    slug: "navsari",
    name: "Navsari",
    region: "Gujarat",
    isOfficeLocation: true,
    title: "Financial, Tax & Business Consultant in Navsari | Progateway",
    metaDescription:
      "Visit Progateway Consultancy in Navsari for accounting, GST, income tax, registration, loan documentation, FSSAI, trademark, ISO and IEC assistance.",
    headline: "Financial, Tax and Business Consultancy in Navsari",
    introduction: `Progateway Consultancy is based at ${SITE.address}. Individuals, professionals, traders, startups and established businesses can visit the office or begin their enquiry by phone, WhatsApp or email.`,
    localContext:
      "Navsari has a diverse mix of retail, food, service, manufacturing, trading and professional businesses. Our role is to make documentation and compliance easier to understand, while clearly explaining which authority, bank, insurer or certification body makes the final decision.",
    consultation:
      "In-person consultations are available during office hours. Sharing documents digitally can reduce repeat visits; the team will confirm which originals or signed copies are required for the selected service.",
    serviceSlugs: [
      "accounting",
      "gst",
      "income-tax",
      "company-firm-registration",
      "loans",
      "fssai-registration",
      "trademark-registration",
      "iso-certification",
      "import-export-code",
    ],
    faqs: [
      {
        q: "Where is the Progateway Consultancy office in Navsari?",
        a: `The office is at ${SITE.address}. Use the directions link or call before visiting if you need help locating the office.`,
      },
      {
        q: "Can I start a service without visiting the office?",
        a: "Many enquiries and document checks can begin through phone, WhatsApp and email. Whether an in-person visit or original document is required depends on the service.",
      },
      {
        q: "Does Progateway guarantee approval or registration?",
        a: "No. Progateway assists with documentation, preparation and follow-up. Final approval remains with the relevant government authority, bank, NBFC, insurer or certification body.",
      },
    ],
  },
  {
    slug: "surat",
    name: "Surat",
    region: "Gujarat",
    isOfficeLocation: false,
    title: "Business, GST & Registration Assistance for Surat | Progateway",
    metaDescription:
      "Progateway Consultancy serves clients in Surat from its Navsari office with remote GST, tax, registration, loan documentation and business compliance assistance.",
    headline: "Consultancy Assistance for Businesses and Individuals in Surat",
    introduction:
      "Progateway Consultancy serves eligible clients in Surat from its Navsari office through phone, WhatsApp, email and scheduled consultations. The website does not represent a physical Progateway office in Surat.",
    localContext:
      "Surat's textile, diamond, food, retail, logistics, professional-service and manufacturing businesses often need coordinated help across registrations, tax records, finance documents and licences. We begin with a requirement review and provide a service-specific checklist rather than a generic document list.",
    consultation:
      "Most initial discussions and document checks can be completed remotely. Where signatures, originals, verification or a physical meeting are necessary, the team explains the requirement before work proceeds.",
    serviceSlugs: ["gst", "accounting", "income-tax", "company-firm-registration", "loans", "fssai-registration", "trademark-registration", "import-export-code"],
    faqs: [
      { q: "Does Progateway have an office in Surat?", a: "No. The actual office is in Navsari. Surat clients are served remotely or through scheduled consultations where suitable." },
      { q: "Can Surat businesses share documents online?", a: "Yes, initial document collection and review can usually begin through WhatsApp or email, subject to service-specific verification requirements." },
      { q: "Which Surat businesses can enquire?", a: "Traders, service providers, professionals, food businesses, startups, manufacturers and individuals can enquire. Eligibility and scope are confirmed after reviewing the requirement." },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    isOfficeLocation: false,
    title: "Online Tax & Business Registration Assistance for Ahmedabad",
    metaDescription:
      "Remote assistance for Ahmedabad clients needing GST, income tax, company or firm registration, trademark, FSSAI, ISO and IEC documentation support.",
    headline: "Remote Tax and Business Documentation Support for Ahmedabad",
    introduction:
      "Progateway Consultancy assists suitable Ahmedabad clients from its Navsari office using phone, WhatsApp, email and scheduled online consultations. Progateway does not claim a physical office in Ahmedabad.",
    localContext:
      "Ahmedabad's startup, professional, trading, industrial and consumer-business ecosystem creates varied compliance needs. A company incorporation file, food licence application, trademark filing and loan file each require different evidence, so the process starts with a scoped checklist.",
    consultation:
      "Remote support is designed for clients who can share legible documents and complete required authentication or signatures. Government, banking and certification timelines remain outside the consultancy's control.",
    serviceSlugs: ["gst", "income-tax", "company-firm-registration", "fssai-registration", "trademark-registration", "iso-certification", "import-export-code"],
    faqs: [
      { q: "Is the service fully online for Ahmedabad?", a: "Many steps can be handled remotely, but some matters may require physical verification, original documents or actions by the applicant. The exact process is confirmed after review." },
      { q: "Can Progateway help choose a business structure?", a: "The team can explain practical differences and documentation between common structures. Legal or tax decisions requiring specialist advice should be confirmed with the appropriate qualified professional." },
      { q: "Are government fees included?", a: "Government, portal, stamp-duty, certification or third-party charges are explained separately where applicable. A scope and fee estimate is shared before proceeding." },
    ],
  },
  {
    slug: "vadodara",
    name: "Vadodara",
    region: "Gujarat",
    isOfficeLocation: false,
    title: "GST, Registration & Loan Documentation Help for Vadodara",
    metaDescription:
      "Progateway Consultancy provides remote GST, tax, business registration, certification and loan-documentation assistance to eligible Vadodara clients.",
    headline: "Business Compliance and Finance Documentation Support for Vadodara",
    introduction:
      "Clients in Vadodara can contact Progateway Consultancy's Navsari office for remote guidance and scheduled consultations. There is no represented Progateway physical office in Vadodara.",
    localContext:
      "Vadodara has a strong base of engineering, manufacturing, chemicals, services, education and small businesses. Clear accounting records, registrations and complete financial files can support compliance and lender assessment, although no approval can be guaranteed.",
    consultation:
      "The team first checks the service category, applicant details and available documents. Communication can continue through phone, WhatsApp and email, with additional verification arranged when necessary.",
    serviceSlugs: ["accounting", "gst", "income-tax", "company-firm-registration", "loans", "iso-certification", "import-export-code"],
    faqs: [
      { q: "Can manufacturers in Vadodara enquire about ISO and finance documentation?", a: "Yes. The team can review the requirement and explain the documentation process. Certification decisions and finance approvals are made by the relevant external organisations." },
      { q: "How are documents shared?", a: "Initial copies can usually be shared securely through the agreed digital channel. The team will identify any document that needs an original, signature or portal authentication." },
      { q: "Can I receive a checklist before paying?", a: "A preliminary consultation is used to understand the requirement. The applicable scope, document checklist and professional fee are then explained before work starts." },
    ],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    region: "India",
    isOfficeLocation: false,
    title: "Online GST, Tax & Business Consultancy Assistance in Gujarat",
    metaDescription:
      "Progateway Consultancy supports eligible clients across Gujarat with online GST, tax filing, business registration, FSSAI, trademark, ISO, IEC and loan documentation.",
    headline: "Online Financial and Business Documentation Assistance Across Gujarat",
    introduction:
      "From its physical office in Navsari, Progateway Consultancy assists eligible clients across Gujarat through digital document review, phone, WhatsApp, email and scheduled consultations. Service availability depends on the matter and location.",
    localContext:
      "Businesses across Gujarat operate under different municipal, industry and documentation contexts. The central government portals may be common, but licences, supporting records, bank assessment and local evidence can vary. The team confirms the applicable route instead of assuming one process fits every client.",
    consultation:
      "Remote assistance is suitable where the service can be completed digitally and the applicant can perform required authentication. No additional office locations are claimed beyond Navsari.",
    serviceSlugs: ["accounting", "gst", "income-tax", "company-firm-registration", "loans", "fssai-registration", "trademark-registration", "iso-certification", "import-export-code", "insurance", "investment"],
    faqs: [
      { q: "Which parts of Gujarat do you serve?", a: "The primary market is Navsari, with remote assistance available for suitable clients in Surat, Ahmedabad, Vadodara and other parts of Gujarat after the requirement is reviewed." },
      { q: "Do you create a separate office address for each city?", a: "No. Progateway's stated physical office is in Navsari. Other location pages accurately describe service areas and remote assistance." },
      { q: "Can India-wide online enquiries be considered?", a: "Yes, for services that can be handled remotely. Availability, documentation, fees and required local support are confirmed before engagement." },
    ],
  },
];

export const LOCATIONS_BY_SLUG = Object.fromEntries(
  LOCATIONS.map((location) => [location.slug, location]),
) as Record<string, ServiceLocation>;
