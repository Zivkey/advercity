import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/ui/PageHero";
import KontaktContent from "@/components/sections/KontaktContent";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt | Zakazite Besplatnu Konsultaciju",
  description:
    "Kontaktirajte Advercity marketing agenciju u Nisu. Zakazite besplatnu konsultaciju za digitalni marketing, SEO, branding ili web dizajn. Telefon: 018 523 929.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  const breadcrumbs = [
    { name: "Početna", href: "/" },
    { name: "Kontakt", href: "/kontakt/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        title="Hajde da razgovaramo"
        subtitle="Imate pitanje ili zelite da pokrenete projekat? Javite nam se."
      />
      <KontaktContent />
      <CTASection />
    </>
  );
}
