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
  "#0F172A",
  "#14B8A6",
  "#D63D2E",
  "#7C5CFF",
];

/**
 * 根据人格代码生成稳定的图形种子，确保同一人格图形恒定。
 */
function createSeed(code: string): number {
  return Array.from(code).reduce(
    (sum, character, index) => sum + character.charCodeAt(0) * (index + 7),
    0
  );
}

/**
 * 根据种子返回对应的背景色。
 */
function pickColor(seed: number, offset = 0): string {
  return palette[(seed + offset) % palette.length];
}

/**
 * 渲染人格徽章中的抽象图形。
 */
function renderMotif(
  variant: number,
  primary: string,
  secondary: string,
  tertiary: string
) {
  if (variant === 0) {
    return (
      <>
        <div
          className="absolute -left-[8%] top-[14%] h-[42%] w-[42%] rounded-full blur-[2px]"
          style={{ background: `${secondary}cc` }}
        />
        <div
          className="absolute right-[10%] top-[16%] h-[14%] w-[48%] rounded-full"
          style={{ background: `${tertiary}b3` }}
        />
        <div
          className="absolute bottom-[14%] right-[14%] h-[28%] w-[28%] rotate-12 rounded-[24%]"
          style={{ border: `2px solid ${primary}`, background: `${primary}14` }}
        />
      </>
    );
  }

  if (variant === 1) {
    return (
      <>
        <div
          className="absolute left-[16%] top-[10%] h-[36%] w-[36%] rotate-45 rounded-[18%]"
          style={{ background: `${secondary}c9` }}
        />
        <div
          className="absolute right-[12%] top-[20%] h-[18%] w-[18%] rounded-full"
          style={{ border: `2px solid ${tertiary}` }}
        />
        <div
          className="absolute bottom-[18%] left-[14%] h-[12%] w-[56%] rounded-full"
          style={{ background: `${primary}bf` }}
        />
      </>
    );
  }

  if (variant === 2) {
    return (
      <>
        <div
          className="absolute left-[12%] top-[18%] h-[12%] w-[62%] rounded-full"
          style={{ background: `${primary}cc` }}
        />
        <div
          className="absolute left-[18%] top-[36%] h-[10%] w-[48%] rounded-full"
          style={{ background: `${secondary}b3` }}
        />
        <div
          className="absolute right-[16%] bottom-[18%] h-[24%] w-[24%] rounded-full"
          style={{ background: `${tertiary}c2` }}
        />
      </>
    );
  }

  return (
    <>
      <div
        className="absolute left-[14%] top-[14%] h-[30%] w-[30%] rounded-full"
        style={{ border: `2px solid ${primary}` }}
      />
      <div
        className="absolute right-[12%] top-[18%] h-[40%] w-[40%] rounded-full"
        style={{ background: `${secondary}a6` }}
      />
      <div
        className="absolute bottom-[14%] left-[18%] h-[14%] w-[46%] rounded-full"
        style={{ background: `${tertiary}cc` }}
      />
    </>
  );
}

/**
 * 渲染每种人格的抽象徽章，用统一图形系统替代原始插画资源。
 */
export default function CharacterSVG({
  type = "DBTI",
  className = "",
  size = 200,
  accent,
}: Props) {
  const seed = createSeed(type);
  const primary = accent ?? pickColor(seed);
  const secondary = pickColor(seed, 2);
  const tertiary = pickColor(seed, 5);
  const label = type.replace(/\//g, "").slice(0, 8);
  const style: CSSProperties = {
    width: size,
    height: size,
    background: `linear-gradient(135deg, ${primary}, #0f172acc 68%)`,
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.18)",
  };

  return (
    <div
      className={`persona-badge relative isolate overflow-hidden rounded-[28%] border border-white/30 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.34),transparent_30%),linear-gradient(180deg,transparent,rgba(255,255,255,0.04))]" />
      <div className="absolute inset-0 opacity-80">
        {renderMotif(seed % 4, primary, secondary, tertiary)}
      </div>
      <div className="absolute inset-[7%] rounded-[24%] border border-white/12" />
      <div className="absolute inset-x-[12%] bottom-[12%] rounded-full border border-white/14 bg-black/14 px-3 py-2 text-center font-mono text-[0.68rem] font-black tracking-[0.28em] text-white/92 backdrop-blur-sm">
        {label}
      </div>
    </div>
  );
}
