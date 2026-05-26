/**
 * Central data exports
 * Import from this file instead of individual data files
 */

export { projects } from "./projects";
export { skillCategories } from "./skills";
export { certifications } from "./certifications";
export { achievements } from "./achievements";
export {
  socialLinks,
  personalInfo,
  navigation,
} from "./personal";

export type { Project, Skill, SkillCategory, Certificate, Achievement, SocialLink } from "@/types";
