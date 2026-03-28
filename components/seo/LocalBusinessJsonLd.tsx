import { CONTACT, SOCIAL, SERVICES, SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export default function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    image: `${SITE_URL}/images/og-default.jpg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    knowsLanguage: ["sr", "en"],
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Niš",
      addressRegion: CONTACT.region,
      postalCode: CONTACT.zip,
      addressCountry: CONTACT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.lat,
      longitude: CONTACT.lng,
    },
    areaServed: [
      { "@type": "City", name: "Niš" },
      { "@type": "Country", name: "Srbija" },
    ],
    foundingDate: "1999-01-01",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      availableLanguage: ["sr", "en"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing usluge",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/usluge/${service.slug}/`,
        },
      })),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
