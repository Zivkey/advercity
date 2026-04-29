"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "@/components/ui/Container";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TIMELINE = [
  { year: "1999", title: "Pocetak price", description: "Advercity je osnovan u Nisu kao mali graficki studio sa velikom vizijom. Poceli smo sa dizajnom stampanih materijala i OOH oglasavanjem za lokalne biznise.", image: "https://picsum.photos/seed/about1/800/600" },
  { year: "2003", title: "Prva velika kampanja", description: "Realizovali smo prvu veliku OOH kampanju koja je pokrila ceo Nisavski okrug. Ovo je bio prekretnica koja nas je stavila na mapu regionalnih agencija.", image: "https://picsum.photos/seed/about2/800/600" },
  { year: "2008", title: "Digitalna transformacija", description: "Prepoznali smo potencijal digitalnog marketinga i prosirili usluge na web dizajn, SEO optimizaciju i online oglasavanje. Tim je narastao na 10 strucnjaka.", image: "https://picsum.photos/seed/about3/800/600" },
  { year: "2012", title: "Saradnja sa velikim brendovima", description: "Poceli smo saradnju sa McDonald's, Delta Planet i AIK Bankom. Nase kampanje su postale prepoznatljive sirom Srbije.", image: "https://picsum.photos/seed/about4/800/600" },
  { year: "2016", title: "Social media eksplozija", description: "Pokrenuli smo odeljenje za social media marketing i postali lideri u upravljanju drustvenim mrezama za retail i FMCG brendove u regionu.", image: "https://picsum.photos/seed/about5/800/600" },
  { year: "2020", title: "Prilagodavanje i rast", description: "Uprkos globalnim izazovima, nastavili smo da rastemo. Prebacili smo fokus na digitalne kanale i pomogli klijentima da se prilagode novim uslovima poslovanja.", image: "https://picsum.photos/seed/about6/800/600" },
  { year: "2024", title: "25+ godina i 500+ projekata", description: "Danas smo tim od 20+ strucnjaka koji pokriva sve aspekte marketinga — od strategije i brendinga do digitalnih kampanja i event marketinga. Nastavljamo da rastemo.", image: "https://picsum.photos/seed/about7/800/600" },
];

const VALUES = [
  { title: "Kreativnost", description: "Svaki projekat je prilika da napravimo nesto jedinstveno i nezaboravno." },
  { title: "Rezultati", description: "Merimo uspeh kroz konkretne rezultate — rast prodaje, vidljivost i ROI." },
  { title: "Partnerstvo", description: "Gradimo dugorocne odnose sa klijentima baziranih na poverenju i transparentnosti." },
  { title: "Inovacija", description: "Pratimo trendove i koristimo najnovije alate i strategije u industriji." },
];

export default function ONamaContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".onam-intro", {
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".onam-intro", start: "top 85%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el) => {
        gsap.from(el, {
          y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.from(".value-card", {
        y: 30, autoAlpha: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".value-card", start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {/* Intro */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="onam-intro mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-display font-light tracking-[-0.04em] text-dark sm:text-3xl">
              Od malog studija do vodece agencije u regionu
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              Advercity je marketing agencija iz Nisa sa vise od 25 godina iskustva u kreiranju
              kampanja koje donose rezultate. Radimo sa brendovima svih velicina — od lokalnih
              biznisa do medjunarodnih korporacija poput McDonald&apos;s, Delta Planet i AIK Banke.
              Nas tim od 20+ strucnjaka pokriva sve aspekte modernog marketinga.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-light-alt py-16 sm:py-24">
        <Container>
          <h2 className="mb-16 text-center text-2xl font-display font-light tracking-[-0.04em] text-dark sm:mb-20 sm:text-3xl">
            Nasa istorija
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20 sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-12 sm:space-y-16">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={item.year} className="timeline-item relative">
                    <div className="absolute left-4 top-0 z-10 -translate-x-1/2 sm:left-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-lg">
                        {item.year.slice(-2)}
                      </div>
                    </div>
                    <div className={`pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${isLeft ? "" : "sm:direction-rtl"}`}>
                      <div className={isLeft ? "sm:pr-16 sm:text-right" : "sm:order-2 sm:pl-16 sm:text-left"}>
                        <p className="text-sm font-bold uppercase tracking-wider text-primary">{item.year}</p>
                        <h3 className="mt-2 text-xl font-display font-light tracking-[-0.04em] text-dark sm:text-2xl">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                      </div>
                      <div className={`mt-4 sm:mt-0 ${isLeft ? "sm:order-2 sm:pl-16" : "sm:order-1 sm:pr-16"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="mb-12 text-center text-2xl font-display font-light tracking-[-0.04em] text-dark sm:text-3xl">Nase vrednosti</h2>
          <div className="grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="value-card bg-white p-8 sm:p-10">
                <h3 className="text-lg font-bold text-dark">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
