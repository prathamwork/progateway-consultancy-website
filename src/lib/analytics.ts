export type AnalyticsEventName =
  | "phone_click"
  | "whatsapp_click"
  | "form_submit"
  | "direction_click"
  | "service_cta_click"
  | "resource_cta_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  parameters: Record<string, string | number | boolean | undefined> = {},
) {
  if (typeof window === "undefined") return;

  const payload = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  );

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
  window.gtag?.("event", event, payload);
}
