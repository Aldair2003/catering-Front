import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  ClipboardDocumentListIcon, 
  UserIcon, 
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  UsersIcon,
  CubeIcon,
  TruckIcon
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

/**
 * Sidebar principal con navegación adaptativa
 * Cambia opciones según si es ruta de admin o cliente
 */
const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <motion.aside 
      className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col z-40"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header del Sidebar */}
      <motion.div 
        className="px-6 py-6 border-b border-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
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
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = isActivePath(item.path);
          const Icon = isActive ? item.iconSolid : item.icon;
          
          return (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer del Sidebar */}
      <div className="p-4 border-t border-gray-100">
        <motion.button
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
          onClick={handleLogout}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          <span>Cerrar Sesión</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar; 