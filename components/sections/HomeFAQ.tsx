"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQ_ITEMS = [
  {
    q: "Šta radi marketing agencija?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    q: "Koliko košta saradnja sa marketing agencijom?",
    a: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nunc lorem aliquet dui, vel faucibus felis dui nec velit. Integer imperdiet orci sit amet urna cursus, vitae ultrices libero lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    q: "Kako početi saradnju sa Advercity?",
    a: "Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
  },
  {
    q: "Koliko dugo traje izrada marketing kampanje?",
    a: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  },
  {
    q: "Da li radite i van Niša?",
    a: "Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    q: "Koji rezultati se mogu očekivati od digitalnog marketinga?",
    a: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomeFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.from(".faq-heading", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-heading", start: "top 85%", once: true },
      });

      gsap.from(".faq-item", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-item", start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-white py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="faq-heading text-center">
            <h2 className="text-3xl font-black text-dark sm:text-4xl">
              Često postavljana pitanja
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              Sve što treba da znate o saradnji sa marketing agencijom.
            </p>
          </div>
          <div className="mt-12 divide-y divide-light-border border-t border-light-border">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-dark">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-80 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-text-secondary">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
