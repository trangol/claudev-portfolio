import { FC } from 'react';
import { ProjectPhase } from '../types/project';

interface HeaderProps {
  activeFilter: ProjectPhase | undefined;
  onFilterChange: (filter: ProjectPhase | undefined) => void;
}

const filters: { label: string; value: ProjectPhase | undefined }[] = [
  { label: 'todos',       value: undefined },
  { label: 'producción',  value: 'production' },
  { label: 'desarrollo',  value: 'development' },
  { label: 'poc',         value: 'proof_of_concept' },
];

const PORTAL_URL = 'https://sielco.cl';
const SPCI_URL   = 'https://sielco.cl/spci';

const navLinkBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  padding: '0.28rem 0.75rem',
  borderRadius: '4px',
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.06em',
  textDecoration: 'none',
  transition: 'all 0.2s',
};

export const Header: FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <>
      {/* ── Navbar superior ─────────────────────────────────────── */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 1.75rem',
        background: 'rgba(5,5,5,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,255,136,0.12)',
      }}>
        {/* Logo SIELCO */}
        <a
          href={PORTAL_URL}
          style={{
            fontWeight: 900,
            fontSize: '1.05rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            background: 'linear-gradient(100deg, #FF6B2B 0%, #fff 50%, #00BFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
          }}
          aria-label="Volver al portal SIELCO"
        >
          SIELCO
        </a>

        {/* Links de navegación */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href={SPCI_URL}
            style={{
              ...navLinkBase,
              background: 'rgba(255,107,43,0.1)',
              color: '#ff9f5a',
              border: '1px solid rgba(255,107,43,0.22)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,43,0.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,43,0.1)'; }}
          >
            🔥 spci
          </a>
          <a
            href={PORTAL_URL}
            style={{
              ...navLinkBase,
              background: 'rgba(0,255,136,0.06)',
              color: 'rgba(0,255,136,0.6)',
              border: '1px solid rgba(0,255,136,0.14)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--t-green)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,255,136,0.6)'; }}
          >
            ← portal
          </a>
        </div>
      </nav>

      {/* ── Header principal ────────────────────────────────────── */}
      <header className="mb-12 animate-slide-up" style={{ paddingTop: '5.5rem' }}>

        {/* Título */}
        <div className="text-center mb-10">
          <div
            className="font-mono-term mb-2"
            style={{ fontSize: '0.75rem', color: 'var(--t-green-muted)', letterSpacing: '0.2em' }}
          >
            ~/portafolio
          </div>
          <h1
            className="gradient-text font-mono-term font-bold mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          >
            ClauDev
            <span
              style={{
                display: 'inline-block',
                width: '0.06em',
                height: '0.85em',
                background: 'var(--t-green)',
                marginLeft: '4px',
                verticalAlign: 'middle',
                animation: 'blink 1.1s step-end infinite',
              }}
              aria-hidden="true"
            />
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--t-muted)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.02em' }}
          >
            // casos de éxito y proyectos que demuestran capacidad<br />
            // para transformar ideas en soluciones digitales robustas
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => {
            const active = activeFilter === filter.value;
            return (
              <button
                key={filter.label}
                onClick={() => onFilterChange(filter.value)}
                className="font-mono-term transition-all duration-200"
                style={{
                  padding: '0.3rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  border: active ? '1px solid var(--t-green)' : '1px solid var(--t-border)',
                  background: active ? 'rgba(0,255,136,0.12)' : 'transparent',
                  color: active ? 'var(--t-green)' : 'var(--t-muted)',
                  cursor: 'pointer',
                  boxShadow: active ? '0 0 10px rgba(0,255,136,0.15)' : 'none',
                }}
              >
                {active ? '> ' : ''}{filter.label}
              </button>
            );
          })}
        </div>
      </header>
    </>
  );
};
