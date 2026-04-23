import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import TimContent from "@/components/sections/TimContent";

export const metadata: Metadata = generatePageMetadata({
  title: "Nas Tim | Upoznajte Ljude Iza Advercity-ja",
  description:
    "Upoznajte tim Advercity marketing agencije — 20+ strucnjaka za digitalni marketing, branding, web dizajn, SEO i kreativne kampanje u Nisu.",
  path: "/o-nama/tim/",
});

export default function TimPage() {
  const breadcrumbs = [
    { name: "Početna", href: "/" },
    { name: "O nama", href: "/o-nama/" },
    { name: "Nas tim", href: "/o-nama/tim/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        title="Nas tim"
        subtitle="20+ strucnjaka ujedinjenih jednim ciljem — da vas marketing bude bolji."
      />
      <TimContent />
      <CTASection />
    </>
  );
}
