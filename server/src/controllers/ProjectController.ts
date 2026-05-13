import { Request, Response } from 'express';
import { ProjectService, IProjectService } from '../services/ProjectService';
import { logger } from '../config/logger';

export class ProjectController {
  private service: IProjectService;

  constructor(service?: IProjectService) {
    this.service = service || new ProjectService();
  }

  getAllProjects = (req: Request, res: Response): void => {
    try {
      const phase = req.query.phase as string;
      let projects;
      if (phase) {
        projects = this.service.getProjectsByPhase(phase);
      } else {
        projects = this.service.getAllProjects();
      }
      res.json({ success: true, data: projects, count: projects.length });
    } catch (error) {
      logger.error('Error fetching projects', error);
      res.status(500).json({ success: false, message: 'Error retrieving projects' });
    }
  };

  getProjectById = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const project = this.service.getProjectById(id);
      if (!project) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
      }
      res.json({ success: true, data: project });
    } catch (error) {
      logger.error(`Error fetching project ${req.params.id}`, error);
      res.status(500).json({ success: false, message: 'Error retrieving project' });
    }
  };
}
