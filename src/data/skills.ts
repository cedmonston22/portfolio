import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiSupabase,
  SiFirebase,

  SiGit,
  SiExpo,
  SiVercel,

  SiMeta,
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { TbApi, TbBrain } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
    ],
  },
  {
    name: "AI / APIs",
    skills: [
      { name: "Gemini AI", icon: RiGeminiFill, color: "#8E75B2" },
      { name: "Groq AI", icon: TbApi, color: "#F55036" },
      { name: "Llama", icon: SiMeta, color: "#0082FB" },
      { name: "Claude AI", icon: TbBrain, color: "#D97757" },
      { name: "Claude Code", icon: TbBrain, color: "#D97757" },
      { name: "REST APIs", icon: TbApi, color: "#FFFFFF" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
    ],
  },
];
