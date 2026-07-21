import { spawn } from "node:child_process";

const port = 4177;
const base = `http://127.0.0.1:${port}`;
const server = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "preview", "--", "--port", String(port), "--ip", "127.0.0.1"],
  { stdio: ["ignore", "pipe", "pipe"], detached: process.platform !== "win32", env: { ...process.env, NO_UPDATE_NOTIFIER: "1" } },
);

let output = "";
server.stdout.on("data", (chunk) => { output += chunk.toString(); });
server.stderr.on("data", (chunk) => { output += chunk.toString(); });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`${base}/robots.txt`);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await sleep(500);
  }
  throw new Error(`Preview server did not start.\n${output}`);
}

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/services/accounting",
  "/services/gst",
  "/services/income-tax",
  "/services/company-firm-registration",
  "/services/loans",
  "/services/fssai-registration",
  "/services/trademark-registration",
  "/services/iso-certification",
  "/services/import-export-code",
  "/services/insurance",
  "/services/investment",
  "/services/tax-planning",
  "/services/proprietorship-registration",
  "/services/personal-loan",
  "/services/business-loan",
  "/services/loan-against-property",
  "/services/education-loan",
  "/services/vehicle-loan",
  "/services/home-loan",
  "/services/project-loan",
  "/services/cash-credit-loan",
  "/services/machinery-loan",
  "/services/digital-signature",
  "/services/startup-india",
  "/services/passport-application",
  "/documents-required",
  "/contact",
  "/faq",
  "/resources",
  "/resources/gst-registration-guide-small-business-gujarat",
  "/resources/documents-required-gst-registration",
  "/resources/gst-return-filing-guide-business-owners",
  "/resources/proprietorship-partnership-llp-private-limited-comparison",
  "/resources/company-registration-process-gujarat",
  "/resources/documents-company-firm-registration",
  "/resources/fssai-registration-licence-requirements",
  "/resources/trademark-registration-process-india",
  "/resources/iso-certification-process-small-business",
  "/resources/import-export-code-registration-guide",
  "/resources/documents-required-business-loan",
  "/resources/personal-loan-application-checklist",
  "/resources/common-income-tax-return-filing-mistakes",
  "/resources/tax-compliance-calendar-gujarat-businesses",
  "/resources/financial-planning-checklist-small-business-owners",
  "/resources/who-needs-gst-registration",
  "/resources/how-long-company-registration-takes",
  "/locations",
  "/locations/navsari",
  "/locations/surat",
  "/locations/ahmedabad",
  "/locations/vadodara",
  "/locations/gujarat",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/refund-cancellation",
  "/editorial-policy",
];

const redirects = {
  "/services/gst-registration": "/services/gst",
  "/services/gst-return-filing": "/services/gst",
  "/services/income-tax-filing": "/services/income-tax",
  "/services/fssai-license": "/services/fssai-registration",
  "/services/iec-registration": "/services/import-export-code",
  "/services/investment-planning": "/services/investment",
  "/services/insurance-planning": "/services/insurance",
  "/blog": "/resources",
};

function countMatches(input, regex) {
  return (input.match(regex) || []).length;
}

try {
  await waitForServer();
  const titles = new Map();
  const descriptions = new Map();
  const failures = [];

  for (const route of publicRoutes) {
    const response = await fetch(`${base}${route}`, { redirect: "manual" });
    const html = await response.text();
    if (response.status !== 200) failures.push(`${route}: expected 200, received ${response.status}`);

    const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
    const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim()
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1]?.trim();
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
    const h1Count = countMatches(html, /<h1\b/gi);

    if (!title) failures.push(`${route}: title missing`);
    if (!description) failures.push(`${route}: meta description missing`);
    if (!canonical) failures.push(`${route}: canonical missing`);
    if (h1Count !== 1) failures.push(`${route}: expected one H1, found ${h1Count}`);

    if (title) {
      if (titles.has(title)) failures.push(`${route}: duplicate title also used by ${titles.get(title)}`);
      else titles.set(title, route);
    }
    if (description) {
      if (descriptions.has(description)) failures.push(`${route}: duplicate description also used by ${descriptions.get(description)}`);
      else descriptions.set(description, route);
    }
  }

  for (const [from, to] of Object.entries(redirects)) {
    const response = await fetch(`${base}${from}`, { redirect: "manual" });
    const location = response.headers.get("location") || "";
    if (![301, 308].includes(response.status)) failures.push(`${from}: expected permanent redirect, received ${response.status}`);
    if (!location.endsWith(to)) failures.push(`${from}: expected Location ending ${to}, received ${location || "none"}`);
  }

  for (const route of ["/sitemap.xml", "/image-sitemap.xml", "/robots.txt"]) {
    const response = await fetch(`${base}${route}`);
    const body = await response.text();
    if (response.status !== 200 || !body.trim()) failures.push(`${route}: endpoint unavailable`);
  }

  const missing = await fetch(`${base}/this-page-does-not-exist`, { redirect: "manual" });
  if (missing.status !== 404) failures.push(`/this-page-does-not-exist: expected 404, received ${missing.status}`);

  if (failures.length) {
    console.error(`Production smoke test failed with ${failures.length} issue(s):`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
  } else {
    console.log(`Production smoke test passed for ${publicRoutes.length} indexable pages, ${Object.keys(redirects).length} redirects, XML/text endpoints, and the 404 response.`);
  }
} finally {
  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(server.pid), "/t", "/f"], { stdio: "ignore" });
  } else if (server.pid) {
    try {
      process.kill(-server.pid, "SIGTERM");
    } catch {
      server.kill("SIGTERM");
    }
  }
  await sleep(300);
}
