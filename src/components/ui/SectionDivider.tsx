"use client";

export function SectionDivider({ flip = false, light = false }: { flip?: boolean; light?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ height: "60px", marginTop: "-1px", marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 60V30C120 10 240 0 360 5C480 10 600 30 720 35C840 40 960 25 1080 15C1200 5 1320 10 1440 20V60H0Z"
          fill={light ? "#ffffff" : "#0a1f14"}
          fillOpacity="0.05"
        />
        <path
          d="M0 60V40C160 25 320 15 480 20C640 25 800 40 960 38C1120 36 1280 20 1440 25V60H0Z"
          fill={light ? "#ffffff" : "#0a1f14"}
          fillOpacity="0.03"
        />
        <line
          x1="0"
          y1="45"
          x2="1440"
          y2="45"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeDasharray="12 8"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0" />
            <stop offset="20%" stopColor="#c9a84c" stopOpacity="1" />
            <stop offset="50%" stopColor="#e9c96f" stopOpacity="1" />
            <stop offset="80%" stopColor="#c9a84c" stopOpacity="1" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <div className="h-2 w-2 rotate-45 bg-gold-400/40" />
      </div>
    </div>
  );
}
