import type { ReactNode } from "react";

type DecorativeBackgroundProps = {
  variant?: "ivory" | "sand" | "dusk";
  children?: ReactNode;
  className?: string;
};

export function DecorativeBackground({
  variant = "ivory",
  children,
  className = "",
}: DecorativeBackgroundProps) {
  const tone =
    variant === "sand" ? "bg-sand/70" : variant === "dusk" ? "bg-[#efe6da]" : "bg-ivory";

  return (
    <div className={`relative overflow-hidden ${tone} ${className}`}>
      <div className="pointer-events-none absolute inset-0 paper-texture" />
      <div className="grain pointer-events-none absolute inset-0" />
      <svg
        className="pointer-events-none absolute -left-16 top-10 h-40 w-40 text-warm/40 sm:h-64 sm:w-64 sm:text-warm/50"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 160c20-40 18-78 4-98 22 10 38 36 34 70-28-8-40 8-38 28Z"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M72 148c16-30 8-58-8-74 18 4 32 26 30 54"
          stroke="currentColor"
          strokeWidth="0.7"
        />
        <circle cx="48" cy="58" r="7" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="86" cy="78" r="4" stroke="currentColor" strokeWidth="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-10 bottom-6 h-44 w-44 rotate-12 text-gold/20 sm:h-72 sm:w-72 sm:text-gold/25"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M150 40c-18 34-12 72 8 94-24-4-42-28-40-64 24 12 34-2 32-30Z"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path d="M120 86c12 22 8 40-4 54" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="154" cy="138" r="6" stroke="currentColor" strokeWidth="0.7" />
      </svg>
      <div className="relative z-10 w-full min-w-0">{children}</div>
    </div>
  );
}
