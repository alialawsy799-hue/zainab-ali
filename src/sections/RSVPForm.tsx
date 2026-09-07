"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { SectionTitle } from "@/components/SectionTitle";
import { weddingData } from "@/data/wedding";
import { getLocalRSVP, submitRSVP } from "@/lib/rsvp";

export function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");

  useEffect(() => {
    const existing = getLocalRSVP();
    if (existing) setStatus("done");
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || attending === null) return;
    setStatus("saving");
    try {
      await submitRSVP({ name: name.trim(), attending, message: message.trim() });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <DecorativeBackground variant="sand" className="w-full px-4 py-14 sm:flex sm:min-h-dvh sm:flex-col sm:items-center sm:justify-center sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-md">
        <SectionTitle title={weddingData.rsvp.heading} />
        <p className="mt-6 text-center font-serif text-lg leading-9 text-mute">
          {weddingData.rsvp.subheading}
        </p>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div
              key="success"
              className="mt-14 rounded-[28px] bg-ivory px-6 py-14 text-center shadow-soft"
              initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9 }}
            >
              <div className="mx-auto mb-6 h-16 w-16 rounded-full border border-gold/35">
                <motion.div
                  className="flex h-full items-center justify-center font-display text-3xl text-gold"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 180, damping: 16 }}
                >
                  ✓
                </motion.div>
              </div>
              <p className="font-display text-3xl leading-relaxed text-ink">
                {weddingData.rsvp.successTitle}
              </p>
              <p className="mt-4 font-serif text-lg text-mute">{weddingData.rsvp.successMessage}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              className="mt-12 space-y-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="block">
                <span className="mb-2 block font-sans text-[12px] tracking-wide text-mute">
                  {weddingData.rsvp.nameLabel}
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="min-h-12 w-full rounded-2xl border border-warm bg-ivory/80 px-4 py-3.5 font-sans text-base text-ink outline-none transition focus:border-gold/50"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-sans text-[12px] tracking-wide text-mute">
                  {weddingData.rsvp.messageLabel}
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-warm bg-ivory/80 px-4 py-3.5 font-sans text-base text-ink outline-none transition focus:border-gold/50"
                />
              </label>

              <fieldset>
                <legend className="mb-3 font-sans text-[12px] tracking-wide text-mute">
                  {weddingData.rsvp.attendanceLabel}
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: true, label: weddingData.rsvp.yesLabel },
                    { value: false, label: weddingData.rsvp.noLabel },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setAttending(option.value)}
                      className={`min-h-12 rounded-2xl border px-3 font-sans text-sm transition ${
                        attending === option.value
                          ? "border-gold bg-gold/10 text-ink"
                          : "border-warm bg-ivory/70 text-mute"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "saving" || attending === null}
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-ink font-sans text-sm tracking-wide text-ivory disabled:opacity-50"
              >
                {status === "saving" ? "..." : weddingData.rsvp.submitLabel}
              </button>
              {status === "error" ? (
                <p className="text-center font-sans text-sm text-wax">تعذّر إرسال التأكيد، حاولوا مرة أخرى.</p>
              ) : null}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </DecorativeBackground>
  );
}
