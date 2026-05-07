"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";

export function Contact() {
  const t = useTranslations("contact");

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

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
          light
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <MotionDiv variant="slideInLeft" className="lg:col-span-3">
            <form className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                    placeholder={t("form.name")}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                    placeholder={t("form.email")}
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                    placeholder={t("form.phone")}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                    placeholder={t("form.company")}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("form.service")}
                </label>
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-400 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30">
                  <option value="">{t("form.selectService")}</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("form.message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                  placeholder={t("form.message")}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="gold-gradient flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-primary-700 shadow-lg shadow-gold-400/20"
              >
                <Send className="h-5 w-5" />
                {t("form.submit")}
              </motion.button>
            </form>
          </MotionDiv>

          <MotionDiv variant="slideInRight" className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
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
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
