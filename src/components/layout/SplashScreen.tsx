"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1500);
    const t2 = setTimeout(() => setShow(false), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center industrial-gradient transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/mgs-logo.png"
          alt="MGS Industrial"
          width={72}
          height={72}
          className="h-18 w-18 animate-fade-in object-contain"
          priority
        />
        <div className="animate-fade-up text-center">
          <span className="block text-2xl font-bold text-white">MGS</span>
          <span className="block text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
            Industrial
          </span>
        </div>
        <div className="mt-2 h-0.5 w-24 animate-fade-in gold-gradient" style={{ animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}
