import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatBot from '../chatbot/ChatBot';
import { useSidebar } from '../../contexts/SidebarContext';
import { Bars3Icon } from '@heroicons/react/24/outline';

/**
 * Layout para páginas del dashboard
 * Incluye sidebar responsive, contenido principal y chatbot integrado
 * Sin header ni footer para maximizar espacio de trabajo
 * Usa Outlet para renderizar rutas anidadas
 */
const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const { isOpen, toggleSidebar, closeSidebar, isMobile } = useSidebar();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Overlay para móvil */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido Principal */}
      <main className={`flex-1 min-h-screen relative transition-all duration-300 ${
        isOpen && !isMobile ? 'ml-64' : 'ml-0'
      }`}>
        {/* Header del contenido con botón de menú */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-800">
              {isAdminRoute ? 'Panel Administrativo' : 'Dashboard'}
            </h1>
          </div>
        </div>

        {/* Área de contenido */}
        <div className="p-6 pb-20">
          <Outlet />
        </div>
        
        {/* ChatBot integrado */}
        <div className={`fixed bottom-6 z-50 transition-all duration-300 ${
          isOpen && !isMobile ? 'right-6' : 'right-6'
        }`}>
          <ChatBot />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 