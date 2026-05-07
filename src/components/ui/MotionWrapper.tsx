"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, useRef, useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const variantsMap = { fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight };

function useScrollReveal() {
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
      { threshold: 0.01, rootMargin: "50px" }
    );

    observer.observe(el);

    const fallback = setTimeout(() => setRevealed(true), 800);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return { ref, revealed };
}

export function MotionDiv({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof variantsMap;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={revealed ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variantsMap[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={revealed ? "visible" : "hidden"}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
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
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
