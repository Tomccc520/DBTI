/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

import { questions } from "@/data/questions";
import {
  personalities,
  specialPersonality,
  type Personality,
} from "@/data/personalities";
import { dimensionDefs } from "@/data/dimensions";

export interface HiddenAnswers {
  totem?: string;
  colorSense?: string;
}

export interface DimensionScore {
  code: string;
  name: string;
  model: string;
  modelName: string;
  raw: number;
  max: number;
  level: "L" | "M" | "H";
  levelNum: number;
  percentage: number;
}

export interface TestResult {
  personality: Personality;
  similarity: number;
  dimensions: DimensionScore[];
  isSpecial: boolean;
  matchDetails: { code: string; name: string; similarity: number }[];
}

/**
 * 将维度原始分数映射为 L / M / H 等级。
 */
function rawToLevel(raw: number): "L" | "M" | "H" {
  if (raw <= 3) return "L";
  if (raw === 4) return "M";
  return "H";
}

/**
 * 将等级转换为用于人格匹配的数值。
 */
function levelToNum(level: "L" | "M" | "H"): number {
  if (level === "L") return 0;
  if (level === "M") return 1;
  return 2;
}

/**
 * 根据问卷答案与彩蛋题结果计算最终人格。
 */
export function calculateResult(
  answers: Record<number, number>,
  hiddenAnswers?: HiddenAnswers
): TestResult {
  const dims = calculateDimensions(answers);

  if (
    hiddenAnswers?.totem === "swatch" &&
    hiddenAnswers?.colorSense === "hex"
  ) {
    return {
      personality: specialPersonality,
      similarity: 100,
      dimensions: dims,
      isSpecial: true,
      matchDetails: [],
    };
  }

  const userVector = dims.map((dimension) => dimension.levelNum);

  const ranked = personalities.map((personality) => {
    let distance = 0;
    let exact = 0;

    for (let i = 0; i < 15; i += 1) {
      const diff = Math.abs(userVector[i] - personality.vector[i]);
      distance += diff;

      if (diff === 0) {
        exact += 1;
      }
    }

    const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
    return { personality, distance, exact, similarity };
  });

  ranked.sort((first, second) => {
    if (first.distance !== second.distance) {
      return first.distance - second.distance;
    }
    if (first.exact !== second.exact) {
      return second.exact - first.exact;
    }
    return second.similarity - first.similarity;
  });

  const best = ranked[0];

  return {
    personality: best.personality,
    similarity: best.similarity,
    dimensions: dims,
    isSpecial: false,
    matchDetails: ranked.slice(0, 5).map((item) => ({
      code: item.personality.code,
      name: item.personality.name,
      similarity: item.similarity,
    })),
  };
}

/**
 * 按维度汇总原始答案分数并产出等级结果。
 */
function calculateDimensions(
  answers: Record<number, number>
): DimensionScore[] {
  return dimensionDefs.map((definition) => {
    const dimensionQuestions = questions.filter(
      (question) => question.dimension === definition.code
    );
    const max = dimensionQuestions.length * 3;
    let raw = 0;

    for (const question of dimensionQuestions) {
      raw += answers[question.id] ?? 2;
    }

    const percentage = Math.round((raw / max) * 100);
    const level = rawToLevel(raw);

    return {
      code: definition.code,
      name: definition.name,
      model: definition.model,
      modelName: definition.modelName,
      raw,
      max,
      level,
      levelNum: levelToNum(level),
      percentage,
    };
  });
}
