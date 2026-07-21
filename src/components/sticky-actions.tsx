import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function StickyActions() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-end px-4 sm:bottom-6 sm:px-6"
      aria-label="Quick contact"
    >
      <div className="pointer-events-auto flex flex-col gap-2.5 pb-15">
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
            "Hello Progateway, I'd like a free consultation.",
          )}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat on WhatsApp"
          onClick={() => trackEvent("whatsapp_click", { placement: "sticky_action" })}
          className="group grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
        >
          <MessageCircle className="size-6" aria-hidden />
        </a>
        <a
          href={`tel:${SITE.phoneRaw}`}
          aria-label="Call Progateway"
          onClick={() => trackEvent("phone_click", { placement: "sticky_action" })}
          className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:hidden"
        >
          <Phone className="size-6" aria-hidden />
        </a>
      </div>
    </div>
  );
}
