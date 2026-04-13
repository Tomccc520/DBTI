/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

export const SITE_NAME = "DBTI";
export const SITE_FULL_NAME = "设计师人格测试";
export const SITE_ENGLISH_NAME = "Designer Behavior Type Indicator";
export const SITE_TAGLINE =
  "30 道题，专拆你开稿起手、改稿抗压、接需求拆招、讲方案控场和赶死线保交付时的默认出手。";
export const SITE_HOOK =
  "你是气氛拿捏怪、过会嘴替王、改稿渡劫人，还是隐藏款 HEX？";
export const SITE_DESCRIPTION =
  "30 道题，从 5 个模型、15 个维度拆出你在真实设计流程里的默认手法、抗压方式和控场习惯。";
export const OG_TITLE = "DBTI · 设计师人格测试";
export const OG_DESCRIPTION =
  "一个面向设计师群体的趣味人格测试网站，把开稿起手、改稿抗压、需求拆招、方案过会和工具共创拆成 5 个模型来测。";
export const REPO_SHORT_DESCRIPTION =
  "30 道题，从 5 个模型、15 个维度拆出你在设计流程里的默认出手。";
export const REPO_LONG_DESCRIPTION =
  "一个面向设计师群体的趣味人格测试网站，把开稿起手、改稿渡劫、需求拆招、方案过会和工具共创这些高频反应，拆成像素结界、改稿渡劫、嘴替战力、灵感上头、外挂共生五个模型来测。";
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
