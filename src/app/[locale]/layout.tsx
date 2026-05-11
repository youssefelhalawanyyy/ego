import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { LanguagePopup } from "@/components/layout/LanguagePopup";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Locale = "ar" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${cairo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MGS Industrial",
              alternateName: "الشركة المصرية للخدمات الصناعية",
              description:
                "Egyptian Industrial Services Company specializing in mechanical, electrical, and civil contracting with 19+ years of experience.",
              url: "https://mgs-industrial.com",
              telephone: "+201001743289",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressLocality: "Cairo",
              },
              areaServed: {
                "@type": "Country",
                name: "Egypt",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 85,
              },
              foundingDate: "2003",
              sameAs: [],
              serviceType: [
                "Cable Machinery Manufacturing",
                "General Manufacturing",
                "Wiring Harness Factory Machines",
                "Insulation & Braiding Machines",
                "Metal Fabrication",
                "CNC Machining",
                "Welding & Cutting",
                "Petroleum Pipe Manufacturing",
                "Industrial Pump Maintenance",
                "Industrial Installations",
              ],
              image: "https://mgs-industrial.com/images/mgs-logo.png",
            }),
          }}
        />
      </head>
      <body
        className={`${
          isRtl ? "font-cairo" : "font-inter"
        } bg-white text-gray-900 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <LanguagePopup />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
