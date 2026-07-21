import { SAME_AS, SITE, absoluteUrl } from "@/lib/site";

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  robots?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function createSeo({
  title,
  description,
  path,
  image = SITE.ogImage,
  imageAlt = `${SITE.name} in ${SITE.city}, ${SITE.region}`,
  type = "website",
  robots = "index, follow, max-image-preview:large",
  publishedTime,
  modifiedTime,
}: SeoInput) {
  const url = absoluteUrl(path);
  const resolvedImage = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: resolvedImage },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: resolvedImage },
      ...(publishedTime
        ? [{ property: "article:published_time", content: publishedTime }]
        : []),
      ...(modifiedTime
        ? [{ property: "article:modified_time", content: modifiedTime }]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLd(data: JsonLd) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: SITE.logo,
        },
        founder: {
          "@type": "Person",
          "@id": `${SITE.url}/about#suresh-purohit`,
          name: SITE.founder,
          jobTitle: "Consultant",
          worksFor: { "@id": `${SITE.url}/#organization` },
        },
        sameAs: SAME_AS,
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService", "AccountingService"],
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        description: `${SITE.name} provides accounting, tax, business registration, loan documentation, investment and insurance assistance from its office in ${SITE.city}, ${SITE.region}.`,
        url: SITE.url,
        image: SITE.ogImage,
        logo: SITE.logo,
        telephone: SITE.phoneRaw,
        email: SITE.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          postalCode: SITE.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        hasMap: SITE.mapUrl,
        openingHoursSpecification: SITE.openingHours.map((hours) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hours.days,
          opens: hours.opens,
          closes: hours.closes,
        })),
        areaServed: SITE.serviceAreas.map((area) => ({
          "@type": area.type,
          name: area.name,
        })),
        founder: { "@id": `${SITE.url}/about#suresh-purohit` },
        parentOrganization: { "@id": `${SITE.url}/#organization` },
        sameAs: SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
  image,
  areas = [SITE.city, SITE.region, SITE.country],
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  areas?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : SITE.ogImage,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: areas.map((area) => ({ "@type": "AdministrativeArea", name: area })),
    availableChannel: [
      {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: SITE.phoneRaw,
          availableLanguage: ["English", "Gujarati", "Hindi"],
        },
      },
    ],
  };
}

export function articleSchema({
  title,
  description,
  path,
  published,
  updated,
  author,
  image = SITE.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(image),
    datePublished: published,
    dateModified: updated,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE.url,
    },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-IN",
  };
}
