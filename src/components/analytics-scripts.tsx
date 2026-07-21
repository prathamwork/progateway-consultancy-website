import { useEffect } from "react";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;

export function AnalyticsScripts() {
  useEffect(() => {
    if (GTM_ID && !document.querySelector(`script[data-progateway-gtm="${GTM_ID}"]`)) {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
      script.dataset.progatewayGtm = GTM_ID;
      document.head.appendChild(script);
    }

    if (GA_ID && !document.querySelector(`script[data-progateway-ga="${GA_ID}"]`)) {
      const library = document.createElement("script");
      library.async = true;
      library.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
      library.dataset.progatewayGa = GA_ID;
      document.head.appendChild(library);

      window.dataLayer = window.dataLayer ?? [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push({ gtag: args });
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { anonymize_ip: true });
    }
  }, []);

  return null;
}
