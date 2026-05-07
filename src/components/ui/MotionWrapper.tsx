"use client";

import { type ReactNode, useRef, useState, useEffect } from "react";

function useScrollReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "80px" }
    );

    observer.observe(el);

    // Safety fallback — never leave content hidden forever
    const fallback = setTimeout(() => setRevealed(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, revealed };
}

export function MotionDiv({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, revealed } = useScrollReveal();

  const variantClass = {
    fadeUp: "scroll-fade-up",
    fadeIn: "scroll-fade-in",
    slideLeft: "scroll-slide-left",
    slideRight: "scroll-slide-right",
    scaleIn: "scroll-scale-in",
  }[variant];

  return (
    <div
      ref={ref}
      className={`${variantClass} ${revealed ? "scroll-revealed" : ""} ${className || ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`stagger-container ${revealed ? "scroll-revealed" : ""} ${className || ""}`}
      style={{ "--stagger-delay": `${staggerDelay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`stagger-item ${className || ""}`}>
      {children}
    </div>
  );
}
