"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const POSTS = [
  {
    slug: "kako-poboljsati-seo",
    title: "Kako poboljsati SEO u 2025 — 10 prakticnih saveta",
    excerpt: "Organsko pozicioniranje na Google-u je i dalje najisplativiji kanal za privlacenje kupaca. Evo sta mozete uraditi vec danas.",
    category: "SEO",
    date: "15. mart 2025.",
    image: "https://picsum.photos/seed/blog1/800/500",
  },
  {
    slug: "social-media-trendovi",
    title: "Social media trendovi koje morate pratiti ove godine",
    excerpt: "Od kratkih video formata do AI personalizacije — ovo su trendovi koji ce definisati social media marketing.",
    category: "Social Media",
    date: "8. mart 2025.",
    image: "https://picsum.photos/seed/blog2/800/500",
  },
  {
    slug: "zasto-vam-treba-branding",
    title: "Zasto je branding vazniji nego ikada za male biznise",
    excerpt: "U moru konkurencije, jak brend je ono sto vas izdvaja. Saznajte kako da izgradite prepoznatljiv vizuelni identitet.",
    category: "Branding",
    date: "28. februar 2025.",
    image: "https://picsum.photos/seed/blog3/800/500",
  },
  {
    slug: "google-ads-pocetnici",
    title: "Google Ads vodic za pocetnike — sve sto treba da znate",
    excerpt: "Placeno oglasavanje moze da bude komplikovano. Objasnjavamo osnove Google Ads-a korak po korak.",
    category: "Google Ads",
    date: "20. februar 2025.",
    image: "https://picsum.photos/seed/blog4/800/500",
  },
  {
    slug: "web-dizajn-konverzije",
    title: "5 principa web dizajna koji povecavaju konverzije",
    excerpt: "Lep sajt nije dovoljan — mora i da konvertuje. Evo sta razlikuje sajt koji prodaje od sajta koji samo izgleda dobro.",
    category: "Web Dizajn",
    date: "12. februar 2025.",
    image: "https://picsum.photos/seed/blog5/800/500",
  },
  {
    slug: "ooh-oglasavanje-nis",
    title: "OOH oglasavanje u Nisu — vodic za lokalne biznise",
    excerpt: "Bilbordi i city lightovi su i dalje mocan kanal. Saznajte koje su najbolje lokacije i kako planirati kampanju.",
    category: "OOH",
    date: "5. februar 2025.",
    image: "https://picsum.photos/seed/blog6/800/500",
  },
];

export default function BlogContent() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".blog-post", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-post",
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-post group block">
              <article>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.date}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold leading-tight text-dark transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
