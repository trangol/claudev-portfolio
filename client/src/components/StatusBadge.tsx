import { FC } from 'react';
import { ProjectPhase } from '../types/project';

interface StatusBadgeProps { phase: ProjectPhase; }

const phaseConfig: Record<ProjectPhase, { label: string; bgColor: string; icon: string }> = {
  production: { label: 'En Producción', bgColor: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300', icon: '🚀' },
  development: { label: 'En Desarrollo', bgColor: 'bg-blue-500/20 border-blue-400/30 text-blue-300', icon: '⚙️' },
  proof_of_concept: { label: 'Prueba Conceptual', bgColor: 'bg-amber-500/20 border-amber-400/30 text-amber-300', icon: '🧪' },
};

export const StatusBadge: FC<StatusBadgeProps> = ({ phase }) => {
  const config = phaseConfig[phase];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${config.bgColor}`}>
      <span>{config.icon}</span><span>{config.label}</span>
    </span>
  );
};
