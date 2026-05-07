"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";

export function Team() {
  const t = useTranslations("team");

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <MotionDiv delay={0.2}>
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-primary-50/50 to-gold-50/30 p-8 shadow-sm md:p-12">
              <Quote className="absolute start-6 top-6 h-8 w-8 text-gold-400/30" />
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-700">
                  <span className="text-2xl font-bold text-gold-400">MQ</span>
                </div>
                <blockquote className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                  &ldquo;{t("gmMessage")}&rdquo;
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {t("gmName")}
                  </p>
                  <p className="text-sm font-medium text-gold-500">
                    {t("gm")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
