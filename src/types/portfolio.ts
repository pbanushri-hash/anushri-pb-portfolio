export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  category: 'ai-web' | '3d-games';
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasVerifiedRepo: boolean;
  awardBadge?: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issuedDate: string;
  credentialUrl?: string;
  skillsAcquired: string[];
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  focusAreas: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  project: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    description: string;
  }[];
}
