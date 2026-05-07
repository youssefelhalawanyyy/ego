"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "ar" ? "en" : "ar" });
  };

  const quickLinks = [
    { label: tNav("home"), href: "#hero" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    { label: tNav("machinery"), href: "#machinery" },
    { label: tNav("clients"), href: "#clients" },
    { label: tNav("contact"), href: "#contact" },
  ];

  return (
    <footer className="industrial-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.1) 35px, rgba(201,168,76,0.1) 36px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 md:px-8">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <Image
                src="/images/mgs-logo.png"
                alt="MGS Industrial"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <span className="block text-lg font-bold text-white">MGS</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-gold-400">
                  Industrial
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {[
                "fabrication",
                "cnc",
                "welding",
                "pipes",
                "pumps",
                "valves",
              ].map((key) => (
                <li key={key}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {key === "fabrication" && (locale === "ar" ? "التصنيع المعدني" : "Metal Fabrication")}
                    {key === "cnc" && (locale === "ar" ? "التشغيل بالحاسب CNC" : "CNC Machining")}
                    {key === "welding" && (locale === "ar" ? "اللحام والقطع" : "Welding & Cutting")}
                    {key === "pipes" && (locale === "ar" ? "أنابيب البترول" : "Petroleum Pipes")}
                    {key === "pumps" && (locale === "ar" ? "صيانة المضخات" : "Pump Maintenance")}
                    {key === "valves" && (locale === "ar" ? "إصلاح الصمامات" : "Valve Repair")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              {t("contactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href="tel:+201001743289"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                  dir="ltr"
                >
                  {tContact("info.phone")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400 mt-0.5" />
                <span className="text-sm text-gray-400">
                  {tContact("info.address")}
                </span>
              </li>
            </ul>
            <button
              onClick={switchLocale}
              className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition-all hover:border-gold-400/50 hover:text-gold-400"
            >
              <Globe className="h-4 w-4" />
              {locale === "ar" ? "English" : "عربي"}
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {t("company")}. {t("rights")}.
            </p>
            <div className="h-px w-12 bg-gold-400/50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
