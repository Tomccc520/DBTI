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
  SITE_FULL_NAME,
  SITE_NAME,
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
    title: "视觉信仰",
    desc: "从像素敏感度、细节洁癖到系统一致性，测你对“美”和“准”的执念有多深。",
  },
  {
    code: "R",
    title: "需求应对",
    desc: "面对改稿、死线和复盘，你究竟是平静处理，还是边做边渡劫。",
  },
  {
    code: "C",
    title: "协作关系",
    desc: "看你如何讲设计、拉对齐、做提案，决定你在团队里是安静高手还是场控选手。",
  },
  {
    code: "I",
    title: "创意驱动",
    desc: "灵感从哪里来，敢不敢冒险，出手够不够快，都会决定你的设计气质。",
  },
  {
    code: "T",
    title: "工具共生",
    desc: "AI、Figma、变量、插件、工作流，你和工具之间到底是谁在驯谁。",
  },
];

/**
 * 渲染设计师人格测试首页。
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="grain-overlay" />

      <section className="paper-grid relative isolate min-h-screen overflow-hidden border-b border-black/8">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#ff6b2c]/24 blur-3xl" />
        <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-[#2f6bff]/16 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#00a68c]/14 blur-3xl" />

        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
            <Link href="/" className="font-mono text-sm font-black tracking-[0.34em] text-black/80">
              {SITE_NAME}
            </Link>
            <div className="flex items-center gap-3 text-sm text-black/60">
              <Link href="/types" className="hidden md:inline-block hover:text-black/90">
                人格库
              </Link>
              <Link href="/test" className="secondary-button">
                开始测试
              </Link>
            </div>
          </div>
        </header>

        <div className="mx-auto grid min-h-screen max-w-6xl gap-10 px-5 pb-14 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-10">
            <div className="slide-up">
              <span className="editorial-kicker">Designer Behavior Type Indicator</span>
              <h1 className="display-font mt-5 text-[5rem] leading-none tracking-[-0.06em] text-black md:text-[7rem]">
                {SITE_NAME}
              </h1>
              <p className="mt-3 text-xl font-semibold text-black/76 md:text-2xl">
                {SITE_FULL_NAME}
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/62 md:text-lg">
                30 道和设计工作流相关的选择题，从视觉信仰、需求应对、协作关系、
                创意驱动、工具共生五个角度，测出你的设计人格类型。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/test" className="primary-button">
                  开始测试
                  <span className="font-mono text-base">↗</span>
                </Link>
                <Link href="/types" className="secondary-button">
                  查看全部人格
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="surface-panel-strong rounded-[28px] p-4 md:p-5"
                >
                  <div className="font-mono text-2xl font-black text-black md:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-black/56">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="surface-panel-strong relative w-full rounded-[32px] p-6 md:p-8">
              <div className="absolute right-5 top-5 rounded-full border border-black/10 bg-white/70 px-3 py-1 font-mono text-[11px] font-bold tracking-[0.2em] text-black/46">
                PREVIEW
              </div>
              <span className="editorial-kicker">Selected Types</span>
              <h2 className="display-font mt-4 max-w-sm text-4xl leading-tight text-black md:text-5xl">
                像提案封面一样醒目的设计师测试站
              </h2>

              <div className="mt-8 grid items-center gap-6 md:grid-cols-[280px_1fr]">
                <CharacterSVG
                  type="DBTI"
                  size={280}
                  accent="#FF6B2C"
                  className="mx-auto float-animation"
                />

                <div className="space-y-3">
                  {featuredTypes.map((type) => (
                    <div
                      key={type.code}
                      className="rounded-[26px] border border-black/8 bg-white/66 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div
                            className="font-mono text-base font-black tracking-[0.16em]"
                            style={{ color: type.color }}
                          >
                            {type.code}
                          </div>
                          <div className="mt-1 text-lg font-semibold text-black/88">
                            {type.name}
                          </div>
                        </div>
                        <span className="text-xs text-black/46">
                          {type.motto}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/8 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <span className="editorial-kicker">Five Models</span>
            <h2 className="display-font mt-4 text-4xl leading-tight text-black md:text-5xl">
              测的不是审美题，
              <br />
              是你的工作方式。
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-black/62">
              这个版本不照搬程序员语义，而是把设计师真实的协作、改稿、提案、
              Figma 和 AI 使用方式拆成 15 个维度来测。
            </p>
          </div>

          <div className="space-y-4">
            {modelBlocks.map((block) => (
              <div
                key={block.code}
                className="flex gap-4 border-t border-black/10 py-4 first:border-t-0 first:pt-0"
              >
                <div className="font-mono text-lg font-black text-black/34">
                  {block.code}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black/88">{block.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-black/58">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="editorial-kicker">Example Outcomes</span>
              <h2 className="display-font mt-4 text-4xl leading-tight text-black md:text-5xl">
                不是只有一种设计师能赢。
              </h2>
            </div>
            <Link href="/types" className="secondary-button w-fit">
              打开人格库
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredTypes.map((type) => (
              <div
                key={type.code}
                className="surface-panel rounded-[30px] p-5"
              >
                <CharacterSVG
                  type={type.code}
                  accent={type.color}
                  size={112}
                  className="mb-5"
                />
                <div
                  className="font-mono text-sm font-black tracking-[0.16em]"
                  style={{ color: type.color }}
                >
                  {type.code}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-black/88">
                  {type.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/56">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="surface-panel-strong mt-12 rounded-[34px] px-6 py-7 md:flex md:items-center md:justify-between md:px-8">
            <div>
              <span className="editorial-kicker">Ready</span>
              <h3 className="display-font mt-3 text-3xl leading-tight text-black md:text-4xl">
                你是 GRID、MOOD，还是隐藏人格 PANTONE？
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
              <Link href="/test" className="primary-button">
                现在开始
              </Link>
              <Link href="/types" className="secondary-button">
                先看全部类型
              </Link>
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
