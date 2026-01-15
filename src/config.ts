export const siteConfig = {
  name: "Ethan Xiao",
  title: "CS + Economics @ Vanderbilt | Product Engineer (Mobile)",
  description: "Portfolio website of Ethan Xiao",
  accentColor: "#1d4ed8",
  social: {
    email: "ethan.xiao@vanderbilt.edu",
    linkedin: "https://www.linkedin.com/in/ethan-xiao",
    twitter: "", // optional (leave blank if you don't want it shown)
    github: "https://github.com/exiao07",
  },

  aboutMe:
    "I’m a Computer Science + Economics student at Vanderbilt (GPA: 4.0) building full-stack products with a focus on mobile engineering, data-driven iteration, and clean UX. I’ve shipped multiple apps to the Apple App Store end-to-end using React Native + TypeScript and backend services with Node.js, Express, and Firebase. Previously, I built CPQ analytics dashboards at RenaissanceTech and supported reproducible research workflows at Harvard. I’m excited about building software that’s practical, scalable, and genuinely useful.",

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C/C++",
    "SQL",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Firebase",
    "AWS",
    "Docker",
  ],

  projects: [
    {
      name: "CrewOps — Full-Stack Mobile Platform",
      description:
        "A full-stack crew management platform built with React Native (Expo) to manage athletes, boats, practices, and regattas with lineup validation, seat optimization, reliability scoring, and performance analytics.",
      link: "", // add GitHub or demo link if you have one
      skills: ["React Native", "TypeScript", "Expo", "State Management"],
    },
    {
      name: "Habit Tracker (iOS)",
      description:
        "A habit-tracking iOS app featuring streak analytics and engagement-focused UX, built and shipped end-to-end to the App Store.",
      link: "", // add App Store link if you want
      skills: ["React Native", "TypeScript", "Firebase"],
    },
    {
      name: "Study Timer + Task Manager (iOS)",
      description:
        "A productivity app combining a study timer with task management workflows, built full-stack with real-time persistence and clean UI patterns.",
      link: "",
      skills: ["React Native", "TypeScript", "Node.js"],
    },
    {
      name: "Local Events Discovery App (iOS)",
      description:
        "A location-based events discovery app with backend data services and user-friendly browsing flows, shipped to production on iOS.",
      link: "",
      skills: ["React Native", "TypeScript", "Firebase"],
    },
  ],

  experience: [
    {
      company: "Independent Product Development",
      title: "Product Engineer (Mobile)",
      dateRange: "May 2025 - Present",
      bullets: [
        "Built and shipped multiple full-stack mobile apps to the Apple App Store, including a habit tracker with streak analytics, a study timer + task manager, and a local events discovery app.",
        "Developed mobile features in React Native + TypeScript and backend services using Node.js, Express, and Firebase (auth, persistence, real-time updates).",
        "Designed subscription + in-app purchase monetization flows and iterated post-launch using engagement metrics, generating $1,000+ profit and 1,000+ cumulative downloads.",
      ],
    },
    {
      company: "RenaissanceTech",
      title: "Development Intern",
      dateRange: "Jun 2024 - Aug 2024",
      bullets: [
        "Developed interactive CPQ analytics dashboards using React.js and JavaScript, integrating pricing and sales data via internal APIs for real-time tracking.",
        "Wrote unit + integration tests, debugged production-bound releases, and collaborated with engineers to resolve defects across multiple deployments.",
        "Queried and analyzed CPQ datasets with SQL, traced data flows, and surfaced edge cases that influenced feature prioritization for 10+ mid-market manufacturing clients.",
        "Refactored frontend components and API integration logic to improve data consistency and scalability using modular React patterns and defensive input handling.",
      ],
    },
    {
      company: "Dr. David Kane’s Research Lab (Harvard University)",
      title: "Lead Teaching & Research Assistant",
      dateRange: "May 2022 - May 2024",
      bullets: [
        "Co-authored a section of a peer-reviewed paper on quantitative data ethics, translating reproducibility standards into concrete engineering practices.",
        "Built reproducible workflows in Python and R (RStudio), transforming raw research inputs into validated, analysis-ready datasets.",
        "Wrote data cleaning + quality-check scripts for datasets with 11,800+ observations, implementing integrity checks to reduce downstream debugging.",
      ],
    },
  ],

  education: [
    {
      school: "Vanderbilt University",
      degree: "B.S. Computer Science & Economics (Chancellor’s Scholar)",
      dateRange: "May 2027",
      achievements: [
        "GPA: 4.0/4.0",
        "Activities: Men’s Rowing, Christian Fellowship, Research Assistant",
        "Coursework: Linear Algebra, Data Structures, Algorithms, OOP, Statistics",
      ],
    },
    {
      school: "The Ohio State University",
      degree: "Minor in Mathematics",
      dateRange: "",
      achievements: [
        "GPA: 3.95/4.0",
        "Coursework: Calculus I–III, Differential Equations, Finite Linear Math",
      ],
    },
  ],
};
