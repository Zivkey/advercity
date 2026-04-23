import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { INDUSTRY_PAGES } from "@/lib/industries-data";
import { INDUSTRIES } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import IndustryPageContent from "@/components/sections/IndustryPageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRY_PAGES.find((p) => p.slug === slug);
  if (!industry) return {};

  return generatePageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industrije/${industry.slug}/`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRY_PAGES.find((p) => p.slug === slug);
  if (!industry) notFound();

  const breadcrumbs = [
    { name: "Pocetna", href: "/" },
    { name: "Industrije", href: "/#industrije" },
    { name: industry.title, href: `/industrije/${industry.slug}/` },
  ];

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero title={industry.title} subtitle={industry.heroSubtitle} />
      <IndustryPageContent industry={industry} otherIndustries={otherIndustries} />
      <CTASection />
    </>
  );
}
