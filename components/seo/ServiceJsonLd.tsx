import { SITE_URL } from "@/lib/constants";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
}

export default function ServiceJsonLd({ name, description, slug }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/usluge/${slug}/#service`,
    name,
    description,
    url: `${SITE_URL}/usluge/${slug}/`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Srbija",
    },
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
