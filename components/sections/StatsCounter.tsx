"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        autoAlpha: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      STATS.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          snap: { val: 1 },
          onUpdate: () => {
            el.textContent = String(obj.val) + stat.suffix;
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="bg-primary py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="text-5xl font-display font-light tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  0{stat.suffix}
                </span>
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
