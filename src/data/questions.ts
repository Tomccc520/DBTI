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
    text: "交付前最后补票，你最常开的倍率是？",
    options: [
      { value: 1, label: "100%，差不多得了，先发再说" },
      { value: 2, label: "200%，关键区域扶一把就行" },
      { value: 3, label: "400%，1px 歪了我会当场破防" },
    ],
  },
  {
    id: 2,
    dimension: "V1",
    text: "开发说“这个按钮左右差 1px 肉眼看不出来”，你会？",
    options: [
      { value: 1, label: "那就先算了，别在 1px 上开会" },
      { value: 2, label: "首页和重点位得改，普通页先挂起" },
      { value: 3, label: "现在就返修，这种小歪最伤气口" },
    ],
  },
  {
    id: 3,
    dimension: "V2",
    text: "你调阴影时，最常进入哪种状态？",
    options: [
      { value: 1, label: "套个旧参数，先让它有点味儿" },
      { value: 2, label: "会试两三轮，找到顺眼区间" },
      { value: 3, label: "透明度、模糊、扩散全都得盘到对味" },
    ],
  },
  {
    id: 4,
    dimension: "V2",
    text: "上线前最后 5 分钟，你最可能还在做什么？",
    options: [
      { value: 1, label: "发链接撤退，主打一个先上线" },
      { value: 2, label: "快速扫一圈高风险翻车位" },
      { value: 3, label: "还在补圆角、间距和 hover，根本停不下手" },
    ],
  },
  {
    id: 5,
    dimension: "V3",
    text: "第二个页面刚开工时，你更像哪种人？",
    options: [
      { value: 1, label: "重新整活，每页都想来点新花样" },
      { value: 2, label: "能复用先复用，先把活顶出来" },
      { value: 3, label: "先抽 token 和组件，不想后面集体返工" },
    ],
  },
  {
    id: 6,
    dimension: "V3",
    text: "同一产品里长出了三种按钮样式，你通常会？",
    options: [
      { value: 1, label: "能跑就先跑，别太上纲上线" },
      { value: 2, label: "先记账，后面找窗口统一" },
      { value: 3, label: "立刻收口，不想项目长出野生物种" },
    ],
  },
  {
    id: 7,
    dimension: "R1",
    text: "产品第六次说“再微调一下”，你内心更接近？",
    options: [
      { value: 1, label: "听到这句我就想灵魂下线" },
      { value: 2, label: "先问清楚，别给我太抽象" },
      { value: 3, label: "改就改，先拆清楚再开整" },
    ],
  },
  {
    id: 8,
    dimension: "R1",
    text: "客户说“高级一点、年轻一点、国际一点”，你通常会？",
    options: [
      { value: 1, label: "这句黑话到底是要站酷感还是小红书感" },
      { value: 2, label: "追问参考、场景和不能踩的雷" },
      { value: 3, label: "当场翻译成封面感、种草感和过会感三种方向" },
    ],
  },
  {
    id: 9,
    dimension: "R2",
    text: "今晚十点前要出终稿，你现在刚拿到需求，第一反应是？",
    options: [
      { value: 1, label: "先慌一秒，再看看能不能往后拖" },
      { value: 2, label: "先拆轻重缓急，把主线保住" },
      { value: 3, label: "直接搭主骨架，边冲边收口" },
    ],
  },
  {
    id: 10,
    dimension: "R2",
    text: "临门一脚发现组件库有一半没整理，你更可能怎么干？",
    options: [
      { value: 1, label: "这波先手糊，能过稿就算赢" },
      { value: 2, label: "先保交付，系统债留到下次周会认领" },
      { value: 3, label: "边救火边抽象，顺手把组件库和老坑一块填了" },
    ],
  },
  {
    id: 11,
    dimension: "R3",
    text: "项目上线后，你通常会进入哪种模式？",
    options: [
      { value: 1, label: "关掉 Figma，直接清空这段记忆" },
      { value: 2, label: "记住几个大坑，差不多就行" },
      { value: 3, label: "复盘、补文档、顺手打补丁" },
    ],
  },
  {
    id: 12,
    dimension: "R3",
    text: "一次提案没过，你更接近哪种做法？",
    options: [
      { value: 1, label: "先怀疑人生，再强制重开" },
      { value: 2, label: "记住翻车原因，下次少给脉脉素材" },
      { value: 3, label: "把这次翻车做成下次过会的外挂补丁" },
    ],
  },
  {
    id: 13,
    dimension: "C1",
    text: "向开发解释视觉细节时，你通常更像？",
    options: [
      { value: 1, label: "图发过去：你们自己感受一下" },
      { value: 2, label: "圈重点，再口头补两句" },
      { value: 3, label: "直接翻译成规则、状态和边界条件" },
    ],
  },
  {
    id: 14,
    dimension: "C1",
    text: "评审会上，你更像哪种设计师？",
    options: [
      { value: 1, label: "图能打，但一开口就容易散" },
      { value: 2, label: "能把设计理由和目标讲圆" },
      { value: 3, label: "用户、品牌、业务和老板关注点都能被你串成一条线" },
    ],
  },
  {
    id: 15,
    dimension: "C2",
    text: "跨部门需求一糊，你通常会怎么处理？",
    options: [
      { value: 1, label: "先自己画，别人追着问再同步" },
      { value: 2, label: "先给一个方向，再拉齐" },
      { value: 3, label: "先把目标、范围、依赖都摊开讲清楚" },
    ],
  },
  {
    id: 16,
    dimension: "C2",
    text: "开发接入前，你通常会准备到什么程度？",
    options: [
      { value: 1, label: "图发过去就算交棒" },
      { value: 2, label: "关键页补点标注和说明" },
      { value: 3, label: "状态、尺寸、响应式、边界一次讲透" },
    ],
  },
  {
    id: 17,
    dimension: "C3",
    text: "面试讲作品集时，你更像哪种状态？",
    options: [
      { value: 1, label: "翻页式播报，像在念站酷长图标题" },
      { value: 2, label: "目标、过程、结果都能讲清楚" },
      { value: 3, label: "像讲一场大厂 case 复盘，节奏和重点都拿住" },
    ],
  },
  {
    id: 18,
    dimension: "C3",
    text: "同事问你“为什么这么排版”，你更可能怎么回？",
    options: [
      { value: 1, label: "因为这样更好看，别问太细" },
      { value: 2, label: "因为这样更清晰、更顺眼" },
      { value: 3, label: "因为层级、视线动线和目标转化都更对路" },
    ],
  },
  {
    id: 19,
    dimension: "I1",
    text: "接到一个新命题，你的第一反应更像？",
    options: [
      { value: 1, label: "先刷站酷、Behance、小红书，不然空白页会卡住我" },
      { value: 2, label: "一边找灵感一边开整" },
      { value: 3, label: "先立情绪母题，再往下长画面" },
    ],
  },
  {
    id: 20,
    dimension: "I1",
    text: "灵感突然掉线时，你更常用哪种办法自救？",
    options: [
      { value: 1, label: "疯狂刷图，先去站酷和小红书借点脑回路" },
      { value: 2, label: "换个场景，回来继续拧" },
      { value: 3, label: "用关键词、材质、叙事把自己重新点着" },
    ],
  },
  {
    id: 21,
    dimension: "I2",
    text: "客户只想求稳，但你脑子里已经冒出一个大胆方案，你会？",
    options: [
      { value: 1, label: "算了，先别整太飞" },
      { value: 2, label: "局部夹带一点私货" },
      { value: 3, label: "直接双方案，一个保命，一个出圈" },
    ],
  },
  {
    id: 22,
    dimension: "I2",
    text: "你对趋势风格的态度更像哪一挂？",
    options: [
      { value: 1, label: "跟就完了，先别掉出话题区" },
      { value: 2, label: "挑着借，适合的才接进来" },
      { value: 3, label: "拿来就改造，不想只做小红书同款低配复刻" },
    ],
  },
  {
    id: 23,
    dimension: "I3",
    text: "给你半天做一个方向稿，你通常能到哪一步？",
    options: [
      { value: 1, label: "脑内戏很多，手上还没真正开机" },
      { value: 2, label: "能交出一个能聊的版本" },
      { value: 3, label: "三版并排，顺手把封面、首图和汇报页都起了" },
    ],
  },
  {
    id: 24,
    dimension: "I3",
    text: "突然说明早提案，你的工作流更像哪种状态？",
    options: [
      { value: 1, label: "熬是会熬，但越做越像脉脉吐槽帖素材" },
      { value: 2, label: "先搭主结构，再补亮点和情绪" },
      { value: 3, label: "边搭系统边冲锋，凌晨过会也能顶住" },
    ],
  },
  {
    id: 25,
    dimension: "T1",
    text: "AI 在你的工作流里，更像什么角色？",
    options: [
      { value: 1, label: "偶尔帮我起标题、搜思路、打下手" },
      { value: 2, label: "扩参考、改文案、提效率都能接一下" },
      { value: 3, label: "命名、概念稿、站酷方向板和小红书首图一起共创" },
    ],
  },
  {
    id: 26,
    dimension: "T1",
    text: "看到 AI 生成一张还不错的图，你第一反应更像？",
    options: [
      { value: 1, label: "能交差就先顶上去" },
      { value: 2, label: "当参考底板，再人工重构" },
      { value: 3, label: "继续炼提示词，直到它能过会也能出圈" },
    ],
  },
  {
    id: 27,
    dimension: "T2",
    text: "你的 Figma 页面命名，一般处于哪种画风？",
    options: [
      { value: 1, label: "Frame 213 / final_final_v7 / 求别问" },
      { value: 2, label: "勉强能看，但偶尔还是会长草" },
      { value: 3, label: "页面、章节、组件都整齐得像样板间" },
    ],
  },
  {
    id: 28,
    dimension: "T2",
    text: "你对 Auto Layout / 变量 / 组件，这套东西的态度更像？",
    options: [
      { value: 1, label: "能不用就不用，别给自己加班" },
      { value: 2, label: "核心能力会，够用就不再深挖" },
      { value: 3, label: "不把这些整理好，我会浑身难受" },
    ],
  },
  {
    id: 29,
    dimension: "T3",
    text: "看到新插件、新模型或新动效工具时，你通常会怎么反应？",
    options: [
      { value: 1, label: "先围观，让别人先踩坑" },
      { value: 2, label: "有空试试，合适再留下" },
      { value: 3, label: "先装再说，外挂库先堆起来" },
    ],
  },
  {
    id: 30,
    dimension: "T3",
    text: "你最容易被哪类新东西瞬间勾走？",
    options: [
      { value: 1, label: "稳定现成、拿来就能交付的模板" },
      { value: 2, label: "刚刚好的新工具、新方法、新工作流" },
      { value: 3, label: "任何能让我再往前整一步的新实验" },
    ],
  },
];

export const hiddenQuestions = [
  {
    id: 31,
    text: "最后一道彩蛋题：你工位上最像本命外挂的东西是？",
    options: [
      { value: "swatch", label: "色卡 / 样卡 / 印刷打样小样" },
      { value: "sticky", label: "贴满墙的便利贴宇宙" },
      { value: "coffee", label: "冰美式 / 手冲 / 续命杯" },
      { value: "sketchbook", label: "被翻烂的手绘草图本" },
    ],
  },
  {
    id: 32,
    text: "看到一个颜色时，你脑子里的第一反应更像？",
    triggerPrev: "swatch",
    options: [
      { value: "feeling", label: "说不清，但我知道这颜色很对味" },
      { value: "hex", label: "脑子里已经开始自动浮现接近色值" },
    ],
  },
];
