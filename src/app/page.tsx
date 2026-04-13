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

const tickerItems = [
  "站酷封面脑",
  "小红书种草体",
  "脉脉求生派",
  "大厂过会王",
  "像素结界",
  "改稿渡劫",
  "嘴替战力",
  "灵感上头",
  "外挂共生",
];

const modelBlocks = [
  {
    code: "V",
    title: "像素结界",
    desc: "对味雷达、细节内耗、统一执念，测你是不是那种 1px 歪了也会当场破防的人。",
  },
  {
    code: "R",
    title: "改稿渡劫",
    desc: "返工抗性、死线爆改、复盘补丁，看你是会瞬间下线，还是越到后面越能开大。",
  },
  {
    code: "C",
    title: "嘴替战力",
    desc: "抽象黑话翻译、人话拉齐、过会说服力，决定你是安静高手还是评审场控人。",
  },
  {
    code: "I",
    title: "灵感上头",
    desc: "起稿点火、整活胆量、出片手速，测你到底偏稳派、狠派，还是纯靠灵感开挂。",
  },
  {
    code: "T",
    title: "外挂共生",
    desc: "AI、Figma、变量、插件和新工作流，你和工具之间到底是谁在驯谁。",
  },
];

const toneBlocks = [
  {
    title: "站酷语气",
    desc: "更在乎封面张力、排版狠度和记忆点，主打一个先出片。",
  },
  {
    title: "小红书语气",
    desc: "更在乎氛围、情绪、种草感和那股让人想截图保存的劲儿。",
  },
  {
    title: "脉脉语气",
    desc: "更在乎打工人求生、背锅抗性、改稿耐受和能不能活着下班。",
  },
  {
    title: "大厂设计组语气",
    desc: "更在乎对齐、评审、过会、组件库和跨部门链路到底顺不顺。",
  },
];

/**
 * 渲染设计师人格测试首页。
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="grain-overlay" />

      <section className="hero-poster relative min-h-[100svh] overflow-hidden border-b border-black/10">
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
            <Link href="/" className="font-mono text-sm font-black tracking-[0.34em] text-black/82">
              {SITE_NAME}
            </Link>
            <div className="flex items-center gap-3 text-sm text-black/60">
              <Link href="/types" className="hidden md:inline-block hover:text-black/92">
                人格库
              </Link>
              <Link href="/test" className="secondary-button">
                开始测试
              </Link>
            </div>
          </div>
        </header>

        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-end gap-10 px-5 pb-12 pt-28 md:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:pb-16">
          <div className="relative z-10 max-w-xl slide-up">
            <span className="editorial-kicker">{SITE_ENGLISH_NAME}</span>
            <p className="mt-6 font-mono text-xs font-black tracking-[0.32em] text-black/42">
              DESIGNER BEHAVIOR TYPE INDICATOR
            </p>
            <h1 className="display-font mt-4 text-[4.8rem] leading-[0.92] tracking-[-0.07em] text-black md:text-[7.4rem]">
              {SITE_NAME}
            </h1>
            <p className="mt-4 text-lg font-semibold text-black/74 md:text-2xl">
              {SITE_FULL_NAME}
            </p>
            <p className="mt-6 text-base leading-8 text-black/64 md:text-lg">
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-black/48 md:text-base">
              把站酷、小红书、脉脉和大厂设计组的语气，混进 30 道题和 5 个抽象模型里，
              测你在设计圈到底是哪种画风。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/test" className="primary-button">
                现在开测
                <span className="font-mono text-base">↗</span>
              </Link>
              <Link href="/types" className="ghost-button">
                先看人格库
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-black/54">
              <div>
                <div className="font-mono text-2xl font-black text-black">30</div>
                <div className="mt-1">道题</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-black text-black">5</div>
                <div className="mt-1">个模型</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-black text-black">27+1</div>
                <div className="mt-1">种人格</div>
              </div>
            </div>
          </div>

          <div className="hero-stage fade-in">
            <div className="hero-stage-code">DBTI</div>
            <div className="hero-stage-label">Poster / Preview / Personality Atlas</div>

            <div className="grid h-full items-end gap-8 lg:grid-cols-[0.84fr_1.16fr]">
              <div className="relative flex min-h-[360px] items-center justify-center">
                <div className="hero-stage-disc" />
                <CharacterSVG
                  type="DBTI"
                  size={330}
                  accent="#101116"
                  className="relative z-10 float-animation"
                />
              </div>

              <div className="flex h-full flex-col justify-between gap-6 border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <div className="font-mono text-xs font-black tracking-[0.24em] text-black/42">
                    TONE MIX / FOUR FEEDS / ONE RESULT
                  </div>
                  <h2 className="display-font mt-4 max-w-md text-4xl leading-tight text-black md:text-5xl">
                    一个更像设计周刊封面的测试站
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-black/56 md:text-base">
                    不是模板式问卷，而是把真实工作流、职场空气和互联网黑话一起压进结果里。
                  </p>
                </div>

                <div className="space-y-3">
                  {featuredTypes.map((type) => (
                    <div key={type.code} className="editorial-persona-row">
                      <div className="font-mono text-sm font-black tracking-[0.18em]" style={{ color: type.color }}>
                        {type.code}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-lg font-semibold text-black/88">{type.name}</div>
                        <div className="mt-1 text-sm text-black/48">{type.motto}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ticker-strip">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="ticker-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="editorial-kicker">Five Models</span>
            <h2 className="display-font mt-5 text-4xl leading-tight text-black md:text-5xl">
              测的不是会不会做图，
              <br />
              是你在圈里的行事方式。
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-black/58">
              每个模型只做一件事：解释你的偏好、协作方式、出片节奏和工具依赖，不重复、不堆料。
            </p>
          </div>

          <div className="space-y-1 border-t border-black/10">
            {modelBlocks.map((block) => (
              <div key={block.code} className="editorial-split-row">
                <div className="font-mono text-lg font-black text-black/34">{block.code}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black/88">{block.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-black/58">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="editorial-kicker">Tone Mix</span>
            <h2 className="display-font mt-5 text-4xl leading-tight text-black md:text-5xl">
              这套黑话不是乱写的，
              <br />
              是四种圈层语气混出来的。
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-black/58">
              所以它既有出片感，也有打工人求生感，还自带一层过会、拉齐和提案空气。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {toneBlocks.map((block) => (
              <div key={block.title} className="tone-panel">
                <div className="font-mono text-xs font-black tracking-[0.24em] text-black/42">
                  {block.title}
                </div>
                <p className="mt-5 text-base leading-7 text-black/66">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
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

          <div className="mt-10 border-t border-black/10">
            {featuredTypes.map((type) => (
              <div key={type.code} className="library-row">
                <div className="flex items-center gap-4">
                  <CharacterSVG type={type.code} accent={type.color} size={88} />
                  <div>
                    <div className="font-mono text-sm font-black tracking-[0.18em]" style={{ color: type.color }}>
                      {type.code}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-black/88">{type.name}</h3>
                    <p className="mt-2 text-sm text-black/48">「{type.motto}」</p>
                  </div>
                </div>
                <p className="max-w-xl text-sm leading-7 text-black/58">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-20">
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
                现在就能本地直接开测，看看你更像封面脑、种草体、求生派，还是过会王。
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
