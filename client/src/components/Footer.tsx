import { FC } from 'react';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-20 pt-8 text-center font-mono-term"
      style={{ borderTop: '1px solid var(--t-border)', color: 'var(--t-muted)', fontSize: '0.75rem', letterSpacing: '0.05em' }}
    >
      <p>
        <span style={{ color: 'var(--t-green)' }}>©</span>{' '}
        {year} ClauDev{' '}
        <span style={{ color: 'var(--t-border-hover)' }}>|</span>{' '}
        React · Node.js · TypeScript · Docker
      </p>
      <p className="mt-2">
        <a
          href="https://sielco.cl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--t-green-dim)', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-green)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-green-dim)')}
        >
          ↑ sielco.cl
        </a>
      </p>
    </footer>
  );
};
