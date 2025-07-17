import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  ClipboardDocumentListIcon, 
  UserIcon, 
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  UsersIcon,
  CubeIcon,
  TruckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  UserIcon as UserIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid
} from '@heroicons/react/24/solid';
import { useSidebar } from '../../contexts/SidebarContext';

/**
 * Sidebar responsive con navegación adaptativa
 * Cambia opciones según si es ruta de admin o cliente
 * Se puede ocultar/mostrar y se adapta a móviles
 */
const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, closeSidebar, isMobile } = useSidebar();

  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  // Navegación para clientes
  const customerNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: ChartBarIcon, iconSolid: ChartBarIconSolid },
    { name: 'Menú', path: '/menu', icon: HomeIcon, iconSolid: HomeIconSolid },
    { name: 'Mis Pedidos', path: '/orders', icon: ClipboardDocumentListIcon, iconSolid: ClipboardDocumentListIconSolid },
    { name: 'Perfil', path: '/profile', icon: UserIcon, iconSolid: UserIconSolid },
  ];

  // Navegación para admin
  const adminNavItems = [
    { name: 'Dashboard', path: '/admin', icon: ChartBarIcon, iconSolid: ChartBarIconSolid },
    { name: 'Clientes', path: '/admin/clients', icon: UsersIcon, iconSolid: UsersIconSolid },
    { name: 'Inventario', path: '/admin/inventory', icon: CubeIcon, iconSolid: CubeIconSolid },
    { name: 'Entregas', path: '/admin/delivery', icon: TruckIcon, iconSolid: TruckIconSolid },
    { name: 'Métricas', path: '/admin/metrics', icon: ChartBarIcon, iconSolid: ChartBarIconSolid },
  ];

  const navItems = isAdminRoute ? adminNavItems : customerNavItems;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  const isActivePath = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname === path;
  };

  const handleNavClick = () => {
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside 
          className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col z-40 ${
            isMobile ? 'md:relative' : ''
          }`}
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Header del Sidebar */}
          <motion.div 
            className="px-6 py-6 border-b border-gray-100 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Botón cerrar para móvil */}
            {isMobile && (
              <button
                onClick={closeSidebar}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            )}

            <div className="flex items-center space-x-3">
              <img 
                src="/logo/logoCatemini.png" 
                alt="PortoCatering Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                PortoCatering
              </span>
            </div>
            {isAdminRoute && (
              <div className="mt-2">
                <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-full">
                  ADMIN
                </span>
              </div>
            )}
          </motion.div>

          {/* Navegación */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = isActivePath(item.path);
                const Icon = isActive ? item.iconSolid : item.icon;
                
                return (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      <Icon className={`mr-3 h-5 w-5 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-orange-600'
                      }`} />
                      <span className="flex-1">{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <motion.div 
            className="px-4 py-6 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => {
                handleLogout();
                handleNavClick();
              }}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
            >
              <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-gray-500 group-hover:text-red-600 transition-transform group-hover:scale-110" />
              <span>Cerrar Sesión</span>
            </button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 