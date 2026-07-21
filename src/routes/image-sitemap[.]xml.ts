import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";
import { getServiceVisual } from "@/lib/service-images";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/image-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = SERVICES.map((service) => {
          const visual = getServiceVisual(service);
          return [
            "  <url>",
            `    <loc>${SITE.url}/services/${service.slug}</loc>`,
            "    <image:image>",
            `      <image:loc>${SITE.url}${visual.src}</image:loc>`,
            `      <image:title>${escapeXml(service.title)}</image:title>`,
            `      <image:caption>${escapeXml(visual.alt)}</image:caption>`,
            "    </image:image>",
            "  </url>",
          ].join("\n");
        });

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
          ...urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
