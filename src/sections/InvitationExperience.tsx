"use client";

import { FloralDivider } from "@/components/FloralDivider";
import { MusicControl } from "@/components/MusicControl";
import { WelcomeSection } from "@/sections/WelcomeSection";
import { Countdown } from "@/sections/Countdown";
import { StorySlider } from "@/sections/StorySlider";
import { EventTimeline } from "@/sections/EventTimeline";
import { RSVPForm } from "@/sections/RSVPForm";
import { LocationSection } from "@/sections/LocationSection";
import { GentleNotes } from "@/sections/GentleNotes";
import { ThankYou } from "@/sections/ThankYou";

export function InvitationExperience() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <WelcomeSection />
      <FloralDivider />
      <Countdown />
      <FloralDivider />
      <StorySlider />
      <FloralDivider />
      <EventTimeline />
      <FloralDivider />
      <LocationSection />
      <FloralDivider />
      <GentleNotes />
      <FloralDivider />
      <RSVPForm />
      <FloralDivider />
      <ThankYou />
      <MusicControl />
    </main>
  );
}
