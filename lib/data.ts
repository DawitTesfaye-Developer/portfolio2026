import { Certification, Pillar, Project, SkillGroup, TimelineItem } from './types';
import Link from 'next/link';
export const roleMeta = {
  dev: { label: 'Full-Stack Dev', color: '#bf6a45', text: 'text-brand-400', icon: 'lucide:code-2' },
  edtech: { label: 'EdTech Specialist', color: '#3b82f6', text: 'text-edtech-400', icon: 'lucide:graduation-cap' },
  sysadmin: { label: 'System Admin', color: '#10b981', text: 'text-sysadmin-400', icon: 'lucide:server' }
} as const;

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Core Disciplines' },
  { value: null, text: '1st', suffix: '', label: 'Place LXD 2025' },
  { value: 4, suffix: '+', label: 'Certifications' }
];

export const pillars: Pillar[] = [
  {
    role: 'dev',
    title: 'Full-Stack Developer',
    tagline: 'Software',
    icon: 'lucide:code-2',
    description:
      'I architect and build complete web applications — from responsive frontends to robust, scalable backend APIs.',
    stack: ['React', 'Next.js', 'Laravel', 'TypeScript', 'Firebase'],
    points: [
      'Responsive, accessible UI',
      'RESTful APIs with Laravel & Node.js',
      'Firebase auth, real-time DB',
      'Performance-optimized builds'
    ]
  },
  {
    role: 'edtech',
    title: 'Digital Learning Content Developer',
    tagline: 'EdTech',
    icon: 'lucide:graduation-cap',
    description:
      'I design and develop engaging digital learning experiences that transform how people learn and retain knowledge.',
    stack: ['LXD', 'H5P', 'Kotobee', 'UI/UX'],
    points: ['LXD methodology', 'Interactive H5P modules', 'Digital course materials', '1st place LXD 2025, GIZ']
  },
  {
    role: 'sysadmin',
    title: 'System & Network Administrator',
    tagline: 'Infrastructure',
    icon: 'lucide:server',
    description:
      'I keep systems running — from configuring routers and switches to managing servers and ensuring data security.',
    stack: ['Linux', 'Networking', 'Docker', 'Nginx'],
    points: ['Routers, switches, VLANs', 'Server monitoring & tuning', 'Tier-1 & Tier-2 support', 'Multi-user security']
  }
];

export const skillGroups: SkillGroup[] = [
  {
    role: 'dev',
    title: 'Full-Stack Dev',
    subtitle: 'Software',
    icon: 'lucide:code-2',
    skills: [
      { name: 'React / Next.js', icon: 'simple-icons:react', level: 95 },
      { name: 'TypeScript', icon: 'simple-icons:typescript', level: 90 },
      { name: 'Laravel', icon: 'simple-icons:laravel', level: 92 },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', level: 95 },
      { name: 'Firebase', icon: 'simple-icons:firebase', level: 90 },
      { name: 'REST APIs', icon: 'lucide:plug', level: 93 },
      { name: 'React Native', icon: 'lucide:smartphone', level: 80 }
    ]
  },
  {
    role: 'edtech',
    title: 'EdTech & Design',
    subtitle: 'Learning',
    icon: 'lucide:graduation-cap',
    skills: [
      { name: 'LXD / Instructional Design', icon: 'lucide:book-open', level: 90 },
      { name: 'H5P', icon: 'lucide:puzzle', level: 85 },
      { name: 'UI/UX Design', icon: 'lucide:figma', level: 82 },
      { name: 'Kotobee', icon: 'lucide:book', level: 78 },
      { name: 'Content Strategy', icon: 'lucide:target', level: 88 }
    ]
  },
  {
    role: 'sysadmin',
    title: 'System Admin',
    subtitle: 'Infrastructure',
    icon: 'lucide:server',
    skills: [
      { name: 'Linux Administration', icon: 'simple-icons:linux', level: 90 },
      { name: 'Network Configuration', icon: 'lucide:network', level: 88 },
      { name: 'Docker / Containers', icon: 'simple-icons:docker', level: 80 },
      { name: 'Nginx / Web Servers', icon: 'lucide:globe', level: 85 },
      { name: 'Security & Monitoring', icon: 'lucide:shield', level: 82 }
    ]
  }
];

