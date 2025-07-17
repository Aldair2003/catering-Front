import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout principal de la aplicación
 * Proporciona la estructura base con header, contenido y footer
 * 
 * @param children - Componentes hijos que se renderizan en el área principal
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header con navegación */}
      <Header />
      
      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 