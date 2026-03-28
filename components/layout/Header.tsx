"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";
import { ChevronDown, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Preskoci na sadrzaj
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Advercity"
              width={142}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-dark transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full w-64 bg-white p-2 shadow-xl ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-dark transition-colors hover:bg-light-alt hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-dark transition-colors hover:text-primary"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-dark lg:hidden"
            aria-label="Otvori meni"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary transition-all duration-500",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-6 top-6 text-white"
          aria-label="Zatvori meni"
        >
          <X className="h-8 w-8" />
        </button>

        <nav className="flex flex-col items-center gap-4" aria-label="Mobilna navigacija">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="text-center">
              <button
                onClick={() => {
                  if (item.children) {
                    setMobileDropdown(
                      mobileDropdown === item.label ? null : item.label
                    );
                  } else {
                    setMobileOpen(false);
                    window.location.href = item.href;
                  }
                }}
                className="text-4xl font-black text-white transition-opacity hover:opacity-80 sm:text-5xl"
              >
                {item.label}
              </button>
              {item.children && mobileDropdown === item.label && (
                <div className="mt-3 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg text-white/70 transition-opacity hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-10 text-center">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="text-xl font-bold text-white/80"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
