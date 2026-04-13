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

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4ede4]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-sm text-black/52 transition hover:text-black">
            ← 首页
          </Link>
          <span className="font-mono text-sm font-black tracking-[0.32em] text-black/82">
            {SITE_NAME}
          </span>
          <Link href="/test" className="text-sm text-black/52 transition hover:text-black">
            去开测 →
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:px-8 lg:grid-cols-[360px_1fr]">
        <aside className="lg:sticky lg:top-[88px] lg:h-fit">
          <span className="editorial-kicker">当前人格</span>
          <div className="mt-6 border-t border-black/10 pt-6">
            <div className="flex items-center justify-center rounded-[36px] border border-black/10 bg-white/48 p-8">
              <CharacterSVG
                type={current.code}
                accent={current.color}
                size={240}
                className="float-animation"
              />
            </div>

            <div
              className="mt-6 font-mono text-2xl font-black tracking-[0.18em]"
              style={{ color: current.color }}
            >
              {current.code}
            </div>
            <h1 className="display-font mt-3 text-4xl leading-tight text-black">
              {current.name}
            </h1>
            <p className="mt-3 text-base italic text-black/54">「{current.motto}」</p>
            <p className="mt-5 text-sm leading-8 text-black/62">{current.description}</p>

            <div className="mt-8 space-y-5 border-t border-black/10 pt-6 text-sm leading-7 text-black/58">
              <div>
                <div className="font-semibold text-black/84">拿手活</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {current.strengths.map((item) => (
                    <span key={item} className="metric-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold text-black/84">易翻车点</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {current.weaknesses.map((item) => (
                    <span key={item} className="metric-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold text-black/84">常用套路</div>
                <p className="mt-2">{current.techStack}</p>
              </div>
            </div>
          </div>
        </aside>

        <section>
          <div className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="editorial-kicker">人格总表</span>
              <h2 className="display-font mt-4 text-4xl leading-tight text-black md:text-5xl">
                全部人格开盒库
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/58 md:text-base">
                这里不做小卡片拼盘，而是把每个人格摊成一条能快速扫读的档案。
                点右侧任意条目，左侧就会立刻切到对应主视图。
              </p>
            </div>
            <div className="text-sm text-black/42">
              {SITE_NAME} · {SITE_FULL_NAME}
            </div>
          </div>

          <div className="border-t border-black/10">
            {allTypes.map((type) => {
              const active = selected === type.code;
              return (
                <button
                  key={type.code}
                  onClick={() => setSelected(type.code)}
                  className={`library-row w-full text-left ${active ? "active" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <CharacterSVG type={type.code} accent={type.color} size={86} />
                    <div>
                      <div
                        className="font-mono text-sm font-black tracking-[0.18em]"
                        style={{ color: type.color }}
                      >
                        {type.code}
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-black/88">
                        {type.name}
                      </div>
                    </div>
                  </div>

                  <div className="max-w-xl">
                    <p className="text-sm leading-7 text-black/62">{type.description}</p>
                    <div className="mt-2 text-sm text-black/44">「{type.motto}」</div>
                  </div>

                  <div className="justify-self-end">
                    {type.code === specialPersonality.code ? (
                      <span className="rounded-full border border-black/10 bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        隐藏款
                      </span>
                    ) : (
                      <span className="font-mono text-xs font-black tracking-[0.18em] text-black/34">
                        可开盒
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
