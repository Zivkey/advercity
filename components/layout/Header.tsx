"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/constants";

function getIsActive(item: NavItem, pathname: string): boolean {
  if (item.children) {
    return item.children.some((c) => {
      const base = c.href.split("#")[0].replace(/\/$/, "");
      return base !== "" && pathname.startsWith(base);
    });
  }
  if (item.href.includes("#")) return false;
  const base = item.href.replace(/\/$/, "");
  return base !== "" && (pathname === item.href || pathname.startsWith(base + "/"));
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

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
      setMobileDropdown(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Preskoci na sadrzaj
      </a>

      <header
        className={cn(
          "fixed left-0 right-0 top-0 transition-all duration-300",
          mobileOpen
            ? "z-[70] bg-transparent shadow-none"
            : scrolled
            ? "z-50 bg-white shadow-sm"
            : "z-50 bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo — hidden when mobile menu is open */}
          <Link href="/" className={cn("transition-opacity duration-300", mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100")}>
            <Image src="/images/logo.svg" alt="Advercity" width={200} height={45} priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
            {NAV_ITEMS.map((item) => {
              const active = getIsActive(item, pathname);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-primary" : "text-dark hover:text-primary"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Active underline */}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary" />
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute left-0 top-full z-50 w-64 bg-white p-2 shadow-xl ring-1 ring-black/5",
                        "transition-all duration-200 ease-out",
                        openDropdown === item.label
                          ? "visible translate-y-0 opacity-100 pointer-events-auto"
                          : "invisible -translate-y-1 opacity-0 pointer-events-none"
                      )}
                    >
                      {item.children.map((child) => {
                        const childBase = child.href.split("#")[0].replace(/\/$/, "");
                        const childActive = childBase !== "" && pathname.startsWith(childBase);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors hover:bg-light-alt hover:text-primary",
                              childActive ? "font-semibold text-primary" : "text-dark"
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop phone */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-dark transition-colors hover:text-primary"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Mobile hamburger — morphs into X */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative h-8 w-8 lg:hidden"
            aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
          >
            <span className={cn(
              "absolute left-0 h-0.5 w-full origin-center transition-all duration-300",
              mobileOpen ? "top-[8px] translate-y-[7px] rotate-45 bg-white" : "top-[8px] bg-dark"
            )} />
            <span className={cn(
              "absolute left-0 top-[15px] h-0.5 w-full transition-all duration-300",
              mobileOpen ? "scale-x-0 opacity-0 bg-white" : "bg-dark"
            )} />
            <span className={cn(
              "absolute left-0 h-0.5 w-full origin-center transition-all duration-300",
              mobileOpen ? "top-[22px] -translate-y-[7px] -rotate-45 bg-white" : "top-[22px] bg-dark"
            )} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary",
          "transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {/* Nav items */}
        <nav
          className="flex h-full flex-col items-center justify-center gap-3"
          aria-label="Mobilna navigacija"
        >
          {NAV_ITEMS.map((item, index) => {
            const active = getIsActive(item, pathname);
            return (
              <div
                key={item.label}
                className="text-center transition-all"
                style={{
                  transitionDelay: mobileOpen ? `${140 + index * 55}ms` : "0ms",
                  transitionDuration: "380ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {item.children ? (
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                    }
                    className={cn(
                      "relative text-4xl font-display font-light tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-5xl",
                      active ? "text-white" : "text-white/60"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 h-6 w-6 transition-transform duration-300",
                        "left-[calc(100%+10px)]",
                        mobileDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-4xl font-display font-light tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-5xl",
                      active ? "text-white" : "text-white/60"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile submenu */}
                {item.children && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      mobileDropdown === item.label ? "mt-3 max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      {item.children.map((child) => {
                        const childBase = child.href.split("#")[0].replace(/\/$/, "");
                        const childActive = childBase !== "" && pathname.startsWith(childBase);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "text-lg transition-opacity hover:text-white",
                              childActive ? "font-semibold text-white" : "text-white/55"
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Phone at bottom */}
        <div
          className="absolute bottom-10 left-0 right-0 text-center transition-all"
          style={{
            transitionDelay: mobileOpen ? `${140 + NAV_ITEMS.length * 55}ms` : "0ms",
            transitionDuration: "380ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
          }}
        >
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
