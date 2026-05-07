"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe, X } from "lucide-react";

export function LanguagePopup() {
  const [show, setShow] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only show once per session
    const dismissed = sessionStorage.getItem("lang-popup-dismissed");
    if (dismissed) return;

    // Detect browser language
    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "";
    const isArabicBrowser = browserLang.startsWith("ar");
    const isEnglishBrowser = browserLang.startsWith("en");

    // Suggest switch if browser language doesn't match current locale
    if ((isArabicBrowser && locale !== "ar") || (isEnglishBrowser && locale !== "en")) {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [locale]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("lang-popup-dismissed", "1");
  };

  const switchLang = () => {
    const next = locale === "ar" ? "en" : "ar";
    sessionStorage.setItem("lang-popup-dismissed", "1");
    router.replace(pathname, { locale: next });
  };

  if (!show) return null;

  const suggestedLang = locale === "ar" ? "English" : "العربية";
  const message =
    locale === "ar"
      ? "Would you like to switch to English?"
      : "هل تريد التبديل إلى العربية؟";

  return (
    <div className="fixed bottom-24 start-6 z-50 animate-fade-up">
      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-primary-700/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/10">
          <Globe className="h-5 w-5 text-gold-400" />
        </div>
        <div className="flex-1">
          <p className="mb-3 text-sm text-white/90">{message}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={switchLang}
              className="rounded-lg bg-gold-400/90 px-4 py-1.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-gold-400"
            >
              {suggestedLang}
            </button>
            <button
              onClick={dismiss}
              className="rounded-lg border border-white/20 px-4 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10"
            >
              {locale === "ar" ? "No thanks" : "لا، شكراً"}
            </button>
          </div>
        </div>
        <button onClick={dismiss} className="text-white/40 hover:text-white/70">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
