# DBTI · 设计师人格测试

> Designer Behavior Type Indicator
>
> 30 道题，从 5 个抽象模型、15 个维度测出你到底是站酷封面脑、小红书种草体、脉脉求生派，还是大厂过会王。
>
> 你是 `GRID`、`MOOD`，还是隐藏人格 `HEX`？

## 项目简介

DBTI 是一个面向设计师群体的趣味人格测试网站，灵感来自 MBTI、SBTI，以及真实设计工作流中的改稿、提案、协作与工具使用习惯。

通过 **30 道和设计日常相关的选择题**，从 **5 个抽象模型、15 个维度** 综合分析，匹配出你的设计圈人格类型。
文案语气会刻意混入 `站酷 / 小红书 / 脉脉 / 大厂设计组` 四种圈层黑话，让结果更像圈内人会转发的那种梗。

共有 **27 种普通人格 + 1 种隐藏人格**，每种人格都用设计师熟悉的关键词命名，例如：

- `GRID` 秩序卷王
- `MOOD` 气氛拿捏怪
- `TOKENS` 系统控头子
- `CURSOR` AI 咒语师
- `BENTO` 模块拼盘师

## 仓库简介建议

- GitHub / Gitee 短描述：`30 道题，测测你到底是站酷封面脑、小红书种草体、脉脉求生派，还是大厂过会王。`
- 仓库长描述：`一个面向设计师群体的趣味人格测试网站，把站酷、小红书、脉脉和大厂设计组的黑话语气混进设计工作流，再拆成像素结界、改稿渡劫、嘴替战力、灵感上头、外挂共生五个模型来测。`
- OG 标题：`DBTI · 设计师人格测试`
- OG 描述：`一个面向设计师群体的趣味人格测试网站，用更抽象、更互联网的方式拆解你的设计工作流与画风。`

## 为什么叫 DBTI

- `DBTI` = `Designer Behavior Type Indicator`
- 中文名建议统一使用：`设计师人格测试`
- 对外传播建议使用：`DBTI · 设计师人格测试`

这套命名比“设计师行为类型测试”更顺口，也更适合做标题、Logo、分享图和社交传播。

## 测试结构

### 5 大模型

- `V` 像素结界：对味雷达、细节内耗、统一执念
- `R` 改稿渡劫：返工抗性、死线爆改、复盘补丁
- `C` 嘴替战力：人话翻译、拉齐雷达、说服浓度
- `I` 灵感上头：起稿点火、整活胆量、出片手速
- `T` 外挂共生：AI 共创浓度、文件养生度、工具尝鲜瘾

### 匹配逻辑

1. 每道题按 1 / 2 / 3 分计分
2. 每个维度由 2 道题组成，总分范围为 2 - 6
3. 维度分数映射为 `L / M / H`
4. 15 个维度共同生成用户向量
5. 使用曼哈顿距离匹配最接近的人格类型
6. 若触发彩蛋条件，则直接解锁隐藏人格 `HEX`

## 视觉与交互特点

- 全站重写为更偏提案封面 / 作品集气质的视觉风格
- 使用统一的抽象人格徽章系统，替代原始角色插画依赖
- 结果页支持分享文案复制与海报导出
- 纯前端静态站点，无后端依赖，无数据收集

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- QRCode

## 本地开发

```bash
npm install
npm run dev
```

默认访问地址：

```bash
http://localhost:5150
```

## 构建

```bash
npm run build
```

项目使用静态导出，可直接部署到 Vercel、Netlify、Cloudflare Pages、Gitee Pages 等静态平台。

## 项目结构

```bash
src/
├── app/
│   ├── page.tsx
│   ├── test/page.tsx
│   ├── result/page.tsx
│   ├── types/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── CharacterSVG.tsx
│   └── RadarChart.tsx
├── data/
│   ├── dimensions.ts
│   ├── questions.ts
│   └── personalities.ts
└── lib/
    ├── constants.ts
    └── scoring.ts
```

## 版权

- Tomda: https://www.tomda.top
- UIED技术团队: https://fsuied.com

## License

本项目默认使用 MIT License，详见 [LICENSE](./LICENSE)。
