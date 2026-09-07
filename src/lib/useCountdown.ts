"use client";

import { useEffect, useState } from "react";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

const empty: CountdownParts = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isPast: false,
};

function getParts(target: Date): CountdownParts {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { ...empty, isPast: true };

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isPast: false,
  };
}

export function useCountdown(isoDate: string): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>(empty);

  useEffect(() => {
    const target = new Date(isoDate);
    const tick = () => setParts(getParts(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [isoDate]);

  return parts;
}

export function pad(value: number) {
  return String(value).padStart(2, "0");
}
