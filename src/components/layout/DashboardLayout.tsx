import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatBot from '../chatbot/ChatBot';
import { useSidebar } from '../../contexts/SidebarContext';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const { toggleSidebar, isMobile } = useSidebar();

  // Función para obtener el título basado en la ruta
  const getPageTitle = (pathname: string): string => {
    const routeTitles: Record<string, string> = {
      // Rutas de cliente
      '/dashboard': 'Dashboard',
      '/menu': 'Nuestro Menú',
      '/orders': 'Mis Pedidos',
      '/cart': 'Carrito de Compras',
      '/profile': 'Mi Perfil',
      
      // Rutas de admin
      '/admin': 'Panel Administrativo',
      '/admin/clients': 'Gestión de Clientes',
      '/admin/inventory': 'Inventario',
      '/admin/delivery': 'Entregas y Logística',
      '/admin/metrics': 'Métricas y Reportes'
    };

    // Buscar coincidencia exacta primero
    if (routeTitles[pathname]) {
      return routeTitles[pathname];
    }

    // Si no hay coincidencia exacta, buscar por patrones
    if (pathname.startsWith('/admin')) {
      return 'Panel Administrativo';
    }

    // Retornar título por defecto
    return 'PortoCatering';
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col min-h-screen">
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
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Área de contenido */}
        <div className="flex-1 p-6 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* ChatBot integrado */}
        <div className="fixed bottom-6 right-6 z-50">
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 