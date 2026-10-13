import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiSharp,
  SiC,
  SiPytorch,
  SiOpencv,
  SiUltralytics,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiExpo,
  SiTailwindcss,
  SiPandas,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiRos,
  SiGooglecloud,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";
import { TbSql, TbDrone, TbCube3dSphere, TbBrandAws } from "react-icons/tb";
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
      { name: "C", icon: SiC },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Ultralytics YOLO", icon: SiUltralytics },
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Expo", icon: SiExpo },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Playwright", icon: SiPlaywright },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "ROS 2", icon: SiRos },
      { name: "PX4", icon: TbDrone },
      { name: "Gazebo", icon: TbCube3dSphere },
      { name: "AWS", icon: TbBrandAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
];
