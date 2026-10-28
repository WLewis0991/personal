export const site = {
  name: "Will Lewis",
  handle: "WLewis0991",
  role: "Full-stack engineer",
  location: "Los Angeles, California",
  email: "lewis.william0991@gmail.com",
  github: "https://github.com/WLewis0991",
  avatar: {
    src: "/assets/selfie.webp",
    alt: "Will Lewis",
    width: 600,
    height: 600,
  },
} as const;

export const techStack = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Socket.IO",
] as const;

export type Project = {
  name: string;
  description: string;
  tech: string;
  href: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const projects: Project[] = [
  {
    name: "GolfCore",
    description:
      "A golf handicap tracking system that calculates slope using the official PGA / USGA handicap methodology.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/GolfCore",
    image: {
      src: "/assets/golf-core-screenshot.png",
      alt: "GolfCore handicap tracker landing page",
      width: 1335,
      height: 717,
    },
  },
  {
    name: "anatomy",
    description:
      "Turns any GitHub repo into an interactive dependency map by parsing real code to analyze structure, trace imports, and explain modules.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/anatomy",
    image: {
      src: "/assets/anatomy-screenshot.png",
      alt: "Anatomy repository dependency map",
      width: 1897,
      height: 954,
    },
  },
  {
    name: "ShelfAware",
    description:
      "Application that summarizes and answers questions about any uploaded book using AI.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/ShelfAware",
    image: {
      src: "/assets/shelf-aware-screenshot.png",
      alt: "ShelfAware library dashboard",
      width: 1887,
      height: 940,
    },
  },
  {
    name: "RandomRep",
    description: "Gym application that uses AI to create a custom plan for users.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/RandomRep",
    image: {
      src: "/assets/random-rep-screenshot.png",
      alt: "RandomRep AI training plan landing page",
      width: 1890,
      height: 936,
    },
  },
  {
    name: "linkup",
    description: "Real-time chat application built with React and Socket.IO.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/linkup",
    image: {
      src: "/assets/link-up-screenshot.png",
      alt: "LinkUp real-time chat welcome screen",
      width: 1912,
      height: 960,
    },
  },
  {
    name: "Rabbit-Hole",
    description: "A Reddit clone built using Next.js.",
    tech: "TypeScript",
    href: "https://github.com/WLewis0991/Rabbit-Hole",
    image: {
      src: "/assets/rabbithole-screenshot.png",
      alt: "Rabbit-Hole community feed",
      width: 1907,
      height: 892,
    },
  },
];
