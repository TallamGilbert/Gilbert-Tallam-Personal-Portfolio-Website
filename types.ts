
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: 'In Development' | 'Completed';
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}