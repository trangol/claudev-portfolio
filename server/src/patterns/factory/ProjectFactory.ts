import { Project } from '../../models/Project';
import { ProjectBuilder } from '../builder/ProjectBuilder';
import { ProjectPhase, TechStackItem } from '../../models/Project';

export interface IProjectFactory {
  createFromRaw(data: Record<string, any>): Project;
  createBatch(rawList: Record<string, any>[]): Project[];
}

export class ProjectFactory implements IProjectFactory {
  createFromRaw(data: Record<string, any>): Project {
    const builder = new ProjectBuilder();
    
    builder
      .setId(data.id)
      .setName(data.name)
      .setDescription(data.description || '')
      .setObjectives(data.objectives || [])
      .setStack(data.stack || [])
      .setPhase(this.parsePhase(data.phase))
      .setStatus(data.status || 'active')
      .setUrl(data.url)
      .setImageUrl(data.imageUrl);
    
    if (data.additionalInfo) {
      builder.setAdditionalInfo(data.additionalInfo);
    }
    
    return builder.build();
  }

  createBatch(rawList: Record<string, any>[]): Project[] {
    return rawList.map(raw => this.createFromRaw(raw));
  }

  private parsePhase(phase: string): ProjectPhase {
    const validPhases: ProjectPhase[] = ['production', 'development', 'proof_of_concept'];
    if (phase && validPhases.includes(phase as ProjectPhase)) {
      return phase as ProjectPhase;
    }
    return 'development';
  }
}
