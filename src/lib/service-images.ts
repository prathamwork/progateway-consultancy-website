import type { Service } from "@/lib/services-data";

export interface ServiceVisual {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SERVICE_IMAGE_SIZE = {
  width: 1440,
  height: 1080,
} as const;

const IMAGE_BY_SLUG: Record<string, ServiceVisual> = {
  gst: {
    src: "/images/services-real/gst-registration.png",
    alt: "Professional reviewing GST registration and return filing documents",
    ...SERVICE_IMAGE_SIZE,
  },
  "income-tax": {
    src: "/images/services-real/income-tax-filing.webp",
    alt: "Income tax return documents being reviewed with a calculator",
    ...SERVICE_IMAGE_SIZE,
  },
  loans: {
    src: "/images/services-real/business-loan.webp",
    alt: "Loan documentation consultation for personal, business and home finance",
    ...SERVICE_IMAGE_SIZE,
  },
  "fssai-registration": {
    src: "/images/services-real/fssai-license.webp",
    alt: "Food business operations representing FSSAI registration and licensing",
    ...SERVICE_IMAGE_SIZE,
  },
  "import-export-code": {
    src: "/images/services-real/iec-registration.webp",
    alt: "Cargo containers representing Import Export Code registration",
    ...SERVICE_IMAGE_SIZE,
  },
  investment: {
    src: "/images/services-real/investment-planning.webp",
    alt: "Investment goals and financial documents under professional review",
    ...SERVICE_IMAGE_SIZE,
  },
  insurance: {
    src: "/images/services-real/insurance-planning.webp",
    alt: "Insurance planning discussion focused on protection requirements",
    ...SERVICE_IMAGE_SIZE,
  },
  accounting: {
    src: "/images/services-real/accounting.webp",
    alt: "Professional calculating accounts with a calculator and financial documents",
    ...SERVICE_IMAGE_SIZE,
  },
  "gst-registration": {
    src: "/images/services-real/gst-registration.jpg",
    alt: "Tax forms and calculator representing GST registration documentation",
    ...SERVICE_IMAGE_SIZE,
  },
  "gst-return-filing": {
    src: "/images/services-real/gst-return-filing.webp",
    alt: "Professional checking invoices and calculations for GST return filing",
    ...SERVICE_IMAGE_SIZE,
  },
  "income-tax-filing": {
    src: "/images/services-real/income-tax-filing.webp",
    alt: "Tax return forms and calculator representing income tax return filing",
    ...SERVICE_IMAGE_SIZE,
  },
  "tax-planning": {
    src: "/images/services-real/tax-planning.webp",
    alt: "Financial professional reviewing charts for tax planning",
    ...SERVICE_IMAGE_SIZE,
  },

  "company-firm-registration": {
    src: "/images/services-real/company-registration.png",
    alt: "Business agreement handshake over registration documents",
    ...SERVICE_IMAGE_SIZE,
  },
  "proprietorship-registration": {
    src: "/images/services-real/proprietorship-registration.webp",
    alt: "Small retail business owner representing proprietorship registration",
    ...SERVICE_IMAGE_SIZE,
  },
  "trademark-registration": {
    src: "/images/services-real/trademark-registration.png",
    alt: "Professional signing legal documents for trademark registration",
    ...SERVICE_IMAGE_SIZE,
  },
  "iso-certification": {
    src: "/images/services-real/iso-certification.png",
    alt: "Business professional holding a quality certification document",
    ...SERVICE_IMAGE_SIZE,
  },
  "fssai-license": {
    src: "/images/services-real/fssai-license.webp",
    alt: "Food business workers packing orders in a commercial kitchen",
    ...SERVICE_IMAGE_SIZE,
  },
  "iec-registration": {
    src: "/images/services-real/iec-registration.webp",
    alt: "Cargo containers representing import export code registration",
    ...SERVICE_IMAGE_SIZE,
  },
  "digital-signature": {
    src: "/images/services-real/digital-signature.webp",
    alt: "Business professionals using a tablet for a digital signature",
    ...SERVICE_IMAGE_SIZE,
  },
  "startup-india": {
    src: "/images/services-real/startup-india.webp",
    alt: "Startup founders planning their business with a laptop and whiteboard",
    ...SERVICE_IMAGE_SIZE,
  },

  "personal-loan": {
    src: "/images/services-real/personal-loan.webp",
    alt: "Loan consultant presenting application documents to a customer",
    ...SERVICE_IMAGE_SIZE,
  },
  "business-loan": {
    src: "/images/services-real/business-loan.png",
    alt: "Business owners completing a finance agreement over documents",
    ...SERVICE_IMAGE_SIZE,
  },
  "loan-against-property": {
    src: "/images/services-real/loan-against-property.png",
    alt: "House models and keys representing a loan against property",
    ...SERVICE_IMAGE_SIZE,
  },
  "education-loan": {
    src: "/images/services-real/education-loan.webp",
    alt: "Graduates celebrating their education achievement",
    ...SERVICE_IMAGE_SIZE,
  },
  "vehicle-loan": {
    src: "/images/services-real/vehicle-loan.webp",
    alt: "Car dealer and customer discussing vehicle finance documents",
    ...SERVICE_IMAGE_SIZE,
  },
  "home-loan": {
    src: "/images/services-real/home-loan.webp",
    alt: "House models and keys representing home loan finance",
    ...SERVICE_IMAGE_SIZE,
  },
  "project-loan": {
    src: "/images/services-real/project-loan.webp",
    alt: "Engineer reviewing construction plans for project finance",
    ...SERVICE_IMAGE_SIZE,
  },
  "cash-credit-loan": {
    src: "/images/services-real/cash-credit-loan.webp",
    alt: "Retail payment terminal representing business cash credit support",
    ...SERVICE_IMAGE_SIZE,
  },
  "machinery-loan": {
    src: "/images/services-real/machinery-loan.webp",
    alt: "Engineers working with industrial machinery in a workshop",
    ...SERVICE_IMAGE_SIZE,
  },

  "investment-planning": {
    src: "/images/services-real/investment-planning.webp",
    alt: "Financial professional analysing investment charts and reports",
    ...SERVICE_IMAGE_SIZE,
  },
  "insurance-planning": {
    src: "/images/services-real/insurance-planning.webp",
    alt: "Insurance advisor meeting clients and discussing protection documents",
    ...SERVICE_IMAGE_SIZE,
  },

  "passport-application": {
    src: "/images/services-real/passport-application.webp",
    alt: "Passport and travel documents representing passport application assistance",
    ...SERVICE_IMAGE_SIZE,
  },
};

export const SERVICES_OVERVIEW_VISUAL: ServiceVisual = {
  src: "/images/services-real/services-overview.webp",
  alt: "Business consultant meeting clients to discuss professional services",
  width: 1600,
  height: 900,
};

export function getServiceVisual(
  service: Pick<Service, "slug" | "title">,
): ServiceVisual {
  return (
    IMAGE_BY_SLUG[service.slug] ?? {
      ...SERVICES_OVERVIEW_VISUAL,
      alt: `${service.title} consultation with Progateway Consultancy`,
    }
  );
}
