import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout principal de la aplicación
 * Proporciona la estructura base con header, contenido y footer
 * Usa Outlet para renderizar rutas anidadas
 */
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header con navegación */}
      <Header />
      
      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 