export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnailUrl: string;
  results: Result[];
  tools: string[];
  date: string;
  featured: boolean;
}

export interface Result {
  metric: string;
  value: string;
  description: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 1-5
  icon: string;
}