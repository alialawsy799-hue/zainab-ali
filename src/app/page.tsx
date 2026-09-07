"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { InvitationExperience } from "@/sections/InvitationExperience";

type Stage = "envelope" | "invitation";

export default function HomePage() {
  const [stage, setStage] = useState<Stage>("envelope");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("open") === "1") setStage("invitation");
  }, []);

  return (
    <AnimatePresence mode="wait">
      {stage === "envelope" ? (
        <motion.div
          key="envelope"
          initial={{ opacity: 0, filter: "blur(14px)", scale: 1.02 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(16px)", scale: 1.03 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <EnvelopeOpening onOpened={() => setStage("invitation")} />
        </motion.div>
      ) : null}

      {stage === "invitation" ? (
        <motion.div
          key="invitation"
          initial={{ opacity: 0, filter: "blur(18px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <InvitationExperience />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
