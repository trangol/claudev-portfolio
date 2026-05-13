import { FC } from 'react';
import { ProjectPhase } from '../types/project';

interface HeaderProps { activeFilter: ProjectPhase | undefined; onFilterChange: (filter: ProjectPhase | undefined) => void; }

const filters: { label: string; value: ProjectPhase | undefined }[] = [
  { label: 'Todos', value: undefined },
  { label: 'En Producción', value: 'production' },
  { label: 'En Desarrollo', value: 'development' },
  { label: 'Prueba Conceptual', value: 'proof_of_concept' },
];

const PORTAL_URL = 'https://sielco.cl';
const SPCI_URL   = 'https://sielco.cl/spci';

export const Header: FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <>
      {/* ── Barra de navegación superior ── */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.75rem',
        background: 'rgba(15, 10, 30, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {/* Logo SIELCO → vuelve al portal */}
        <a
          href={PORTAL_URL}
          style={{
            fontWeight: 900,
            fontSize: '1.1rem',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={SPCI_URL}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'rgba(255,107,43,0.12)',
              color: '#FF9F5A',
              border: '1px solid rgba(255,107,43,0.25)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,43,0.22)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,43,0.12)';
            }}
          >
            🔥 SPCI
          </a>
          <a
            href={PORTAL_URL}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)';
            }}
          >
            ← Portal
          </a>
        </div>
      </nav>

      {/* ── Header principal (empuja por el navbar fijo) ── */}
      <header className="mb-12 animate-slide-up" style={{ paddingTop: '5rem' }}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">ClauDev</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Casos de éxito y proyectos que demuestran mi capacidad para transformar
            ideas en soluciones digitales robustas
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map(filter => (
            <button
              key={filter.label}
              onClick={() => onFilterChange(filter.value)}
              className={`px-5 py-2 rounded-full transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'glass-card text-gray-300 hover:bg-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>
    </>
  );
};
