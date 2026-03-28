import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { INDUSTRY_PAGES } from "@/lib/industries-data";
import { INDUSTRIES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, HeartPulse, ShoppingCart, Building2, Car, Code2 } from "lucide-react";

const iconMap = {
  UtensilsCrossed,
  HeartPulse,
  ShoppingCart,
  Building2,
  Car,
  Code2,
} as const;

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
    { name: "Industrije", href: "/industrije/" },
    { name: industry.title, href: `/industrije/${industry.slug}/` },
  ];

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary pt-40 pb-24 sm:pt-44 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {industry.title}
            </h1>
            <p className="mt-6 text-lg text-white/70">
              {industry.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              {industry.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Content sections */}
      {industry.sections.map((section, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? "bg-light-alt py-20 sm:py-24" : "bg-white py-20 sm:py-24"}
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                section.reverse ? "direction-rtl" : ""
              }`}
            >
              <div className={section.reverse ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-black text-dark sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">
                  {section.text}
                </p>
              </div>
              <div className={section.reverse ? "lg:order-1" : ""}>
                {section.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-light-border">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Features */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-dark sm:text-4xl">
              Sta nudimo za ovu industriju
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {industry.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border border-light-border px-5 py-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-dark">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other industries */}
      <section className="bg-light-alt py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-black text-dark sm:text-4xl">
            Ostale industrije
          </h2>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {otherIndustries.map((ind) => {
              const Icon = iconMap[ind.icon];
              return (
                <Link
                  key={ind.slug}
                  href={`/industrije/${ind.slug}/`}
                  className="group flex aspect-square flex-col justify-between border border-dark/15 p-5 transition-all hover:border-dark/40 hover:bg-light-alt"
                >
                  <Icon className="h-7 w-7 text-dark/30 transition-colors group-hover:text-dark/60" />
                  <div className="flex items-end justify-between gap-2">
                    <h3 className="text-sm font-bold leading-tight text-dark">{ind.title}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-dark/30 transition-transform group-hover:translate-x-1 group-hover:text-dark" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
