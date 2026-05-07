"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Grid3X3, X } from "lucide-react";

type Client =
  | { type: "image"; name: string; src: string }
  | { type: "text"; name: string; nameAr: string };

const clients: Client[] = [
  { type: "image", name: "Toyota Egypt", src: "/images/client-toyota.png" },
  { type: "image", name: "Toshiba", src: "/images/client-3.png" },
  { type: "image", name: "Cemex", src: "/images/client-cemex.jpg" },
  { type: "image", name: "Elsewedy Electric", src: "/images/client-5.png" },
  { type: "image", name: "LEONI", src: "/images/client-4.png" },
  { type: "image", name: "Sumitomo Electric", src: "/images/client-6.png" },
  { type: "image", name: "Bahgat Group", src: "/images/client-bahgat.jpg" },
  { type: "image", name: "Wadi El Neel Hospital", src: "/images/client-7.png" },
  { type: "text", name: "Armed Forces Engineering", nameAr: "الهيئة الهندسية للقوات المسلحة" },
  { type: "text", name: "Sohag Water & Sanitation", nameAr: "مياه الشرب والصرف الصحي بسوهاج" },
  { type: "text", name: "Beni Suef Power Station", nameAr: "محطة كهرباء بني سويف" },
  { type: "text", name: "Al-Qalaa Foundry", nameAr: "شركة القلعة للمسبوكات" },
  { type: "text", name: "MA Auto", nameAr: "MA Auto" },
];

function ClientLogo({ client }: { client: Client }) {
  if (client.type === "image") {
    return (
      <div className="group flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 transition-all hover:border-gold-300 hover:shadow-lg sm:h-24 sm:w-48 sm:px-5">
        <Image
          src={client.src}
          alt={client.name}
          width={160}
          height={60}
          className="max-h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
        />
      </div>
    );
  }

  return (
    <div className="group flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 transition-all hover:border-gold-300 hover:shadow-lg sm:h-24 sm:w-48 sm:px-4">
      <span className="text-center text-xs font-bold leading-tight text-gray-500 transition-colors group-hover:text-primary-700 sm:text-sm">
        {client.nameAr}
      </span>
    </div>
  );
}

function ClientGridCard({ client, locale }: { client: Client; locale: string }) {
  if (client.type === "image") {
    return (
      <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white p-5 transition-all hover:border-gold-400/40 hover:shadow-lg hover:shadow-gold-400/10">
        <div className="flex h-16 w-full items-center justify-center sm:h-20">
          <Image
            src={client.src}
            alt={client.name}
            width={160}
            height={60}
            className="max-h-14 w-auto object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-16"
          />
        </div>
        <span className="text-center text-xs font-medium text-gray-500 transition-colors group-hover:text-primary-700 sm:text-sm">
          {client.name}
        </span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white p-5 transition-all hover:border-gold-400/40 hover:shadow-lg hover:shadow-gold-400/10">
      <div className="flex h-16 w-full items-center justify-center sm:h-20">
        <span className="text-center text-base font-bold leading-tight text-primary-700/70 transition-colors group-hover:text-primary-700 sm:text-lg">
          {locale === "ar" ? client.nameAr : client.name}
        </span>
      </div>
      <span className="text-center text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-600 sm:text-sm">
        {locale === "ar" ? client.name : client.nameAr}
      </span>
    </div>
  );
}

function AllClientsModal({ onClose, locale }: { onClose: () => void; locale: string }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl industrial-gradient border border-white/10 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            {locale === "ar" ? "جميع العملاء" : "All Clients"}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            {locale === "ar" ? "عملاؤنا وشركاؤنا" : "Our Clients & Partners"}
          </h3>
          <p className="mt-2 text-sm text-white/50">
            {locale === "ar"
              ? `${clients.length} شركة تثق في خدماتنا`
              : `${clients.length} companies trust our services`}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
          {clients.map((client, i) => (
            <ClientGridCard key={i} client={client} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}

function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      ref.current.scrollLeft = scrollLeft.current - (x - startX.current);
    },
    [isDragging]
  );

  const onEnd = useCallback(() => setIsDragging(false), []);

  return { ref, isDragging, onMouseDown, onMouseMove, onMouseUp: onEnd, onMouseLeave: onEnd };
}

export function Clients() {
  const t = useTranslations("clients");
  const locale = useLocale();
  const drag1 = useDragScroll();
  const drag2 = useDragScroll();
  const [showAll, setShowAll] = useState(false);

  const doubledClients = [...clients, ...clients];
  const reversedClients = [...clients.slice(6), ...clients.slice(0, 6), ...clients.slice(6), ...clients.slice(0, 6)];

  return (
    <section id="clients" className="section-padding bg-industrial-light">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <MotionDiv>
          {/* Row 1 */}
          <div className="relative overflow-hidden py-3 sm:py-4">
            <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-e from-industrial-light to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-s from-industrial-light to-transparent sm:w-24" />

            <div
              ref={drag1.ref}
              onMouseDown={drag1.onMouseDown}
              onMouseMove={drag1.onMouseMove}
              onMouseUp={drag1.onMouseUp}
              onMouseLeave={drag1.onMouseLeave}
              className={`flex gap-4 overflow-x-auto scrollbar-none sm:gap-6 ${
                drag1.isDragging ? "cursor-grabbing [animation-play-state:paused]" : "cursor-grab animate-marquee"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {doubledClients.map((client, i) => (
                <ClientLogo key={`row1-${i}`} client={client} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative mt-3 overflow-hidden py-3 sm:mt-4 sm:py-4">
            <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-e from-industrial-light to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-s from-industrial-light to-transparent sm:w-24" />

            <div
              ref={drag2.ref}
              onMouseDown={drag2.onMouseDown}
              onMouseMove={drag2.onMouseMove}
              onMouseUp={drag2.onMouseUp}
              onMouseLeave={drag2.onMouseLeave}
              className={`flex gap-4 overflow-x-auto scrollbar-none sm:gap-6 ${
                drag2.isDragging ? "cursor-grabbing [animation-play-state:paused]" : "cursor-grab animate-marquee-reverse"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {reversedClients.map((client, i) => (
                <ClientLogo key={`row2-${i}`} client={client} />
              ))}
            </div>
          </div>

          {/* Show All Button */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2.5 rounded-xl border border-primary-700/20 bg-primary-700/5 px-7 py-3.5 text-sm font-semibold text-primary-700 transition-all hover:border-gold-400/40 hover:bg-primary-700 hover:text-white hover:shadow-lg hover:shadow-primary-700/10"
            >
              <Grid3X3 className="h-4.5 w-4.5 transition-colors group-hover:text-gold-400" />
              {locale === "ar" ? "عرض جميع العملاء" : "View All Clients"}
            </button>
          </div>
        </MotionDiv>
      </div>

      {showAll && (
        <AllClientsModal onClose={() => setShowAll(false)} locale={locale} />
      )}
    </section>
  );
}
