export interface TechStackDetail {
  name: string;
  icon: string;
  level: number;
  svg?: boolean;
  png?: boolean;
}

export interface TechStack {
  title: string;
  subtitle: string;
  details: {
    category: string;
    items: TechStackDetail[]
  }[]
}