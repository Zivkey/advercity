"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(value);
  const animatedRef = useRef(false);

  const runAnimation = useCallback(() => {
    if (animatedRef.current) return;
    animatedRef.current = true;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    setDisplay(0);
    requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    if (start) runAnimation();
  }, [start, runAnimation]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-primary py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                />
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
