"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "@/components/ui/Container";

gsap.registerPlugin(useGSAP);

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".ph-title", { y: 40, autoAlpha: 0, duration: 0.8 });
      if (subtitle) {
        tl.from(".ph-sub", { y: 20, autoAlpha: 0, duration: 0.7 }, "-=0.45");
      }
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-primary pt-40 pb-24 sm:pt-44 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="ph-title text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="ph-sub mt-6 text-lg text-white/70">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
