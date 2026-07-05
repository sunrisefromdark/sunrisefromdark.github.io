const copy = {
  en: {
    brand: {
      name: "sunrisefromdark",
    },
    nav: {
      work: "Portfolio",
      openSource: "Open Source",
      timeline: "Timeline",
      stack: "Tech Stack",
      contact: "Contact",
    },
    hero: {
      title: "Hello, I'm sunrisefromdark",
      line1: "AI Agent and Agent Harness developer",
      line2: "Projects: AgentRadar and Text2SQL, with search / recommendation and verifiable data workflow experience",
      line3: "Building trend intelligence and data intelligence tools for AI-native systems",
      primaryCta: "View Projects",
      secondaryCta: "Open Source",
    },
    work: {
      title: "Portfolio",
    },
    projects: {
      agentRadarMeta: "Open source",
      agentRadar:
        "An open-source trend radar for the AI Agent ecosystem, covering signal collection, project scoring, daily / weekly reports, and knowledge cards.",
      text2sqlMeta: "Private project",
      text2sql:
        "A data intelligence project that turns natural-language questions into SQL, with schema linking, SQL generation, execution checks, and result validation.",
      detail: "View Details ->",
      repo: "Repository",
      demo: "Live Demo",
      privateRepo: "Private Repo",
    },
    openSource: {
      title: "Open Source",
      agentRadarKicker: "Open-source project",
      agentRadar:
        "Open-source project: AI Agent ecosystem signal collection, project scoring, trend reports, and knowledge cards.",
      inlongKicker: "Apache contribution",
      inlong:
        "2023 Apache InLong contributions around the data integration framework, including Manager / Sort fixes and security hardening.",
      repoLink: "Repository ->",
      commitsLink: "Contribution records ->",
    },
    timeline: {
      title: "Timeline",
      item1Title: "Building AgentRadar",
      item1Text:
        "Turning public AI Agent signals into ranked projects, weekly trend judgments, and reusable research artifacts.",
      item2Title: "Text2SQL project",
      item2Text:
        "Building data intelligence around natural-language queries, schema linking, SQL generation, execution checks, and result validation.",
      item3Title: "Agent harness and verification loops",
      item3Text:
        "Focusing on replayable runs, fixtures, schema checks, and quality gates for agentic workflows.",
      item4Title: "Apache InLong open-source contribution",
      item4Text:
        "Contributed to Apache InLong in 2023, improving data integration framework code, security hardening, and engineering quality.",
      item5Title: "Search and recommendation direction",
      item5Text:
        "Working with candidate recall, ranking signals, freshness, and personalization as product-facing systems.",
    },
    stack: {
      title: "Tech Stack",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Me",
      text:
        "I am happy to connect around AI Agent platforms, evaluation tooling, and data products that need ranking or recommendation logic.",
    },
    footer: {
      text: "Personal homepage",
    },
  },
  zh: {
    brand: {
      name: "sunrisefromdark",
    },
    nav: {
      work: "个人项目",
      openSource: "开源贡献",
      timeline: "时间轴",
      stack: "技术栈",
      contact: "联系我",
    },
    hero: {
      title: "你好，我是 sunrisefromdark",
      line1: "AI Agent 与 Agent Harness 方向开发者",
      line2: "项目聚焦 AgentRadar 与 Text2SQL，能力覆盖搜索推荐和可验证数据工作流",
      line3: "正在构建面向 AI Agent 生态的趋势雷达与数据智能工具",
      primaryCta: "查看项目",
      secondaryCta: "开源贡献",
    },
    work: {
      title: "个人项目",
    },
    projects: {
      agentRadarMeta: "开源项目",
      agentRadar:
        "面向 AI Agent 生态的开源趋势雷达，负责信号采集、项目评分、日报周报和知识卡沉淀。",
      text2sqlMeta: "私有项目",
      text2sql:
        "自然语言到 SQL 的数据智能项目，关注 schema linking、SQL 生成、执行校验和结果验证。",
      detail: "查看详情 ->",
      repo: "代码仓库",
      demo: "在线演示",
      privateRepo: "私有仓库",
    },
    openSource: {
      title: "开源贡献",
      agentRadarKicker: "开源项目",
      agentRadar:
        "开源项目：AI Agent 生态信号采集、项目评分、趋势报告与知识卡沉淀。",
      inlongKicker: "Apache 贡献",
      inlong:
        "2023 年参与 Apache InLong 相关贡献，围绕数据集成框架的 Manager / Sort 等模块做代码修复与安全加固。",
      repoLink: "代码仓库 ->",
      commitsLink: "查看贡献记录 ->",
    },
    timeline: {
      title: "经历时间轴",
      item1Title: "构建 AgentRadar",
      item1Text:
        "把公开 AI Agent 信号转成项目排序、周级趋势判断和可复用研究产物。",
      item2Title: "Text2SQL 项目",
      item2Text:
        "围绕自然语言查询、schema linking、SQL 生成、执行校验和结果验证做数据智能工具。",
      item3Title: "Agent Harness 与验证回路",
      item3Text:
        "关注可回放运行、fixtures、schema 检查和 Agent 工作流质量门禁。",
      item4Title: "Apache InLong 开源贡献",
      item4Text:
        "参与 Apache InLong 相关贡献，围绕数据集成框架的代码修复、安全加固和工程质量改进。",
      item5Title: "搜索推荐方向",
      item5Text:
        "围绕候选生成、排序信号、新鲜度和个性化做产品化系统。",
    },
    stack: {
      title: "技术栈",
    },
    contact: {
      eyebrow: "联系",
      title: "联系我",
      text:
        "如果你也在关注 AI Agent、Agent Harness、Text2SQL、搜索推荐或数据产品，欢迎交流。",
    },
    footer: {
      text: "个人主页",
    },
  },
};

const root = document.documentElement;
const langButton = document.querySelector("[data-lang-toggle]");
const themeButton = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : ""), source);
}

function applyLanguage(lang) {
  const dictionary = copy[lang] || copy.zh;
  root.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getNestedValue(dictionary, node.dataset.i18n);
    if (value) node.textContent = value;
  });
  langButton.textContent = lang === "zh" ? "English" : "中文";
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
}

langButton.addEventListener("click", () => {
  const nextLang = root.getAttribute("lang") === "zh" ? "en" : "zh";
  applyLanguage(nextLang);
});

themeButton.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

applyLanguage(localStorage.getItem("lang") || root.getAttribute("lang") || "zh");
applyTheme(localStorage.getItem("theme") || root.getAttribute("data-theme") || "light");
