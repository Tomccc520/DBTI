/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

"use client";

import type { DimensionScore } from "@/lib/scoring";

interface Props {
  dimensions: DimensionScore[];
  size?: number;
}

const modelLabels: Record<string, string> = {
  V: "像素结界",
  R: "改稿渡劫",
  C: "嘴替战力",
  I: "灵感上头",
  T: "外挂共生",
};

const modelColors: Record<string, string> = {
  V: "#FF6B2C",
  R: "#D63D2E",
  C: "#2F6BFF",
  I: "#00A68C",
  T: "#111827",
};

/**
 * 渲染五大模型雷达图，用于结果页展示整体人格轮廓。
 */
export default function RadarChart({ dimensions, size = 300 }: Props) {
  const models = ["V", "R", "C", "I", "T"];
  const total = models.length;
  const padding = 48;
  const viewWidth = size + padding * 2;
  const viewHeight = size + padding * 2;
  const centerX = viewWidth / 2;
  const centerY = viewHeight / 2;
  const maxRadius = size * 0.34;
  const levels = 3;

  const modelScores = models.map((model) => {
    const modelDimensions = dimensions.filter((dimension) => dimension.model === model);
    if (modelDimensions.length === 0) {
      return 50;
    }
    return (
      modelDimensions.reduce((sum, dimension) => sum + dimension.percentage, 0) /
      modelDimensions.length
    );
  });

  /**
   * 根据模型下标和占比计算雷达图顶点位置。
   */
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const gridPaths = Array.from({ length: levels }, (_, level) => {
    const radius = ((level + 1) / levels) * maxRadius;
    return Array.from({ length: total }, (_, index) => {
      const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
      return `${centerX + radius * Math.cos(angle)},${centerY + radius * Math.sin(angle)}`;
    }).join(" ");
  });

  const dataPoints = modelScores.map((score, index) => getPoint(index, score));
  const dataPath = dataPoints.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      className="radar-chart"
    >
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {gridPaths.map((points, index) => (
        <polygon
          key={points}
          points={points}
          fill="none"
          stroke="#d7d2cc"
          strokeWidth="1"
          opacity={0.42 + index * 0.12}
        />
      ))}

      {models.map((_, index) => {
        const point = getPoint(index, 100);
        return (
          <line
            key={index}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="#c3bdb5"
            strokeWidth="1"
            opacity="0.45"
          />
        );
      })}

      <polygon points={dataPath} fill="url(#radarFill)" stroke="#111827" strokeWidth="2.5" />

      {dataPoints.map((point, index) => (
        <g key={models[index]}>
          <circle cx={point.x} cy={point.y} r="7" fill={modelColors[models[index]]} opacity="0.18" />
          <circle
            cx={point.x}
            cy={point.y}
            r="4.5"
            fill={modelColors[models[index]]}
            stroke="white"
            strokeWidth="2"
          />
        </g>
      ))}

      {models.map((model, index) => {
        const labelPoint = getPoint(index, 132);
        return (
          <g key={model}>
            <text
              x={labelPoint.x}
              y={labelPoint.y - 4}
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={modelColors[model]}
            >
              {modelLabels[model]}
            </text>
            <text
              x={labelPoint.x}
              y={labelPoint.y + 12}
              textAnchor="middle"
              fontSize="10"
              fill="#6b7280"
            >
              {Math.round(modelScores[index])}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}
