export const en = {
  navToggle: "中文",
  nav: [
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        {
          parent: "Company Profile",
          href: "/about/company-profile"
        },
        {
          parent: "Mission & Vision",
          href: "/about/mission-vision"
        },
        {
          parent: "Development History",
          href: "/about/development-history"
        },
        {
          parent: "Honors & Qualifications",
          href: "/about/honors-qualifications"
        }
      ]
    },
    {
      name: "Technologies",
      href: "/tech",
      dropdown: [
        {
          parent: "Drilling Acceleration Tech",
          children: [
            { name: "Constant Torque and Pressure Drilling Acceleration Tech", href: "/tech/drilling-acceleration" }
          ]
        },
        {
          parent: "Ultra-High Difficulty Well Completion Tech",
          children: [
            { name: "Microcapsule Targeted Lubrication Tech", href: "/tech/targeted-lubrication" }
          ]
        },
        {
          parent: "Shale Oil & Gas Stimulation Tech",
          children: [
            { name: "Low Friction Clean Variable Viscosity Fracturing Fluid Tech", href: "/tech/low-friction-fracturing" },
            { name: "Shale Oil & Gas Low Damage Multi-dimensional Volume Fracturing Tech", href: "/tech/multi-dimensional-fracturing" }
          ]
        },
        {
          parent: "Unconventional Reservoir Stimulation Tech",
          children: [
            { name: "CBM In-situ Energization Desorption Fracturing New Tech", href: "/tech/cbm-fracturing" },
            { name: "Carbonate Rock Targeted Fracture Control Deep Acid Fracturing Tech", href: "/tech/carbonate-acid-fracturing" }
          ]
        },
        {
          parent: "Oil & Gas Pipeline Anti-Corrosion Engineering",
          children: [
            { name: "Gathering and Transportation Pipeline Visual Intelligent Corrosion Prevention Tech", href: "/tech/pipeline-anti-corrosion" }
          ]
        },
        {
          parent: "Old Well Transformation",
          children: [
            { name: "Old Well Secondary Treatment New Tech", href: "/tech/old-well-transformation" }
          ]
        }
      ]
    },
    {
      name: "Services",
      href: "/products-and-services"
    },
    {
      name: "Performance",
      href: "/performance"
    },
    {
      name: "News",
      href: "/news"
    },
    {
      name: "Resources",
      href: "/resource-cooperation"
    }
  ],
  hero: {
    title: "BETTER PETROLEUM",
    subtitle: "Innovation Driving the Future of Energy",
    descriptionLines: [
      "Defining technology with innovation, delivering promises with service.",
      "Safeguarding the green future of the industry, powering national energy security."
    ],
    companyName: "Better Petroleum Technology Co., Ltd.",
    explore: "Explore Our Tech",
    video: "View Global Layout",
  },
  carouselTabs: [
    { value: "3", label: "Main Theoretical Innovations" },
    { value: "4", label: "Major Strategic Layouts" },
    { value: "6", label: "Major Technical Fields" },
    { value: "127", label: "Total Core Experts" }
  ],
  carouselItem1: {
    rows: [
      {
        topic: "Theory of Rock Self-Restoring Original State Characteristics",
        detail: "Reveals the rock self-plastic stress reset mechanism, establishing a new understanding of geomechanics."
      },
      {
        topic: "Effective Reservoir Volume Stimulation Theory",
        detail: "Creates the scientific basis for optimal stimulation, making production increase effects designable and verifiable."
      },
      {
        topic: "Targeted Lubrication Theory",
        detail: "Disrupts traditional lubrication methods, achieving precise release and breaking the limit of ultra-long horizontal sections."
      }
    ]
  },
  carouselItem2: {
    pois: [
      {
        id: "poi1",
        name: "Production Base",
        location: "Nanchong, Sichuan",
        points: [
          "Covers an area of over 16,000 square meters",
          "Integrates modern production with advanced laboratories",
          "Large-scale stable supply from raw materials to finished products"
        ]
      },
      {
        id: "poi2",
        name: "Overseas Service Center",
        location: "Middle East",
        points: [
          "Supporting international drilling operations",
          "24/7 technical assistance and logistics",
          "Deep local partnerships"
        ]
      },
      {
        id: "poi3",
        name: "R&D Center",
        location: "Southeast Asia",
        points: [
          "Focusing on smart energy solutions",
          "Collaborative research with top universities",
          "Pioneering sustainable practices"
        ]
      }
    ]
  },
  carouselItem3: {
    leftPillars: [
      { header: "Core Mechanism", title: "Migration Theory", sub: "Proprietary stress reset technique" },
      { header: "Fracturing", title: "Volume Stimulation", sub: "Optimal designable effects" },
      { header: "Lubrication", title: "Targeted Release", sub: "Ultra-long horizontal reach" },
      { header: "Sensing", title: "Deep Subsurface", sub: "High-res data mapping" },
      { header: "Chemistry", title: "Green Additives", sub: "Eco-friendly formulas" },
      { header: "Digital", title: "Cloud Platform", sub: "AI-driven analytics" }
    ],
    rightCategories: [
      {
        title: "Drilling/Completion",
        items: ["Integrated Tooling", "Smart Well Control", "High-Torque Systems"]
      },
      {
        title: "Reservoir Core",
        items: ["3D Fluid Modeling", "Geomechanical Analysis"]
      },
      {
        title: "Fracturing Additives",
        items: ["Nano-Proppants", "Temp-Plugging Agents"]
      },
      {
        title: "Pipeline Protection",
        items: ["Anti-Corrosion Tech", "Flow Assurance"]
      }
    ]
  },
  carouselItem4: {
    departments: [
      "Organizational Structure",
      "Board of Directors",
      "Procurement Process Management",
      "Better Chemical",
      "Engineering Team",
      "Xinjiang/Southwest Project Management Department",
      "Technology R&D Center",
      "International Business Department"
    ]
  },
  footer: {
    contactUs: "Contact Us",
    address: "No. 18 Chengji Road, Longtan Industrial Park, Section 2, East 3rd Ring Road, Chenghua District, Chengdu, Sichuan, China",
    phone: "028-83298086",
    email: "contact@petrobetter.com",
    companyName: "Better Petroleum",
    copyright: "Copyright © {{year}} Better Petroleum Technology Co., Ltd. All Rights Reserved.",
    icp: "ICP: 蜀ICP备12003457号-1",
    links: {
      company: "Company",
      about: "About Us",
      news: "News",
      careers: "Careers",
      resources: "Resources",
      tech: "Technologies",
      solutions: "Solutions",
      support: "Support",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    }
  },
  placeholders: {
    comingSoon: "Content is coming soon...",
    backHome: "Back to Home",
  }
};
