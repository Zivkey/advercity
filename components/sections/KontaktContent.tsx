"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function KontaktContent() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".kont-form", {
        x: -30, autoAlpha: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.from(".kont-info", {
        x: 30, autoAlpha: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.from(".kont-detail", {
        y: 15, autoAlpha: 0, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".kont-detail", start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="kont-form lg:col-span-3">
            <ContactForm />
          </div>
          <div className="kont-info lg:col-span-2">
            <div className="bg-light-alt p-8">
              <h2 className="text-xl font-bold text-dark">Kontakt informacije</h2>
              <div className="mt-6 space-y-5">
                <div className="kont-detail flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-dark">{CONTACT.address}</p>
                    <p className="text-sm text-text-secondary">{CONTACT.city} {CONTACT.zip}</p>
                  </div>
                </div>
                <div className="kont-detail flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="font-medium text-dark transition-colors hover:text-primary">
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="kont-detail flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="font-medium text-dark transition-colors hover:text-primary">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="kont-detail flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <p className="font-medium text-dark">{CONTACT.workingHours}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 aspect-[4/3] w-full bg-light-alt">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-muted">Google Maps placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
