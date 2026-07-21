# Deployment and Testing Guide

## Local commands

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm run typecheck
npm run lint
npm run seo:validate
npm run test:production
```

Preview the generated Cloudflare-compatible build:

```bash
npm run preview -- --port 4178 --ip 127.0.0.1
```

## Automated checks included

`npm run seo:validate` verifies:

- Required SEO/data/route files
- Required canonical service slugs
- Legacy redirect mappings
- At least 15 original resources
- Five approved location pages
- Honest remote-location disclosures
- Metadata and schema utility coverage
- Sitemap and robots coverage
- Referenced service-image existence
- Absence of selected unverified/prohibited claims
- Presence of production server output

`npm run test:production` starts the built worker and verifies:

- 60 canonical indexable pages return HTTP 200
- Every tested page has one H1
- Every tested page has a title, description and canonical URL
- Tested titles and descriptions are unique
- Eight legacy URLs return permanent redirects
- Sitemap, image sitemap and robots endpoints return content
- An unknown route returns HTTP 404

## Lighthouse after deployment

Run against the real HTTPS production or staging URL because browser tracing is unreliable inside some restricted build containers.

```bash
npx lighthouse https://www.progatewayconsultancy.com/ \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./reports/lighthouse-home.html

npx lighthouse https://www.progatewayconsultancy.com/services/gst \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./reports/lighthouse-gst.html

npx lighthouse https://www.progatewayconsultancy.com/resources/gst-registration-guide-small-business-gujarat \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./reports/lighthouse-resource.html
```

Record mobile and desktop results. Investigate real bottlenecks instead of chasing a perfect synthetic score.

## Rich Results and schema validation

Test at minimum:

- Homepage: Organization/LocalBusiness/WebSite
- `/services/gst`: Service/Breadcrumb/FAQ
- `/locations/navsari`: Local service-area and breadcrumb data
- One resource article: Article/Breadcrumb/FAQ

Schema must match visible content. Do not add ratings or qualifications until verified and visibly shown.

## Deployment checklist

- [ ] Production domain resolves over HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] `www`/non-`www` preference is consistent with `SITE.url`
- [ ] Old service and blog URLs return 301/308
- [ ] Unknown URLs return a true 404
- [ ] `/sitemap.xml`, `/image-sitemap.xml` and `/robots.txt` are reachable
- [ ] Search Console and Bing verification values are configured
- [ ] Sitemap is submitted in both webmaster tools
- [ ] GA4/GTM loads once and consent requirements are met
- [ ] Phone, WhatsApp, form and directions events are tested
- [ ] Contact form sends successfully and has production spam protection
- [ ] Google Maps and social profile links are correct
- [ ] Direct Google review URL replaces the temporary profile fallback
- [ ] Real office/business photography is used where available
- [ ] Mobile navigation, forms and sticky controls work on real devices
- [ ] No console errors or mixed content
- [ ] Canonicals use the final production hostname
- [ ] Cloudflare/runtime compatibility is confirmed on the chosen host

## Post-deployment crawl sample

Check these first:

- `/`
- `/services`
- `/services/gst`
- `/services/income-tax`
- `/services/company-firm-registration`
- `/services/loans`
- `/documents-required`
- `/resources`
- `/locations/navsari`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

## Rollback safety

Keep the previous deployment available until:

- Canonical URLs resolve correctly
- Redirects are confirmed
- Forms and conversion actions work
- Search engines can retrieve robots and sitemap files
- No production runtime errors are present
