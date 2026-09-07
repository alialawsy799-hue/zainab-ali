export type RSVPPayload = {
  name: string;
  attending: boolean;
  message?: string;
};

export type RSVPRecord = RSVPPayload & {
  createdAt: string;
};

/**
 * Client helper. Swap the fetch body for Supabase or Firebase:
 *
 *   import { supabase } from "@/lib/supabase";
 *   const { error } = await supabase.from("rsvps").insert(payload);
 *
 *   import { addDoc, collection } from "firebase/firestore";
 *   await addDoc(collection(db, "rsvps"), payload);
 */
export async function submitRSVP(payload: RSVPPayload): Promise<RSVPRecord> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 12000);

  const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: controller.signal,
  }).finally(() => window.clearTimeout(timer));

  if (!response.ok) {
    throw new Error("تعذّر حفظ التأكيد");
  }

  const record = (await response.json()) as RSVPRecord;
  persistLocal(record);
  return record;
}

function persistLocal(record: RSVPRecord) {
  try {
    const existing = JSON.parse(localStorage.getItem("wedding-rsvps") ?? "[]") as RSVPRecord[];
    localStorage.setItem("wedding-rsvps", JSON.stringify([record, ...existing]));
    localStorage.setItem("wedding-rsvp-last", JSON.stringify(record));
  } catch {
    /* storage may be unavailable */
  }
}

export function getLocalRSVP(): RSVPRecord | null {
  try {
    const raw = localStorage.getItem("wedding-rsvp-last");
    return raw ? (JSON.parse(raw) as RSVPRecord) : null;
  } catch {
    return null;
  }
}
