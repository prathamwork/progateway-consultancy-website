export const SITE = {
  name: "Progateway Consultancy",
  shortName: "Progateway",
  tagline: "Tax, Loan, Investment & Business Consultancy",
  city: "Navsari",
  region: "Gujarat",
  country: "India",
  phone: "+91 99780 48097",
  phoneRaw: "+919978048097",
  whatsapp: "919978048097",
  email: "callgatewayconsultancy@gmail.com",
  streetAddress: "U-20, Sagar Complex, Eru Char Rasta",
  address: "U-20, Sagar Complex, Eru Char Rasta, Navsari, Gujarat 396450",
  postalCode: "396450",
  hours: "Monday – Saturday · 9:00 AM – 6:00 PM",
  openingHoursSchema: "Mo-Sa 09:00-18:00",
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  founder: "Suresh Purohit",

  url: "https://www.progatewayconsultancy.com",
  ogImage: "https://www.progatewayconsultancy.com/og-image.png",
  logo: "https://www.progatewayconsultancy.com/logo.png",
  geo: { latitude: 20.921954, longitude: 72.908809 },

  googleBusinessUrl: "https://share.google/K9EQwKJ8n7s8y9rsM",
  // Replace this with the direct “Ask for reviews” URL from Google Business
  // Profile when available. Until then, the supplied profile link is used.
  googleReviewUrl: "https://share.google/K9EQwKJ8n7s8y9rsM",
  mapUrl: "https://maps.app.goo.gl/3MZCDfbznKwxn2996",

  socials: {
    instagram: "https://www.instagram.com/progatewayconsultancy",
    facebook: "https://m.facebook.com/progatewayconsultancy",
    linkedin: "https://www.linkedin.com/in/progateway-consultancy-1647a61b4",
    youtube: "https://www.youtube.com/channel/UCe6nkU3udxqmHxQSJWzGI4A",
    threads: "https://www.threads.com/@progatewayconsultancy",
  },

  serviceAreas: [
    { name: "Navsari", type: "City" },
    { name: "Surat", type: "City" },
    { name: "Ahmedabad", type: "City" },
    { name: "Vadodara", type: "City" },
    { name: "Gujarat", type: "State" },
    { name: "India", type: "Country" },
  ],

  mapEmbed:
    "https://maps.google.com/maps?width=600&height=400&hl=en&q=U-20,%20Sagar%20Complex,%20Eru%20Char%20Rasta,%20Navsari,%20Gujarat%20396450&t=&z=14&ie=UTF8&iwloc=B&output=embed",
} as const;

export const SAME_AS = [
  ...Object.values(SITE.socials),
  SITE.googleBusinessUrl,
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path, SITE.url).toString();
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/documents-required", label: "Documents" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
