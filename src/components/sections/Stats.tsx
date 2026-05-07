"use client";

import { useTranslations } from "next-intl";
import { Calendar, FolderCheck, Handshake, HardHat } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { MotionDiv } from "@/components/ui/MotionWrapper";

const stats = [
  { key: "years", value: 19, suffix: "+", icon: Calendar },
  { key: "projects", value: 500, suffix: "+", icon: FolderCheck },
  { key: "partners", value: 80, suffix: "+", icon: Handshake },
  { key: "engineers", value: 85, suffix: "+", icon: HardHat },
];

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-gold-50/50" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <MotionDiv className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full border border-primary-200 bg-primary-50 px-5 py-2 text-sm font-semibold text-primary-700">
            {t("badge")}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
        </MotionDiv>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map(({ key, value, suffix, icon: Icon }, i) => (
            <MotionDiv key={key} delay={i * 0.1}>
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 transition-all group-hover:border-gold-300 group-hover:bg-gold-50">
                  <Icon className="h-7 w-7 text-primary-700 transition-colors group-hover:text-gold-500" />
                </div>
                <div className="mb-1 text-3xl font-black text-primary-700 sm:text-4xl md:text-5xl">
                  <Counter end={value} suffix={suffix} />
                </div>
                <p className="text-sm font-medium text-gray-500">
                  {t(key)}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
