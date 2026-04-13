/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

import type { Metadata } from "next";
import "./globals.css";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  OG_DESCRIPTION,
  OG_TITLE,
  SITE_FULL_NAME,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/lib/constants";

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: `${SITE_NAME} · ${SITE_FULL_NAME}`,
  description: SITE_DESCRIPTION,
  keywords: ["DBTI", "设计师测试", "设计人格", "UI 设计", "视觉设计", "Figma"],
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    url: "http://localhost:5150",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
  metadataBase: new URL("http://localhost:5150"),
};

/**
 * 渲染应用的根布局。
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
