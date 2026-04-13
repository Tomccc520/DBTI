/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

import type { CSSProperties } from "react";

interface Props {
  type?: string;
  className?: string;
  size?: number;
  accent?: string;
}

const palette = [
  "#2F6BFF",
  "#FF6B2C",
  "#00A68C",
  "#F2557A",
  "#111827",
  "#14B8A6",
  "#D63D2E",
  "#7C5CFF",
];

/**
 * 根据人格代码生成稳定的图形种子，确保同一人格徽章样式恒定。
 */
function createSeed(code: string): number {
  return Array.from(code).reduce(
    (sum, character, index) => sum + character.charCodeAt(0) * (index + 11),
    0
  );
}

/**
 * 从调色板里按固定偏移取色，保证同一人格的辅助色稳定。
 */
function pickColor(seed: number, offset = 0): string {
  return palette[(seed + offset) % palette.length];
}

/**
 * 将十六进制颜色转为带透明度的 rgba 字符串。
 */
function withAlpha(color: string, alpha: number): string {
  const hex = color.replace("#", "");
  const normalized =
    hex.length === 3
      ? hex
          .split("")
          .map((character) => character + character)
          .join("")
      : hex;

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/**
 * 渲染第一类几何徽章图案，偏胶囊与刻线构成。
 */
function renderVariantA(primary: string, secondary: string) {
  return (
    <>
      <rect x="36" y="44" width="128" height="112" rx="34" fill={withAlpha("#ffffff", 0.08)} />
      <rect x="54" y="70" width="72" height="12" rx="6" fill={withAlpha(primary, 0.92)} />
      <rect x="54" y="94" width="94" height="10" rx="5" fill={withAlpha("#ffffff", 0.68)} />
      <rect x="54" y="115" width="62" height="10" rx="5" fill={withAlpha("#ffffff", 0.32)} />
      <circle cx="142" cy="124" r="20" fill={withAlpha(secondary, 0.96)} />
      <circle cx="142" cy="124" r="8" fill={withAlpha("#ffffff", 0.26)} />
    </>
  );
}

/**
 * 渲染第二类几何徽章图案，偏环形与轨道构成。
 */
function renderVariantB(primary: string, secondary: string) {
  return (
    <>
      <circle cx="100" cy="100" r="56" fill={withAlpha("#ffffff", 0.06)} />
      <circle
        cx="100"
        cy="100"
        r="44"
        fill="none"
        stroke={withAlpha("#ffffff", 0.28)}
        strokeWidth="10"
      />
      <path
        d="M52 116c18-30 44-46 78-48"
        fill="none"
        stroke={withAlpha(primary, 0.9)}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M68 136c22 10 46 10 72-2"
        fill="none"
        stroke={withAlpha(secondary, 0.96)}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="141" cy="78" r="10" fill={withAlpha(primary, 1)} />
    </>
  );
}

/**
 * 渲染第三类几何徽章图案，偏柱状与切角构成。
 */
function renderVariantC(primary: string, secondary: string) {
  return (
    <>
      <path
        d="M48 56h74c10 0 18 8 18 18v70H66c-10 0-18-8-18-18z"
        fill={withAlpha(primary, 0.92)}
      />
      <path
        d="M106 56h46c10 0 18 8 18 18v70h-46c-10 0-18-8-18-18z"
        fill={withAlpha("#ffffff", 0.16)}
      />
      <rect x="66" y="78" width="46" height="10" rx="5" fill={withAlpha("#ffffff", 0.56)} />
      <rect x="66" y="98" width="60" height="8" rx="4" fill={withAlpha("#ffffff", 0.28)} />
      <circle cx="142" cy="122" r="16" fill={withAlpha(secondary, 0.96)} />
    </>
  );
}

/**
 * 渲染第四类几何徽章图案，偏弧面与悬浮圆点构成。
 */
function renderVariantD(primary: string, secondary: string) {
  return (
    <>
      <path
        d="M46 122c0-34 26-62 62-62h46v72c0 12-10 22-22 22H68c-12 0-22-10-22-22z"
        fill={withAlpha("#ffffff", 0.08)}
      />
      <path
        d="M52 120c8-28 28-46 60-56"
        fill="none"
        stroke={withAlpha(primary, 0.94)}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <rect x="60" y="120" width="74" height="12" rx="6" fill={withAlpha("#ffffff", 0.64)} />
      <circle cx="146" cy="86" r="18" fill={withAlpha(secondary, 0.98)} />
      <circle cx="146" cy="86" r="7" fill={withAlpha("#ffffff", 0.26)} />
    </>
  );
}

/**
 * 根据变体索引选择对应的几何徽章图案。
 */
function renderMotif(variant: number, primary: string, secondary: string) {
  if (variant === 0) return renderVariantA(primary, secondary);
  if (variant === 1) return renderVariantB(primary, secondary);
  if (variant === 2) return renderVariantC(primary, secondary);
  return renderVariantD(primary, secondary);
}

/**
 * 渲染每种人格的几何徽章，用更干净统一的 SVG 系统替代旧拼贴图形。
 */
export default function CharacterSVG({
  type = "DBTI",
  className = "",
  size = 200,
  accent,
}: Props) {
  const seed = createSeed(type);
  const primary = accent ?? pickColor(seed);
  const secondary = pickColor(seed, 3);
  const tertiary = pickColor(seed, 5);
  const label = type.replace(/\//g, "").slice(0, 4).toUpperCase();
  const idPrefix = `persona-${label}-${seed}`;
  const style: CSSProperties = {
    width: size,
    height: size,
    filter: "drop-shadow(0 24px 48px rgba(16, 17, 22, 0.12))",
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-label={`${type} persona badge`}
      role="img"
    >
      <defs>
        <linearGradient id={`${idPrefix}-bg`} x1="20" y1="16" x2="178" y2="184" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={withAlpha(primary, 0.98)} />
          <stop offset="55%" stopColor={withAlpha(secondary, 0.82)} />
          <stop offset="100%" stopColor={withAlpha(tertiary, 0.96)} />
        </linearGradient>
        <linearGradient id={`${idPrefix}-panel`} x1="32" y1="28" x2="172" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={withAlpha("#ffffff", 0.28)} />
          <stop offset="100%" stopColor={withAlpha("#ffffff", 0.04)} />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="180" height="180" rx="42" fill={`url(#${idPrefix}-bg)`} />
      <rect x="10" y="10" width="180" height="180" rx="42" fill={withAlpha("#101116", 0.22)} />
      <rect
        x="24"
        y="24"
        width="152"
        height="152"
        rx="34"
        fill={`url(#${idPrefix}-panel)`}
        stroke={withAlpha("#ffffff", 0.22)}
      />
      <circle cx="58" cy="48" r="30" fill={withAlpha("#ffffff", 0.14)} />

      <g opacity="0.14">
        <text
          x="100"
          y="116"
          textAnchor="middle"
          fontSize="62"
          fontWeight="800"
          fontFamily="var(--font-code), monospace"
          fill="#ffffff"
          letterSpacing="-4"
        >
          {label.slice(0, 2)}
        </text>
      </g>

      {renderMotif(seed % 4, primary, secondary)}

      <rect x="52" y="154" width="96" height="20" rx="10" fill={withAlpha("#101116", 0.26)} />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fontFamily="var(--font-code), monospace"
        fill="#ffffff"
        letterSpacing="2.6"
      >
        {label}
      </text>
    </svg>
  );
}
