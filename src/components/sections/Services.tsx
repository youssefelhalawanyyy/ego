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
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const highlightedService = {
  key: "cableMachinery",
  icon: Star,
  image: "/images/3333.jpg.webp",
};

const services = [
  { key: "manufacturing", icon: Wrench, image: "/images/large-2.jpg" },
  { key: "wiringHarness", icon: Car, image: "/images/1.jpg-2.webp" },
  { key: "insulationBraiding", icon: Cable, image: "/images/rolls-industrial-cotton-fabric-clothing-600nw-2277300263.jpg.webp" },
  { key: "fabrication", icon: Hammer, image: "/images/360_F_418548853_cmowLeC2dAwPaiPgQmlTc1QmpxVD1tFT-2.jpg" },
  { key: "cnc", icon: Cpu, image: "/images/1.jpg-3.webp" },
  { key: "welding", icon: Flame, image: "/images/11.jpg.webp" },
  { key: "pipes", icon: Pipette, image: "/images/360_F_711599297_V9oV6lqZjXhO5aH7mIU5M7CXzoPnUHoq.jpg" },
  { key: "pumps", icon: Droplets, image: "/images/gettyimages-2214395253-640x640.jpg" },
  { key: "valves", icon: CircleDot, image: "/images/images-3.jpeg" },
  { key: "compressors", icon: Wind, image: "/images/images-4.jpeg" },
  { key: "factory", icon: Factory, image: "/images/images-5.jpeg" },
  { key: "installations", icon: Plug },
  { key: "infrastructure", icon: Building2 },
];

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const HIcon = highlightedService.icon;

  return (
    <section id="services" className="section-padding bg-industrial-light">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        {/* Highlighted: Cable Machinery Manufacturing */}
        <MotionDiv className="mb-6 sm:mb-8">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-gold-400/50 bg-white shadow-xl shadow-gold-400/10 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/20">
            <div className="grid md:grid-cols-2">
              <div className="relative h-56 overflow-hidden sm:h-64 md:h-full md:min-h-[320px]">
                <Image
                  src={highlightedService.image}
                  alt={t(`items.${highlightedService.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/20" />
                <span className="absolute top-4 start-4 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold text-primary-700 shadow-lg">
                  <Star className="h-3.5 w-3.5" />
                  {locale === "ar" ? "تخصصنا الرئيسي" : "Our Specialty"}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 shadow-lg shadow-gold-400/30">
                  <HIcon className="h-7 w-7 text-primary-700" />
                </div>
                <h3 className="mb-3 text-xl font-black text-gray-900 sm:text-2xl">
                  {t(`items.${highlightedService.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                  {t(`items.${highlightedService.key}.description`)}
                </p>
                <div className="mt-5 h-1 w-20 rounded-full gold-gradient" />
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Other services grid */}
        <StaggerContainer
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          staggerDelay={0.05}
        >
          {services.map(({ key, icon: Icon, image }) => (
            <StaggerItem key={key}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg">
                {image ? (
                  <div className="relative h-32 shrink-0 overflow-hidden sm:h-36">
                    <Image
                      src={image}
                      alt={t(`items.${key}.title`)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-2 start-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-700/90 backdrop-blur-sm">
                      <Icon className="h-4 w-4 text-gold-400" />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-32 shrink-0 items-center justify-center bg-gradient-to-br from-primary-700 to-primary-800 sm:h-36">
                    <Icon className="h-10 w-10 text-gold-400/60" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="mb-1 text-sm font-bold text-gray-900 sm:text-base">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm line-clamp-3">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
