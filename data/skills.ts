import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", icon: "☕", level: 80 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "JavaScript", icon: "⚡", level: 85 },
      { name: "PHP", icon: "🐘", level: 88 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "🏗️", level: 90 },
      { name: "CSS", icon: "🎨", level: 88 },
      { name: "Angular", icon: "⚙️", level: 82 },
      { name: "Bootstrap 5", icon: "🅱️", level: 85 },
      { name: "Tailwind CSS", icon: "🌊", level: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "PHP", icon: "🐘", level: 88 },
      { name: "Python Flask", icon: "🏺", level: 82 },
      { name: "REST APIs", icon: "🔌", level: 85 },
      { name: "Server Architecture", icon: "🏛️", level: 78 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: "🗄️", level: 85 },
      { name: "Query Optimization", icon: "⚡", level: 80 },
      { name: "Database Design", icon: "📊", level: 82 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "🔀", level: 85 },
      { name: "VS Code", icon: "💻", level: 90 },
      { name: "XAMPP", icon: "🚀", level: 80 },
      { name: "Apache", icon: "🔧", level: 75 },
    ],
  },
  {
    name: "CS Fundamentals",
    skills: [
      { name: "Data Structures", icon: "🧩", level: 80 },
      { name: "Algorithms", icon: "📐", level: 78 },
      { name: "DBMS", icon: "📚", level: 82 },
      { name: "Operating Systems", icon: "⚙️", level: 75 },
      { name: "Computer Networks", icon: "🌐", level: 76 },
    ],
  },
];
