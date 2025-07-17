import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatBot from '../chatbot/ChatBot';

/**
 * Layout para páginas del dashboard
 * Incluye sidebar, contenido principal y chatbot integrado
 * Sin header ni footer para maximizar espacio de trabajo
 */
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido Principal */}
      <main className="flex-1 ml-64 min-h-screen relative">
        {/* Área de contenido */}
        <div className="p-6 pb-20">
          {children}
        </div>
        
        {/* ChatBot integrado */}
        <div className="fixed bottom-6 right-6 z-50">
          <ChatBot />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 