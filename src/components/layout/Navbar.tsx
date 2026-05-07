"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-primary-700/95 shadow-xl backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
            <Image
              src="/images/mgs-logo.png"
              alt="MGS Industrial"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <div className="text-start">
              <span className="block text-lg font-bold leading-none text-white">
                MGS
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-gold-400">
                Industrial
              </span>
            </div>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={switchLocale}
              className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {locale === "ar" ? "EN" : "عربي"}
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="gold-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-700 transition-transform hover:scale-105"
            >
              {t("getQuote")}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary-700/98 pt-20 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.href)}
                  className="w-full rounded-xl px-6 py-4 text-center text-lg font-medium text-white/90 transition-colors hover:bg-white/10"
                >
                  {t(link.key)}
                </button>
              ))}
              <div className="mt-4 flex w-full gap-3">
                <button
                  onClick={switchLocale}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-white"
                >
                  <Globe className="h-5 w-5" />
                  {locale === "ar" ? "English" : "عربي"}
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="gold-gradient flex-1 rounded-xl py-3 font-semibold text-primary-700"
                >
                  {t("getQuote")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
