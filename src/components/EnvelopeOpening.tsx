"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WaxSeal } from "@/components/WaxSeal";
import { weddingData } from "@/data/wedding";

type EnvelopeOpeningProps = {
  onOpened: () => void;
};

export function EnvelopeOpening({ onOpened }: EnvelopeOpeningProps) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpened, 1850);
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden paper-texture px-5">
      <div className="grain absolute inset-0" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: opening ? 0.7 : 0.22 }}
        transition={{ duration: 1.2 }}
        style={{
          background: "radial-gradient(circle at 50% 44%, rgba(184,145,90,0.28), transparent 38%)",
        }}
      />

      <BotanicalCorner className="left-3 top-8 -rotate-6 sm:left-8" />
      <BotanicalCorner className="right-3 bottom-8 rotate-[170deg] sm:right-8" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <motion.p
          className="mb-3 font-sans text-[11px] tracking-[0.38em] text-gold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          دعوة خاصة
        </motion.p>
        <motion.div
          className="relative mb-12 h-14 w-[88%] sm:h-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Image
            src="/images/names-calligraphy.png"
            alt={weddingData.welcome.names}
            fill
            sizes="360px"
            className="object-contain"
            priority
          />
        </motion.div>

        <button
          type="button"
          onClick={open}
          className="relative w-full max-w-[320px] outline-none"
          aria-label={weddingData.envelopeHint}
        >
          <svg
            className="absolute left-1/2 top-[38%] z-0 w-[92%] -translate-x-1/2 -translate-y-1/2 text-gold/45"
            viewBox="0 0 280 70"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 34c36-18 70 16 132 0 62-16 96 16 132 0"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M8 42c36-18 70 16 132 0 62-16 96 16 132 0"
              stroke="#C9A86A"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          <motion.div
            className="relative mx-auto h-[236px] w-full overflow-hidden rounded-[8px] shadow-soft"
            style={{ background: "linear-gradient(180deg, #e2d1bc 0%, #cbb59b 100%)" }}
            animate={opening ? { y: 22, opacity: 0.28, scale: 0.98 } : { y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 top-0 origin-top" style={{ perspective: 1100 }}>
              <motion.div
                className="relative h-[122px] w-full"
                animate={opening ? { rotateX: -172 } : { rotateX: 0 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, #f3e8d8 0%, #d8c4ad 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    boxShadow: "0 10px 18px rgba(74,64,56,0.08)",
                  }}
                />
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-x-7 top-[86px] h-[118px] rounded-sm bg-[#f8f3eb]"
              animate={opening ? { y: -28, opacity: 1 } : { y: 18, opacity: 0.85 }}
              transition={{ duration: 1.1, delay: 0.28 }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[124px] bg-gradient-to-t from-[#c3ad93] to-[#d5c0a8]" />
          </motion.div>

          <div className="absolute left-1/2 top-[48%] z-20 -translate-x-1/2 -translate-y-1/2">
            <WaxSeal initials={weddingData.initials} interactive={!opening} opened={opening} />
          </div>
        </button>

        <motion.p
          className="mt-14 text-center font-serif text-lg text-ink/55"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: opening ? 0 : 1, y: opening ? 8 : 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          {weddingData.envelopeHint}
        </motion.p>
      </div>
    </div>
  );
}

function BotanicalCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-40 w-40 text-warm ${className}`}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden
    >
      <path d="M18 132c28-18 46-48 42-86 18 22 16 54-6 78" stroke="currentColor" strokeWidth="1" />
      <path d="M40 96c12-22 8-40-6-56" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="34" cy="42" r="8" stroke="currentColor" />
      <circle cx="62" cy="58" r="5" stroke="currentColor" />
      <path d="M70 78c10 2 18 10 20 20" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}
