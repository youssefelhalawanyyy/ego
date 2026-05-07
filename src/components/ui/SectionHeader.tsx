"use client";

import { MotionDiv } from "./MotionWrapper";

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  light = false,
  center = true,
}: {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <MotionDiv>
        <span
          className={`mb-4 inline-block rounded-full px-5 py-2 text-sm font-semibold ${
            light
              ? "border border-gold-400/30 bg-gold-400/10 text-gold-300"
              : "border border-primary-200 bg-primary-50 text-primary-700"
          }`}
        >
          {badge}
        </span>
      </MotionDiv>
      <MotionDiv delay={0.1}>
        <h2
          className={`mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-gray-900"
          }`}
        >
          {title}{" "}
          <span className="gradient-text">{titleHighlight}</span>
        </h2>
      </MotionDiv>
      {subtitle && (
        <MotionDiv delay={0.2}>
          <p
            className={`mx-auto max-w-3xl text-lg leading-relaxed ${
              light ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        </MotionDiv>
      )}
    </div>
  );
}
