import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  ExternalLink,
  HeartHandshake,
  Play,
  ShieldCheck,
  WalletCards,
  Youtube,
} from "lucide-react";
import heroImg from "@/assets/client_hero_image.jpeg";
import { Section, SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE } from "@/lib/site";
import { createSeo } from "@/lib/seo";

const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/@Progatewayconsultancy/featured";

const ABOUT_SEO = createSeo({
  title: "About Progateway Consultancy & Suresh Purohit | Navsari",
  description:
    "Learn about Progateway Consultancy and consultant Suresh Purohit, providing tax, registration, loan documentation, investment and insurance assistance from Navsari.",
  path: "/about",
});

export const Route = createFileRoute("/about")({
  head: () => ({
    ...ABOUT_SEO,
    links: [
      ...ABOUT_SEO.links,
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
      { rel: "preconnect", href: "https://i.ytimg.com" },
      { rel: "preconnect", href: "https://www.youtube.com" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Clock,
    title: "Time-saving support",
    desc: "Clear checklists and organised follow-up help reduce unnecessary delays.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible document handling",
    desc: "Client information is used only for consultation and application-related work.",
  },
  {
    icon: HeartHandshake,
    title: "Customer guidance",
    desc: "The team explains the process, documents and next steps in practical language.",
  },
  {
    icon: WalletCards,
    title: "Multiple services",
    desc: "Tax, registrations, loans, investment and insurance support are available under one roof.",
  },
];

const YOUTUBE_VIDEOS = [
  {
    id: "BpIWEeNdOB0",
    category: "Income Tax",
    title: "Smart Bano, Property Tax Bachao!",
    description:
      "Understand an important capital-gains tax-planning provision when selling property.",
  },
  {
    id: "A0QLE_gfvFo",
    category: "Loans",
    title: "Zyada Loan Kaise Mile?",
    description:
      "Learn about the factors that can influence your loan eligibility and approved amount.",
  },
  {
    id: "7ZB0daxUKPo",
    category: "GST Updates",
    title: "GST E-Way Bill New Rules 2026",
    description:
      "A simple explanation of an important GST E-Way Bill compliance update.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-aurora opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 surface-grid opacity-[0.22]"
        />

        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Breadcrumbs
              items={[{ label: "Home", to: "/" }, { label: "About" }]}
            />

            <div className="mt-6 max-w-4xl">
              <span className="chip">About Progateway</span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#18235F] md:text-5xl lg:text-6xl">
                Practical financial guidance for{" "}
                <span className="text-[#E86F1C]">
                  individuals and businesses
                </span>
              </h1>

              <div className="mt-6 max-w-3xl space-y-4">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  We support small business owners and new entrepreneurs with
                  end-to-end business and financial services, from registration
                  and funding to investment and insurance planning.
                </p>

                <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our mission is to create a future where every business and
                  family can grow confidently, securely and sustainably.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-lift md:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={heroImg}
                alt={`${SITE.founder}, founder of Progateway Consultancy, assisting clients`}
                width={1600}
                height={1200}
                fetchPriority="high"
                className="absolute inset-0 size-full object-cover"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/5 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Founder
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold">
                  {SITE.founder}
                </h2>

                <p className="mt-1 text-sm text-white/85">
                  Founder and consultant
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:block">
              <p className="text-sm font-semibold">Navsari office</p>
              <p className="mt-1 text-xs text-muted-foreground">
                In-person and digital assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our approach"
              title="Clear documents, clear process and ongoing support"
            />

            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              The aim is to simplify processes that can otherwise feel confusing
              or time-consuming. Each enquiry begins with understanding the
              client’s requirement, followed by a relevant document checklist,
              application support and follow-up until the available process is
              completed.
            </p>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              The first consultation is used to understand the requirement,
              explain the likely scope and provide an initial document checklist
              before paid work begins.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Office
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold">
              Visit Progateway Consultancy
            </h2>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold">Address</dt>
                <dd className="mt-1 text-muted-foreground">{SITE.address}</dd>
              </div>

              <div>
                <dt className="font-semibold">Working hours</dt>
                <dd className="mt-1 text-muted-foreground">{SITE.hours}</dd>
              </div>

              <div>
                <dt className="font-semibold">Phone</dt>
                <dd className="mt-1 text-muted-foreground">{SITE.phone}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Why clients choose us"
          title="Service priorities"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Financial awareness"
            title="Helpful videos from Progateway"
            description="Watch short and practical videos about GST, income tax, loans and financial planning."
          />

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Youtube className="size-5" aria-hidden />
            Visit YouTube channel
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video) => {
            const videoUrl = `https://www.youtube.com/shorts/${video.id}`;
            const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;

            return (
              <article
                key={video.id}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${video.title} on YouTube`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={thumbnailUrl}
                      alt={`Video preview: ${video.title}`}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      {video.category}
                    </span>

                    <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red-600 text-white shadow-xl transition duration-300 group-hover:scale-110">
                      <Play className="ml-1 size-7 fill-current" aria-hidden />
                    </span>

                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      <Youtube className="size-4" aria-hidden />
                      Watch video
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold leading-snug transition group-hover:text-primary">
                      {video.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {video.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Watch on YouTube
                      <ExternalLink className="size-4" aria-hidden />
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Follow Progateway Consultancy on YouTube for practical updates on
            GST, income tax, loans, CIBIL, financial planning and business
            compliance.
          </p>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            <Youtube className="size-5" aria-hidden />
            Subscribe to Progateway Consultancy
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>
      </Section>

      <CtaBand
        title="Discuss your requirement with Progateway"
        description="Call or WhatsApp for a free first consultation and a service-specific document checklist."
      />
    </>
  );
}
