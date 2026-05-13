import { Project } from '../../models/Project';

export interface IProjectDecorator {
  decorate(project: Project): Project;
}

export class EnhancedInfoDecorator implements IProjectDecorator {
  decorate(project: Project): Project {
    return new Project(
      project.id,
      project.name,
      project.description,
      project.objectives,
      project.stack,
      project.phase,
      project.status,
      project.url,
      project.imageUrl,
      {
        ...project.additionalInfo,
        lastUpdated: new Date().toISOString(),
        featured: this.isFeatured(project),
        estimatedCompletion: this.getEstimatedCompletion(project.phase)
      }
    );
  }

  private isFeatured(project: Project): boolean {
    return project.phase === 'production';
  }

  private getEstimatedCompletion(phase: string): string | null {
    if (phase === 'development') return 'Q3 2025';
    if (phase === 'proof_of_concept') return 'En evaluación';
    return null;
  }
}

export class MetricsDecorator implements IProjectDecorator {
  decorate(project: Project): Project {
    return new Project(
      project.id,
      project.name,
      project.description,
      project.objectives,
      project.stack,
      project.phase,
      project.status,
      project.url,
      project.imageUrl,
      {
        ...project.additionalInfo,
        techComplexity: this.calculateComplexity(project.stack),
        linesOfCode: '~15K',
        contributors: 1
      }
    );
  }

  private calculateComplexity(stack: any[]): string {
    const count = stack.length;
    if (count > 6) return 'Alta';
    if (count > 3) return 'Media';
    return 'Baja';
  }
}
