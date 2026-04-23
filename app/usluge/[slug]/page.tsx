import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/services-data";
import { SERVICES } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/usluge/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Početna", href: "/" },
    { name: "Usluge", href: "/#usluge" },
    { name: service.title, href: `/usluge/${service.slug}/` },
  ];

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServiceJsonLd name={service.title} description={service.metaDescription} slug={service.slug} />
      <PageHero title={service.title} subtitle={service.heroSubtitle} />
      <ServicePageContent service={service} otherServices={otherServices} />
      <CTASection />
    </>
  );
}
