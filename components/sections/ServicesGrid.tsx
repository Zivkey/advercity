"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Search,
  Share2,
  Target,
  Monitor,
  Palette,
  MapPin,
  PenTool,
  Calendar,
  BarChart3,
  Camera,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Globe,
  Search,
  Share2,
  Target,
  Monitor,
  Palette,
  MapPin,
  PenTool,
  Calendar,
  BarChart3,
  Camera,
} as const;

export default function ServicesGrid() {
  return (
    <section id="usluge" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
          Nase usluge
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
          Kompletna marketing podrska za vas biznis.
        </p>
      </div>

      {/* Edge-to-edge grid, no side padding */}
      <div className="grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/usluge/${service.slug}/`}
                className="group flex h-full flex-col justify-between bg-white p-10 transition-colors hover:bg-light-alt"
              >
                <div>
                  <Icon className="mb-6 h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-2">
                  Saznaj vise
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* CTA card filling the remaining 2 cells */}
        <Link
          href="/kontakt/"
          className="group flex flex-col items-center justify-center bg-white p-10 text-center transition-colors hover:bg-light-alt sm:col-span-2"
        >
          <h3 className="text-2xl font-black text-dark sm:text-3xl">
            Imate projekat na umu?
          </h3>
          <p className="mt-3 text-base text-text-secondary">
            Javite nam se za besplatnu konsultaciju.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-2">
            Kontaktirajte nas
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </section>
  );
}
