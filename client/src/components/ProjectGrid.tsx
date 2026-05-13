import React from 'react';
import { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps { projects: Project[]; loading?: boolean; }

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1,2,3].map(i => <div key={i} className="glass-card h-96 animate-pulse"><div className="h-48 bg-white/5"></div><div className="p-6 space-y-4"><div className="h-6 bg-white/10 rounded w-3/4"></div><div className="h-4 bg-white/10 rounded w-full"></div><div className="h-4 bg-white/10 rounded w-5/6"></div></div></div>)}
      </div>
    );
  }
  if (projects.length === 0) return <div className="text-center py-20 glass-card"><p className="text-gray-400 text-lg">No se encontraron proyectos en esta categoría</p></div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
};
