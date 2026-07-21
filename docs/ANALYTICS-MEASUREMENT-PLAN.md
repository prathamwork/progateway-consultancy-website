# Analytics and Search Measurement Plan

## Environment setup

Configure in the hosting platform, not in source control:

- `VITE_GA_MEASUREMENT_ID`
- `VITE_GTM_ID`
- `VITE_GSC_VERIFICATION`
- `VITE_BING_SITE_VERIFICATION`

Use either a direct GA4 ID or GTM based on the final analytics architecture. Avoid loading duplicate GA4 configurations through both methods.

## Implemented events

| Event | Trigger | Recommended parameters | Primary KPI use |
|---|---|---|---|
| `phone_click` | Click-to-call links | `page_path`, `placement`, `service` | Call intent |
| `whatsapp_click` | WhatsApp buttons | `page_path`, `placement`, `service` | Messaging enquiries |
| `form_submit` | Successful contact-form submission | `page_path`, `service` | Confirmed lead |
| `direction_click` | Google Maps/directions action | `page_path`, `location` | Office-visit intent |
| `service_cta_click` | Service CTA interaction | `service`, `page_path`, `placement` | Service conversion path |
| `resource_cta_click` | Resource-to-service/contact CTA | `article`, `service` | Content-assisted leads |

## Mark as GA4 key events

- `form_submit`
- Qualified `phone_click`
- Qualified `whatsapp_click`
- `direction_click` where office visits matter

Do not treat ordinary page views as conversions.

## Search and SEO dashboards

Track weekly and monthly:

- Organic clicks
- Organic impressions
- Average position, interpreted cautiously
- Click-through rate
- Indexed canonical pages
- Excluded and crawled-not-indexed pages
- Core Web Vitals field data
- Branded queries: Progateway Consultancy, Suresh Purohit
- Non-branded service queries
- Navsari query and landing-page performance
- Gujarat query and landing-page performance
- Calls, WhatsApp enquiries and form submissions
- Leads by service landing page
- Leads assisted by resource articles
- Leads by location page
- Enquiry-to-client conversion rate where CRM data is available

## Suggested reporting views

1. **Executive:** organic users, qualified leads, conversion rate and top services.
2. **Search:** clicks, impressions, CTR and query groups.
3. **Local:** GBP actions, Navsari queries, directions and calls.
4. **Content:** resource entrances, assisted conversions and service click-through.
5. **Technical:** indexed URLs, CWV, crawl errors and structured-data errors.

## Data quality controls

- Exclude internal office/team traffic where practical.
- Test events in GA4 DebugView before launch.
- Prevent duplicate events from nested click handlers.
- Preserve UTM parameters through the contact journey.
- Add consent controls where legally required for analytics/cookies.
- Never send PAN, Aadhaar, financial documents, phone numbers, email bodies or form-sensitive data as analytics parameters.
