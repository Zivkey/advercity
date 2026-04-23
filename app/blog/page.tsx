import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import BlogContent from "@/components/sections/BlogContent";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog | Marketing Saveti i Trendovi",
  description:
    "Citajte najnovije blog postove o digitalnom marketingu, SEO optimizaciji, brendingu i social media strategijama. Prakticni saveti od Advercity tima.",
  path: "/blog/",
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Pocetna", href: "/" },
    { name: "Blog", href: "/blog/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        title="Blog"
        subtitle="Saveti, trendovi i strategije iz sveta marketinga."
      />
      <BlogContent />
      <CTASection />
    </>
  );
}
