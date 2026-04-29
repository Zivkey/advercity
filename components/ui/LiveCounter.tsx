"use client";

import { useState, useEffect } from "react";

const FOUNDED = new Date("1999-01-01T00:00:00");

function calc() {
  const now = new Date();
  const diff = now.getTime() - FOUNDED.getTime();

  const years = now.getFullYear() - FOUNDED.getFullYear();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { years, days, hours, minutes, seconds };
}

export default function LiveCounter() {
  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { value: time.years, label: "Godina" },
    { value: time.days, label: "Dana" },
    { value: time.hours, label: "Sati" },
    { value: time.minutes, label: "Minuta" },
    { value: time.seconds, label: "Sekundi" },
  ];

  return (
    <div className="flex gap-6 sm:gap-10">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className="text-3xl font-display font-light tracking-[-0.04em] tabular-nums text-white sm:text-4xl lg:text-5xl">
            {String(item.value).padStart(2, "0")}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
