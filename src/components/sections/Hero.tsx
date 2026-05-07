"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Wrench, Cog, Factory } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: 19, suffix: "+", label: t("stats.years") },
    { value: 500, suffix: "+", label: t("stats.projects") },
    { value: 150, suffix: "+", label: t("stats.clients") },
    { value: 85, suffix: "+", label: t("stats.team") },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
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

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute end-[10%] top-[20%] opacity-10 hidden md:block"
      >
        <Cog className="h-32 w-32 text-gold-400" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] start-[5%] opacity-10 hidden md:block"
      >
        <Wrench className="h-24 w-24 text-gold-400" />
      </motion.div>
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute end-[20%] top-[60%] opacity-10 hidden md:block"
      >
        <Factory className="h-28 w-28 text-gold-400" />
      </motion.div>

      <div className="absolute start-0 top-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="absolute bottom-0 end-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2 text-sm font-medium text-gold-300">
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-3xl font-black leading-tight text-white text-shadow-lg sm:text-4xl md:text-6xl lg:text-7xl"
          >
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleHighlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300/90 md:text-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="gold-gradient group flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-primary-700 shadow-lg shadow-gold-400/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold-400/30"
            >
              {t("cta")}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-gold-400/50 hover:bg-white/5"
            >
              {t("explore")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:mt-20 sm:gap-4 md:grid-cols-4"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
