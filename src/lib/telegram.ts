import { readFile, writeFile } from "fs/promises";
import path from "path";

type TelegramRSVP = {
  name: string;
  attending: boolean;
  message?: string;
};

type TelegramUpdate = {
  message?: { chat?: { id?: number } };
  edited_message?: { chat?: { id?: number } };
  my_chat_member?: { chat?: { id?: number } };
  channel_post?: { chat?: { id?: number } };
};

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatCachePath = path.join(process.cwd(), "src", "data", "telegram-chat.json");

async function telegram(method: string, body?: Record<string, unknown>) {
  if (!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is missing");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: body ? "POST" : "GET",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: controller.signal,
    });

    const data = (await response.json()) as {
      ok: boolean;
      result?: unknown;
      description?: string;
    };

    if (!data.ok) {
      throw new Error(data.description || "Telegram request failed");
    }

    return data.result;
  } finally {
    clearTimeout(timer);
  }
}

async function readCachedChatId() {
  try {
    const raw = await readFile(chatCachePath, "utf8");
    const parsed = JSON.parse(raw) as { chatId?: string };
    return parsed.chatId?.trim() || "";
  } catch {
    return "";
  }
}

async function writeCachedChatId(chatId: string) {
  try {
    await writeFile(chatCachePath, JSON.stringify({ chatId }, null, 2), "utf8");
  } catch {
    /* ignore cache write errors */
  }
}

function chatIdFromUpdates(updates: TelegramUpdate[]) {
  for (const update of [...updates].reverse()) {
    const chat =
      update.message?.chat ||
      update.edited_message?.chat ||
      update.my_chat_member?.chat ||
      update.channel_post?.chat;
    if (chat?.id) return String(chat.id);
  }
  return "";
}

async function resolveChatId(): Promise<string> {
  const configured = process.env.TELEGRAM_CHAT_ID?.trim();
  if (configured) return configured;

  const cached = await readCachedChatId();
  if (cached) return cached;

  await telegram("deleteWebhook", { drop_pending_updates: false });
  const updates = (await telegram("getUpdates?timeout=0&limit=20")) as TelegramUpdate[];
  const chatId = chatIdFromUpdates(updates);

  if (!chatId) {
    throw new Error("افتحوا البوت في تيليجرام وأرسلوا /start ثم أعيدوا المحاولة");
  }

  await writeCachedChatId(chatId);
  return chatId;
}

export async function sendRSVPToTelegram(payload: TelegramRSVP) {
  const attendance = payload.attending ? "بكل سرور" : "اعتذر عن الحضور";
  const wish = payload.message?.trim() || "—";
  const text = [
    `اسم الشخص : ${payload.name}`,
    `رسالة الشخص للعروسة : ${wish}`,
    `هل ستأتي ؟ : ${attendance}`,
  ].join("\n");

  const chatId = await resolveChatId();
  await telegram("sendMessage", { chat_id: chatId, text });
}
