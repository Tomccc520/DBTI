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
  SITE_DESCRIPTION,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} - ${SITE_FULL_NAME}`,
  description: SITE_DESCRIPTION,
  keywords: ["DBTI", "设计师测试", "设计人格", "UI 设计", "视觉设计", "Figma"],
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: `${SITE_NAME} - 你是什么类型的设计师？`,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "http://localhost:3000",
  },
  metadataBase: new URL("http://localhost:3000"),
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
