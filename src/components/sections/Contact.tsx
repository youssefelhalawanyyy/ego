"use client";

import { useTranslations, useLocale } from "next-intl";
import { Phone, MapPin, MessageCircle, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const contactInfo = [
    {
      icon: Phone,
      label: t("info.phone"),
      href: "tel:+201001743289",
    },
    {
      icon: MapPin,
      label: t("info.address"),
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding industrial-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(201,168,76,0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
          light
        />

        <MotionDiv>
          <div className="space-y-4 sm:space-y-5">
            {contactInfo.map(({ icon: Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold-400/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/10">
                  <Icon className="h-5 w-5 text-gold-400" />
                </div>
                <span className="text-sm text-gray-300 transition-colors group-hover:text-white sm:text-base" dir={href.startsWith("tel:") ? "ltr" : undefined}>
                  {label}
                </span>
              </a>
            ))}

            <a
              href="https://wa.me/201001743289"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/20 p-5 text-green-400 transition-all hover:bg-green-500/20 hover:border-green-500/30"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-base font-semibold">
                {t("info.whatsapp")}
              </span>
            </a>

            {/* Download Company Profile */}
            <a
              href="/MGS-01.pdf"
              download="MGS-Industrial-Profile.pdf"
              className="group flex items-center justify-center gap-3 rounded-2xl gold-gradient p-5 text-primary-700 transition-all hover:shadow-lg hover:shadow-gold-400/20"
            >
              <Download className="h-6 w-6" />
              <span className="text-base font-bold">
                {locale === "ar" ? "تحميل ملف الشركة" : "Download Company Profile"}
              </span>
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
