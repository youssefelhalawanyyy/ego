"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";

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
      <div className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 transition-all hover:border-gold-300 hover:shadow-lg">
        <Image
          src={client.src}
          alt={client.name}
          width={160}
          height={60}
          className="max-h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    );
  }

  return (
    <div className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 transition-all hover:border-gold-300 hover:shadow-lg">
      <span className="text-center text-sm font-bold leading-tight text-gray-500 transition-colors group-hover:text-primary-700">
        {client.nameAr}
      </span>
    </div>
  );
}

export function Clients() {
  const t = useTranslations("clients");

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
          <div className="relative overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-24 bg-gradient-to-e from-industrial-light to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-24 bg-gradient-to-s from-industrial-light to-transparent" />

            <div className="flex animate-marquee gap-6">
              {doubledClients.map((client, i) => (
                <ClientLogo key={`row1-${i}`} client={client} />
              ))}
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-24 bg-gradient-to-e from-industrial-light to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-24 bg-gradient-to-s from-industrial-light to-transparent" />

            <div className="flex animate-marquee-reverse gap-6">
              {reversedClients.map((client, i) => (
                <ClientLogo key={`row2-${i}`} client={client} />
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
