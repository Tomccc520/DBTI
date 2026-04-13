/**
 * @copyright Tomda (https://www.tomda.top)
 * @copyright UIED技术团队 (https://fsuied.com)
 * @author UIED技术团队
 * @createDate 2026-04-13
 */

export interface Question {
  id: number;
  dimension: string;
  text: string;
  options: { value: number; label: string }[];
}

export const questions: Question[] = [
  {
    id: 1,
    dimension: "V1",
    text: "交付前，你最常放大的比例是？",
    options: [
      { value: 1, label: "100%，整体没崩就行" },
      { value: 2, label: "200%，关键位置看一眼" },
      { value: 3, label: "400%，我要把 1px 也抓出来" },
    ],
  },
  {
    id: 2,
    dimension: "V1",
    text: "开发说“这个按钮左右差 1px 看不出来”，你会？",
    options: [
      { value: 1, label: "确实看不太出来，先过" },
      { value: 2, label: "关键页改，普通页先记着" },
      { value: 3, label: "现在就改，不然今晚睡不着" },
    ],
  },
  {
    id: 3,
    dimension: "V2",
    text: "你调阴影最常见的状态是？",
    options: [
      { value: 1, label: "套个常用参数，能用就行" },
      { value: 2, label: "会微调一轮，找到差不多的感觉" },
      { value: 3, label: "连透明度、模糊、扩散都要一并磨准" },
    ],
  },
  {
    id: 4,
    dimension: "V2",
    text: "上线前最后 5 分钟，你最可能还在做什么？",
    options: [
      { value: 1, label: "发链接，准备下一个需求" },
      { value: 2, label: "快速扫一遍细节" },
      { value: 3, label: "补圆角、校间距、看 hover 状态" },
    ],
  },
  {
    id: 5,
    dimension: "V3",
    text: "做第二个页面时，你更像？",
    options: [
      { value: 1, label: "重新找感觉，每页都能长得不一样" },
      { value: 2, label: "能复用就复用，先把活做完" },
      { value: 3, label: "先抽组件和 token，再继续出稿" },
    ],
  },
  {
    id: 6,
    dimension: "V3",
    text: "同一产品出现三种按钮样式，你通常会？",
    options: [
      { value: 1, label: "问题不大，先看整体效果" },
      { value: 2, label: "先记下来，后面找时间统一" },
      { value: 3, label: "马上回头收口，不想留隐患" },
    ],
  },
  {
    id: 7,
    dimension: "R1",
    text: "产品第六次说“再微调一下”，你内心更像？",
    options: [
      { value: 1, label: "我已经听到灵魂离体的声音了" },
      { value: 2, label: "先问清具体要改哪里" },
      { value: 3, label: "好，这轮我当成迭代继续推" },
    ],
  },
  {
    id: 8,
    dimension: "R1",
    text: "客户说“高级一点、年轻一点、国际一点”，你会？",
    options: [
      { value: 1, label: "这句人话到底该怎么翻译" },
      { value: 2, label: "追问参考和使用场景" },
      { value: 3, label: "现场帮他拆成可执行方向" },
    ],
  },
  {
    id: 9,
    dimension: "R2",
    text: "今晚十点前要出终稿，你现在刚拿到需求，第一反应是？",
    options: [
      { value: 1, label: "先慌，再想是不是能拖" },
      { value: 2, label: "先拆优先级，保主流程" },
      { value: 3, label: "直接搭主骨架，边做边收敛" },
    ],
  },
  {
    id: 10,
    dimension: "R2",
    text: "临门一脚发现组件库有一半没整理，你更可能？",
    options: [
      { value: 1, label: "算了，这次先手动糊过去" },
      { value: 2, label: "先保交付，后面补系统" },
      { value: 3, label: "边补边抽象，顺手把坑填平" },
    ],
  },
  {
    id: 11,
    dimension: "R3",
    text: "项目上线后，你通常会？",
    options: [
      { value: 1, label: "关掉 Figma，开始选择性失忆" },
      { value: 2, label: "记住几个关键坑，差不多就行" },
      { value: 3, label: "整理模板、规范和复盘文档" },
    ],
  },
  {
    id: 12,
    dimension: "R3",
    text: "一次提案没过，你更接近哪种做法？",
    options: [
      { value: 1, label: "怀疑人生，然后重开" },
      { value: 2, label: "记住被否原因，下次避开" },
      { value: 3, label: "把这次失败沉淀成下一次的武器" },
    ],
  },
  {
    id: 13,
    dimension: "C1",
    text: "向开发解释视觉细节时，你更像？",
    options: [
      { value: 1, label: "发图过去：你们感受一下" },
      { value: 2, label: "把重点圈出来并口头说明" },
      { value: 3, label: "直接翻译成可执行规则和边界" },
    ],
  },
  {
    id: 14,
    dimension: "C1",
    text: "评审会上，你更像哪种设计师？",
    options: [
      { value: 1, label: "图挺好，但话一多就乱" },
      { value: 2, label: "能说清设计理由和目标" },
      { value: 3, label: "能把用户、品牌和业务串成完整叙事" },
    ],
  },
  {
    id: 15,
    dimension: "C2",
    text: "跨部门需求模糊时，你会？",
    options: [
      { value: 1, label: "先自己画，别人来问再说" },
      { value: 2, label: "出一个方向，再拿去对齐" },
      { value: 3, label: "主动拉产品和开发先把目标讲清楚" },
    ],
  },
  {
    id: 16,
    dimension: "C2",
    text: "开发接入前，你通常会做什么准备？",
    options: [
      { value: 1, label: "图发过去就算完成交付" },
      { value: 2, label: "关键页会补一些标注" },
      { value: 3, label: "状态、尺寸、响应式和边界一起说明" },
    ],
  },
  {
    id: 17,
    dimension: "C3",
    text: "面试时介绍作品集，你更像？",
    options: [
      { value: 1, label: "翻页式念稿，图自己说话" },
      { value: 2, label: "能讲清目标、过程和结果" },
      { value: 3, label: "像讲一场完整 case，节奏和重点都在线" },
    ],
  },
  {
    id: 18,
    dimension: "C3",
    text: "同事问你“为什么这么排版”，你更可能回答？",
    options: [
      { value: 1, label: "因为这样好看" },
      { value: 2, label: "因为这样更清晰、更易读" },
      { value: 3, label: "因为信息层级、视线动线和目标转化都更合理" },
    ],
  },
  {
    id: 19,
    dimension: "I1",
    text: "接到一个新命题，你的第一反应是？",
    options: [
      { value: 1, label: "先搜案例，别让我直接对着空白页" },
      { value: 2, label: "一边搜一边搭，边做边找感觉" },
      { value: 3, label: "先立情绪和视觉方向，再展开" },
    ],
  },
  {
    id: 20,
    dimension: "I1",
    text: "灵感枯竭时，你更常用哪种办法自救？",
    options: [
      { value: 1, label: "疯狂刷图，看别人怎么做" },
      { value: 2, label: "换个场景，回来继续推" },
      { value: 3, label: "靠关键词、材质和叙事重新点火" },
    ],
  },
  {
    id: 21,
    dimension: "I2",
    text: "客户要稳，你脑子里却有个大胆方案，你会？",
    options: [
      { value: 1, label: "算了，不提了" },
      { value: 2, label: "局部偷放一点进去" },
      { value: 3, label: "做双方案，让他自己感受差别" },
    ],
  },
  {
    id: 22,
    dimension: "I2",
    text: "你对趋势风格的态度更像？",
    options: [
      { value: 1, label: "跟就完了，先别掉队" },
      { value: 2, label: "挑着借，合适的才吸收" },
      { value: 3, label: "拿来改造，不想只做复制品" },
    ],
  },
  {
    id: 23,
    dimension: "I3",
    text: "给你半天做一个方向稿，你会？",
    options: [
      { value: 1, label: "还在想，还没敢动手" },
      { value: 2, label: "能出一个可讨论版本" },
      { value: 3, label: "已经并排放了三版给你挑" },
    ],
  },
  {
    id: 24,
    dimension: "I3",
    text: "突然说明早提案，你的工作流更像？",
    options: [
      { value: 1, label: "熬着做，但越做越乱" },
      { value: 2, label: "先搭主结构，再补亮点" },
      { value: 3, label: "一边搭系统一边冲锋，速度和结构一起保" },
    ],
  },
  {
    id: 25,
    dimension: "T1",
    text: "AI 在你的设计流程里更像什么角色？",
    options: [
      { value: 1, label: "偶尔起标题或搜点思路" },
      { value: 2, label: "拿来扩参考、改文案、提效率" },
      { value: 3, label: "概念稿、文案、命名、方向图都能一起接入" },
    ],
  },
  {
    id: 26,
    dimension: "T1",
    text: "看到 AI 生成一张不错的图，你会？",
    options: [
      { value: 1, label: "直接用，先过稿再说" },
      { value: 2, label: "当参考，再做人工重构" },
      { value: 3, label: "继续喂指令，直到风格完全吻合" },
    ],
  },
  {
    id: 27,
    dimension: "T2",
    text: "你的 Figma 页面命名更像哪种状态？",
    options: [
      { value: 1, label: "Frame 213 / final_final_v7" },
      { value: 2, label: "基本能看，偶尔还是会乱" },
      { value: 3, label: "页面、章节、组件都很整齐" },
    ],
  },
  {
    id: 28,
    dimension: "T2",
    text: "你对 Auto Layout / 变量 / 组件的态度是？",
    options: [
      { value: 1, label: "能不用就不用，太费脑子" },
      { value: 2, label: "核心能力会用，够用就行" },
      { value: 3, label: "不整理这些我真的会难受" },
    ],
  },
  {
    id: 29,
    dimension: "T3",
    text: "看到新插件、新模型或新动效工具时，你通常会？",
    options: [
      { value: 1, label: "先观望，让别人踩坑" },
      { value: 2, label: "有空试试，不强求" },
      { value: 3, label: "先装再说，反正总会用到" },
    ],
  },
  {
    id: 30,
    dimension: "T3",
    text: "你最容易被哪类东西诱惑？",
    options: [
      { value: 1, label: "稳定现成的模板和方案" },
      { value: 2, label: "刚刚好的新工具和新方法" },
      { value: 3, label: "任何能让视觉再前进一步的实验" },
    ],
  },
];

export const hiddenQuestions = [
  {
    id: 31,
    text: "最后一道彩蛋题：你的工位上最像护身符的东西是？",
    options: [
      { value: "swatch", label: "色卡 / 样卡 / 印刷小样" },
      { value: "sticky", label: "便利贴墙" },
      { value: "coffee", label: "冰美式或手冲杯" },
      { value: "sketchbook", label: "手绘草图本" },
    ],
  },
  {
    id: 32,
    text: "看到一个颜色时，你更可能？",
    triggerPrev: "swatch",
    options: [
      { value: "feeling", label: "说不清，但我知道这块颜色很对" },
      { value: "hex", label: "脑子里已经浮现接近的色值或色号" },
    ],
  },
];
