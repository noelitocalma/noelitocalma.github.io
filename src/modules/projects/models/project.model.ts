export interface ProjectDetail {
  name: string;
  techStack: string[];
  description: string;
  year: string;
  moreInfo: string;
  contributions: string[]
}

export interface Project {
  title: string;
  subtitle: string;
  details: ProjectDetail[]
}