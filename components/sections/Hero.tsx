"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background video */}
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

      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-black leading-[1.05] text-dark sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Marketing Agencija
          <br />
          <span className="text-primary">Nis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-base text-text-secondary sm:text-lg"
        >
          Kreativna marketing agencija sa 25+ godina iskustva i vise od 500
          realizovanih projekata. Od digitalnog marketinga i SEO optimizacije
          do brendinga i OOH kampanja — pomažemo preduzećima u Nišu i Srbiji
          da rastu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/kontakt/" size="lg">
            Besplatna konsultacija
          </Button>
          <Button href="/radovi/" variant="outline" size="lg">
            Pogledajte radove
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
