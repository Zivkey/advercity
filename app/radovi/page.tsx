import { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "Radovi | Portfolio Projekata",
  description:
    "Pogledajte nase radove — od digitalnog marketinga i brendinga do web dizajna i OOH kampanja. 500+ realizovanih projekata za brendove kao sto su McDonald's, Delta Planet i AIK Banka.",
  path: "/radovi/",
});

export default function RadoviPage() {
  const breadcrumbs = [
    { name: "Pocetna", href: "/" },
    { name: "Radovi", href: "/radovi/" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary pt-40 pb-24 sm:pt-44 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Nasi radovi
            </h1>
            <p className="mt-6 text-lg text-white/70">
              500+ realizovanih projekata. Evo nekih od njih.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid - edge to edge, mosaic layout */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gridAutoRows: "clamp(200px, 25vw, 400px)", gridAutoFlow: "dense" }}>
          {PORTFOLIO_ITEMS.map((item, i) => {
            const spanClass =
              item.size === "2x1"
                ? "col-span-2"
                : item.size === "1x2"
                  ? "row-span-2"
                  : item.size === "2x2"
                    ? "col-span-2 row-span-2"
                    : "";

            if (item.type === "text") {
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center p-8 sm:p-10 ${spanClass} ${
                    item.bg === "primary" ? "bg-primary" : "bg-light-alt"
                  }`}
                >
                  <p
                    className={`text-center text-xl font-black leading-tight sm:text-2xl lg:text-3xl ${
                      item.bg === "primary" ? "text-white" : "text-dark"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={i}
                className={`group relative cursor-pointer overflow-hidden ${spanClass}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.image!}
                    alt={`${item.title} — ${item.client}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={
                      item.size === "2x1" || item.size === "2x2"
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 50vw, 25vw"
                    }
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/0 transition-all duration-500 group-hover:bg-primary/85">
                  <div className="translate-y-4 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {item.client}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{item.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
