"use client";

import { useTranslations } from "next-intl";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Scale,
  Leaf,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const items = [
  { key: "quality", icon: Award, num: "01" },
  { key: "safety", icon: ShieldCheck, num: "02" },
  { key: "innovation", icon: Lightbulb, num: "03" },
  { key: "integrity", icon: Scale, num: "04" },
  { key: "sustainability", icon: Leaf, num: "05" },
  { key: "speed", icon: Zap, num: "06" },
  { key: "team", icon: Users, num: "07" },
];

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="section-padding relative overflow-hidden">
      <Image
        src="/images/bck.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-700/85" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.15) 40px, rgba(201,168,76,0.15) 41px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          light
        />

        <StaggerContainer
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          staggerDelay={0.08}
        >
          {items.map(({ key, icon: Icon, num }, i) => (
            <StaggerItem key={key}>
              <div
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-gold-400/30 hover:bg-white/[0.08] ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
                }`}
              >
                <span className="absolute end-5 top-4 font-inter text-[3.5rem] font-black leading-none text-white/[0.03] transition-colors group-hover:text-gold-400/[0.08]">
                  {num}
                </span>

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 ring-1 ring-gold-400/20 transition-all group-hover:from-gold-400/30 group-hover:to-gold-400/10 group-hover:ring-gold-400/40">
                    <Icon className="h-7 w-7 text-gold-400" />
                  </div>
                  <h3 className="mb-2.5 text-lg font-bold text-white">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400/90">
                    {t(`items.${key}.description`)}
                  </p>
                </div>

                <div className="absolute -bottom-1 -start-1 h-24 w-24 rounded-full bg-gold-400/0 blur-2xl transition-all group-hover:bg-gold-400/5" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
