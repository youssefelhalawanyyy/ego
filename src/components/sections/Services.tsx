"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Hammer,
  Cpu,
  Flame,
  Pipette,
  Droplets,
  CircleDot,
  Wind,
  Factory,
  Plug,
  Building2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const services = [
  { key: "fabrication", icon: Hammer },
  { key: "cnc", icon: Cpu },
  { key: "welding", icon: Flame },
  { key: "pipes", icon: Pipette },
  { key: "pumps", icon: Droplets },
  { key: "valves", icon: CircleDot },
  { key: "compressors", icon: Wind },
  { key: "factory", icon: Factory },
  { key: "installations", icon: Plug },
  { key: "infrastructure", icon: Building2 },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding bg-industrial-light">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <StaggerContainer
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-6"
          staggerDelay={0.08}
        >
          {services.map(({ key, icon: Icon }) => (
            <StaggerItem key={key}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/0 transition-all group-hover:from-gold-400/5 group-hover:to-primary-700/5" />
                <div className="absolute -end-12 -top-12 h-24 w-24 rounded-full bg-gold-400/0 transition-all group-hover:bg-gold-400/10" />

                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-700 transition-all group-hover:bg-primary-600 group-hover:shadow-lg group-hover:shadow-primary-700/20">
                    <Icon className="h-7 w-7 text-gold-400" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {t(`items.${key}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 opacity-0 transition-opacity group-hover:opacity-100">
                    {t("learnMore")}
                    <svg
                      className="h-4 w-4 rtl:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
