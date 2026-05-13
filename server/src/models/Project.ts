export type ProjectPhase = 'production' | 'development' | 'proof_of_concept';
export type ProjectStatus = 'active' | 'archived' | 'maintenance';

export interface TechStackItem {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export class Project {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly objectives: string[],
    public readonly stack: TechStackItem[],
    public readonly phase: ProjectPhase,
    public readonly status: ProjectStatus,
    public readonly url?: string,
    public readonly imageUrl?: string,
    public additionalInfo: Record<string, any> = {}
  ) {}

  getPhaseLabel(): string {
    const labels = {
      production: 'En Producción',
      development: 'En Desarrollo',
      proof_of_concept: 'Prueba Conceptual'
    };
    return labels[this.phase];
  }
}
