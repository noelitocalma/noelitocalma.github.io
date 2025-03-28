export interface TechStackDetail {
  name: string;
  icon: string;
  level: number;
}

export interface TechStack {
  title: string;
  subtitle: string;
  details: TechStackDetail[]
}