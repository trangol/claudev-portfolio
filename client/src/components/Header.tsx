import { FC } from 'react';
import { ProjectPhase } from '../types/project';

interface HeaderProps { activeFilter: ProjectPhase | undefined; onFilterChange: (filter: ProjectPhase | undefined) => void; }

const filters: { label: string; value: ProjectPhase | undefined }[] = [
  { label: 'Todos', value: undefined },
  { label: 'En Producción', value: 'production' },
  { label: 'En Desarrollo', value: 'development' },
  { label: 'Prueba Conceptual', value: 'proof_of_concept' },
];

export const Header: FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <header className="mb-12 animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">ClauDev</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Casos de éxito y proyectos que demuestran mi capacidad para transformar ideas en soluciones digitales robustas</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map(filter => (
          <button key={filter.label} onClick={() => onFilterChange(filter.value)}
            className={`px-5 py-2 rounded-full transition-all duration-200 ${activeFilter === filter.value ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' : 'glass-card text-gray-300 hover:bg-white/20'}`}>
            {filter.label}
          </button>
        ))}
      </div>
    </header>
  );
};
