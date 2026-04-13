/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

/**
 * 设计师人格测试维度定义。
 */
export interface DimensionDef {
  code: string;
  name: string;
  model: string;
  modelName: string;
  levels: {
    L: string;
    M: string;
    H: string;
  };
}

export const dimensionDefs: DimensionDef[] = [
  {
    code: "V1",
    name: "像素敏感度",
    model: "V",
    modelName: "视觉信仰",
    levels: {
      L: "差个几像素也能接受，重点是别挡住信息。",
      M: "关键位置会盯，其他地方以整体观感优先。",
      H: "1px 偏移都会被你一眼抓出来，还会顺手改掉。",
    },
  },
  {
    code: "V2",
    name: "细节洁癖",
    model: "V",
    modelName: "视觉信仰",
    levels: {
      L: "先把稿子出完，细节留给后续版本。",
      M: "重点页会抠细节，但不会为一点小差异停太久。",
      H: "圆角、阴影、层级、留白必须一口气磨到服帖。",
    },
  },
  {
    code: "V3",
    name: "系统一致性",
    model: "V",
    modelName: "视觉信仰",
    levels: {
      L: "每个页面都能有自己的个性，不急着统一。",
      M: "大部分组件会保持一致，特殊页面再单独处理。",
      H: "变量、组件、栅格、命名都得收进同一套系统里。",
    },
  },
  {
    code: "R1",
    name: "改稿耐受力",
    model: "R",
    modelName: "需求应对",
    levels: {
      L: "一听到“再改一点”就开始提前疲惫。",
      M: "能改，但要先把原因和边界讲清楚。",
      H: "改稿也是迭代的一部分，能稳住情绪继续推进。",
    },
  },
  {
    code: "R2",
    name: "截止抗压",
    model: "R",
    modelName: "需求应对",
    levels: {
      L: "死线一近，大脑会先进入加载状态。",
      M: "会紧张，但能靠拆优先级把自己拽回来。",
      H: "越临近交付越清醒，能一边救火一边收口。",
    },
  },
  {
    code: "R3",
    name: "复盘主动性",
    model: "R",
    modelName: "需求应对",
    levels: {
      L: "项目过了就翻篇，先赶下一个再说。",
      M: "会记住关键坑点，偶尔整理成经验。",
      H: "每次项目结束都想沉淀模板、规范和方法论。",
    },
  },
  {
    code: "C1",
    name: "沟通表达",
    model: "C",
    modelName: "协作关系",
    levels: {
      L: "图能说明一切，嘴巴不一定跟得上。",
      M: "能说清设计理由，沟通基本在线。",
      H: "能把抽象审美翻译成开发、产品都能理解的话。",
    },
  },
  {
    code: "C2",
    name: "对齐主动性",
    model: "C",
    modelName: "协作关系",
    levels: {
      L: "等别人来找你，自己先把图画完再说。",
      M: "关键节点会同步，尽量避免大偏差。",
      H: "会主动拉齐目标、范围和依赖，不怕多沟通。",
    },
  },
  {
    code: "C3",
    name: "讲述能力",
    model: "C",
    modelName: "协作关系",
    levels: {
      L: "作品不错，但解释起来常常一句话卡住。",
      M: "能讲目标和取舍，基本能说服合作方。",
      H: "能把用户、品牌、业务和视觉逻辑一口气讲通。",
    },
  },
  {
    code: "I1",
    name: "灵感探索",
    model: "I",
    modelName: "创意驱动",
    levels: {
      L: "先搜案例，空白画布对你不太友好。",
      M: "会从参考里重组，但仍需要外部刺激启动。",
      H: "给一点线索就能自己开出新方向。",
    },
  },
  {
    code: "I2",
    name: "风格冒险",
    model: "I",
    modelName: "创意驱动",
    levels: {
      L: "稳妥最重要，风格创新可以往后排。",
      M: "愿意在局部试一点新味道。",
      H: "为了更强的视觉记忆点，愿意主动冒险。",
    },
  },
  {
    code: "I3",
    name: "执行速度",
    model: "I",
    modelName: "创意驱动",
    levels: {
      L: "想得很多，出得偏慢，靠细磨取胜。",
      M: "节奏稳定，正常项目都能跟上。",
      H: "想到就能做，下午起稿晚上就能成片。",
    },
  },
  {
    code: "T1",
    name: "AI依赖度",
    model: "T",
    modelName: "工具共生",
    levels: {
      L: "不用 AI 也能完整开工，它只是锦上添花。",
      M: "会拿 AI 扩思路和提效，但不让它替你判断。",
      H: "提示词、文案、风格延展和方向稿都能接进 AI。",
    },
  },
  {
    code: "T2",
    name: "Figma组织度",
    model: "T",
    modelName: "工具共生",
    levels: {
      L: "Frame 213 和 final_final_v7 是你的工作日常。",
      M: "大部分时候还能看，乱也乱得有迹可循。",
      H: "页面、章节、变量、组件、命名都极其整洁。",
    },
  },
  {
    code: "T3",
    name: "工具实验欲",
    model: "T",
    modelName: "工具共生",
    levels: {
      L: "熟悉的工具够用就行，不主动折腾新东西。",
      M: "新插件、新模型会试，但不会无脑追新。",
      H: "只要能提升表达和效率，什么新工具都想摸一遍。",
    },
  },
];
