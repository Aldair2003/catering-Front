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
  const { isOpen, toggleSidebar, isMobile } = useSidebar();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido Principal */}
      <motion.div 
        className="flex-1 flex flex-col min-h-screen"
        animate={{ 
          marginLeft: (isOpen && !isMobile) ? 0 : 0,
          width: (isOpen && !isMobile) ? 'auto' : '100%'
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200,
          duration: 0.3
        }}
      >
        {/* Header del contenido con botón de menú */}
        <motion.div 
          className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"
          layout
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>

        {/* Área de contenido */}
        <motion.div 
          className="flex-1 p-6 pb-20"
          layout
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* ChatBot integrado */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          animate={{ 
            right: (isOpen && !isMobile) ? 24 : 24 
          }}
          transition={{ duration: 0.3 }}
        >
          <ChatBot />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardLayout; 