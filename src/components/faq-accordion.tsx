import { useState } from "react";
import { Plus } from "lucide-react";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
            >
              <span className="text-base font-semibold text-foreground md:text-lg">
                {f.q}
              </span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full border border-border-strong text-foreground transition-transform ${
                  isOpen ? "rotate-45 bg-primary text-primary-foreground" : ""
                }`}
              >
                <Plus className="size-4" aria-hidden />
              </span>
            </button>
            <div
              className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 md:px-7 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
