import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  surface = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${surface ? "bg-surface" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl items-start"
      }`}
    >
      {eyebrow && <span className="chip">{eyebrow}</span>}
      <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
