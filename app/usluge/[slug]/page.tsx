import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/services-data";
import { SERVICES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    { name: "Pocetna", href: "/" },
    { name: "Usluge", href: "/usluge/" },
    { name: service.title, href: `/usluge/${service.slug}/` },
  ];

  // Get other services for cross-linking
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary pt-40 pb-24 sm:pt-44 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-white/70">
              {service.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              {service.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Content sections with alternating image/text */}
      {service.sections.map((section, i) => (
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
              Sta ukljucuje nasa usluga
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
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

      {/* Other services */}
      <section className="bg-light-alt py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-black text-dark sm:text-4xl">
            Ostale usluge
          </h2>
          <div className="mt-12 grid gap-px bg-light-border sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/usluge/${s.slug}/`}
                className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-light-alt"
              >
                <div>
                  <h3 className="text-lg font-bold text-dark">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {s.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
                  Saznaj vise
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
