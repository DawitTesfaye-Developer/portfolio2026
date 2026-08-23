export type Role = 'dev' | 'edtech' | 'sysadmin';

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillGroup {
  role: Role;
  title: string;
  subtitle: string;
  icon: string;
  skills: Skill[];
}

export interface Pillar {
  role: Role;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  stack: string[];
  points: string[];
}

export interface TimelineItem {
  role: Role;
  period: string;
  title: string;
  org: string;
  description: string;
  badge?: string;
  badgeIcon?: string;
}

export interface Project {
  title: string
  image: string
  description: string
  stack: string[]
  link: string   // 👈 add this line
}

export interface Certification {
  title: string;
  issuer: string;
  role: Role;
}
