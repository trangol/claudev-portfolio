import { FC, useState } from 'react';

const GITHUB_URL = 'https://github.com/trangol';

export const AboutSection: FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="glass-card animate-fade-in mb-12"
      style={{ overflow: 'hidden' }}
      aria-label="Sobre el desarrollador"
    >
      {/* Barra superior estilo terminal */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.55rem 1rem',
          borderBottom: '1px solid var(--t-border)',
          background: 'rgba(0,255,136,0.03)',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span
          style={{
            marginLeft: '0.5rem',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.65rem',
            color: 'var(--t-green-muted)',
            letterSpacing: '0.1em',
          }}
        >
          ~/about/claudio-gonzalez.md
        </span>
      </div>

      {/* Contenido principal */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '2rem',
          padding: '1.75rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* ── Foto de perfil ──────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '2px solid var(--t-border-hover)',
              boxShadow: '0 0 20px rgba(0,255,136,0.12), 0 0 0 4px rgba(0,255,136,0.05)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,255,136,0.04)',
              flexShrink: 0,
            }}
          >
            {!imgError ? (
              <img
                src="/images/claudio-profile.jpeg"
                alt="Claudio González – ClauDev"
                onError={() => setImgError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            ) : (
              /* Fallback: avatar con iniciales */
              <span
                className="font-mono-term font-bold gradient-text"
                style={{ fontSize: '2.2rem', userSelect: 'none' }}
              >
                CG
              </span>
            )}
          </div>

          {/* Links sociales */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.62rem',
                border: '1px solid var(--t-border)',
                color: 'var(--t-muted)',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--t-green-dim)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--t-green)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--t-border)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--t-muted)';
              }}
            >
              ⌥ github
            </a>
          </div>
        </div>

        {/* ── Bio y datos ─────────────────────────────────────────── */}
        <div style={{ minWidth: 0 }}>

          {/* Nombre y título */}
          <div style={{ marginBottom: '1rem' }}>
            <h2
              className="gradient-text font-mono-term font-bold"
              style={{ fontSize: '1.35rem', marginBottom: '0.2rem' }}
            >
              Claudio González
            </h2>
            <p
              className="font-mono-term"
              style={{ fontSize: '0.7rem', color: 'var(--t-green-muted)', letterSpacing: '0.15em' }}
            >
              // ingeniero electrónico · desarrollador de software · sielco.cl
            </p>
          </div>

          {/* Chips de datos personales */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.1rem' }}>
            {[
              { icon: '📍', label: 'Puerto Cisnes → Chile' },
              { icon: '👨‍👩‍👦‍👦', label: 'Casado · 2 hijos' },
              { icon: '⚡', label: 'Electrónica + Software' },
              { icon: '🤖', label: 'AI Copilot' },
            ].map(chip => (
              <span
                key={chip.label}
                className="font-mono-term"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '4px',
                  fontSize: '0.65rem',
                  border: '1px solid var(--t-border)',
                  color: 'var(--t-text)',
                  background: 'rgba(0,255,136,0.03)',
                  letterSpacing: '0.04em',
                }}
              >
                {chip.icon} {chip.label}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div
            style={{
              borderLeft: '2px solid var(--t-border-hover)',
              paddingLeft: '1rem',
              marginBottom: '1.1rem',
            }}
          >
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--t-text)',
                lineHeight: 1.75,
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Ingeniero electrónico sureño, criado en{' '}
              <span style={{ color: 'var(--t-green)' }}>Puerto Cisnes</span>, con una trayectoria
              que va desde PLCs, paneles de incendio y microcontroladores hasta arquitecturas de
              software modernas de alto nivel. Ama resolver los problemas de sus clientes
              transformando ideas en soluciones digitales robustas.
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--t-muted)',
                lineHeight: 1.75,
                marginTop: '0.65rem',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Hoy desarrollar es mucho más poderoso gracias al avance tecnológico y al uso de{' '}
              <span style={{ color: 'var(--t-cyan)' }}>inteligencia artificial</span> como
              copiloto en cada desafío, llevando las soluciones de sus clientes al siguiente nivel.
            </p>
          </div>

          {/* Stack expertise */}
          <div>
            <p
              className="font-mono-term"
              style={{ fontSize: '0.62rem', color: 'var(--t-green-muted)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}
            >
              expertise
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {[
                { name: 'PLC / SCADA', cat: 'other' },
                { name: 'React / Next.js', cat: 'frontend' },
                { name: 'Angular', cat: 'frontend' },
                { name: 'Node.js / NestJS', cat: 'backend' },
                { name: 'PostgreSQL', cat: 'database' },
                { name: 'Docker', cat: 'devops' },
                { name: 'TypeScript', cat: 'other' },
                { name: 'AI Copiloting', cat: 'other' },
              ].map(tech => (
                <span
                  key={tech.name}
                  className={`text-xs px-2 py-0.5 rounded font-mono-term chip-${tech.cat}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive: en móvil, colapsar a 1 columna */}
      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
