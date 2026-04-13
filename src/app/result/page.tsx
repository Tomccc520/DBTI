/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";
import CharacterSVG from "@/components/CharacterSVG";
import RadarChart from "@/components/RadarChart";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  COPYRIGHT_LABEL,
  COPYRIGHT_URL,
  SITE_FULL_NAME,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/constants";
import { calculateResult, type TestResult } from "@/lib/scoring";

const modelInfo: Record<string, { icon: string; name: string }> = {
  V: { icon: "✦", name: "视觉信仰" },
  R: { icon: "△", name: "需求应对" },
  C: { icon: "◎", name: "协作关系" },
  I: { icon: "◆", name: "创意驱动" },
  T: { icon: "▣", name: "工具共生" },
};

/**
 * 根据人格代码生成稳定的绘图种子。
 */
function createSeed(code: string): number {
  return Array.from(code).reduce(
    (sum, character, index) => sum + character.charCodeAt(0) * (index + 5),
    0
  );
}

/**
 * 在海报画布中绘制抽象人格图形。
 */
function drawPosterGlyph(
  ctx: CanvasRenderingContext2D,
  accent: string,
  seed: number,
  centerX: number,
  centerY: number
) {
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(((seed % 12) - 6) * 0.04);

  ctx.globalAlpha = 0.16;
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(-150, -40, 98, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 0.22;
  ctx.beginPath();
  ctx.roundRect(20, -120, 220, 68, 32);
  ctx.fill();

  ctx.globalAlpha = 0.12;
  ctx.beginPath();
  ctx.roundRect(-70, 46, 160, 160, 38);
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.strokeStyle = accent;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.roundRect(-210, -180, 420, 360, 72);
  ctx.stroke();

  ctx.restore();
}

/**
 * 在海报中按宽度自动换行文本。
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  startY: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number
) {
  let line = "";
  let currentY = startY;
  let lineCount = 0;

  for (const character of text) {
    const nextLine = line + character;
    if (ctx.measureText(nextLine).width > maxWidth) {
      ctx.fillText(line, x, currentY);
      line = character;
      currentY += lineHeight;
      lineCount += 1;

      if (lineCount >= maxLines - 1) {
        break;
      }
    } else {
      line = nextLine;
    }
  }

  const suffix = lineCount >= maxLines - 1 && text.length > line.length ? "..." : "";
  ctx.fillText(line + suffix, x, currentY);
}

/**
 * 渲染结果页并支持分享文案与海报生成。
 */
export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [generatingPoster, setGeneratingPoster] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("dbti_data");
      if (!raw) {
        router.push("/");
        return;
      }

      const parsed = JSON.parse(raw) as {
        answers: Record<number, number>;
        hidden?: { totem?: string; colorSense?: string };
      };
      setResult(calculateResult(parsed.answers, parsed.hidden));
    } catch {
      router.push("/");
    }
  }, [router]);

  /**
   * 生成可保存的长图海报。
   */
  const generatePoster = useCallback(async () => {
    if (!result || generatingPoster) return;

    setGeneratingPoster(true);

    try {
      const personality = result.personality;
      const siteUrl = getSiteUrl();
      const scale = 3;
      const width = 750 * scale;
      const height = 1334 * scale;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const px = (value: number) => value * scale;
      const seed = createSeed(personality.code);

      const background = ctx.createLinearGradient(0, 0, 0, height);
      background.addColorStop(0, "#f7f2eb");
      background.addColorStop(1, "#ece1d5");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(16, 17, 22, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += px(36)) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += px(36)) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      drawPosterGlyph(ctx, personality.color, seed, width / 2, px(320));

      ctx.fillStyle = "#101116";
      ctx.font = `700 ${px(22)}px Avenir Next, sans-serif`;
      ctx.fillText(`${SITE_NAME} · ${SITE_FULL_NAME}`, px(60), px(62));

      ctx.fillStyle = personality.color;
      ctx.font = `900 ${px(76)}px SF Mono, Menlo, monospace`;
      ctx.fillText(personality.code, px(60), px(520));

      ctx.fillStyle = "#101116";
      ctx.font = `700 ${px(34)}px Georgia, serif`;
      ctx.fillText(personality.name, px(60), px(580));

      ctx.fillStyle = "rgba(16, 17, 22, 0.62)";
      ctx.font = `${px(20)}px Avenir Next, sans-serif`;
      ctx.fillText(`「${personality.motto}」`, px(60), px(620));

      ctx.fillStyle = "#101116";
      ctx.font = `900 ${px(56)}px Avenir Next, sans-serif`;
      ctx.fillText(`${result.similarity}%`, px(60), px(700));
      ctx.fillStyle = "rgba(16, 17, 22, 0.42)";
      ctx.font = `${px(18)}px Avenir Next, sans-serif`;
      ctx.fillText("人格匹配度", px(60), px(732));

      ctx.strokeStyle = "rgba(16, 17, 22, 0.12)";
      ctx.lineWidth = px(2);
      ctx.beginPath();
      ctx.moveTo(px(60), px(770));
      ctx.lineTo(width - px(60), px(770));
      ctx.stroke();

      ctx.fillStyle = "rgba(16, 17, 22, 0.72)";
      ctx.font = `${px(20)}px Avenir Next, sans-serif`;
      wrapText(
        ctx,
        personality.description,
        px(60),
        px(825),
        width - px(120),
        px(32),
        5
      );

      ctx.fillStyle = personality.color;
      ctx.font = `800 ${px(24)}px Avenir Next, sans-serif`;
      ctx.fillText("优势", px(60), px(1010));
      ctx.fillText("注意", px(400), px(1010));

      ctx.fillStyle = "#101116";
      ctx.font = `${px(18)}px Avenir Next, sans-serif`;
      personality.strengths.forEach((item, index) => {
        ctx.fillText(`· ${item}`, px(60), px(1050 + index * 30));
      });
      personality.weaknesses.forEach((item, index) => {
        ctx.fillText(`· ${item}`, px(400), px(1050 + index * 30));
      });

      const qrDataUrl = await QRCode.toDataURL(siteUrl, {
        width: px(130),
        margin: 1,
        color: { dark: "#101116", light: "#ffffff" },
      });

      const qrImage = new Image();
      await new Promise<void>((resolve) => {
        qrImage.onload = () => resolve();
        qrImage.src = qrDataUrl;
      });

      ctx.fillStyle = "rgba(255,255,255,0.72)";
      ctx.beginPath();
      ctx.roundRect(px(50), px(1132), px(150), px(150), px(30));
      ctx.fill();
      ctx.drawImage(qrImage, px(60), px(1142), px(130), px(130));

      ctx.fillStyle = "#101116";
      ctx.font = `700 ${px(24)}px Avenir Next, sans-serif`;
      ctx.fillText("你是什么类型的设计师？", px(228), px(1188));
      ctx.fillStyle = personality.color;
      ctx.font = `800 ${px(20)}px Avenir Next, sans-serif`;
      ctx.fillText("扫码继续测试", px(228), px(1232));
      ctx.fillStyle = "rgba(16, 17, 22, 0.5)";
      ctx.font = `${px(16)}px Avenir Next, sans-serif`;
      ctx.fillText("30 道题 · 5 大模型 · 27+1 人格", px(228), px(1268));

      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(16, 17, 22, 0.4)";
      ctx.font = `${px(14)}px Avenir Next, sans-serif`;
      ctx.fillText(`${COPYRIGHT_LABEL} · ${AUTHOR_NAME}`, width / 2, height - px(28));

      setPosterUrl(canvas.toDataURL("image/png", 1));
    } finally {
      setGeneratingPoster(false);
    }
  }, [generatingPoster, result]);

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="surface-panel rounded-[30px] px-8 py-7 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-black/16 border-t-black/70" />
          <p className="mt-4 text-sm text-black/56">正在编译你的设计人格...</p>
        </div>
      </div>
    );
  }

  const { personality, similarity, dimensions, matchDetails } = result;
  const shareText = `我在 ${SITE_NAME} ${SITE_FULL_NAME} 中测出了【${personality.code} · ${personality.name}】\n「${personality.motto}」\n匹配度 ${similarity}%\n\n来测测你是哪一型设计师 👉 ${getSiteUrl()}`;

  /**
   * 复制分享文案到剪贴板。
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  /**
   * 将生成后的海报下载到本地。
   */
  const handleSavePoster = () => {
    if (!posterUrl) return;
    const anchor = document.createElement("a");
    anchor.href = posterUrl;
    anchor.download = `${SITE_NAME}-${personality.code}.png`;
    anchor.click();
  };

  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f7f2eb]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <button
            onClick={() => router.push("/")}
            className="text-sm text-black/52 transition hover:text-black"
          >
            ← 首页
          </button>
          <span className="font-mono text-sm font-black tracking-[0.3em] text-black/82">
            {SITE_NAME}
          </span>
          <span className="font-mono text-xs text-black/44">RESULT</span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="surface-panel-strong rounded-[34px] p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="editorial-kicker">Best Match</span>
              {result.isSpecial && (
                <span className="metric-pill" style={{ color: personality.color }}>
                  隐藏人格已触发
                </span>
              )}
            </div>

            <div className="mt-7 grid items-center gap-6 md:grid-cols-[220px_1fr]">
              <CharacterSVG
                type={personality.code}
                accent={personality.color}
                size={220}
                className="mx-auto float-animation"
              />
              <div>
                <div
                  className="font-mono text-4xl font-black tracking-[0.18em] md:text-6xl"
                  style={{ color: personality.color }}
                >
                  {personality.code}
                </div>
                <h1 className="display-font mt-3 text-4xl leading-tight text-black md:text-5xl">
                  {personality.name}
                </h1>
                <p className="mt-3 text-base italic text-black/56">
                  「{personality.motto}」
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="metric-pill">
                    匹配度
                    <strong
                      className="font-mono text-lg font-black"
                      style={{ color: personality.color }}
                    >
                      {similarity}%
                    </strong>
                  </span>
                  <span className="metric-pill">15 维已分析</span>
                </div>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-black/64 md:text-base">
              {personality.description}
            </p>
          </section>

          <section className="surface-panel rounded-[34px] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="editorial-kicker">Model Snapshot</span>
              <span className="text-sm text-black/46">五维轮廓</span>
            </div>
            <div className="mt-6 flex justify-center">
              <RadarChart dimensions={dimensions} size={320} />
            </div>

            {matchDetails.length > 0 && (
              <div className="mt-6 border-t border-black/8 pt-6">
                <div className="mb-4 text-sm font-semibold text-black/72">
                  相近人格排行
                </div>
                <div className="space-y-3">
                  {matchDetails.map((item, index) => (
                    <div key={item.code} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-black text-white">
                        {index + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-sm font-bold text-black/86">
                          {item.code}
                        </div>
                        <div className="text-xs text-black/48">{item.name}</div>
                      </div>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/8">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.similarity}%`,
                            background: `linear-gradient(90deg, ${personality.color}, #2f6bff)`,
                          }}
                        />
                      </div>
                      <div className="w-10 text-right font-mono text-xs text-black/48">
                        {item.similarity}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <section className="surface-panel rounded-[34px] p-6 md:p-8">
            <span className="editorial-kicker">Traits</span>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[26px] border border-black/8 bg-white/58 p-5">
                <div className="text-sm font-semibold text-black/82">优势</div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-black/62">
                  {personality.strengths.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[26px] border border-black/8 bg-white/58 p-5">
                <div className="text-sm font-semibold text-black/82">注意</div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-black/62">
                  {personality.weaknesses.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-[26px] border border-black/8 bg-white/58 p-5">
              <div className="text-sm font-semibold text-black/82">工作流关键词</div>
              <p className="mt-2 text-sm leading-6 text-black/62">{personality.techStack}</p>
              <div className="mt-4 text-sm font-semibold text-black/82">一句话人格</div>
              <p className="mt-2 text-sm italic leading-6 text-black/62">
                「{personality.spirit}」
              </p>
            </div>
          </section>

          <section className="surface-panel rounded-[34px] p-6 md:p-8">
            <button
              onClick={() => setShowDetails((current) => !current)}
              className="flex w-full items-center justify-between"
            >
              <div>
                <span className="editorial-kicker">Dimension Details</span>
                <h2 className="display-font mt-3 text-3xl leading-tight text-black">
                  十五维度详细解读
                </h2>
              </div>
              <span className="text-sm text-black/42">
                {showDetails ? "收起" : "展开"}
              </span>
            </button>

            {showDetails && (
              <div className="mt-6 space-y-7 fade-in">
                {["V", "R", "C", "I", "T"].map((model) => {
                  const grouped = dimensions.filter((item) => item.model === model);
                  return (
                    <div key={model}>
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-black/76">
                        <span>{modelInfo[model].icon}</span>
                        <span>{modelInfo[model].name}</span>
                      </div>
                      <div className="space-y-3">
                        {grouped.map((dimension) => (
                          <div key={dimension.code} className="rounded-[22px] border border-black/8 bg-white/56 p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-sm font-medium text-black/74">
                                {dimension.code} · {dimension.name}
                              </span>
                              <span className="font-mono text-xs text-black/48">
                                {dimension.level}
                              </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-black/8">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${dimension.percentage}%`,
                                  background: `linear-gradient(90deg, ${personality.color}, #2f6bff)`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        <section className="surface-panel-strong mt-6 rounded-[34px] p-6 md:p-8">
          <span className="editorial-kicker">Share</span>
          <h2 className="display-font mt-4 text-3xl leading-tight text-black md:text-4xl">
            把你的设计人格发出去。
          </h2>
          <p className="mt-3 text-sm leading-6 text-black/58">
            可以直接复制文案，也可以生成一张长图海报。海报里的二维码会自动指向当前站点地址。
          </p>

          <div className="mt-6 rounded-[28px] border border-black/8 bg-white/58 p-5">
            <p className="whitespace-pre-line text-sm leading-7 text-black/72">
              {shareText}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={handleCopy} className="primary-button">
              {copied ? "已复制文案" : "复制分享文案"}
            </button>
            <button
              onClick={posterUrl ? handleSavePoster : generatePoster}
              className="secondary-button"
            >
              {generatingPoster ? "海报生成中..." : posterUrl ? "保存海报" : "生成海报"}
            </button>
          </div>

          {posterUrl && (
            <div className="mt-6 fade-in">
              <p className="mb-3 text-sm text-black/48">长按或下载保存这张海报</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posterUrl}
                alt="设计师人格测试分享海报"
                className="w-full max-w-[360px] rounded-[28px] border border-black/8 shadow-[0_24px_60px_rgba(16,17,22,0.12)]"
              />
            </div>
          )}
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              sessionStorage.removeItem("dbti_data");
              router.push("/test");
            }}
            className="secondary-button"
          >
            重新测试
          </button>
          <button onClick={() => router.push("/")} className="primary-button">
            回到首页
          </button>
        </div>

        <footer className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 pb-8 text-sm text-black/48 md:flex-row md:items-center md:justify-between">
          <p>
            {SITE_NAME} · {SITE_FULL_NAME}
          </p>
          <p>
            <a
              href={COPYRIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {COPYRIGHT_LABEL}
            </a>
            {" · "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {AUTHOR_NAME}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
