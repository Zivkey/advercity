import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import ProjektiGrid from "@/components/sections/ProjektiGrid";

export const metadata: Metadata = generatePageMetadata({
  title: "Projekti | Portfolio Projekata",
  description:
    "Pogledajte nase projekte — od digitalnog marketinga i brendinga do web dizajna i OOH kampanja. 500+ realizovanih projekata za brendove kao sto su McDonald's, Delta Planet i AIK Banka.",
  path: "/projekti/",
});

export default function ProjektiPage() {
  const breadcrumbs = [
    { name: "Pocetna", href: "/" },
    { name: "Projekti", href: "/projekti/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        title="Nasi projekti"
        subtitle="500+ realizovanih projekata. Evo nekih od njih."
      />
      <ProjektiGrid />
      <CTASection />
    </>
  );
}
