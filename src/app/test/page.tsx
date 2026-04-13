/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CharacterSVG from "@/components/CharacterSVG";
import { dimensionDefs } from "@/data/dimensions";
import { hiddenQuestions, questions } from "@/data/questions";
import { SITE_NAME } from "@/lib/constants";
import type { HiddenAnswers } from "@/lib/scoring";

type Phase = "main" | "hidden1" | "hidden2";

const modelAccent: Record<string, string> = {
  V: "#FF6B2C",
  R: "#D63D2E",
  C: "#2F6BFF",
  I: "#00A68C",
  T: "#111827",
};

/**
 * 渲染设计师人格测试答题页。
 */
export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answersRef = useRef<Record<number, number>>({});
  const [phase, setPhase] = useState<Phase>("main");
  const [hiddenAnswers, setHiddenAnswers] = useState<HiddenAnswers>({});

  const total = questions.length;
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);
  const currentQuestion = phase === "main" ? questions[currentIndex] : null;
  const currentDimension = dimensionDefs.find(
    (definition) => definition.code === currentQuestion?.dimension
  );
  const bonusQuestion =
    phase === "hidden1" ? hiddenQuestions[0] : phase === "hidden2" ? hiddenQuestions[1] : null;
  const accent = currentDimension ? modelAccent[currentDimension.model] : "#101116";

  /**
   * 处理主问题答案并推进到下一题。
   */
  const handleSelect = (value: number) => {
    if (!currentQuestion) return;

    const nextAnswers = { ...answersRef.current, [currentQuestion.id]: value };
    answersRef.current = nextAnswers;
    setAnswers(nextAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    setPhase("hidden1");
  };

  /**
   * 处理彩蛋第一题，并根据触发条件判断是否进入隐藏第二题。
   */
  const handleHidden1 = (value: string) => {
    const nextHidden = { ...hiddenAnswers, totem: value };
    setHiddenAnswers(nextHidden);

    if (value === "swatch") {
      setPhase("hidden2");
      return;
    }

    finish(nextHidden);
  };

  /**
   * 处理彩蛋第二题并完成测试。
   */
  const handleHidden2 = (value: string) => {
    finish({ ...hiddenAnswers, totem: "swatch", colorSense: value });
  };

  /**
   * 将答案存入会话并跳转到结果页。
   */
  const finish = (hidden: HiddenAnswers) => {
    sessionStorage.setItem(
      "dbti_data",
      JSON.stringify({ answers: answersRef.current, hidden })
    );
    router.push("/result");
  };

  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4ede4]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            onClick={() => router.push("/")}
            className="text-sm text-black/52 transition hover:text-black"
          >
            ← 首页
          </button>
          <span className="font-mono text-sm font-black tracking-[0.32em] text-black/82">
            {SITE_NAME}
          </span>
          <span className="font-mono text-xs text-black/42">
            {phase === "main" ? `${currentIndex + 1}/${total}` : "BONUS"}
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-0 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
        <aside className="workspace-sidebar lg:min-h-[calc(100svh-73px)]">
          <div className="sticky top-[73px] px-0 py-8 lg:px-0">
            <div className="flex items-center gap-4">
              <CharacterSVG
                type={phase === "main" ? currentQuestion?.dimension ?? "DBTI" : "BONUS"}
                size={88}
                accent={accent}
              />
              <div>
                <div className="font-mono text-xs font-black tracking-[0.24em] text-black/42">
                  {phase === "main" ? currentDimension?.modelName : "隐藏鉴定"}
                </div>
                <h2 className="display-font mt-2 text-3xl leading-tight text-black">
                  {phase === "main"
                    ? currentDimension?.name ?? "继续答题"
                    : "最后的彩蛋判断"}
                </h2>
              </div>
            </div>

            {phase === "main" && currentDimension && (
              <>
                <p className="mt-6 text-sm leading-7 text-black/56">
                  这里测的不是理想人设，而是你平时做站酷封面、小红书首图、脉脉求生和大厂过会时的真实反应。
                </p>
                <div className="mt-6 space-y-4 border-t border-black/10 pt-6 text-sm leading-7 text-black/58">
                  <div>
                    <div className="font-semibold text-black/82">低位状态</div>
                    <p className="mt-1">{currentDimension.levels.L}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-black/82">高位状态</div>
                    <p className="mt-1">{currentDimension.levels.H}</p>
                  </div>
                </div>
              </>
            )}

            {phase !== "main" && (
              <p className="mt-6 text-sm leading-7 text-black/56">
                彩蛋题不影响主维度，但会决定你能不能解锁隐藏人格。认真一点，
                说不定你就是设计组里那个自带色值面板的人。
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="metric-pill">{answered} 题已答</span>
              <span className="metric-pill">{phase === "main" ? `${progress}% 完成` : "彩蛋阶段"}</span>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-black tracking-[0.2em] text-black/38">
                  ANSWER MAP
                </span>
                <span className="text-xs text-black/40">{answered}/{total}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {questions.map((question, index) => {
                  const done = question.id in answers;
                  const isCurrent = index === currentIndex;
                  return (
                    <button
                      key={question.id}
                      onClick={() => (done || isCurrent) && setCurrentIndex(index)}
                      className={`h-9 w-9 rounded-full border text-xs font-black transition ${
                        isCurrent
                          ? "border-black bg-black text-white"
                          : done
                            ? "border-black/12 bg-white text-black/72"
                            : "border-transparent bg-black/6 text-black/34"
                      }`}
                    >
                      {question.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <section className="workspace-stage">
          {phase === "main" && currentQuestion && currentDimension && (
            <div className="fade-in">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 font-mono text-xs font-black tracking-[0.18em] text-white"
                    style={{ backgroundColor: accent }}
                  >
                    Q{currentQuestion.id}
                  </span>
                  <span className="text-sm text-black/46">
                    {currentDimension.modelName} · {currentQuestion.dimension}
                  </span>
                </div>
                <div className="font-mono text-xs font-black tracking-[0.24em] text-black/34">
                  ANSWER WITH YOUR REAL WORKFLOW
                </div>
              </div>

              <div className="mt-10 max-w-4xl">
                <h1 className="display-font text-4xl leading-tight text-black md:text-6xl md:leading-[1.02]">
                  {currentQuestion.text}
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/54 md:text-base">
                  别按“我希望自己是什么样”来答，按你真实上班时最常用的那套习惯来答。
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const active = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.label}
                      onClick={() => handleSelect(option.value)}
                      className={`workspace-option ${active ? "selected" : ""}`}
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                          style={{ backgroundColor: active ? accent : "#101116" }}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-lg font-semibold text-black/88 md:text-xl">
                            {option.label}
                          </div>
                          <div className="mt-2 text-sm text-black/42">
                            {index === 0
                              ? "偏保守 / 偏省事 / 偏先过"
                              : index === 1
                                ? "偏中间 / 偏平衡 / 偏先保主线"
                                : "偏极致 / 偏较真 / 偏一定要收口"}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
                <button
                  onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="text-sm text-black/42 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← 上一题
                </button>
                <span className="text-sm text-black/38">按你平时的真实黑话状态作答</span>
              </div>
            </div>
          )}

          {phase !== "main" && bonusQuestion && (
            <div className="fade-in">
              <div className="border-b border-black/10 pb-5">
                <div className="font-mono text-xs font-black tracking-[0.24em] text-black/38">
                  BONUS / HIDDEN PERSONALITY CHECK
                </div>
              </div>

              <div className="mt-10 max-w-4xl">
                <h1 className="display-font text-4xl leading-tight text-black md:text-6xl md:leading-[1.02]">
                  {bonusQuestion.text}
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/54 md:text-base">
                  彩蛋只负责判断你有没有隐藏人格，不影响前面的十五维主结果。
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {bonusQuestion.options.map((option, index) => (
                  <button
                    key={option.label}
                    onClick={() =>
                      phase === "hidden1"
                        ? handleHidden1(String(option.value))
                        : handleHidden2(String(option.value))
                    }
                    className="workspace-option"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-white">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="text-lg font-semibold text-black/88 md:text-xl">
                        {option.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
