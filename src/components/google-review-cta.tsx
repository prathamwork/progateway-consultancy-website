import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
import { SITE } from "@/lib/site";

export function GoogleReviewCta({ serviceName }: { serviceName?: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-card md:p-8">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-2xl"
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-accent" aria-hidden>
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-5 fill-current" />
            ))}
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
            Share your experience on Google
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {serviceName
              ? `Used Progateway Consultancy for ${serviceName}? Your honest review can help other customers choose the right support.`
              : "Your honest feedback helps local customers learn about Progateway Consultancy and improves our service."}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            The review is written and submitted directly on Google using your Google account.
          </p>
        </div>
        <a
          href={SITE.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          <MessageSquareQuote className="size-4" aria-hidden />
          Write a Google Review
          <ExternalLink className="size-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}
