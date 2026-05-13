import { useState, useEffect, useCallback } from 'react';
import { projectService } from '../services/api';
import { Project, ProjectPhase } from '../types/project';

export const useProjects = (initialPhase?: ProjectPhase) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<ProjectPhase | undefined>(initialPhase);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectService.getAllProjects(filter);
      setProjects(data);
    } catch (err) {
      setError('Error al cargar los proyectos. Por favor, intenta nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);
  return { projects, loading, error, filter, setFilter, refetch: fetchProjects };
};
