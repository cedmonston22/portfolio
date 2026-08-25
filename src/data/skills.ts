import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiSharp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiExpo,
  SiTailwindcss,
  SiVite,
  SiDocker,
  SiGooglecloud,
  SiRedis,
  SiElasticsearch,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { TbLambda, TbExchange } from "react-icons/tb";
import { SiPlaywright } from "./icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: SiOpenjdk },
      { name: "C#", icon: SiSharp },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Expo", icon: SiExpo },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    name: "Infrastructure & Tools",
    skills: [
      // No AWS brand marks in react-icons: TbLambda is the λ glyph AWS Lambda
      // itself uses; TbExchange stands in for Amazon MQ's message brokering.
      { name: "AWS Lambda", icon: TbLambda },
      { name: "Amazon MQ", icon: TbExchange },
      { name: "Playwright", icon: SiPlaywright },
      { name: "Docker", icon: SiDocker },
      { name: "Google Cloud Run", icon: SiGooglecloud },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    name: "Data",
    skills: [
      // Neon is managed Postgres, so the Postgres mark is the honest stand-in.
      { name: "Neon", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
];
