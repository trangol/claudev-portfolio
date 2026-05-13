import { Router } from 'express';
import { ProjectController } from '../controllers/ProjectController';

const router = Router();
const controller = new ProjectController();

router.get('/projects', controller.getAllProjects);
router.get('/projects/:id', controller.getProjectById);

export default router;
