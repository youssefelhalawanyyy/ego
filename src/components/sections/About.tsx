"use client";

import { useTranslations } from "next-intl";
import { Target, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const timelineYears = ["2004", "2008", "2012", "2016", "2020", "2024"] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
        />

        <div className="mb-12 grid items-center gap-8 sm:mb-20 sm:gap-12 lg:grid-cols-2">
          <MotionDiv variant="slideInLeft">
            <p className="text-lg leading-relaxed text-gray-600">
              {t("description")}
            </p>
          </MotionDiv>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            <StaggerItem>
              <div className="group rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 transition-all hover:border-gold-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700">
                  <Target className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {t("mission.title")}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("mission.text")}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 transition-all hover:border-gold-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700">
                  <Eye className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {t("vision.title")}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("vision.text")}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Timeline */}
        <MotionDiv>
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
            {t("timeline.title")}
          </h3>
        </MotionDiv>
        <div className="relative">
          <div className="absolute top-0 bottom-0 start-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-primary-200 via-gold-400 to-primary-200 md:block" />
          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {timelineYears.map((year, i) => (
              <StaggerItem key={year}>
                <div
                  className={`flex flex-col items-center gap-4 md:flex-row ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-end" : "md:text-start"
                    }`}
                  >
                    <div className="inline-block rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-gold-300 hover:shadow-md">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {t(`timeline.${year}`)}
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-700 font-bold text-gold-400 shadow-lg">
                    {year.slice(2)}
                  </div>
                  <div className="flex-1" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
