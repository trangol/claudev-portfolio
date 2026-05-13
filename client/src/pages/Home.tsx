import { FC } from 'react';
import { Header } from '../components/Header';
import { ProjectGrid } from '../components/ProjectGrid';
import { Footer } from '../components/Footer';
import { useProjects } from '../hooks/useProjects';

export const Home: FC = () => {
  const { projects, loading, error, filter, setFilter } = useProjects();
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 glass-card hover:bg-white/20">Reintentar</button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Header activeFilter={filter} onFilterChange={setFilter} />
        <ProjectGrid projects={projects} loading={loading} />
        <Footer />
      </div>
    </div>
  );
};
