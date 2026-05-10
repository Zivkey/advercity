"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
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
  const [headerInMenuMode, setHeaderInMenuMode] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [drilldown, setDrilldown] = useState<string | null>(null);
  const [drilldownItemsVisible, setDrilldownItemsVisible] = useState(false);
  const [renderedDrilldown, setRenderedDrilldown] = useState<NavItem | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      setHeaderInMenuMode(true);
    } else {
      document.body.style.overflow = "";
      setDrilldown(null);
      const t = setTimeout(() => setHeaderInMenuMode(false), 220);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (drilldown) {
      const item = NAV_ITEMS.find((i) => i.label === drilldown);
      if (item) setRenderedDrilldown(item);
      setDrilldownItemsVisible(true);
    } else {
      const t = setTimeout(() => setDrilldownItemsVisible(false), 460);
      return () => clearTimeout(t);
    }
  }, [drilldown]);

  const closeMobile = () => {
    setMobileOpen(false);
    setDrilldown(null);
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Preskoci na sadrzaj
      </a>

      <header
        className={cn(
          "fixed left-0 right-0 top-0 transition-all duration-300",
          headerInMenuMode
            ? "z-[70] bg-transparent shadow-none"
            : scrolled
            ? "z-50 bg-white shadow-sm"
            : "z-50 bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo — hidden when mobile menu is open */}
          <div className="relative">
            <Link href="/" className={cn("block transition-opacity duration-300", headerInMenuMode ? "opacity-0 pointer-events-none" : "opacity-100")}>
              <Image src="/images/logo.svg" alt="Advercity" width={200} height={45} priority />
            </Link>
            {/* Mobile back button — appears when drilldown is open */}
            <button
              onClick={() => setDrilldown(null)}
              className={cn(
                "absolute left-0 top-1/2 flex h-8 -translate-y-1/2 items-center gap-1.5 transition-opacity duration-200 lg:hidden",
                drilldown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
              aria-label="Nazad na glavni meni"
              tabIndex={drilldown ? 0 : -1}
            >
              <ChevronLeft className="h-7 w-7 text-white" strokeWidth={2.25} />
              <span className="text-xl font-medium text-white">Nazad</span>
            </button>
          </div>

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
              mobileOpen ? "top-[8px] translate-y-[7px] rotate-45" : "top-[8px]",
              headerInMenuMode ? "bg-white" : "bg-dark"
            )} />
            <span className={cn(
              "absolute left-0 top-[15px] h-0.5 w-full transition-all duration-300",
              mobileOpen ? "scale-x-0 opacity-0" : "",
              headerInMenuMode ? "bg-white" : "bg-dark"
            )} />
            <span className={cn(
              "absolute left-0 h-0.5 w-full origin-center transition-all duration-300",
              mobileOpen ? "top-[22px] -translate-y-[7px] -rotate-45" : "top-[22px]",
              headerInMenuMode ? "bg-white" : "bg-dark"
            )} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-hidden bg-primary",
          "transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {/* Main panel */}
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
            drilldown ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <nav
            className="flex h-full flex-col items-center justify-center gap-3"
            aria-label="Mobilna navigacija"
          >
            {NAV_ITEMS.map((item, index) => {
              const active = getIsActive(item, pathname);
              const visible = mobileOpen && !drilldown;
              return (
                <div
                  key={item.label}
                  className="text-center transition-all"
                  style={{
                    transitionDelay: visible ? `${140 + index * 55}ms` : "0ms",
                    transitionDuration: "380ms",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {item.children ? (
                    <button
                      onClick={() => setDrilldown(item.label)}
                      className={cn(
                        "relative text-4xl font-display font-light tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-5xl",
                        active ? "text-white" : "text-white/60"
                      )}
                    >
                      {item.label}
                      <ChevronRight
                        className="absolute top-1/2 left-[calc(100%+10px)] h-6 w-6 -translate-y-1/2"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        "text-4xl font-display font-light tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-5xl",
                        active ? "text-white" : "text-white/60"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Phone at bottom */}
          <div
            className="absolute bottom-10 left-0 right-0 text-center transition-all"
            style={{
              transitionDelay:
                mobileOpen && !drilldown ? `${140 + NAV_ITEMS.length * 55}ms` : "0ms",
              transitionDuration: "380ms",
              opacity: mobileOpen && !drilldown ? 1 : 0,
              transform:
                mobileOpen && !drilldown ? "translateY(0)" : "translateY(16px)",
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

        {/* Drilldown panel */}
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
            drilldown ? "translate-x-0" : "translate-x-full"
          )}
          aria-hidden={!drilldown}
        >
          {renderedDrilldown && (
            <nav
              className="flex h-full flex-col items-center justify-center gap-4 px-6"
              aria-label={renderedDrilldown.label}
            >
              <div
                className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40 transition-all"
                style={{
                  transitionDelay: drilldownItemsVisible ? "120ms" : "0ms",
                  transitionDuration: "320ms",
                  opacity: drilldownItemsVisible ? 1 : 0,
                  transform: drilldownItemsVisible ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {renderedDrilldown.label}
              </div>
              {renderedDrilldown.children?.map((child, index) => {
                const childBase = child.href.split("#")[0].replace(/\/$/, "");
                const childActive =
                  childBase !== "" && pathname.startsWith(childBase);
                return (
                  <div
                    key={child.href}
                    className="text-center transition-all"
                    style={{
                      transitionDelay: drilldownItemsVisible
                        ? `${180 + index * 35}ms`
                        : "0ms",
                      transitionDuration: "340ms",
                      opacity: drilldownItemsVisible ? 1 : 0,
                      transform: drilldownItemsVisible
                        ? "translateY(0)"
                        : "translateY(16px)",
                    }}
                  >
                    <Link
                      href={child.href}
                      onClick={closeMobile}
                      className={cn(
                        "text-3xl font-display font-light tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-4xl",
                        childActive ? "text-white" : "text-white/65"
                      )}
                    >
                      {child.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
