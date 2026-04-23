"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-title", { y: 60, autoAlpha: 0, duration: 1 })
        .from(".hero-sub", { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.55")
        .from(".hero-btns", { y: 20, autoAlpha: 0, duration: 0.7 }, "-=0.5");
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="hero-title text-5xl font-black leading-[1.05] text-dark sm:text-6xl md:text-7xl lg:text-8xl">
          Creating Brand
          <br />
          <span className="text-primary">Authenticity</span>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-base text-text-secondary sm:text-lg">
          Kreativna marketing agencija sa 25+ godina iskustva i vise od 500
          realizovanih projekata. Od digitalnog marketinga i SEO optimizacije
          do brendinga i OOH kampanja — pomažemo preduzećima u Nišu i Srbiji
          da rastu.
        </p>

        <div className="hero-btns mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/kontakt/" size="lg">
            Besplatna konsultacija
          </Button>
          <Button href="/projekti/" variant="outline" size="lg">
            Pogledajte projekte
          </Button>
        </div>
      </div>
    </section>
  );
}
