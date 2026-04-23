import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import ONamaContent from "@/components/sections/ONamaContent";

export const metadata: Metadata = generatePageMetadata({
  title: "O Nama | Marketing Agencija sa 25+ Godina Iskustva",
  description:
    "Upoznajte Advercity — marketing agenciju iz Nisa sa vise od 25 godina iskustva. Od malog studija do vodece agencije u regionu sa 20+ strucnjaka i 500+ realizovanih projekata.",
  path: "/o-nama/",
});

export default function ONamaPage() {
  const breadcrumbs = [
    { name: "Početna", href: "/" },
    { name: "O nama", href: "/o-nama/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        title="O nama"
        subtitle="25+ godina kreativnosti, strategije i rezultata. Upoznajte nasu pricu."
      />
      <ONamaContent />
      <CTASection />
    </>
  );
}
