"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
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
  Wrench,
  Car,
  Cable,
  Star,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const services = [
  { key: "cableMachinery", icon: Star, highlighted: true, image: "/images/service-cable-machines.jpg" },
  { key: "manufacturing", icon: Wrench, image: "/images/service-manufacturing.jpg" },
  { key: "wiringHarness", icon: Car, image: "/images/service-wiring-harness.jpg" },
  { key: "insulationBraiding", icon: Cable, image: "/images/service-insulation.jpg" },
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
  const locale = useLocale();

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
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5"
          staggerDelay={0.06}
        >
          {services.map(({ key, icon: Icon, highlighted, image }) => (
            <StaggerItem key={key}>
              {highlighted ? (
                <div className="group relative overflow-hidden rounded-2xl border-2 border-gold-400/50 bg-white shadow-lg shadow-gold-400/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-400/20 sm:col-span-2 lg:col-span-1">
                  {image && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={image}
                        alt={t(`items.${key}.title`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-700/60 to-transparent" />
                      <span className="absolute top-3 end-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-primary-700">
                        <Star className="h-3 w-3" />
                        {locale === "ar" ? "تخصصنا الرئيسي" : "Our Specialty"}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 shadow-lg shadow-gold-400/30">
                      <Icon className="h-6 w-6 text-primary-700" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 gold-gradient" />
                </div>
              ) : (
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold-300 hover:shadow-xl">
                  {image && (
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={image}
                        alt={t(`items.${key}.title`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                    </div>
                  )}
                  <div className={image ? "p-5" : "p-6"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/0 transition-all group-hover:from-gold-400/5 group-hover:to-primary-700/5" />
                    <div className="relative">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 transition-all group-hover:bg-primary-600 group-hover:shadow-lg group-hover:shadow-primary-700/20">
                        <Icon className="h-6 w-6 text-gold-400" />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-gray-900">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500">
                        {t(`items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
