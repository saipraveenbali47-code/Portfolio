import type {
  Certification,
  CodingProfile,
  FocusArea,
  Highlight,
  Opportunity,
  Profile,
  Project,
  Service,
  SkillGroup,
  Stat,
} from "./types";

export const profile: Profile = {
  name: "Bali Sai Praveen",
  shortName: "Sai Praveen",
  initials: "SP",
  tagline: "Software Engineer & Full-Stack MERN Developer",
  headerQuote: "Your future is built by what you do today, not what you plan tomorrow",
  location: "Vizianagaram, Andhra Pradesh, India",
  email: "saipraveenbali47@gmail.com",
  linkedin: "https://www.linkedin.com/in/bali-sai-praveen-cse-b8008934b",
  github: "https://github.com/saipraveenbali47-code",
  roles: [
    "Software Engineering Student",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Node.js & Express Specialist",
    "Java & DSA Problem Solver",
  ],
  intro:
    "Computer Science & Engineering undergraduate building scalable full-stack web applications with Node.js, Express, React, and MongoDB, with a strong foundation in Java Data Structures & Algorithms and TypeScript.",
  about: [
    "I am a Computer Science & Engineering student with a solid foundation in software engineering principles, a deep specialization in full-stack development, and an active focus on Data Structures & Algorithms. I approach problems with a product engineering mindset — focused on building scalable, maintainable, and user-centric systems rather than just writing code.",
    "My core strengths lie in designing RESTful APIs, structuring modular backends with Node.js & Express.js, architecting persistent data models in MongoDB with Mongoose, and crafting responsive, high-performance interfaces with React.js and TypeScript.",
    "I continuously refine my algorithmic problem-solving capabilities using Java, focusing on efficient time-and-space complexities and writing clean, scalable software architecture.",
  ],
};

