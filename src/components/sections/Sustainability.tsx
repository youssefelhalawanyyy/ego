"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TreePine, ShieldCheck, TrendingUp, HeartHandshake, Equal } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const items = [
  { key: "environment", icon: TreePine, accent: "bg-emerald-500", accentLight: "bg-emerald-50 text-emerald-600 ring-emerald-200" },
  { key: "safety", icon: ShieldCheck, accent: "bg-blue-500", accentLight: "bg-blue-50 text-blue-600 ring-blue-200" },
  { key: "improvement", icon: TrendingUp, accent: "bg-amber-500", accentLight: "bg-amber-50 text-amber-600 ring-amber-200" },
  { key: "community", icon: HeartHandshake, accent: "bg-rose-500", accentLight: "bg-rose-50 text-rose-600 ring-rose-200" },
  { key: "diversity", icon: Equal, accent: "bg-violet-500", accentLight: "bg-violet-50 text-violet-600 ring-violet-200" },
];

export function Sustainability() {
  const t = useTranslations("sustainability");

  return (
    <section className="section-padding bg-industrial-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -start-40 top-20 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute -end-40 bottom-20 h-80 w-80 rounded-full bg-gold-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {items.map(({ key, icon: Icon, accent, accentLight }, i) => (
            <StaggerItem key={key} className={i >= 3 ? "lg:col-span-1 md:col-span-1" : ""}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-gold-300/60 hover:shadow-xl hover:shadow-gold-400/5"
              >
                <div className={`absolute end-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full ${accent} opacity-[0.06] blur-2xl transition-all group-hover:opacity-[0.12]`} />

                <div className="relative z-10">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${accentLight} transition-transform group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {t(`items.${key}.description`)}
                  </p>
                </div>

                <div className={`absolute bottom-0 start-0 h-1 w-0 ${accent} transition-all duration-500 group-hover:w-full`} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
