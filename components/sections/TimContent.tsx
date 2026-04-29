"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "@/components/ui/Container";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TimContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".tim-photo", {
        scale: 1.04, autoAlpha: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".tim-photo", start: "top 90%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".tim-text").forEach((el) => {
        gsap.from(el, {
          y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.from(".tim-pair-img", {
        scale: 1.04, autoAlpha: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".tim-pair-img", start: "top 90%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {/* Full-width team photo */}
      <div className="tim-photo relative aspect-[3/1] w-full sm:aspect-[3.5/1]">
        <Image src="https://picsum.photos/seed/teamwide1/1920/600" alt="Advercity tim u kancelariji" fill className="object-cover" sizes="100vw" priority />
      </div>

      {/* Intro text */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="tim-text mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-display font-light tracking-[-0.04em] text-dark sm:text-3xl">Ljudi koji stoje iza svakog projekta</h2>
            <p className="mt-8 text-base leading-relaxed text-text-secondary">
              Advercity tim cini vise od 20 strucnjaka iz oblasti digitalnog marketinga, brendinga,
              grafickog dizajna, web razvoja i medijskog planiranja. Svaki clan donosi jedinstvenu
              kombinaciju iskustva i kreativnosti koja nam omogucava da za svakog klijenta kreiramo
              pristup koji donosi rezultate.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Nas tim funkcionise kao jedna celina — stratezi, dizajneri, copywriteri i account
              manageri rade zajedno od prvog dana svakog projekta. Verujemo da najbolji rezultati
              dolaze kada razlicite perspektive i vestine rade u sinergiji.
            </p>
          </div>
        </Container>
      </section>

      {/* Full-width photo 2 */}
      <div className="tim-photo relative aspect-[2.5/1] w-full">
        <Image src="https://picsum.photos/seed/teamwide2/1920/800" alt="Advercity tim na sastanku" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Culture text */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="tim-text mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-display font-light tracking-[-0.04em] text-dark sm:text-3xl">Kultura koja nas pokrece</h2>
            <p className="mt-8 text-base leading-relaxed text-text-secondary">
              U Advercity-ju negujemo kulturu otvorenosti, radoznalosti i konstantnog ucenja.
              Pratimo najnovije trendove u industriji, eksperimentisemo sa novim alatima i
              pristupima, i nikada ne prestajemo da se usavrsavamo. Svaki projekat je prilika
              da naucimo nesto novo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Nasi klijenti nisu samo klijenti — oni su partneri. Gradimo dugorocne odnose
              bazirane na poverenju, transparentnosti i zajednickom cilju. Kada nas klijent
              uspe, uspeli smo i mi.
            </p>
          </div>
        </Container>
      </section>

      {/* Two photos side by side */}
      <div className="grid grid-cols-2">
        <div className="tim-pair-img relative aspect-square">
          <Image src="https://picsum.photos/seed/teamwork1/900/900" alt="Timski rad u Advercity-ju" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="tim-pair-img relative aspect-square">
          <Image src="https://picsum.photos/seed/teamwork2/900/900" alt="Kreativni proces u Advercity-ju" fill className="object-cover" sizes="50vw" />
        </div>
      </div>

      {/* Final text */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="tim-text mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-display font-light tracking-[-0.04em] text-dark sm:text-3xl">Zelite da se pridruzite?</h2>
            <p className="mt-8 text-center text-base leading-relaxed text-text-secondary">
              Uvek trazimo talentovane ljude koji dele nasu strast za kreativnost i rezultate.
              Ako mislite da ste pravi za nas tim, posaljite nam CV na info@advercity.rs.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
