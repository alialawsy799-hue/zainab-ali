"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { pad, useCountdown } from "@/lib/useCountdown";
import { weddingData } from "@/data/wedding";

const units = [
  { key: "days", label: "أيام" },
  { key: "hours", label: "ساعات" },
  { key: "minutes", label: "دقائق" },
  { key: "seconds", label: "ثواني" },
] as const;

export function Countdown() {
  const parts = useCountdown(weddingData.countdownDate);

  return (
    <DecorativeBackground
      variant="sand"
      className="w-full px-3 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-xl">
        <SectionTitle title={weddingData.countdownHeading} />

        <div className="mt-8 grid w-full grid-cols-4 gap-1.5 sm:mt-12 sm:gap-3" dir="ltr">
          {units.map((unit, index) => (
            <motion.div
              key={unit.key}
              className="relative flex min-h-[132px] flex-col items-center justify-center overflow-hidden rounded-[36px] bg-white px-1 py-6 text-center shadow-lift sm:min-h-[168px] sm:rounded-[44px] sm:py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.07 }}
            >
              <CornerMark className="left-2 top-2 sm:left-3 sm:top-3" />
              <CornerMark className="bottom-2 right-2 rotate-180 sm:bottom-3 sm:right-3" />
              <p className="editorial-number font-serif text-[26px] leading-none text-ink sm:text-4xl" dir="ltr">
                {pad(parts[unit.key])}
              </p>
              <span className="my-3 h-px w-8 bg-warm/80 sm:w-10" />
              <p className="font-sans text-[10px] text-mute sm:text-xs">{unit.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <p className="font-serif text-sm leading-8 text-ink/75 sm:text-base">
            {weddingData.weddingDateArabic}
          </p>
          <p className="mt-1 font-sans text-xs tracking-[0.18em] text-gold" dir="ltr">
            {weddingData.weddingDateShort}
          </p>
        </div>
      </div>
    </DecorativeBackground>
  );
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 18"
      className={`pointer-events-none absolute h-3 w-3 text-gold/55 sm:h-3.5 sm:w-3.5 ${className}`}
      fill="none"
      aria-hidden
    >
      <path d="M2 10V4.5C2 3.1 3.1 2 4.5 2H10" stroke="currentColor" strokeWidth="1.1" />
      <path d="M3.2 7.2c1.4-.2 2.4-1.2 2.6-2.6" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}
