"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, HeartPulse, ShoppingCart, Building2, Car, Code2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const iconMap = {
  UtensilsCrossed,
  HeartPulse,
  ShoppingCart,
  Building2,
  Car,
  Code2,
} as const;

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".industries-heading", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industries-heading",
          start: "top 85%",
          once: true,
        },
      });

      ScrollTrigger.batch(".industry-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          }),
        start: "top 88%",
        once: true,
      });

      gsap.set(".industry-card", { autoAlpha: 0, y: 30 });
    },
    { scope: sectionRef }
  );

  return (
    <section id="industrije" ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="industries-heading text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Industrije
          </p>
          <h2 className="mt-5 text-4xl font-display font-light tracking-[-0.04em] text-dark sm:text-5xl">
            Industrije koje pokrivamo
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
            Specijalizovano iskustvo u marketingu za razlicite sektore.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-6">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <Link
                key={industry.slug}
                href={`/industrije/${industry.slug}/`}
                className="industry-card group flex aspect-square flex-col justify-between border border-dark/15 p-5 transition-all hover:border-dark/40 hover:bg-light-alt"
              >
                <Icon className="h-7 w-7 text-dark/30 transition-colors group-hover:text-dark/60" />
                <div className="flex items-end justify-between gap-2">
                  <h3 className="text-sm font-bold leading-tight text-dark">
                    {industry.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-dark/30 transition-transform group-hover:translate-x-1 group-hover:text-dark" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
