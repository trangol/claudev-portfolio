import { FC } from 'react';
import { ProjectPhase } from '../types/project';

interface StatusBadgeProps { phase: ProjectPhase; }

const phaseConfig: Record<ProjectPhase, { label: string; style: React.CSSProperties }> = {
  production: {
    label: 'producción',
    style: {
      background: 'rgba(0,255,136,0.1)',
      color: '#00ff88',
      border: '1px solid rgba(0,255,136,0.3)',
    },
  },
  development: {
    label: 'desarrollo',
    style: {
      background: 'rgba(0,229,255,0.1)',
      color: '#00e5ff',
      border: '1px solid rgba(0,229,255,0.3)',
    },
  },
  proof_of_concept: {
    label: 'poc',
    style: {
      background: 'rgba(255,214,0,0.1)',
      color: '#ffd600',
      border: '1px solid rgba(255,214,0,0.3)',
    },
  },
};

export const StatusBadge: FC<StatusBadgeProps> = ({ phase }) => {
  const { label, style } = phaseConfig[phase];
  return (
    <span
      style={{
        ...style,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        padding: '0.15rem 0.55rem',
        borderRadius: '4px',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.65rem',
        fontWeight: 500,
        letterSpacing: '0.06em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: '0.5rem' }}>●</span>
      {label}
    </span>
  );
};
