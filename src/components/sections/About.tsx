"use client";

import { useTranslations, useLocale } from "next-intl";
import { Target, Eye, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { Counter } from "@/components/ui/Counter";

const timelineYears = ["2003", "2008", "2012", "2016", "2020", "2025"] as const;

export function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const yearsOfService = new Date().getFullYear() - 2003;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
        />

        {/* Years badge */}
        <MotionDiv className="mb-10 sm:mb-14">
          <div className="mx-auto flex max-w-md items-center gap-4 rounded-2xl border border-gold-200 bg-gradient-to-r from-gold-50 to-white p-5 shadow-sm sm:gap-6 sm:p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-700 sm:h-20 sm:w-20">
              <Calendar className="h-7 w-7 text-gold-400 sm:h-8 sm:w-8" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-primary-700 sm:text-4xl">
                  <Counter end={yearsOfService} suffix="+" />
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 sm:text-base">
                {locale === "ar" ? "عامًا في خدمة مصر منذ ٢٠٠٣" : "Years serving Egypt since 2003"}
              </p>
            </div>
          </div>
        </MotionDiv>

        <div className="mb-12 grid items-center gap-8 sm:mb-20 sm:gap-12 lg:grid-cols-2">
          <MotionDiv variant="slideLeft">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {t("description")}
            </p>
          </MotionDiv>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <StaggerItem>
              <div className="group rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-5 transition-all hover:border-gold-300 hover:shadow-lg sm:p-6">
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
              <div className="group rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-5 transition-all hover:border-gold-300 hover:shadow-lg sm:p-6">
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
          <h3 className="mb-8 text-center text-xl font-bold text-gray-900 sm:mb-10 sm:text-2xl">
            {t("timeline.title")}
          </h3>
        </MotionDiv>
        <div className="relative">
          <div className="absolute top-0 bottom-0 start-6 w-px bg-gradient-to-b from-primary-200 via-gold-400 to-primary-200 md:start-1/2 md:-translate-x-1/2" />
          <StaggerContainer className="space-y-6 sm:space-y-8" staggerDelay={0.15}>
            {timelineYears.map((year, i) => (
              <StaggerItem key={year}>
                <div
                  className={`flex items-start gap-4 ps-14 md:ps-0 md:flex-row md:items-center md:gap-4 ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden flex-1 md:block ${
                      i % 2 === 0 ? "md:text-end" : "md:text-start"
                    }`}
                  >
                    <div className="inline-block rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-gold-300 hover:shadow-md sm:p-5">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {t(`timeline.${year}`)}
                      </p>
                    </div>
                  </div>
                  <div className="absolute start-1 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-gold-400 shadow-lg md:static md:h-12 md:w-12 md:text-base">
                    {year.slice(2)}
                  </div>
                  <div className="flex-1 md:hidden">
                    <div className="inline-block rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {t(`timeline.${year}`)}
                      </p>
                    </div>
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
