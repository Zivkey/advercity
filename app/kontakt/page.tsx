import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CTASection from "@/components/sections/CTASection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt | Zakazite Besplatnu Konsultaciju",
  description:
    "Kontaktirajte Advercity marketing agenciju u Nisu. Zakazite besplatnu konsultaciju za digitalni marketing, SEO, branding ili web dizajn. Telefon: 018 523 929.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  const breadcrumbs = [
    { name: "Pocetna", href: "/" },
    { name: "Kontakt", href: "/kontakt/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary pt-40 pb-24 sm:pt-44 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Hajde da razgovaramo
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Imate pitanje ili zelite da pokrenete projekat? Javite nam se.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-light-alt p-8">
                <h2 className="text-xl font-bold text-dark">Kontakt informacije</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-dark">{CONTACT.address}</p>
                      <p className="text-sm text-text-secondary">
                        {CONTACT.city} {CONTACT.zip}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="font-medium text-dark transition-colors hover:text-primary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-medium text-dark transition-colors hover:text-primary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <p className="font-medium text-dark">{CONTACT.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 aspect-[4/3] w-full bg-light-alt">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-text-muted">
                    Google Maps placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
