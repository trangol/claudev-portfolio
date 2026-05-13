import { FC } from 'react';
import { Project } from '../types/project';
import { StatusBadge } from './StatusBadge';

interface ProjectCardProps { project: Project; }

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const getStackCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: 'bg-cyan-500/20 text-cyan-300',
      backend: 'bg-purple-500/20 text-purple-300',
      database: 'bg-green-500/20 text-green-300',
      devops: 'bg-orange-500/20 text-orange-300',
      other: 'bg-gray-500/20 text-gray-300',
    };
    return colors[category] || colors.other;
  };

  return (
    <div className="glass-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-fade-in">
      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">{project.name.charAt(0)}</span>
        </div>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer"
             className="absolute bottom-3 right-3 glass-card px-3 py-1.5 text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
            🔗 Visitar
          </a>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold gradient-text">{project.name}</h3>
          <StatusBadge phase={project.phase} />
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Objetivos clave</h4>
          <ul className="space-y-1">
            {project.objectives.slice(0, 2).map((obj, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2"><span className="text-cyan-400">✓</span><span className="line-clamp-1">{obj}</span></li>
            ))}
            {project.objectives.length > 2 && <li className="text-xs text-gray-400">+{project.objectives.length - 2} más</li>}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className={`text-xs px-2 py-1 rounded-full ${getStackCategoryColor(tech.category)}`}>{tech.name}</span>
            ))}
            {project.stack.length > 4 && <span className="text-xs text-gray-400">+{project.stack.length - 4}</span>}
          </div>
        </div>
        {project.additionalInfo?.featured && (
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-amber-300 flex items-center gap-1"><span>⭐</span> Proyecto destacado</div>
        )}
      </div>
    </div>
  );
};
