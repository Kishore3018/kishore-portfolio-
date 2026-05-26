export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  challenges: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export type Skill = {
  name: string;
  icon: string;
  level?: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
};

export type Achievement = {
  title: string;
  description: string;
  date?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
