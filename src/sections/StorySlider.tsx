"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { SectionTitle } from "@/components/SectionTitle";
import { weddingData } from "@/data/wedding";

function wrapIndex(length: number, value: number) {
  return ((value % length) + length) % length;
}

export function StorySlider() {
  const slides = weddingData.storySlides;
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrapIndex(slides.length, page);

  const paginate = (dir: number) => setPage(([p]) => [p + dir, dir]);

  useEffect(() => {
    const id = window.setInterval(() => paginate(1), 6500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <DecorativeBackground className="w-full px-4 py-14 sm:flex sm:min-h-dvh sm:flex-col sm:items-center sm:justify-center sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle title={weddingData.storyHeading} />
        <div className="relative mt-7 w-full sm:mt-12">
          <div className="relative w-full overflow-hidden rounded-[26px] border border-gold/20 bg-ivory p-2 shadow-soft">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]" dir="ltr">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 70) {
                      paginate(info.offset.x < 0 ? 1 : -1);
                    }
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <motion.p
                  key={slide.caption}
                  className="text-right font-serif text-base leading-8 text-[#F7F1E8] sm:text-lg sm:leading-9"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  {slide.caption}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex w-full items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`الصورة ${i + 1}`}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-gold" : "w-2.5 bg-warm"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </DecorativeBackground>
  );
}
