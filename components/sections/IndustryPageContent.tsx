"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, UtensilsCrossed, HeartPulse, ShoppingCart, Building2, Car, Code2 } from "lucide-react";
import Container from "@/components/ui/Container";
import type { IndustryPage } from "@/lib/industries-data";
import type { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const iconMap = { UtensilsCrossed, HeartPulse, ShoppingCart, Building2, Car, Code2 } as const;

interface Props {
  industry: IndustryPage;
  otherIndustries: typeof INDUSTRIES;
}

export default function IndustryPageContent({ industry, otherIndustries }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".ind-intro", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ind-intro", start: "top 85%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".ind-section").forEach((el) => {
        gsap.from(el.querySelector(".ind-text"), {
          x: -30, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
        gsap.from(el.querySelector(".ind-img"), {
          x: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      gsap.from(".ind-feature", {
        x: -20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ind-feature", start: "top 88%", once: true },
      });

      gsap.from(".ind-other-card", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ind-other-card", start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="ind-intro text-lg leading-relaxed text-text-secondary">
              {industry.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Content sections */}
      {industry.sections.map((section, i) => (
        <section
          key={i}
          className={`ind-section ${i % 2 === 0 ? "bg-light-alt" : "bg-white"} py-20 sm:py-24`}
        >
          <Container>
            <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${section.reverse ? "direction-rtl" : ""}`}>
              <div className={`ind-text ${section.reverse ? "lg:order-2" : ""}`}>
                <h2 className="text-3xl font-black text-dark sm:text-4xl">{section.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">{section.text}</p>
              </div>
              <div className={`ind-img ${section.reverse ? "lg:order-1" : ""}`}>
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
            <h2 className="text-3xl font-black text-dark sm:text-4xl">Sta nudimo za ovu industriju</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {industry.features.map((feature) => (
              <div key={feature} className="ind-feature flex items-start gap-3 border border-light-border px-5 py-4">
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
          <h2 className="text-center text-3xl font-black text-dark sm:text-4xl">Ostale industrije</h2>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {otherIndustries.map((ind) => {
              const Icon = iconMap[ind.icon];
              return (
                <Link
                  key={ind.slug}
                  href={`/industrije/${ind.slug}/`}
                  className="ind-other-card group flex aspect-square flex-col justify-between border border-dark/15 p-5 transition-all hover:border-dark/40 hover:bg-light-alt"
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
    </div>
  );
}
