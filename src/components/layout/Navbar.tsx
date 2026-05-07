"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "machinery", href: "#machinery" },
  { key: "clients", href: "#clients" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const updateActiveSection = useCallback(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    let current = "hero";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      updateActiveSection();
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [updateActiveSection]);

  const switchLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: next });
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-primary-700/95 shadow-xl backdrop-blur-md"
            : "bg-primary-700/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 md:px-8">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
            <Image
              src="/images/mgs-logo.png"
              alt="MGS Industrial"
              width={40}
              height={40}
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
            />
            <div className="text-start">
              <span className="block text-base font-bold leading-none text-white sm:text-lg">
                MGS
              </span>
              <span className="block text-[9px] font-medium uppercase tracking-widest text-gold-400 sm:text-[10px]">
                Industrial
              </span>
            </div>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.href)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                    isActive ? "text-gold-400" : "text-white/80"
                  }`}
                >
                  {t(link.key)}
                  {isActive && (
                    <div className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full gold-gradient transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={switchLocale}
              className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {locale === "ar" ? "EN" : "عربي"}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary-700/98 pt-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-1 p-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className={`w-full rounded-xl px-6 py-3.5 text-center text-lg font-medium transition-colors hover:bg-white/10 ${
                  isActive
                    ? "bg-gold-400/10 text-gold-400"
                    : "text-white/90"
                }`}
              >
                {t(link.key)}
              </button>
            );
          })}
          <div className="mt-4 w-full">
            <button
              onClick={switchLocale}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-white"
            >
              <Globe className="h-5 w-5" />
              {locale === "ar" ? "English" : "عربي"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
