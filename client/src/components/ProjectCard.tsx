import { FC } from 'react';
import { Project } from '../types/project';
import { StatusBadge } from './StatusBadge';

interface ProjectCardProps { project: Project; }

const chipClass: Record<string, string> = {
  frontend: 'chip-frontend',
  backend:  'chip-backend',
  database: 'chip-database',
  devops:   'chip-devops',
  other:    'chip-other',
};

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const initial = project.name.charAt(0).toUpperCase();

  return (
    <div className="glass-card group hover:scale-[1.015] transition-all duration-300 overflow-hidden animate-fade-in flex flex-col">

      {/* ── Header visual ─────────────────── */}
      <div
        className="relative h-44 overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(0,0,0,0) 60%, rgba(0,229,255,0.04) 100%)',
          borderBottom: '1px solid var(--t-border)',
        }}
      >
        {/* Grid decorativo */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--t-border) 1px, transparent 1px), linear-gradient(90deg, var(--t-border) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }} />

        {/* Inicial estilo terminal */}
        <span
          className="font-mono-term font-bold select-none"
          style={{ fontSize: '5rem', color: 'var(--t-green)', opacity: 0.15, lineHeight: 1 }}
          aria-hidden="true"
        >
          {initial}
        </span>

        {/* ID del proyecto */}
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '1rem',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.65rem',
          color: 'var(--t-green-muted)',
          letterSpacing: '0.1em',
        }}>
          /{project.id}
        </div>

        {/* Botón visitar */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 font-mono-term opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              padding: '0.25rem 0.65rem',
              fontSize: '0.68rem',
              border: '1px solid var(--t-green-dim)',
              borderRadius: '4px',
              color: 'var(--t-green)',
              background: 'rgba(0,255,136,0.08)',
              letterSpacing: '0.06em',
            }}
          >
            → abrir
          </a>
        )}
      </div>

      {/* ── Contenido ─────────────────────── */}
      <div className="p-5 flex flex-col flex-1 gap-4">

        {/* Nombre + badge */}
        <div className="flex justify-between items-start gap-2">
          <h3
            className="gradient-text font-mono-term font-bold leading-tight"
            style={{ fontSize: '1.1rem' }}
          >
            {project.name}
          </h3>
          <StatusBadge phase={project.phase} />
        </div>

        {/* Descripción */}
        <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--t-muted)' }}>
          {project.description}
        </p>

        {/* Objetivos */}
        <div>
          <p className="section-label mb-2">objetivos</p>
          <ul className="space-y-1.5">
            {project.objectives.slice(0, 2).map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--t-text)' }}>
                <span style={{ color: 'var(--t-green)', fontFamily: 'monospace', flexShrink: 0 }}>✓</span>
                <span className="line-clamp-1">{obj}</span>
              </li>
            ))}
            {project.objectives.length > 2 && (
              <li className="text-xs font-mono-term" style={{ color: 'var(--t-muted)' }}>
                +{project.objectives.length - 2} más...
              </li>
            )}
          </ul>
        </div>

        {/* Stack */}
        <div className="mt-auto">
          <p className="section-label mb-2">stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className={`text-xs px-2 py-0.5 rounded font-mono-term ${chipClass[tech.category] ?? chipClass.other}`}
              >
                {tech.name}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="text-xs font-mono-term" style={{ color: 'var(--t-muted)' }}>
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Featured */}
        {project.additionalInfo?.featured && (
          <div
            className="pt-3 flex items-center gap-1.5 text-xs font-mono-term"
            style={{ borderTop: '1px solid var(--t-border)', color: 'var(--t-amber)' }}
          >
            <span>★</span> proyecto destacado
          </div>
        )}
      </div>
    </div>
  );
};
