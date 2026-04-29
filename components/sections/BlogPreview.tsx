"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PREVIEW_POSTS = [
  {
    slug: "kako-poboljsati-seo",
    title: "Kako poboljsati SEO u 2025 — 10 prakticnih saveta",
    category: "SEO",
    date: "15. mart 2025.",
    image: "https://picsum.photos/seed/blog1/800/500",
  },
  {
    slug: "social-media-trendovi",
    title: "Social media trendovi koje morate pratiti ove godine",
    category: "Social Media",
    date: "8. mart 2025.",
    image: "https://picsum.photos/seed/blog2/800/500",
  },
  {
    slug: "zasto-vam-treba-branding",
    title: "Zasto je branding vazniji nego ikada za male biznise",
    category: "Branding",
    date: "28. februar 2025.",
    image: "https://picsum.photos/seed/blog3/800/500",
  },
];

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".blog-heading", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".blog-card", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-card",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".blog-btn", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-btn",
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-light-alt py-24 sm:py-32">
      <Container>
        <div className="blog-heading text-center">
          <h2 className="text-4xl font-display font-light tracking-[-0.04em] text-dark sm:text-5xl">
            Blog
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
            Saveti, trendovi i strategije iz sveta marketinga.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-card group block">
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
                <h3 className="mt-2 text-lg font-bold leading-tight text-dark transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="blog-btn mt-12 text-center">
          <Button href="/blog/" variant="outline" size="md">
            Svi blog postovi
          </Button>
        </div>
      </Container>
    </section>
  );
}
