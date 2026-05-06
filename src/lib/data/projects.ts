export type ProjectType = 'software' 
    | 'game'
    | 'tool'
    | 'library';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number
  title: string;
  type: ProjectType;
  description: string;
  links: ProjectLink[];
}

export const projects: Project[] = [];