"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".about-label", { x: -20, autoAlpha: 0, duration: 0.6 })
        .from(".about-title", { y: 40, autoAlpha: 0, duration: 0.8 }, "-=0.3")
        .from(".about-body", { y: 25, autoAlpha: 0, stagger: 0.15, duration: 0.7 }, "-=0.5")
        .from(".about-btn", { y: 15, autoAlpha: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="about-label text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          O nama
        </p>
        <h2 className="about-title mt-5 text-4xl font-black tracking-tight text-dark sm:text-5xl">
          25+ Godina Iskustva
          <br />u Marketingu
        </h2>
        <p className="about-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
          Od 1999. godine pomažemo preduzećima u Nišu i Srbiji da izgrade
          jake brendove i ostvare merljive rezultate. Naš tim od 20+
          stručnjaka kombinuje kreativnost sa strateškim pristupom — od
          digitalnog marketinga i SEO optimizacije do OOH kampanja na
          našim sopstvenim bilbordima.
        </p>
        <p className="about-body mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          Radili smo sa brendovima kao što su McDonald&apos;s, Delta Planet,
          AIK Banka, Eurobank i Vapiano — dokazujući da rezultati govore
          glasnije od obećanja. Bilo da vam treba kompletna digitalna
          strategija, redizajn vizuelnog identiteta ili precizno targetirane
          Google Ads kampanje, naš tim je tu da vaš biznis dovede do novih
          klijenata.
        </p>
        <div className="about-btn mt-10">
          <Button href="/o-nama/" variant="outline">
            Saznajte vise
          </Button>
        </div>
      </div>
    </section>
  );
}
