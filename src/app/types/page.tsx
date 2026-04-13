/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import CharacterSVG from "@/components/CharacterSVG";
import { personalities, specialPersonality } from "@/data/personalities";
import { SITE_FULL_NAME, SITE_NAME } from "@/lib/constants";

/**
 * 渲染全部人格类型浏览页。
 */
export default function TypesPage() {
  const allTypes = [...personalities, specialPersonality];
  const [selected, setSelected] = useState<string>(allTypes[0].code);
  const current = allTypes.find((item) => item.code === selected) ?? allTypes[0];

  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f7f2eb]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-sm text-black/52 transition hover:text-black">
            ← 首页
          </Link>
          <span className="font-mono text-sm font-black tracking-[0.3em] text-black/82">
            {SITE_NAME}
          </span>
          <Link href="/test" className="text-sm text-black/52 transition hover:text-black">
            去测试 →
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <section className="surface-panel-strong rounded-[34px] p-6 md:p-8">
            <span className="editorial-kicker">All Personalities</span>
            <h1 className="display-font mt-4 text-4xl leading-tight text-black md:text-5xl">
              27 种普通人格
              <br />
              + 1 种隐藏人格
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-black/58 md:text-base">
              点击右侧任意人格，就能看到它的气质、优势、注意事项和典型工作流。
              这页相当于一份设计师人格图鉴。
            </p>

            <div className="mt-8 rounded-[30px] border border-black/8 bg-white/58 p-5">
              <div className="grid items-center gap-5 md:grid-cols-[132px_1fr]">
                <CharacterSVG
                  type={current.code}
                  accent={current.color}
                  size={132}
                  className="mx-auto"
                />
                <div>
                  <div
                    className="font-mono text-lg font-black tracking-[0.18em]"
                    style={{ color: current.color }}
                  >
                    {current.code}
                  </div>
                  <h2 className="display-font mt-2 text-3xl leading-tight text-black">
                    {current.name}
                  </h2>
                  <p className="mt-2 text-sm italic text-black/56">
                    「{current.motto}」
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-black/62">
                {current.description}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-black/8 bg-white/64 p-4">
                  <div className="text-sm font-semibold text-black/82">优势</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-black/62">
                    {current.strengths.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-black/8 bg-white/64 p-4">
                  <div className="text-sm font-semibold text-black/82">注意</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-black/62">
                    {current.weaknesses.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-[24px] border border-black/8 bg-white/64 p-4">
                <div className="text-sm font-semibold text-black/82">工作流关键词</div>
                <p className="mt-2 text-sm leading-6 text-black/62">{current.techStack}</p>
              </div>
            </div>
          </section>

          <section className="surface-panel rounded-[34px] p-6 md:p-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <span className="editorial-kicker">Library</span>
                <h2 className="display-font mt-4 text-3xl leading-tight text-black md:text-4xl">
                  全部人格图鉴
                </h2>
              </div>
              <div className="text-sm text-black/46">
                {SITE_NAME} · {SITE_FULL_NAME}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {allTypes.map((type) => {
                const active = selected === type.code;
                return (
                  <button
                    key={type.code}
                    onClick={() => setSelected(type.code)}
                    className={`type-tile rounded-[28px] border p-4 text-left ${
                      active
                        ? "border-black/20 bg-white/86 shadow-[0_18px_38px_rgba(16,17,22,0.09)]"
                        : "border-black/8 bg-white/58"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <CharacterSVG
                        type={type.code}
                        accent={type.color}
                        size={72}
                      />
                      {type.code === specialPersonality.code && (
                        <span className="rounded-full border border-black/10 bg-black text-[10px] font-bold uppercase tracking-[0.18em] text-white px-3 py-1">
                          Hidden
                        </span>
                      )}
                    </div>

                    <div
                      className="mt-4 font-mono text-sm font-black tracking-[0.18em]"
                      style={{ color: type.color }}
                    >
                      {type.code}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-black/88">
                      {type.name}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-black/54">
                      {type.motto}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
