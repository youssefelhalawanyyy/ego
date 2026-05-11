"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowDown, Download } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [scrollY, setScrollY] = useState(0);
  const [typeDone, setTypeDone] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTypeDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 22, suffix: "+", label: t("stats.years") },
    { value: 500, suffix: "+", label: t("stats.projects") },
    { value: 150, suffix: "+", label: t("stats.clients") },
    { value: 85, suffix: "+", label: t("stats.team") },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)`, willChange: "transform" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-primary-700/80" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(201,168,76,0.3) 100px, rgba(201,168,76,0.3) 101px), repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(201,168,76,0.3) 100px, rgba(201,168,76,0.3) 101px)",
          }}
        />
      </div>

      <div className="absolute start-0 top-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="absolute bottom-0 end-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2 text-sm font-medium text-gold-300">
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              {t("badge")}
            </span>
          </div>

          <h1 className="mb-6 animate-fade-up text-3xl font-black leading-tight text-white text-shadow-lg sm:text-4xl md:text-6xl lg:text-7xl">
            {t("title")}
            <br />
            <span className={`gradient-text typewriter ${typeDone ? "typewriter-done" : ""}`}>
              {t("titleHighlight")}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-up text-base leading-relaxed text-gray-300/90 sm:text-lg md:text-xl" style={{ animationDelay: "0.15s" }}>
            {t("subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row sm:gap-4" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="gold-gradient group flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-primary-700 shadow-lg shadow-gold-400/20 transition-transform hover:scale-105"
            >
              {t("cta")}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/MGS-01.pdf"
              download="MGS-Industrial-Profile.pdf"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-gold-400/50 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              {locale === "ar" ? "ملف الشركة" : "Company Profile"}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 animate-fade-up sm:mt-20 sm:gap-4 md:grid-cols-4" style={{ animationDelay: "0.45s" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl px-4 py-4 text-center sm:px-6 sm:py-6"
            >
              <div className="mb-1 text-2xl font-black text-gold-400 sm:text-3xl md:text-4xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-medium text-gray-400 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gold-400/60" />
        </div>
      </div>
    </section>
  );
}
