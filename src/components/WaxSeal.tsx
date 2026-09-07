"use client";

import { motion } from "framer-motion";

type WaxSealProps = {
  initials: string;
  size?: number;
  interactive?: boolean;
  opened?: boolean;
};

export function WaxSeal({
  initials,
  size = 148,
  interactive = false,
  opened = false,
}: WaxSealProps) {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      animate={
        opened
          ? { y: -36, rotate: -18, scale: 0.86, opacity: 0 }
          : { y: 0, rotate: 0, scale: 1, opacity: 1 }
      }
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-wax-deep/30 blur-xl"
        animate={interactive && !opened ? { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] } : {}}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 160 160" className="relative drop-shadow-seal h-full w-full">
        <defs>
          <radialGradient id="waxFill" cx="38%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#9A3C42" />
            <stop offset="42%" stopColor="#7A2B30" />
            <stop offset="100%" stopColor="#4A1518" />
          </radialGradient>
          <radialGradient id="waxGloss" cx="30%" cy="22%" r="55%">
            <stop offset="0%" stopColor="rgba(255,220,210,0.28)" />
            <stop offset="100%" stopColor="rgba(255,220,210,0)" />
          </radialGradient>
        </defs>
        <path
          d="M80 8c10 0 16 6 22 6 9 0 14-7 22-4 8 3 9 12 16 16 6 4 14 2 18 10 4 8-1 14 1 22 2 8 10 12 8 20s-10 10-10 18 8 13 3 20-13 5-18 12c-4 6-2 14-10 17-8 4-13-3-22-1-8 2-12 10-22 10s-14-8-22-10c-9-2-14 5-22 1-8-3-6-11-10-17-5-7-13-5-18-12s3-12 3-20-8-10-10-18 2-16 8-20c7-4 12-6 18-10 7-4 8-13 16-16 8-3 13 4 22 4 6 0 12-6 22-6Z"
          fill="url(#waxFill)"
        />
        <circle cx="80" cy="80" r="46" fill="#5C1C20" />
        <circle cx="80" cy="80" r="41" fill="none" stroke="#C9A86A" strokeWidth="1.15" opacity="0.72" />
        <circle cx="80" cy="80" r="36" fill="none" stroke="#E8C9A0" strokeWidth="0.6" opacity="0.35" />
        <text
          x="80"
          y="88"
          textAnchor="middle"
          fill="#F3E6C8"
          fontFamily="Georgia, serif"
          fontSize="22"
          letterSpacing="1.5"
        >
          {initials}
        </text>
        <ellipse cx="62" cy="58" rx="22" ry="12" fill="url(#waxGloss)" />
      </svg>
    </motion.div>
  );
}
