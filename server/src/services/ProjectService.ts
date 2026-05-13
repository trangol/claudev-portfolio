import { Project } from '../models/Project';
import { ProjectRepository, IProjectRepository } from '../repositories/ProjectRepository';
import { eventBus } from '../patterns/observer/EventManager';
import { EnhancedInfoDecorator, MetricsDecorator } from '../patterns/decorator/ProjectDecorator';
import { logger } from '../config/logger';

export interface IProjectService {
  getAllProjects(): Project[];
  getProjectById(id: string): Project | undefined;
  getProjectsByPhase(phase: string): Project[];
}

export class ProjectService implements IProjectService {
  private repository: IProjectRepository;
  private enhancedDecorator: EnhancedInfoDecorator;
  private metricsDecorator: MetricsDecorator;

  constructor(repository?: IProjectRepository) {
    this.repository = repository || new ProjectRepository();
    this.enhancedDecorator = new EnhancedInfoDecorator();
    this.metricsDecorator = new MetricsDecorator();
    
    eventBus.subscribe('projects:fetched', (data) => {
      logger.info(`Projects fetched: ${data.count} projects returned`);
    });
  }

  getAllProjects(): Project[] {
    const projects = this.repository.findAll();
    const enhancedProjects = projects.map(project => {
      let decorated = this.enhancedDecorator.decorate(project);
      decorated = this.metricsDecorator.decorate(decorated);
      return decorated;
    });
    eventBus.notify('projects:fetched', { count: enhancedProjects.length });
    return enhancedProjects;
  }

  getProjectById(id: string): Project | undefined {
    const project = this.repository.findById(id);
    if (project) {
      let decorated = this.enhancedDecorator.decorate(project);
      decorated = this.metricsDecorator.decorate(decorated);
      eventBus.notify('project:fetched', { id, name: project.name });
      return decorated;
    }
    return undefined;
  }

  getProjectsByPhase(phase: string): Project[] {
    const projects = this.repository.findByPhase(phase);
    return projects.map(project => {
      let decorated = this.enhancedDecorator.decorate(project);
      decorated = this.metricsDecorator.decorate(decorated);
      return decorated;
    });
  }
}
