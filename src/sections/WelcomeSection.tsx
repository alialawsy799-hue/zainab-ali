"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export function WelcomeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4EEE6]">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[72px] sm:w-[92px]" aria-hidden>
        <Image
          src="/images/welcome-blossom.png"
          alt=""
          fill
          sizes="92px"
          className="object-cover object-right"
          priority
        />
      </div>
      <div className="relative z-20 mx-auto flex w-full max-w-md flex-col items-center px-6 pb-10 pt-10 sm:pb-14 sm:pt-14">
        <motion.p
          className="text-center font-serif text-[22px] leading-[2.1] text-ink sm:text-[26px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {weddingData.welcome.heading}
        </motion.p>

        <motion.h1
          className="relative mt-4 h-16 w-[88%] sm:h-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22 }}
        >
          <span className="sr-only">{weddingData.welcome.names}</span>
          <Image
            src="/images/names-calligraphy.png"
            alt={weddingData.welcome.names}
            fill
            sizes="(max-width: 768px) 88vw, 420px"
            className="object-contain"
            priority
          />
        </motion.h1>

        <motion.p
          className="mt-2 font-sans text-sm tracking-[0.22em] text-gold"
          dir="ltr"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.34 }}
        >
          {weddingData.weddingDateShort}
        </motion.p>

        <motion.div
          className="relative mt-6 h-[320px] w-[78%] sm:h-[400px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
        >
          <Image
            src="/images/welcome-couple.png"
            alt="زينب وعلي"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-contain object-bottom"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
