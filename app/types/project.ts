export interface Project {
  id: number;
  category: string;
  title: string;
  size: "large" | "small";
  image: string;

  // Detail view fields
  description: string;
  longDescription: string;
  techStack: string[];
  functionality: string[];
  features: string[];
  slideImage: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  role?: string;
}
