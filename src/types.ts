export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  tagline: string;
  headerQuote: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  roles: string[];
  intro: string;
  about: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

export interface Service {
  number: string;
  title: string;
  text: string;
  icon: string;
  skills: string[];
}

export interface SkillGroup {
  group: string;
  icon: string;
  items: string[];
}

export interface Highlight {
  title: string;
  text: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  text: string;
  icon: string;
}

export interface Project {
  number: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  planned: string[];
  repo: string;
  demo?: string;
}

export interface FocusArea {
  label: string;
  icon: string;
  items: string[];
}

export interface Opportunity {
  name: string;
  status: "Actively seeking" | "Exploring";
}

export interface CodingProfile {
  name: string;
  url: string;
  icon: string;
  label: string;
}
