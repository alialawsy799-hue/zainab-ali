"use client";

import { motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { SectionTitle } from "@/components/SectionTitle";
import { weddingData } from "@/data/wedding";

export function LocationSection() {
  return (
    <DecorativeBackground
      variant="dusk"
      className="w-full px-4 py-14 sm:flex sm:min-h-dvh sm:flex-col sm:items-center sm:justify-center sm:px-6 sm:py-24"
    >
      <motion.div
        className="mx-auto flex w-full max-w-md flex-col items-center text-center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle title={weddingData.locationHeading} />

        <div className="mt-8 flex flex-col items-center">
          <PinIcon />
          <p className="mt-4 font-serif text-lg leading-9 text-ink sm:text-xl">
            {weddingData.location}
            {weddingData.venueHall ? ` ${weddingData.venueHall}` : ""}
            {weddingData.venueHallEn ? ` — ${weddingData.venueHallEn}` : ""}
          </p>
          <p className="mt-2 font-sans text-sm leading-7 text-mute">{weddingData.address}</p>
        </div>

        <div className="relative mt-8 w-full overflow-hidden rounded-[22px] border border-gold/35 bg-ivory shadow-soft">
          <iframe
            title={weddingData.locationHeading}
            src={weddingData.mapsEmbedUrl}
            className="h-[240px] w-full border-0 sm:h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={weddingData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 font-sans text-[11px] text-ink shadow-sm"
          >
            Open in Maps
            <ExternalIcon />
          </a>
        </div>

        <motion.a
          href={weddingData.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/50 bg-warm/40 px-8 font-sans text-sm tracking-wide text-ink"
          whileTap={{ scale: 0.98 }}
        >
          <PinIcon className="h-4 w-4" />
          عرض الموقع
        </motion.a>
      </motion.div>
    </DecorativeBackground>
  );
}

function PinIcon({ className = "h-7 w-7 text-ink/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 12 12 4M6.5 4H12v5.5" />
    </svg>
  );
}
