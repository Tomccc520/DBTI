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
      { value: 1, label: "100%，先把稿甩出去，别在像素上加班" },
      { value: 2, label: "200%，主视觉扶正，边边角角先放过" },
      { value: 3, label: "400%，1px 漂了我今晚都睡不踏实" },
    ],
  },
  {
    id: 2,
    dimension: "V1",
    text: "开发说“这个按钮左右差 1px 肉眼看不出来”，你会？",
    options: [
      { value: 1, label: "先别为 1px 开批斗会，版先过" },
      { value: 2, label: "首屏和重点位先补，普通位先记账" },
      { value: 3, label: "立刻返修，这种小歪最容易把气口搞塌" },
    ],
  },
  {
    id: 3,
    dimension: "V2",
    text: "你调阴影时，最常进入哪种状态？",
    options: [
      { value: 1, label: "套个旧参数先顶住，有点味儿就算交差" },
      { value: 2, label: "来回拉两三轮，调到顺眼区间就收手" },
      { value: 3, label: "透明度、模糊、扩散一起盘，不对味绝不存档" },
    ],
  },
  {
    id: 4,
    dimension: "V2",
    text: "上线前最后 5 分钟，你最可能还在做什么？",
    options: [
      { value: 1, label: "扔链接跑路，剩下交给命运" },
      { value: 2, label: "最后扫一遍首屏、弹窗和 hover" },
      { value: 3, label: "还在补圆角和间距，手已经停不下来" },
    ],
  },
  {
    id: 5,
    dimension: "V3",
    text: "第二个页面刚开工时，你更像哪种人？",
    options: [
      { value: 1, label: "每页都重开副本，主打一个不想重复自己" },
      { value: 2, label: "能抄前页骨架就抄，先把版搭起来" },
      { value: 3, label: "先抽 token 和组件，后面谁都别想野生生长" },
    ],
  },
  {
    id: 6,
    dimension: "V3",
    text: "同一产品里长出了三种按钮样式，你通常会？",
    options: [
      { value: 1, label: "先让它活着，野生按钮以后再收" },
      { value: 2, label: "先把这笔账记上，等统一窗口再清" },
      { value: 3, label: "今天就收口，不让项目继续长野按钮" },
    ],
  },
  {
    id: 7,
    dimension: "R1",
    text: "产品第六次说“再微调一下”，你内心更接近？",
    options: [
      { value: 1, label: "第六次了，我的灵魂已经切小窗了" },
      { value: 2, label: "能改，但先把人话说全" },
      { value: 3, label: "改就改，先拆诉求再落刀" },
    ],
  },
  {
    id: 8,
    dimension: "R1",
    text: "客户说“高级一点、年轻一点、国际一点”，你通常会？",
    options: [
      { value: 1, label: "这话跟没说一样，我先原地皱眉" },
      { value: 2, label: "先追问参考、场景和禁区，别给空气打工" },
      { value: 3, label: "当场翻成三条可落地方向，不让黑话继续飘" },
    ],
  },
  {
    id: 9,
    dimension: "R2",
    text: "今晚十点前要出终稿，你现在刚拿到需求，第一反应是？",
    options: [
      { value: 1, label: "先心里骂两句，再看看能不能顺延" },
      { value: 2, label: "先保主线和交付，别让项目直接炸" },
      { value: 3, label: "直接起骨架，边冲边收，不给死线留面子" },
    ],
  },
  {
    id: 10,
    dimension: "R2",
    text: "临门一脚发现组件库有一半没整理，你更可能怎么干？",
    options: [
      { value: 1, label: "先糊一个能过的，活下来最重要" },
      { value: 2, label: "主线先交，系统债回头补票" },
      { value: 3, label: "边救火边抽组件，这波不想白挨" },
    ],
  },
  {
    id: 11,
    dimension: "R3",
    text: "项目上线后，你通常会进入哪种模式？",
    options: [
      { value: 1, label: "关 Figma 清缓存，这项目我当没见过" },
      { value: 2, label: "记两个坑，够下次少翻一次车" },
      { value: 3, label: "复盘、补注释、顺手把坑封上" },
    ],
  },
  {
    id: 12,
    dimension: "R3",
    text: "一次提案没过，你更接近哪种做法？",
    options: [
      { value: 1, label: "先怀疑人生，再硬着头皮重开" },
      { value: 2, label: "记住翻车点，下次别再送人头" },
      { value: 3, label: "把这次没过会的锅，改成下次的提案外挂" },
    ],
  },
  {
    id: 13,
    dimension: "C1",
    text: "向开发解释视觉细节时，你通常更像？",
    options: [
      { value: 1, label: "图发你了，你们先自己体会一下" },
      { value: 2, label: "圈重点加两句口播，尽量别来回折返" },
      { value: 3, label: "直接翻成规则、状态和边界，不给误解留口子" },
    ],
  },
  {
    id: 14,
    dimension: "C1",
    text: "评审会上，你更像哪种设计师？",
    options: [
      { value: 1, label: "图能打，嘴一张就容易掉线" },
      { value: 2, label: "能把理由和目标讲圆，至少不会散场" },
      { value: 3, label: "用户、品牌、业务、老板视角一起控住" },
    ],
  },
  {
    id: 15,
    dimension: "C2",
    text: "跨部门需求一糊，你通常会怎么处理？",
    options: [
      { value: 1, label: "先自己画了再说，问到再同步" },
      { value: 2, label: "先抛个方向，边画边拉齐" },
      { value: 3, label: "先把目标、范围、依赖摊平，不画空气稿" },
    ],
  },
  {
    id: 16,
    dimension: "C2",
    text: "开发接入前，你通常会准备到什么程度？",
    options: [
      { value: 1, label: "图发过去就算交棒，剩下看缘分" },
      { value: 2, label: "关键页和重点态补点说明就够" },
      { value: 3, label: "状态、尺寸、异常态一次讲透，别返工" },
    ],
  },
  {
    id: 17,
    dimension: "C3",
    text: "面试讲作品集时，你更像哪种状态？",
    options: [
      { value: 1, label: "像念稿，作品集在讲我人在掉线" },
      { value: 2, label: "目标、过程、结果都能讲清楚" },
      { value: 3, label: "像复盘一场硬仗，节奏和控场都在线" },
    ],
  },
  {
    id: 18,
    dimension: "C3",
    text: "同事问你“为什么这么排版”，你更可能怎么回？",
    options: [
      { value: 1, label: "因为好看，你先别追问" },
      { value: 2, label: "因为这样更清楚、更好扫" },
      { value: 3, label: "因为层级、动线、转化都在这儿对上了" },
    ],
  },
  {
    id: 19,
    dimension: "I1",
    text: "接到一个新命题，你的第一反应更像？",
    options: [
      { value: 1, label: "先开刷灵感流，不然空白页会反杀我" },
      { value: 2, label: "边找边做，别让手等脑子" },
      { value: 3, label: "先立个母题，后面的画面自己长" },
    ],
  },
  {
    id: 20,
    dimension: "I1",
    text: "灵感突然掉线时，你更常用哪种办法自救？",
    options: [
      { value: 1, label: "疯狂刷图续命，先把脑子点亮" },
      { value: 2, label: "换个地方透口气，再回来硬拧" },
      { value: 3, label: "靠关键词、材质和叙事把自己重新点燃" },
    ],
  },
  {
    id: 21,
    dimension: "I2",
    text: "客户只想求稳，但你脑子里已经冒出一个大胆方案，你会？",
    options: [
      { value: 1, label: "先别飞，保命稿优先" },
      { value: 2, label: "主线求稳，局部偷偷夹带私货" },
      { value: 3, label: "双轨并行，保命稿和出圈稿都上" },
    ],
  },
  {
    id: 22,
    dimension: "I2",
    text: "你对趋势风格的态度更像哪一挂？",
    options: [
      { value: 1, label: "热什么就先跟什么，别掉出话题区" },
      { value: 2, label: "借一点，但不做整套复读机" },
      { value: 3, label: "拿来就改造，不想做低配同款" },
    ],
  },
  {
    id: 23,
    dimension: "I3",
    text: "给你半天做一个方向稿，你通常能到哪一步？",
    options: [
      { value: 1, label: "脑子已经三版了，手上还在第一屏" },
      { value: 2, label: "能交出一个能聊、能改、能推进的版本" },
      { value: 3, label: "三版并排，封面、首图、提案页一起起" },
    ],
  },
  {
    id: 24,
    dimension: "I3",
    text: "突然说明早提案，你的工作流更像哪种状态？",
    options: [
      { value: 1, label: "会熬，但越做越像匿名区吐槽素材" },
      { value: 2, label: "先把骨架立住，再补亮点和气氛" },
      { value: 3, label: "系统和情绪一起推，凌晨也能硬顶" },
    ],
  },
  {
    id: 25,
    dimension: "T1",
    text: "AI 在你的工作流里，更像什么角色？",
    options: [
      { value: 1, label: "先当打下手，脏活累活让它干" },
      { value: 2, label: "扩思路、补文案、提效率，它都能插一脚" },
      { value: 3, label: "从命名到方向稿都一起共创，真搭子级别" },
    ],
  },
  {
    id: 26,
    dimension: "T1",
    text: "看到 AI 生成一张还不错的图，你第一反应更像？",
    options: [
      { value: 1, label: "能先顶就先顶，版过了再说" },
      { value: 2, label: "先当底板，再手动重构一遍" },
      { value: 3, label: "继续炼词炼图，直到它能拿去打仗" },
    ],
  },
  {
    id: 27,
    dimension: "T2",
    text: "你的 Figma 页面命名，一般处于哪种画风？",
    options: [
      { value: 1, label: "Frame 213 / final_v9 / 谁爱找谁找" },
      { value: 2, label: "勉强能看，但偶尔还是像杂物间" },
      { value: 3, label: "页面、章节、组件分得明明白白，像样板房" },
    ],
  },
  {
    id: 28,
    dimension: "T2",
    text: "你对 Auto Layout / 变量 / 组件，这套东西的态度更像？",
    options: [
      { value: 1, label: "能不用就不用，别主动给自己加戏" },
      { value: 2, label: "核心功能会用，够交付就行" },
      { value: 3, label: "不把这套整理好，我会全身发痒" },
    ],
  },
  {
    id: 29,
    dimension: "T3",
    text: "看到新插件、新模型或新动效工具时，你通常会怎么反应？",
    options: [
      { value: 1, label: "先围观测评，让别人替我踩雷" },
      { value: 2, label: "挑真有用的试，不做纯尝鲜党" },
      { value: 3, label: "先装再说，外挂库厚了心里才踏实" },
    ],
  },
  {
    id: 30,
    dimension: "T3",
    text: "你最容易被哪类新东西瞬间勾走？",
    options: [
      { value: 1, label: "稳定现成、拿来就能交付的模板" },
      { value: 2, label: "刚好补短板的新工具和新工作流" },
      { value: 3, label: "任何能把我再往前推一步的新玩具" },
    ],
  },
];

export const hiddenQuestions = [
  {
    id: 31,
    text: "最后一道彩蛋题：你工位上最像本命外挂的东西是？",
    options: [
      { value: "swatch", label: "色卡 / 打样 / 品牌手册边角料" },
      { value: "sticky", label: "贴满一墙的便利贴宇宙" },
      { value: "coffee", label: "冰美式 / 手冲 / 续命容器" },
      { value: "sketchbook", label: "翻烂了的草图本 / 随手记" },
    ],
  },
  {
    id: 32,
    text: "看到一个颜色时，你脑子里的第一反应更像？",
    triggerPrev: "swatch",
    options: [
      { value: "feeling", label: "说不清，但这个色一眼就对" },
      { value: "hex", label: "脑子里已经开始自动报接近色值" },
    ],
  },
];
