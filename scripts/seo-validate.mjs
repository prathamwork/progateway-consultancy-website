import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const passes = [];

function pass(message) {
  passes.push(message);
}

function fail(message) {
  failures.push(message);
}

function read(path) {
  const full = join(root, path);
  if (!existsSync(full)) {
    fail(`Missing file: ${path}`);
    return "";
  }
  return readFileSync(full, "utf8");
}

const requiredFiles = [
  "src/lib/seo.ts",
  "src/lib/site.ts",
  "src/lib/services-data.ts",
  "src/lib/locations-data.ts",
  "src/lib/resources-data.ts",
  "src/lib/analytics.ts",
  "src/routes/faq.tsx",
  "src/routes/resources.tsx",
  "src/routes/resources.$slug.tsx",
  "src/routes/locations.tsx",
  "src/routes/locations.$slug.tsx",
  "src/routes/sitemap[.]xml.ts",
  "src/routes/image-sitemap[.]xml.ts",
  "src/routes/robots[.]txt.ts",
  "src/routes/disclaimer.tsx",
  "src/routes/refund-cancellation.tsx",
  "src/routes/editorial-policy.tsx",
  ".env.example",
];

for (const file of requiredFiles) {
  existsSync(join(root, file)) ? pass(`Present: ${file}`) : fail(`Missing file: ${file}`);
}

const services = read("src/lib/services-data.ts");
const requiredServiceSlugs = [
  "accounting",
  "gst",
  "income-tax",
  "company-firm-registration",
  "loans",
  "fssai-registration",
  "trademark-registration",
  "iso-certification",
  "import-export-code",
  "insurance",
  "investment",
];
for (const slug of requiredServiceSlugs) {
  const found = new RegExp(`slug:\\s*[\"']${slug}[\"']`).test(services) ||
    new RegExp(`[\"']${slug}[\"']:\\s*\\{`).test(services) ||
    services.includes(`${slug}: {`) ||
    services.includes(`\"${slug}\",`);
  found ? pass(`Canonical service defined: ${slug}`) : fail(`Canonical service missing: ${slug}`);
}

const redirectPairs = {
  "gst-registration": "gst",
  "gst-return-filing": "gst",
  "income-tax-filing": "income-tax",
  "fssai-license": "fssai-registration",
  "iec-registration": "import-export-code",
  "investment-planning": "investment",
  "insurance-planning": "insurance",
};
for (const [from, to] of Object.entries(redirectPairs)) {
  const pattern = new RegExp(`[\"']${from}[\"']:\\s*[\"']${to}[\"']`);
  pattern.test(services) ? pass(`Redirect mapped: ${from} -> ${to}`) : fail(`Redirect mapping missing: ${from} -> ${to}`);
}

const resources = read("src/lib/resources-data.ts");
const resourceCount = (resources.match(/^\s{4}slug:\s*"/gm) || []).length;
resourceCount >= 15 ? pass(`${resourceCount} original resource articles defined`) : fail(`Only ${resourceCount} resource articles found; at least 15 required`);

const locations = read("src/lib/locations-data.ts");
const locationCount = (locations.match(/^\s{4}slug:\s*"/gm) || []).length;
locationCount === 5 ? pass("Five approved location pages defined") : fail(`Expected 5 location pages, found ${locationCount}`);
for (const slug of ["navsari", "surat", "ahmedabad", "vadodara", "gujarat"]) {
  new RegExp(`slug:\\s*[\"']${slug}[\"']`).test(locations) ? pass(`Location defined: ${slug}`) : fail(`Location missing: ${slug}`);
}
if (/no physical office|does not claim a physical office|Navsari office/i.test(locations)) {
  pass("Remote service-area disclosures are present");
} else {
  fail("Remote service-area office disclosure is missing");
}

const seo = read("src/lib/seo.ts");
for (const token of ["canonical", "twitter:card", "og:title", "robots", "BreadcrumbList", "LocalBusiness", "Service", "Article"]) {
  seo.includes(token) ? pass(`SEO utility includes ${token}`) : fail(`SEO utility missing ${token}`);
}

const sitemap = read("src/routes/sitemap[.]xml.ts");
for (const token of ["SERVICES", "LOCATIONS", "RESOURCE_ARTICLES", "/faq", "/editorial-policy"]) {
  sitemap.includes(token) ? pass(`Sitemap covers ${token}`) : fail(`Sitemap does not cover ${token}`);
}

const robots = read("src/routes/robots[.]txt.ts");
for (const token of ["Sitemap:", "sitemap.xml", "image-sitemap.xml", "Disallow: /api/"]) {
  robots.includes(token) ? pass(`robots.txt includes ${token}`) : fail(`robots.txt missing ${token}`);
}

const imageData = read("src/lib/service-images.ts");
const imagePaths = [...imageData.matchAll(/[\"'](\/images\/[^\"']+)[\"']/g)].map((match) => match[1]);
const uniqueImagePaths = [...new Set(imagePaths)];
for (const imagePath of uniqueImagePaths) {
  const diskPath = join(root, "public", imagePath.replace(/^\//, ""));
  existsSync(diskPath) ? pass(`Image exists: ${imagePath}`) : fail(`Referenced image missing: ${imagePath}`);
}

const sourceFiles = [
  "src/routes/index.tsx",
  "src/routes/about.tsx",
  "src/lib/services-data.ts",
  "src/lib/resources-data.ts",
  "src/lib/locations-data.ts",
].map(read).join("\n");
for (const banned of [/1,?000\+?\s+(happy\s+)?clients/i, /guaranteed\s+(ranking|approval|returns)/i, /MBA\b.*Suresh|Suresh.*MBA\b/i]) {
  banned.test(sourceFiles) ? fail(`Unverified or prohibited claim found: ${banned}`) : pass(`No prohibited claim: ${banned}`);
}

if (!existsSync(join(root, ".output/server/wrangler.json"))) {
  fail("Production server output is missing. Run npm run build first.");
} else {
  pass("Production server output exists");
}

console.log(`SEO validation: ${passes.length} checks passed.`);
if (failures.length) {
  console.error(`SEO validation failed with ${failures.length} issue(s):`);
  for (const issue of failures) console.error(`- ${issue}`);
  process.exit(1);
}
console.log("All SEO validation checks passed.");
