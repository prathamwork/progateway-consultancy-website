import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCATIONS } from "@/lib/locations-data";
import { RESOURCE_ARTICLES } from "@/lib/resources-data";
import { SERVICES } from "@/lib/services-data";
import { SITE } from "@/lib/site";

interface SitemapEntry {
  path: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/documents-required", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "yearly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/resources", changefreq: "weekly", priority: "0.8" },
          { path: "/locations", changefreq: "monthly", priority: "0.8" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
          { path: "/refund-cancellation", changefreq: "yearly", priority: "0.3" },
          { path: "/editorial-policy", changefreq: "yearly", priority: "0.3" },
          ...SERVICES.map((service) => ({ path: `/services/${service.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...LOCATIONS.map((location) => ({ path: `/locations/${location.slug}`, changefreq: "monthly" as const, priority: location.slug === "navsari" ? "0.9" : "0.7" })),
          ...RESOURCE_ARTICLES.map((article) => ({ path: `/resources/${article.slug}`, changefreq: "monthly" as const, priority: "0.7", lastmod: article.updated })),
        ];

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...entries.map((entry) => [
            "  <url>",
            `    <loc>${SITE.url}${entry.path}</loc>`,
            entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
            `    <changefreq>${entry.changefreq}</changefreq>`,
            `    <priority>${entry.priority}</priority>`,
            "  </url>",
          ].filter(Boolean).join("\n")),
          "</urlset>",
        ].join("\n");

        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
