/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

export const SITE_NAME = "DBTI";
export const SITE_FULL_NAME = "设计师人格测试";
export const SITE_ENGLISH_NAME = "Designer Behavior Type Indicator";
export const SITE_TAGLINE = "30 道题，测出你的设计人格。";
export const SITE_HOOK = "你是 GRID、MOOD，还是隐藏人格 PANTONE？";
export const SITE_DESCRIPTION =
  "30 道题，从 5 大模型、15 个维度测出你的设计人格。";
export const OG_TITLE = "DBTI · 设计师人格测试";
export const OG_DESCRIPTION =
  "一个面向设计师群体的趣味人格测试网站，通过 30 道题从 5 大模型、15 个维度分析你的设计人格类型。";
export const REPO_SHORT_DESCRIPTION =
  "30 道题，从 5 大模型、15 个维度测出你的设计人格。";
export const REPO_LONG_DESCRIPTION =
  "一个面向设计师群体的趣味人格测试网站，通过 30 道题从视觉信仰、需求应对、协作关系、创意驱动、工具共生五个模型分析你的设计人格类型。";
export const COPYRIGHT_LABEL = "Tomda × UIED技术团队";
export const AUTHOR_NAME = "UIED技术团队";
export const AUTHOR_URL = "https://fsuied.com";
export const COPYRIGHT_URL = "https://www.tomda.top";

/**
 * 获取站点访问地址，用于分享文案和海报二维码。
 */
export function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:5150";
}
