import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Lapisan partikel di belakang */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Konten utama di atas */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
