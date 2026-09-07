"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  className?: string;
};

export function SectionTitle({ kicker, title, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {kicker ? (
        <p className="mb-4 font-sans text-[11px] font-medium tracking-[0.32em] text-gold">
          {kicker}
        </p>
      ) : null}
      <h2 className="max-w-[16ch] font-display text-[34px] leading-relaxed text-ink sm:text-5xl">{title}</h2>
      <div className="gold-rule mt-6" />
    </motion.div>
  );
}
