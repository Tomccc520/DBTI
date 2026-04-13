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
  const accent = currentDimension ? modelAccent[currentDimension.model] : "#111827";

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
          <span className="font-mono text-xs text-black/44">
            {phase === "main" ? `${currentIndex + 1}/${total}` : "BONUS"}
          </span>
        </div>
        <div className="h-[2px] bg-black/6">
          <div
            className="progress-bar h-full bg-gradient-to-r from-[#ff6b2c] via-[#2f6bff] to-[#00a68c]"
            style={{ width: `${phase === "main" ? progress : 100}%` }}
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:px-8 lg:grid-cols-[0.76fr_1fr]">
        <aside className="surface-panel sticky top-24 h-fit rounded-[30px] p-6">
          <div className="flex items-center gap-4">
            <CharacterSVG
              type={phase === "main" ? currentQuestion?.dimension ?? "DBTI" : "BONUS"}
              size={96}
              accent={accent}
            />
            <div>
              <span className="editorial-kicker">
                {phase === "main" ? currentDimension?.modelName : "彩蛋题"}
              </span>
              <h2 className="display-font mt-3 text-3xl leading-tight text-black">
                {phase === "main"
                  ? currentDimension?.name ?? "继续答题"
                  : "最后的隐藏校验"}
              </h2>
            </div>
          </div>

          {phase === "main" && currentDimension && (
            <>
              <p className="mt-5 text-sm leading-6 text-black/58">
                当前题目在测你对「{currentDimension.name}」的真实偏向。别按理想人格答，
                按你平时上班最常见的状态答，结果会更准。
              </p>
              <div className="mt-6 space-y-3 text-sm leading-6 text-black/56">
                <div className="rounded-[22px] border border-black/8 bg-white/58 p-4">
                  <div className="font-semibold text-black/82">低位状态 L</div>
                  <p className="mt-1">{currentDimension.levels.L}</p>
                </div>
                <div className="rounded-[22px] border border-black/8 bg-white/58 p-4">
                  <div className="font-semibold text-black/82">高位状态 H</div>
                  <p className="mt-1">{currentDimension.levels.H}</p>
                </div>
              </div>
            </>
          )}

          {phase !== "main" && (
            <p className="mt-5 text-sm leading-6 text-black/58">
              彩蛋题不影响主维度分数，但会决定你能不能触发隐藏人格。认真一点，
              也许你就是那类能直接看出色号的人。
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="metric-pill">{answered} 题已答</span>
            <span className="metric-pill">{progress}% 完成</span>
          </div>
        </aside>

        <section className="surface-panel-strong rounded-[32px] p-6 md:p-8">
          {phase === "main" && currentQuestion && (
            <div className="fade-in">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 font-mono text-xs font-black tracking-[0.18em] text-white"
                  style={{ backgroundColor: accent }}
                >
                  Q{currentQuestion.id}
                </span>
                <span className="text-sm text-black/48">
                  {currentDimension?.modelName} · {currentQuestion.dimension}
                </span>
              </div>

              <h1 className="display-font mt-6 text-4xl leading-tight text-black md:text-5xl">
                {currentQuestion.text}
              </h1>

              <div className="mt-8 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const active = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.label}
                      onClick={() => handleSelect(option.value)}
                      className={`question-option w-full rounded-[24px] p-4 text-left md:p-5 ${
                        active ? "selected" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                          style={{ backgroundColor: active ? accent : "#111827" }}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-sm leading-7 text-black/76 md:text-base">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="text-sm text-black/42 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← 上一题
                </button>
                <span className="text-sm text-black/40">按你的真实习惯作答</span>
              </div>

              <div className="mt-8 border-t border-black/8 pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.18em] text-black/42">
                    ANSWER BOARD
                  </span>
                  <span className="text-xs text-black/42">
                    {answered}/{total}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {questions.map((question, index) => {
                    const done = question.id in answers;
                    const isCurrent = index === currentIndex;
                    return (
                      <button
                        key={question.id}
                        onClick={() => (done || isCurrent) && setCurrentIndex(index)}
                        className={`h-8 w-8 rounded-full text-xs font-bold transition ${
                          isCurrent
                            ? "bg-black text-white"
                            : done
                              ? "bg-white text-black/76 border border-black/12"
                              : "bg-black/6 text-black/36"
                        }`}
                      >
                        {question.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {phase === "hidden1" && (
            <div className="fade-in">
              <span className="editorial-kicker">Hidden Check</span>
              <h1 className="display-font mt-6 text-4xl leading-tight text-black md:text-5xl">
                {hiddenQuestions[0].text}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-black/56">
                主测试已经结束了，这里是额外的趣味识别。少数人会在这里触发隐藏人格。
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {hiddenQuestions[0].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleHidden1(option.value)}
                    className="question-option rounded-[24px] p-5 text-left"
                  >
                    <div className="text-base font-semibold text-black/86">
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === "hidden2" && (
            <div className="fade-in">
              <span className="editorial-kicker">Pantone Gate</span>
              <h1 className="display-font mt-6 text-4xl leading-tight text-black md:text-5xl">
                {hiddenQuestions[1].text}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-black/56">
                这是最后一道隐藏校验。如果你真的是色号型选手，结果页会给你特别身份。
              </p>

              <div className="mt-8 space-y-3">
                {hiddenQuestions[1].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleHidden2(option.value)}
                    className="question-option w-full rounded-[24px] p-5 text-left"
                  >
                    <div className="text-base font-semibold text-black/86">
                      {option.label}
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
