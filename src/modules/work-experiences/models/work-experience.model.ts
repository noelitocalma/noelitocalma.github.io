export interface WorkExperienceDetail {
  company: string;
  website: string;
  location: string;
  position: string;
  duration: string;
  responsibilities: string[],
  techStack: string[]
}

export interface WorkExperience {
  title: string;
  subtitle: string;
  details: WorkExperienceDetail[]
}