# DBTI · 设计师人格测试

> Designer Behavior Type Indicator
>
> 30 道题，测出你的设计人格。你是 `GRID`、`MOOD`，还是隐藏人格 `PANTONE`？

## 项目简介

DBTI 是一个面向设计师群体的趣味人格测试网站，灵感来自 MBTI、SBTI，以及真实设计工作流中的改稿、提案、协作与工具使用习惯。

通过 **30 道和设计日常相关的选择题**，从 **5 大行为模型、15 个维度** 综合分析，匹配出你的设计人格类型。

共有 **27 种普通人格 + 1 种隐藏人格**，每种人格都用设计师熟悉的关键词命名，例如：

- `GRID` 网格秩序家
- `MOOD` 情绪版策展人
- `TOKENS` 设计系统管理员
- `CURSOR` AI 提示咒术师
- `BENTO` 信息拼盘师

## 为什么叫 DBTI

- `DBTI` = `Designer Behavior Type Indicator`
- 中文名建议统一使用：`设计师人格测试`
- 对外传播建议使用：`DBTI · 设计师人格测试`

这套命名比“设计师行为类型测试”更顺口，也更适合做标题、Logo、分享图和社交传播。

## 测试结构

### 5 大模型

- `V` 视觉信仰：像素敏感度、细节洁癖、系统一致性
- `R` 需求应对：改稿耐受力、截止抗压、复盘主动性
- `C` 协作关系：沟通表达、对齐主动性、讲述能力
- `I` 创意驱动：灵感探索、风格冒险、执行速度
- `T` 工具共生：AI 依赖度、Figma 组织度、工具实验欲

### 匹配逻辑

1. 每道题按 1 / 2 / 3 分计分
2. 每个维度由 2 道题组成，总分范围为 2 - 6
3. 维度分数映射为 `L / M / H`
4. 15 个维度共同生成用户向量
5. 使用曼哈顿距离匹配最接近的人格类型
6. 若触发彩蛋条件，则直接解锁隐藏人格 `PANTONE`

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
http://localhost:3000
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
