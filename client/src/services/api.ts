import axios from 'axios';
import { Project, ApiResponse } from '../types/project';

const api = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } });

export const projectService = {
  getAllProjects: async (phase?: string): Promise<Project[]> => {
    const url = phase ? `/projects?phase=${phase}` : '/projects';
    const response = await api.get<ApiResponse<Project[]>>(url);
    return response.data.data;
  },
  getProjectById: async (id: string): Promise<Project> => {
    const response = await api.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data.data;
  },
};
