"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { Lightbox } from "@/components/ui/Lightbox";

const machineryImages = [
  {
    src: "/images/machinery-factory.jpg",
    labelAr: "خطوط الإنتاج الآلية",
    labelEn: "Automated Production Lines",
  },
  {
    src: "/images/machinery-pump.webp",
    labelAr: "المضخات الصناعية",
    labelEn: "Industrial Pumps",
  },
  {
    src: "/images/machinery-valves.webp",
    labelAr: "الصمامات والمحابس",
    labelEn: "Industrial Valves",
  },
  {
    src: "/images/machinery-laser.jpg",
    labelAr: "القطع بالليزر واللحام",
    labelEn: "Laser Cutting & Welding",
  },
  {
    src: "/images/machinery-cnc.jpg",
    labelAr: "ماكينات CNC",
    labelEn: "CNC Machines",
  },
];

export function Machinery() {
  const t = useTranslations("machinery");
  const locale = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages = machineryImages.map((img) => ({
    src: img.src,
    alt: locale === "ar" ? img.labelAr : img.labelEn,
  }));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + machineryImages.length) % machineryImages.length : null
    );
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % machineryImages.length : null
    );
  }, []);

  return (
    <section id="machinery" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26,60,42,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <StaggerContainer staggerDelay={0.1}>
          {/* Featured large image */}
          <StaggerItem>
            <div
              onClick={() => openLightbox(0)}
              className="group relative mb-4 h-[220px] cursor-pointer overflow-hidden rounded-2xl bg-gray-100 transition-transform duration-300 hover:scale-[1.01] sm:mb-6 sm:h-[320px] sm:rounded-3xl md:h-[420px]"
            >
              <Image
                src={machineryImages[0].src}
                alt={locale === "ar" ? machineryImages[0].labelAr : machineryImages[0].labelEn}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-700/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/90 px-4 py-1.5 text-sm font-bold text-primary-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-700" />
                  {locale === "ar" ? machineryImages[0].labelAr : machineryImages[0].labelEn}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-5 w-5" />
                </span>
              </div>
            </div>
          </StaggerItem>

          {/* Grid of remaining images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
            {machineryImages.slice(1).map((item, i) => (
              <StaggerItem key={i}>
                <div
                  onClick={() => openLightbox(i + 1)}
                  className="group relative h-[160px] cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:-translate-y-1.5 sm:h-[200px] sm:rounded-2xl md:h-[260px]"
                >
                  <Image
                    src={item.src}
                    alt={locale === "ar" ? item.labelAr : item.labelEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-700/80 via-primary-700/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-sm font-semibold text-white">
                      {locale === "ar" ? item.labelAr : item.labelEn}
                    </span>
                  </div>
                  <div className="absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
