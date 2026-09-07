"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    if (!available) return;
    if (!audioRef.current) {
      const audio = new Audio(weddingData.musicSrc);
      audio.loop = true;
      audio.volume = 0.22;
      audio.addEventListener("error", () => setAvailable(false));
      audioRef.current = audio;
    }
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-ivory/80 text-ink shadow-lift backdrop-blur-md"
      aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      whileTap={{ scale: 0.94 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {playing ? (
          <motion.span
            key="on"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="flex items-end gap-[3px]"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-[2px] rounded-full bg-gold"
                animate={{ height: [6, 14, 8, 16, 6] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.14 }}
              />
            ))}
          </motion.span>
        ) : (
          <motion.svg
            key="off"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M9 18V6l10-2v12" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="16" r="2" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