export const stats: Stat[] = [
  { label: "Featured Projects", value: 3, suffix: "+" },
  { label: "Key Technologies", value: 10, suffix: "+" },
  { label: "Certifications", value: 2, suffix: "+" },
  { label: "Code Repositories", value: 12, suffix: "+" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Full-Stack Development",
    text: "Architecting end-to-end web applications across the MERN stack with modern React frontend architecture, state management, and responsive styling.",
    icon: "ri-window-line",
    skills: ["React.js", "TypeScript", "Vite", "HTML5/CSS3", "REST APIs"],
  },
  {
    number: "02",
    title: "Backend & API Architecture",
    text: "Structuring robust, modular server-side engines with Node.js and Express.js, featuring secure JWT authentication, password hashing with bcrypt, and middleware pipelines.",
    icon: "ri-server-line",
    skills: ["Node.js", "Express.js", "JWT", "bcrypt", "API Design"],
  },
  {
    number: "03",
    title: "Database Modeling & Management",
    text: "Designing schema models, indexing strategies, and CRUD operations with MongoDB and Mongoose for scalable, high-throughput persistence layers.",
    icon: "ri-database-2-line",
    skills: ["MongoDB", "Mongoose", "NoSQL", "Aggregation", "Data Validation"],
  },
  {
    number: "04",
    title: "DSA & Problem Solving",
    text: "Applying Java and algorithmic principles to solve complex problems efficiently, focusing on optimal time-and-space complexity on LeetCode and HackerRank.",
    icon: "ri-code-s-slash-line",
    skills: ["Java", "Data Structures", "Algorithms", "Optimization"],
  },
  {
    number: "05",
    title: "DevOps, Git & Tooling",
    text: "Employing Git version control, GitHub workflows, Postman API testing, and clean development environments in VS Code for streamlined delivery.",
    icon: "ri-terminal-box-line",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vite"],
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    icon: "ri-terminal-window-line",
    items: ["Java", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    group: "Frontend Development",
    icon: "ri-layout-masonry-line",
    items: ["React.js", "HTML5", "CSS3", "Vite", "Responsive Design", "DOM Manipulation"],
  },
  {
    group: "Backend & Databases",
    icon: "ri-hard-drive-2-line",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth", "bcrypt"],
  },
  {
    group: "Tools & DevOps",
    icon: "ri-tools-line",
    items: ["Git", "GitHub", "Postman", "VS Code", "npm / vite"],
  },
];

export const highlights: Highlight[] = [
  {
    title: "Full-Stack Delivery",
    text: "Independently designed and built end-to-end full-stack applications with modular architecture from database schemas to client interfaces.",
    icon: "ri-rocket-2-line",
  },
  {
    title: "Enterprise Security",
    text: "Implemented robust JWT authentication pipelines, salted bcrypt password encryption, and sanitized payload handlers in production MERN projects.",
    icon: "ri-shield-keyhole-line",
  },
  {
    title: "Engineering Foundation",
    text: "Strong conceptual foundation in Computer Science & Engineering, object-oriented design, and system architecture.",
    icon: "ri-award-line",
  },
  {
    title: "Continuous Upskilling",
    text: "Continuously mastering advanced Data Structures & Algorithms in Java, modern TypeScript idioms, and software system design.",
    icon: "ri-flashlight-line",
  },
];

export const certifications: Certification[] = [
  {
    title: "Java Online Course",
    issuer: "ScholarHat",
    text: "Comprehensive certification covering core object-oriented programming, exception handling, memory management, and Java standard library.",
    icon: "ri-medal-line",
  },
  {
    title: "Java with Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    text: "Extensive training in linear and non-linear data structures, searching, sorting, graph traversal, and dynamic programming in Java.",
    icon: "ri-code-box-line",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    tag: "MERN Stack Full Application",
    title: "MERN E-Commerce Platform",
    description:
      "A complete, production-ready full-stack e-commerce system where users explore catalogs, manage authenticated sessions, operate shopping carts, and submit orders backed by MongoDB.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Vite"],
    features: [
      "User authentication with JWT security & encrypted password hashing via bcrypt",
      "Dynamic catalog filtering and detailed product view breakdown",
      "Real-time stateful cart synchronization and persistent order checkout",
      "Modular MVC REST API architecture with dedicated controller layers",
    ],
    planned: ["Stripe / Razorpay payment gateway", "Admin inventory dashboard", "Live order status tracker"],
    repo: "https://github.com/saipraveenbali47-code/mern-ecommerce-app",
  },
  {
    number: "02",
    tag: "Full-Stack Web App",
    title: "MongoDB Interactive Quiz Application",
    description:
      "An interactive web quiz platform assessing database knowledge. Questions load dynamically via REST endpoints, scores calculate in real-time, and performance metrics are provided.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Dynamic question delivery and randomized item fetching over REST APIs",
      "Automated score tallying and performance feedback rating",
      "Full CRUD operations for administrative quiz question management",
      "Optimized schema design for fast retrieval and validation",
    ],
    planned: ["Timer-based speed challenges", "Global real-time leaderboard", "User performance breakdown analytics"],
    repo: "https://github.com/saipraveenbali47-code/MongoDB-Quiz-Application",
  },
  {
    number: "03",
    tag: "Frontend Web Application",
    title: "Dynamic Weather Application",
    description:
      "A sleek weather identification application delivering meteorological conditions and atmospheric readings with clean layout and responsive UI styling.",
    stack: ["HTML5", "CSS3", "JavaScript", "Vite"],
    features: [
      "Live weather condition indicators and temperature readings",
      "Responsive visual interface optimized for mobile and desktop viewports",
      "Clean semantic code structure and modular styling",
    ],
    planned: ["Multi-city search forecast", "Interactive weather radar map", "Geolocation weather detection"],
    repo: "https://github.com/saipraveenbali47-code/Weather-app",
  },
];

export const focus: FocusArea[] = [
  {
    label: "Currently Learning & Deepening",
    icon: "ri-book-open-line",
    items: ["TypeScript", "Advanced DSA in Java", "MERN Stack Optimization", "System Architecture"],
  },
  {
    label: "Actively Building",
    icon: "ri-hammer-line",
    items: ["Scalable Full-Stack Web Apps", "Robust REST APIs", "Database Persistence Layers"],
  },
  {
    label: "Actively Exploring",
    icon: "ri-compass-3-line",
    items: ["Microservices Architecture", "Scalable System Design", "Open Source Collaborations"],
  },
];

export const opportunities: Opportunity[] = [
  { name: "Software Engineering Internship", status: "Actively seeking" },
  { name: "Backend Development Roles", status: "Actively seeking" },
  { name: "MERN Stack Development", status: "Actively seeking" },
  { name: "Full Stack Development", status: "Actively seeking" },
  { name: "Open Source Contributions", status: "Exploring" },
];

export const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    url: "https://share.google/uu2O9yIvupelpd3j6",
    icon: "ri-code-box-fill",
    label: "Algorithmic Problem Solving",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/saipraveenbali47",
    icon: "ri-terminal-box-fill",
    label: "Coding & Proficiency Badges",
  },
  {
    name: "GitHub",
    url: "https://github.com/saipraveenbali47-code",
    icon: "ri-github-fill",
    label: "@saipraveenbali47-code",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bali-sai-praveen-cse-b8008934b",
    icon: "ri-linkedin-box-fill",
    label: "Bali Sai Praveen",
  },
];
