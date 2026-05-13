export interface TechStackItem {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export type ProjectPhase = 'production' | 'development' | 'proof_of_concept';
export type ProjectStatus = 'active' | 'archived' | 'maintenance';

export interface Project {
  id: string;
  name: string;
  description: string;
  objectives: string[];
  stack: TechStackItem[];
  phase: ProjectPhase;
  status: ProjectStatus;
  url?: string;
  imageUrl?: string;
  additionalInfo: Record<string, any>;
  getPhaseLabel: () => string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
}
