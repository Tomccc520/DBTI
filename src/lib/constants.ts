/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

export const SITE_NAME = "DBTI";
export const SITE_FULL_NAME = "设计师人格测试";
export const SITE_DESCRIPTION = "30 道题，测出你的设计人格。你是 GRID 还是 MOOD？";
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
  return "http://localhost:3000";
}
