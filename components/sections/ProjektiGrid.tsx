"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjektiGrid() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.batch(".proj-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.06,
            duration: 0.65,
            ease: "power3.out",
          }),
        start: "top 92%",
        once: true,
      });
      gsap.set(".proj-item", { autoAlpha: 0, scale: 0.96 });
    },
    { scope: ref }
  );

  return (
    <section ref={ref}>
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ gridAutoRows: "clamp(200px, 25vw, 400px)", gridAutoFlow: "dense" }}
      >
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
                className={`proj-item flex items-center justify-center p-8 sm:p-10 ${spanClass} ${
                  item.bg === "primary" ? "bg-primary" : "bg-light-alt"
                }`}
              >
                <p
                  className={`text-center text-xl font-display font-light tracking-[-0.04em] leading-tight sm:text-2xl lg:text-3xl ${
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
              className={`proj-item group relative cursor-pointer overflow-hidden ${spanClass}`}
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
                  <h3 className="mt-3 text-2xl font-display font-light tracking-[-0.04em] text-white sm:text-3xl">
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
  );
}
