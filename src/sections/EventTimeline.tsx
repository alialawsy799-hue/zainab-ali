"use client";

import { motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { SectionTitle } from "@/components/SectionTitle";
import { weddingData, type TimelineItem } from "@/data/wedding";

export function EventTimeline() {
  return (
    <DecorativeBackground className="w-full px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-lg">
        <SectionTitle title={weddingData.timelineHeading} />

        <div className="relative mx-auto mt-12 w-full max-w-xs">
          <div className="absolute left-1/2 top-6 h-[calc(100%-48px)] w-px -translate-x-1/2 bg-gradient-to-b from-gold/20 via-gold/70 to-gold/20" />

          <div className="space-y-10 sm:space-y-12">
            {weddingData.timeline.map((item, index) => (
              <motion.div
                key={`${item.time}-${item.title}`}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
              >
                <p className="mb-3 font-serif text-base tabular-nums text-gold" dir="ltr">
                  {item.time}
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-ivory shadow-lift sm:h-14 sm:w-14">
                  <TimelineIcon type={item.icon} />
                </div>
                <p className="mt-3 font-serif text-lg leading-8 text-ink sm:text-xl">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DecorativeBackground>
  );
}

function TimelineIcon({ type }: { type: TimelineItem["icon"] }) {
  const className = "h-5 w-5 text-gold sm:h-6 sm:w-6";

  if (type === "rings") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <circle cx="9.5" cy="13" r="5" />
        <circle cx="14.5" cy="13" r="5" />
      </svg>
    );
  }

  if (type === "ceremony") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 4.5c1.8 2.2 4.8 3.6 4.8 6.6A4.8 4.8 0 0 1 12 16a4.8 4.8 0 0 1-4.8-4.9c0-3 3-4.4 4.8-6.6Z" />
        <path d="M12 16v3.5" />
      </svg>
    );
  }

  if (type === "dinner") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M7 5v8M5 5v4c0 2 2 2.5 2 4M9 5v4c0 2-2 2.5-2 4" />
        <path d="M16 5c2.2 0 3.5 2 3.5 4.5S18 14 16 14 12.5 12 12.5 9.5 13.8 5 16 5Z" />
        <path d="M16 14v5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M8 10c0-3 2-5 4-6 2 1 4 3 4 6v5H8v-5Z" />
      <path d="M8 15h8v1.5A3.5 3.5 0 0 1 12.5 20" />
    </svg>
  );
}
