import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
      <p>© {currentYear} ClauDev - Desarrollado con ❤️ usando React, Node.js y Docker</p>
      <p className="mt-2"><a href="https://sielco.cl" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">sielco.cl</a></p>
    </footer>
  );
};
