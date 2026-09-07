import type { Metadata, Viewport } from "next";
import { Amiri, Aref_Ruqaa, IBM_Plex_Sans_Arabic } from "next/font/google";
import { weddingData } from "@/data/wedding";
import "./globals.css";

const display = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `دعوة زفاف ${weddingData.coupleNames}`,
  description: weddingData.invitationMessage,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5EFE8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${display.variable} ${serif.variable} ${sans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
