"use client";

import { motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { weddingData } from "@/data/wedding";

export function ThankYou() {
  return (
    <DecorativeBackground className="flex min-h-[80dvh] w-full flex-col items-center justify-center px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <motion.p
          className="font-display text-4xl text-gold/80"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {weddingData.initials}
        </motion.p>
        <div className="gold-rule-wide mt-6" />
        <motion.h2
          className="mt-8 font-display text-4xl leading-relaxed text-ink sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {weddingData.thankYou.heading}
        </motion.h2>
        <motion.p
          className="mt-6 font-serif text-xl leading-10 text-mute"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {weddingData.thankYou.message}
        </motion.p>
        <p className="mt-16 font-sans text-[11px] tracking-[0.28em] text-warm" dir="ltr">
          {weddingData.weddingDateDisplay}
        </p>
      </div>
    </DecorativeBackground>
  );
}
