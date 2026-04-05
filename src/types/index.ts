export interface Project {
  id: number;
  title: string;
  period: string;
  type: string;
  category: 'Web' | 'Mobile' | 'API';
  summary: string;
  highlights: string[];
  stack: string[];
  status: 'Completed' | 'In Progress';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  icon: string;
  name: string;
  desc: string;
}

export interface Certification {
  issuer: string;
  name: string;
  year?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  summary: string;
  school: string;
  schoolPeriod: string;
  degree: string;
  honors: string[];
}
