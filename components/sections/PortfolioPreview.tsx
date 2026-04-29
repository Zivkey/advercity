"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PREVIEW_ITEMS = PORTFOLIO_ITEMS.filter((item) => item.type === "project").slice(0, 8);

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-heading", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-heading",
          start: "top 85%",
          once: true,
        },
      });

      ScrollTrigger.batch(".portfolio-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.07,
            duration: 0.6,
            ease: "power3.out",
          }),
        start: "top 90%",
        once: true,
      });

      gsap.set(".portfolio-item", { autoAlpha: 0, scale: 0.95 });

      gsap.from(".portfolio-btn", {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-btn",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="portfolio-heading bg-primary px-4 py-24 text-center sm:py-32">
        <h2 className="text-4xl font-display font-light tracking-[-0.04em] text-white sm:text-5xl">
          Nasi projekti
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
          500+ realizovanih projekata. Evo nekih od njih.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {PREVIEW_ITEMS.map((item, i) => (
          <div
            key={i}
            className="portfolio-item group relative cursor-pointer overflow-hidden"
            style={{ aspectRatio: "1" }}
          >
            <Image
              src={item.image!}
              alt={`${item.title} — ${item.client}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/0 transition-all duration-500 group-hover:bg-primary/85">
              <div className="translate-y-4 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-display font-light tracking-[-0.04em] text-white sm:text-2xl">
                  {item.client}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-btn py-12 text-center">
        <Button href="/projekti/" variant="outline" size="md">
          Pogledajte sve projekte
        </Button>
      </div>
    </section>
  );
}
