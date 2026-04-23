"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ServicePage } from "@/lib/services-data";
import type { SERVICES } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  service: ServicePage;
  otherServices: typeof SERVICES;
}

export default function ServicePageContent({ service, otherServices }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".svc-intro", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-intro", start: "top 85%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".svc-section").forEach((el) => {
        const text = el.querySelector(".svc-text");
        const img = el.querySelector(".svc-img");
        gsap.from(text, {
          x: -30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
        gsap.from(img, {
          x: 30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      gsap.from(".svc-feature", {
        x: -20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-feature", start: "top 88%", once: true },
      });

      gsap.from(".svc-other-title", {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-other-title", start: "top 85%", once: true },
      });

      ScrollTrigger.batch(".svc-other-card", {
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" }),
        start: "top 90%",
        once: true,
      });
      gsap.set(".svc-other-card", { autoAlpha: 0, y: 30 });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="svc-intro text-lg leading-relaxed text-text-secondary">
              {service.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Content sections */}
      {service.sections.map((section, i) => (
        <section
          key={i}
          className={`svc-section ${i % 2 === 0 ? "bg-light-alt" : "bg-white"} py-20 sm:py-24`}
        >
          <Container>
            <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${section.reverse ? "direction-rtl" : ""}`}>
              <div className={`svc-text ${section.reverse ? "lg:order-2" : ""}`}>
                <h2 className="text-3xl font-black text-dark sm:text-4xl">{section.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">{section.text}</p>
              </div>
              <div className={`svc-img ${section.reverse ? "lg:order-1" : ""}`}>
                {section.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-light-border">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
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
            <h2 className="text-3xl font-black text-dark sm:text-4xl">Šta uključuje naša usluga</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div key={feature} className="svc-feature flex items-start gap-3 border border-light-border px-5 py-4">
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
          <h2 className="svc-other-title text-center text-3xl font-black text-dark sm:text-4xl">
            Ostale usluge
          </h2>
          <div className="mt-12 grid gap-px bg-light-border sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/usluge/${s.slug}/`}
                className="svc-other-card group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-light-alt"
              >
                <div>
                  <h3 className="text-lg font-bold text-dark">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
                  Saznaj više <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
