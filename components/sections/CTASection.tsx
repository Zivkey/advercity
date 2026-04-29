"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        y: 35,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-light-alt py-12 sm:py-14">
      <div className="cta-content mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-display font-light tracking-[-0.04em] text-dark sm:text-4xl">
          Zelite da vas projekat
          <br />
          bude sledeci?
        </h2>
        <div className="mt-6">
          <Button href="/kontakt/" variant="primary" size="md">
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </section>
  );
}
