// All portfolio content comes from the resume. Edit here, not in components.
export const profile = {
  name: "Abhishek Yadav",
  first: "Abhishek",
  last: "Yadav",
  initials: "AY",
  role: "Frontend Developer",
  summary:
    "Frontend Developer with 2+ years of experience building production-grade, high-performance web applications across Real Estate and EdTech domains, with a focus on performance, scalability, maintainability and responsive user experiences.",
  email: "abhisyadav11@gmail.com",
  phone: "+91 7499356892",
};

export const stats = [
  { to: 2, suffix: "+", label: "Years of experience" },
  { to: 3, suffix: "", label: "Companies" },
  { to: 2, suffix: "", label: "Domains: Real Estate & EdTech" },
];

export const strengths = [
  { icon: "layers", text: "Component architecture and reusable UI" },
  { icon: "workflow", text: "State management and data fetching with Redux and TanStack Query" },
  { icon: "shield", text: "Authentication, authorization and role-based access" },
  { icon: "gauge", text: "Performance: code splitting, caching, debouncing and API optimisation" },
  { icon: "smartphone", text: "Responsive, mobile-first interfaces" },
] as const;

export const skills = [
  { icon: "braces", title: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  {
    icon: "layout",
    title: "Frontend",
    items: ["HTML", "Tailwind CSS", "ReactJS", "Redux Toolkit", "React Router", "TanStack Query", "Axios", "Formik", "Bootstrap"],
  },
  {
    icon: "server",
    title: "Backend",
    items: ["NodeJS", "ExpressJS", "NestJS", "JWT", "RabbitMQ", "WebSocket", "RESTful APIs", "Microservices Architecture", "Redis", "GraphQL"],
  },
  { icon: "database", title: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { icon: "shield", title: "Auth & Cloud", items: ["Okta", "AWS Cognito", "AWS Amplify", "Role-based access"] },
  { icon: "wrench", title: "Tools & Practices", items: ["Git", "GitHub", "Postman", "Swagger", "Jest", "Docker", "CI/CD", "Figma to code"] },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Centralogic Consultancy Pvt. Ltd.",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Built scalable, production-ready frontend applications with React and TypeScript, contributing to core business logic, API integration and end-to-end feature delivery.",
      "Developed responsive, reusable UI components and integrated RESTful APIs using Axios and TanStack Query for efficient, reliable data handling.",
      "Implemented centralised Redux state management, authentication, authorization and role-based access using Okta, Cognito and AWS Amplify.",
      "Improved responsiveness through efficient rendering, API optimisation, code splitting and a reusable component architecture.",
    ],
    tech: ["React", "TypeScript", "Redux", "TanStack Query", "Axios", "Okta", "Cognito", "AWS Amplify"],
  },
  {
    role: "Associate Software Developer",
    company: "Tekhnologia Innovations India Pvt. Ltd.",
    period: "Dec 2024 – Jul 2025",
    current: false,
    points: [
      "Designed and developed responsive interfaces in React.js, handling complex role-based workflows and business requirements.",
      "Managed state with Redux and fetched data with TanStack Query, using pagination and caching to improve performance.",
      "Integrated RESTful APIs with Axios and optimised search with debouncing to cut unnecessary API calls.",
      "Built dynamic, validated forms with Formik and used React Hooks extensively for state and side effects.",
      "Delivered mobile-first, consistent UIs across devices using Tailwind CSS and Bootstrap.",
    ],
    tech: ["React.js", "Redux", "TanStack Query", "Formik", "Tailwind CSS", "Bootstrap"],
  },
  {
    role: "Web Developer Intern",
    company: "Exec Software Solutions, Karad",
    period: "Jan 2022 – Jun 2022",
    current: false,
    points: [
      "Developed and maintained responsive web pages with HTML, CSS and JavaScript.",
      "Worked with the design team to translate Figma designs into responsive, consistent web pages.",
      "Debugged frontend issues across browsers and devices to ensure cross-browser compatibility.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
  },
] as const;

export const project = {
  tag: "MERN Stack",
  title: "YouTube Feature Implementation",
  description:
    "A YouTube-like application built with React and the YouTube API, with dynamic video search, playback and comments.",
  points: [
    "Implemented Redux caching and debounced search to reduce API calls and improve performance.",
    "Added React Router, a trending video feed and a responsive UI with Tailwind CSS.",
  ],
  tech: ["React", "Redux", "React Router", "Tailwind CSS", "YouTube API"],
};

export const education = {
  period: "2022 – 2024",
  degree: "Master of Computer Science (M.Sc. CS)",
  school: "Pune Vidyarthi Griha's College of Science & Commerce, Pune",
  score: "8.3",
};

// The resume lists no certifications. Add entries here and the section renders them.
export const certifications: { title: string; issuer: string; year?: string }[] = [];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
