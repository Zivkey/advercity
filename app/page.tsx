import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsCounter from "@/components/sections/StatsCounter";
import AboutTeaser from "@/components/sections/AboutTeaser";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Industries from "@/components/sections/Industries";
import BlogPreview from "@/components/sections/BlogPreview";
import HomeFAQ from "@/components/sections/HomeFAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "Marketing Agencija Nis | Advercity — 25+ Godina Iskustva",
  description:
    "Advercity je marketing agencija u Nisu sa 25+ godina iskustva. Digitalni marketing, SEO, branding, web dizajn, Google Ads i OOH oglasavanje. 500+ realizovanih projekata za brendove kao sto su McDonald's, Delta Planet i AIK Banka.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsCounter />
      <AboutTeaser />
      <PortfolioPreview />
      <Industries />
      <BlogPreview />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
