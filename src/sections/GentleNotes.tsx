"use client";

import { motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { DiamondDivider } from "@/components/DiamondDivider";
import { SectionTitle } from "@/components/SectionTitle";
import { weddingData } from "@/data/wedding";

export function GentleNotes() {
  return (
    <DecorativeBackground className="w-full px-4 py-14 sm:flex sm:min-h-dvh sm:flex-col sm:items-center sm:justify-center sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-md">
        <SectionTitle title={weddingData.notesHeading} />
        <motion.div
          className="relative mt-8 overflow-hidden rounded-[28px] border border-gold/20 bg-ivory px-6 py-10 shadow-soft sm:mt-12 sm:px-8 sm:py-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-7">
            {weddingData.notes.map((note, index) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                {index > 0 ? (
                  <div className="mb-7">
                    <DiamondDivider />
                  </div>
                ) : null}
                <p className="text-center font-serif text-[17px] leading-9 text-ink/80">{note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DecorativeBackground>
  );
}
