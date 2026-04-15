export const zh = {
  nav: {
    toggleLang: "EN",
    companyName: "贝特石油",
    items: [
      {
        name: "关于我们",
        href: "/about",
        dropdown: [
          {
            parent: "公司简介",
            href: "/about/company-profile",
          },
          {
            parent: "使命愿景",
            href: "/about/mission-vision",
          },
          {
            parent: "发展历程",
            href: "/about/development-history",
          },
          {
            parent: "荣誉资质",
            href: "/about/honors-qualifications",
          },
        ],
      },
      {
        name: "核心技术",
        href: "/tech",
        dropdown: [
          {
            parent: "钻井提速技术",
            children: [
              {
                name: "钻井恒扭恒压提速技术",
                href: "/tech/drilling-acceleration",
              },
            ],
          },
          {
            parent: "超高难度成井技术",
            children: [
              {
                name: "微胶囊靶向润滑技术",
                href: "/tech/targeted-lubrication",
              },
            ],
          },
          {
            parent: "页岩油气改造技术",
            children: [
              {
                name: "低摩阻清洁变粘压裂液技术",
                href: "/tech/low-friction-fracturing",
              },
              {
                name: "页岩油气低伤害多维度体积压裂技术",
                href: "/tech/multi-dimensional-fracturing",
              },
            ],
          },
          {
            parent: "非常规储层改造技术",
            children: [
              {
                name: "煤层气原位增能解吸压裂新技术",
                href: "/tech/cbm-fracturing",
              },
              {
                name: "碳酸盐岩靶向控缝深度酸压技术",
                href: "/tech/carbonate-acid-fracturing",
              },
            ],
          },
          {
            parent: "油气管道防腐工程",
            children: [
              {
                name: "采输管道可视化智能腐蚀防治技术",
                href: "/tech/pipeline-anti-corrosion",
              },
            ],
          },
          {
            parent: "老井改造",
            children: [
              {
                name: "老井二次治理新技术",
                href: "/tech/old-well-transformation",
              },
            ],
          },
        ],
      },
      {
        name: "产品与服务",
        href: "/products-and-services",
      },
      {
        name: "业绩与案例",
        href: "/performance",
      },
      {
        name: "新闻与动态",
        href: "/news",
      },
      {
        name: "资源合作",
        href: "/resource-cooperation",
      },
    ],
  },
  hero: {
    title: "贝特石油",
    subtitle: "创新驱动能源未来",
    descriptionLines: [
      "用创新定义技术，以服务兑现承诺。",
      "护航行业绿色未来，助力国家能源安全。",
    ],
    companyName: "四川省贝特石油技术有限公司",
    explore: "探索我们的技术",
    video: "查看全球布局",
  },
  about: {
    breadcrumb: "首页 > 关于我们",
    title: "5分钟，看懂贝特石油。",
  },
  carouselTabs: [
    { value: "3", label: "大理论创新" },
    { value: "4", label: "大战略布局" },
    { value: "6", label: "大技术领域" },
    { value: "127", label: "人核心团队" },
  ],
  carouselItem1: {
    rows: [
      {
        topic: "岩石自我恢复原始状态特性理论",
        detail: "揭示岩石自可塑性应力复位机制，奠定地质力学新认知",
      },
      {
        topic: "储层有效体积改造理论",
        detail: "创立最优化改造科学依据，让增产效果可设计可验证",
      },
      {
        topic: "靶向润滑理论",
        detail: "颠覆传统润滑方式，实现精准释放，突破超长水平段极限",
      },
    ],
  },
  carouselItem2: {
    pois: [
      {
        id: "poi1",
        name: "总部",
        location: "四川，成都",
        images: ["/carousel/2-map/hq-1.webp", "/carousel/2-map/hq-2.webp"],
        points: [
          "汇聚126名领域专业人才，架构清晰、经验丰富的精锐之师",
          "甲级5A办公环境，支撑细分项目运营基石",
        ],
      },
      {
        id: "poi2",
        name: "海外市场拓展",
        location: "",
        images: ["/carousel/2-map/overseas-market-exp.jpg"],
        points: [
          "中东（2025）：阿联酋（阿布扎比）、沙特阿拉伯、卡塔尔",
          "俄罗斯及中亚（2026）：俄罗斯（西伯利亚）、哈萨克斯坦、乌兹别克斯坦",
        ],
      },
      {
        id: "poi3",
        name: "研发中心",
        location: "四川，成都",
        images: ["/carousel/2-map/rnd-1.jpg", "/carousel/2-map/rnd-2.webp"],
        points: [
          "突破性技术策源地，汇聚顶尖团队，确保将前沿理论高效转化",
          "依托产学研融合高层次创新平台，进行超前技术研发与储备",
        ],
      },
      {
        id: "poi4",
        name: "生产基地",
        location: "四川，南充",
        images: ["/carousel/2-map/production-base.png"],
        points: [
          "占地面积超 16,000 平方米",
          "集现代化生产与先进实验室于一体",
          "从原料到成品的大规模稳定供应",
        ],
      },
      {
        id: "poi5",
        name: "项目管理中心",
        location: "新疆、西南片区",
        images: ["/carousel/2-map/pm-center.webp"],
        points: [
          "辐射国内西部市场战略支点",
          "确保项目物资高效供应与快速技术响应",
        ],
      },
    ],
  },
  carouselItem3: {
    leftPillars: [
      { header: "核心机制", title: "运移理论", sub: "专有应力复位技术" },
      { header: "压裂", title: "体积改造", sub: "最优化可设计效果" },
      { header: "润滑", title: "靶向释放", sub: "超长水平段延伸" },
      { header: "探测", title: "深地传感", sub: "高分辨率数据映射" },
      { header: "化学", title: "绿色助剂", sub: "环保型配方" },
      { header: "数字化", title: "云平台", sub: "AI驱动分析" },
    ],
    rightCategories: [
      {
        title: "钻完井",
        items: ["一体化工具", "智能井控", "大扭矩系统"],
      },
      {
        title: "储层岩心",
        items: ["三维流体建模", "地质力学分析"],
      },
      {
        title: "压裂助剂",
        items: ["纳米支撑剂", "暂堵剂"],
      },
      {
        title: "管道保护",
        items: ["防腐技术", "流动保障"],
      },
    ],
  },
  carouselItem4: {
    departments: [
      "组织架构",
      "董事会",
      "采购流程管理",
      "贝特化工",
      "工程师团队",
      "新疆/西南 项目管理部",
      "技术研发中心",
      "国际事业部",
    ],
  },
  footer: {
    contactUs: "联系我们",
    address: "四川省成都市成华区东三环路二段龙潭工业园成济路18号",
    phone: "028-83298086",
    email: "contact@petrobetter.com",
    companyName: "贝特石油",
    copyright: "版权所有 © {{year}} 四川省贝特石油技术有限公司",
    icp: "蜀ICP备12003457号-1",
    links: {
      company: "公司信息",
      about: "关于我们",
      news: "新闻中心",
      careers: "加入我们",
      resources: "资源中心",
      tech: "核心技术",
      solutions: "解决方案",
      support: "客户支持",
      contact: "联系我们",
      legal: "法律信息",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  },
  placeholders: {
    comingSoon: "内容正在建设中...",
    backHome: "返回首页",
  },
};
