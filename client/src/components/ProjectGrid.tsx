import { FC } from 'react';
import { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps { projects: Project[]; loading?: boolean; }

export const ProjectGrid: FC<ProjectGridProps> = ({ projects, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="glass-card h-96 overflow-hidden" style={{ opacity: 0.6 }}>
            <div
              className="h-44 animate-pulse"
              style={{ background: 'rgba(0,255,136,0.04)', borderBottom: '1px solid var(--t-border)' }}
            />
            <div className="p-5 space-y-3">
              <div className="h-5 rounded animate-pulse" style={{ background: 'rgba(0,255,136,0.08)', width: '60%' }} />
              <div className="h-3 rounded animate-pulse" style={{ background: 'rgba(0,255,136,0.05)', width: '100%' }} />
              <div className="h-3 rounded animate-pulse" style={{ background: 'rgba(0,255,136,0.05)', width: '80%' }} />
              <div className="h-3 rounded animate-pulse" style={{ background: 'rgba(0,255,136,0.05)', width: '90%' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="glass-card text-center py-20 font-mono-term" style={{ color: 'var(--t-muted)' }}>
        <p style={{ fontSize: '0.9rem' }}>
          <span style={{ color: 'var(--t-green)' }}>$</span> find ./projects --phase="{'{filtro}'}" → 0 resultados
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