export const sharedTools = [
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'Figma', icon: 'simple-icons:figma' },
  { name: 'VS Code', icon: 'simple-icons:visualstudiocode' },
  { name: 'Postman', icon: 'simple-icons:postman' }
];

export const timeline: TimelineItem[] = [
  {
    role: 'edtech',
    period: 'Jan 2026 – Apr 2026',
    title: 'Digital Learning Content Developer Consultant',
    org: 'EdTech Hub ET',
    description:
      'Four-month consulting engagement developing digital learning content and applying educational technologies to support teaching and learning, with certified recognition for professionalism and creativity.',
    badge: 'Certified',
    badgeIcon: 'lucide:badge-check'
  },
  {
    role: 'dev',
    period: 'May 2025 – Feb 2026',
    title: 'Link Hunter',
    org: 'HorizoNova Company',
    description: 'Conducted outreach and digital linking strategies.'
  },
  {
    role: 'sysadmin',
    period: 'Apr 2024 – Present',
    title: 'System & Network Administrator',
    org: 'MTH MCH Center',
    description: 'Manage network infrastructure, servers. Provide tier-1/2 IT support.'
  },
  {
    role: 'dev',
    period: 'Apr 2024 – Feb 2025',
    title: 'Full Stack Developer',
    org: 'Freelance • Remote',
    description: 'Built apps with React, Next.js, and Laravel.'
  },
  {
    role: 'edtech',
    period: 'Dec 2024',
    title: 'Technical Lead, LXD Team || Training',
    org: 'LXD Academy – African Jobs Network',
    description: 'Led Team Philia. Won 1st place among 14 teams, GIZ recognized.',
    badge: '1st Place'
  },
  {
    role: 'dev',
    period: 'Jan 2024 – Mar 2024',
    title: 'Full Stack Developer || internship',
    org: 'Prodigy InfoTech',
    description: 'Delivered web solutions within tight timelines.'
  }
];

export const projects: Project[] = [
  {
    title: 'Addis Furniture',
    description: 'E-commerce website showcasing furniture products.',
    image: '/images/addis furniture.png',
    stack: ['React', 'Vite', 'Firebase', 'TypeScript'],
    link: 'https://addis-furniture.vercel.app/'
  },
  {
    title: 'Resume Developer',
    description: 'SaaS platform for job-ready developer resumes.',
    image: '/images/resume developer website.png',
    stack: ['React', 'Vite', 'Firebase', 'TypeScript'],
    link: '#'
  },
  {
    title: 'EthioTour',
    description: 'Modern, responsive travel website.',
    image: '/images/ethio-tour and travel.png',
    stack: ['React', 'Vite', 'Firebase', 'TypeScript'],
     link: 'https://ett-chi.vercel.app/'
  }
];

export const education = {
  degree: 'BSc in Computer Science',
  school: 'Madda Walabu University',
  period: '2021 – 2024 | GPA: 3.62'
};

export const certifications: Certification[] = [
  { title: 'Meta Frontend Developer Professional Certificate', issuer: 'Meta', role: 'dev' },
  { title: 'Learning Experience Designer(Certificate of completion', issuer: 'LXD Academy', role: 'edtech' },
  { title: 'DAAP Training Certificate', issuer: 'Infrastructure Program', role: 'dev' },
  { title: 'Junior Backend Development Certificate', issuer: 'Backend Program', role: 'dev' },
  { title: 'Certificate of Achievement – 1st Prize(Learning Experience Designer)', issuer: 'Dereja Academy', role: 'edtech' }
];

export const languages = [
  { flag: '🇪🇹', name: 'Afaan Oromo', level: 'Native' },
  { flag: '🇪🇹', name: 'Amharic', level: 'Professional' },
  { flag: '🇬🇧', name: 'English', level: 'Professional' }
];

export const contactMethods = [
  { icon: 'lucide:mail', label: 'Email', value: 'dawit6825@gmail.com', href: 'mailto:dawit6825@gmail.com' },
  { icon: 'lucide:phone', label: 'Phone', value: '+251 900 760 914', href: 'tel:+251900760914' },
  { icon: 'lucide:linkedin', label: 'LinkedIn', value: 'Connect', href: 'www.linkedin.com/in/dawit-tesfaye-hatau-60a17b311' },
  { icon: 'lucide:github', label: 'GitHub', value: 'View code', href: 'https://github.com/DawitTesfaye-Developer' }
];
