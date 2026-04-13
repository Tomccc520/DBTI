/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

/**
 * 设计师人格测试维度定义，整体语气偏设计圈黑话。
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
    name: "对味雷达",
    model: "V",
    modelName: "像素结界",
    levels: {
      L: "差个几像素也能接受，先别卡在 2px 上。",
      M: "关键位置必须对味，其他地方看整体气口。",
      H: "1px 歪了都会破防，必须当场扶正。",
    },
  },
  {
    code: "V2",
    name: "细节内耗",
    model: "V",
    modelName: "像素结界",
    levels: {
      L: "先出片，细节以后再补丁。",
      M: "会抠，但不会在一个圆角上修仙到天亮。",
      H: "阴影、留白、圆角、质感必须全都拿捏。",
    },
  },
  {
    code: "V3",
    name: "统一执念",
    model: "V",
    modelName: "像素结界",
    levels: {
      L: "页面先活着，统一以后再说。",
      M: "能复用就复用，但偶尔还是会手痒开新坑。",
      H: "变量、组件、命名、间距都必须整整齐齐。",
    },
  },
  {
    code: "R1",
    name: "返工抗性",
    model: "R",
    modelName: "改稿渡劫",
    levels: {
      L: "一听到“再来一版”就有点想下线。",
      M: "能改，但得先问清楚别太抽象。",
      H: "改就改，先拆需求再开整。",
    },
  },
  {
    code: "R2",
    name: "死线爆改",
    model: "R",
    modelName: "改稿渡劫",
    levels: {
      L: "死线一近，CPU 先冒烟。",
      M: "会慌，但还能把主线保住。",
      H: "越到最后越像开大，边救火边出片。",
    },
  },
  {
    code: "R3",
    name: "复盘补丁",
    model: "R",
    modelName: "改稿渡劫",
    levels: {
      L: "项目一过，脑内自动清缓存。",
      M: "会记住坑，但不一定真写下来。",
      H: "必做复盘，顺手把下次的雷一并埋掉。",
    },
  },
  {
    code: "C1",
    name: "人话翻译",
    model: "C",
    modelName: "嘴替战力",
    levels: {
      L: "图能说话，嘴就随缘发挥。",
      M: "能把设计理由讲成人话。",
      H: "抽象需求都能被你翻成可执行方案。",
    },
  },
  {
    code: "C2",
    name: "拉齐雷达",
    model: "C",
    modelName: "嘴替战力",
    levels: {
      L: "先画再说，别人来问了再同步。",
      M: "关键节点会拉一下齐。",
      H: "目标、范围、依赖都会被你先拎出来。",
    },
  },
  {
    code: "C3",
    name: "说服浓度",
    model: "C",
    modelName: "嘴替战力",
    levels: {
      L: "图不错，但开口总差那口气。",
      M: "能把来龙去脉讲清楚。",
      H: "你不是在汇报，你是在控场。",
    },
  },
  {
    code: "I1",
    name: "起稿点火",
    model: "I",
    modelName: "灵感上头",
    levels: {
      L: "不刷参考，空白页真的会把你看空。",
      M: "一边找灵感一边开整。",
      H: "给个关键词就能自己烧起来。",
    },
  },
  {
    code: "I2",
    name: "整活胆量",
    model: "I",
    modelName: "灵感上头",
    levels: {
      L: "稳住最重要，别整太飞。",
      M: "局部试一点新活就行。",
      H: "为了记忆点，敢直接上强风格。",
    },
  },
  {
    code: "I3",
    name: "出片手速",
    model: "I",
    modelName: "灵感上头",
    levels: {
      L: "脑内戏很多，手上稍微慢半拍。",
      M: "节奏稳定，正常项目都能跟上。",
      H: "想到就出，下午起稿晚上成片。",
    },
  },
  {
    code: "T1",
    name: "AI 共创浓度",
    model: "T",
    modelName: "外挂共生",
    levels: {
      L: "AI 就是边角料辅助，没它也照样开工。",
      M: "拿来扩思路，但判断权还在你手里。",
      H: "提示词、方向图、文案、命名可以一起上。",
    },
  },
  {
    code: "T2",
    name: "文件养生度",
    model: "T",
    modelName: "外挂共生",
    levels: {
      L: "final_v9_真的最后一版 是你的工作日常。",
      M: "勉强能看懂，但也不算太体面。",
      H: "文件整洁到别人一进来都想磕一个。",
    },
  },
  {
    code: "T3",
    name: "工具尝鲜瘾",
    model: "T",
    modelName: "外挂共生",
    levels: {
      L: "老工具够用就行，别折腾。",
      M: "有用才试，不做纯凑热闹玩家。",
      H: "新插件、新模型、新动效，先上手再说。",
    },
  },
];
