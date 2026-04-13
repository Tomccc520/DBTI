/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

import Link from "next/link";
import CharacterSVG from "@/components/CharacterSVG";
import { personalities } from "@/data/personalities";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  COPYRIGHT_LABEL,
  COPYRIGHT_URL,
  SITE_ENGLISH_NAME,
  SITE_FULL_NAME,
  SITE_HOOK,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

const featuredCodes = ["GRID", "MOOD", "CURSOR", "BENTO"];
const featuredTypes = personalities.filter((item) =>
  featuredCodes.includes(item.code)
);

const stats = [
  { value: "30", label: "道题" },
  { value: "5", label: "个模型" },
  { value: "27+1", label: "种人格" },
];

const modelBlocks = [
  {
    code: "V",
    title: "像素结界",
    desc: "测你对 1px、留白、细节和统一性的执念到底有多深。",
  },
  {
    code: "R",
    title: "改稿渡劫",
    desc: "测你面对返工、死线和临时需求时会不会直接破防。",
  },
  {
    code: "C",
    title: "嘴替战力",
    desc: "测你能不能把抽象需求翻成人话，把方案顺利讲过会。",
  },
  {
    code: "I",
    title: "灵感上头",
    desc: "测你起稿、整活和出片时到底更稳，还是更狠。",
  },
  {
    code: "T",
    title: "外挂共生",
    desc: "测你和 AI、Figma、组件库、插件之间是谁在驯谁。",
  },
];

/**
 * 渲染设计师人格测试首页。
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="grain-overlay" />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-mono text-sm font-black tracking-[0.34em] text-black/80">
            {SITE_NAME}
          </Link>
          <div className="flex items-center gap-3 text-sm text-black/58">
            <Link href="/types" className="hidden md:inline-block hover:text-black/92">
              人格库
            </Link>
            <Link href="/test" className="secondary-button">
              开始测试
            </Link>
          </div>
        </div>
      </header>

      <section className="hero-clean relative border-b border-black/8">
        <div className="hero-clean-glow hero-clean-glow-left" />
        <div className="hero-clean-glow hero-clean-glow-right" />

        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 py-28 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="hero-copy slide-up">
            <span className="editorial-kicker">{SITE_ENGLISH_NAME}</span>
            <h1 className="display-font mt-6 text-[4.8rem] leading-[0.92] tracking-[-0.07em] text-black md:text-[7rem]">
              {SITE_NAME}
            </h1>
            <p className="mt-4 text-lg font-semibold text-black/72 md:text-2xl">
              {SITE_FULL_NAME}
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/62 md:text-lg">
              {SITE_TAGLINE}
            </p>

            <div className="hero-statline mt-8">
              {stats.map((item) => (
                <span key={item.label}>
                  <strong>{item.value}</strong>
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/test" className="primary-button">
                现在开测
              </Link>
              <Link href="/types" className="ghost-button">
                先看人格库
              </Link>
            </div>
          </div>

          <div className="hero-art fade-in">
            <div className="hero-art-frame">
              <div className="hero-art-meta">
                <span>Designer Persona Preview</span>
                <span>Vol.01</span>
              </div>

              <div className="hero-art-canvas">
                <CharacterSVG
                  type="DBTI"
                  size={420}
                  accent="#2F6BFF"
                  className="float-animation"
                />
              </div>

              <div className="hero-art-caption">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-black/40">
                  What You Get
                </p>
                <h2 className="display-font mt-4 text-4xl leading-tight text-black md:text-5xl">
                  一次测试，直接给你成体系的结果页。
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-black/56">
                  不再把首页做成信息墙，只保留一个核心视觉和一条清晰路径。
                  真正的细节，留给测试过程和人格结果。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="editorial-kicker">Five Models</span>
            <h2 className="display-font mt-5 text-4xl leading-tight text-black md:text-5xl">
              测的不是会不会做图，
              <br />
              是你在圈里的工作方式。
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-black/58">
              五个模型就够解释大部分差异，不再额外堆很多过场信息。
            </p>
          </div>

          <div className="border-t border-black/10">
            {modelBlocks.map((block) => (
              <div key={block.code} className="editorial-split-row">
                <div className="font-mono text-lg font-black text-black/34">
                  {block.code}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black/88">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-black/58">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="editorial-kicker">Example Outcomes</span>
              <h2 className="display-font mt-5 text-4xl leading-tight text-black md:text-5xl">
                不是只有一种画风能赢。
              </h2>
            </div>
            <Link href="/types" className="ghost-button w-fit">
              打开全部人格
            </Link>
          </div>

          <div className="sample-list mt-10 border-t border-black/10">
            {featuredTypes.map((type) => (
              <div key={type.code} className="sample-row">
                <div className="flex items-center gap-4">
                  <CharacterSVG type={type.code} accent={type.color} size={72} />
                  <div>
                    <div
                      className="font-mono text-sm font-black tracking-[0.16em]"
                      style={{ color: type.color }}
                    >
                      {type.code}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-black/88">
                      {type.name}
                    </div>
                  </div>
                </div>

                <p className="max-w-xl text-sm leading-7 text-black/58">
                  {type.description}
                </p>

                <div className="sample-row-motto text-sm text-black/44">
                  「{type.motto}」
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl border-t border-black/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="editorial-kicker">Ready</span>
              <h2 className="display-font mt-5 max-w-3xl text-4xl leading-tight text-black md:text-6xl">
                {SITE_HOOK}
              </h2>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 lg:items-end">
              <p className="max-w-md text-sm leading-7 text-black/56 lg:text-right">
                首页现在只负责让你理解产品，真正的内容密度留给测试页和结果页。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/test" className="primary-button">
                  现在开始
                </Link>
                <Link href="/types" className="ghost-button">
                  先看图鉴
                </Link>
              </div>
            </div>
          </div>

          <footer className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-black/48 md:flex-row md:items-center md:justify-between">
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
      </section>
    </main>
  );
}
