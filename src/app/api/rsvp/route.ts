import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { sendRSVPToTelegram } from "@/lib/telegram";

type RSVPRecord = {
  name: string;
  attending: boolean;
  message?: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "rsvps.json");

/**
 * Local JSON store for development.
 * Replace this handler with Supabase or Firebase when deploying:
 *
 *   const { error } = await supabase.from("rsvps").insert(record);
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      attending?: boolean;
      message?: string;
    };

    const name = body.name?.trim();
    if (!name || typeof body.attending !== "boolean") {
      return NextResponse.json({ error: "بيانات غير مكتملة" }, { status: 400 });
    }

    const record: RSVPRecord = {
      name,
      attending: body.attending,
      message: body.message?.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    try {
      await mkdir(dataDir, { recursive: true });
      let current: RSVPRecord[] = [];
      try {
        current = JSON.parse(await readFile(filePath, "utf8")) as RSVPRecord[];
      } catch {
        current = [];
      }

      current.unshift(record);
      await writeFile(filePath, JSON.stringify(current, null, 2), "utf8");
    } catch (error) {
      console.error("Local RSVP store unavailable:", error);
    }

    try {
      await sendRSVPToTelegram(record);
    } catch (error) {
      console.error("Telegram RSVP error:", error);
      if (process.env.VERCEL) {
        return NextResponse.json({ error: "تعذّر إرسال التأكيد" }, { status: 502 });
      }
    }

    return NextResponse.json(record);
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json({ error: "تعذّر حفظ التأكيد" }, { status: 500 });
  }
}
