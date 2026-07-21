import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { getServiceVisual } from "@/lib/service-images";

export function ServiceCard({
  service,
  visual = false,
}: {
  service: Service;
  visual?: boolean;
}) {
  const Icon = service.icon;

  if (visual) {
    const image = getServiceVisual(service);

    return (
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 via-black/5 to-transparent"
          />
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur">
            {service.category}
          </span>
          <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/70 bg-white/90 text-primary shadow-soft backdrop-blur transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
          <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lift">
            <Icon className="size-6" aria-hidden />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.short}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
            View service details
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
    >
      <div className="flex items-start justify-between">
        <div className="grid size-12 place-items-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" aria-hidden />
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>
      </div>
      <span className="mt-auto text-sm font-semibold text-primary">
        Learn more →
      </span>
    </Link>
  );
}
