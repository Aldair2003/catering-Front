import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CubeIcon,
  TruckIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid,
} from '@heroicons/react/24/solid';

/**
 * Header principal de la aplicación
 * Navegación simplificada para mostrar servicios de catering (sin compras)
 * 
 * Funcionalidades:
 * - Logo y marca con colores naranja
 * - Navegación básica: Solo Inicio + Admin
 * - Diseño enfocado en exhibición de servicios
 * - Animaciones suaves con Framer Motion
 */
const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  // Helper para determinar si el link está activo
  const isActivePath = (path: string) => location.pathname === path;
  
  // Configuración de navegación para clientes (simplificada)
  const customerNavigation = [
    { 
      name: 'Inicio', 
      path: '/', 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid 
    }
  ];
  
  // Configuración de navegación para admin
  const adminNavigation = [
    { 
      name: 'Dashboard', 
      path: '/admin', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid 
    },
    { 
      name: 'Clientes', 
      path: '/admin/clients', 
      icon: UsersIcon, 
      iconSolid: UsersIconSolid 
    },
    { 
      name: 'Inventario', 
      path: '/admin/inventory', 
      icon: CubeIcon, 
      iconSolid: CubeIconSolid 
    },
    { 
      name: 'Entregas', 
      path: '/admin/delivery', 
      icon: TruckIcon, 
      iconSolid: TruckIconSolid 
    },
  ];
  
  const navigation = isAdminRoute ? adminNavigation : customerNavigation;
  
  return (
    <motion.header 
      className="bg-white shadow-lg border-b border-orange-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y marca */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/logo/logoCatemini.png" 
                  alt="CateringPro Logo" 
                  className="h-10 w-10 object-contain"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  CateringPro
                </h1>
                <p className="text-xs text-orange-600">Servicios de Catering</p>
              </div>
            </Link>
          </motion.div>

          {/* Navegación principal - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = isActivePath(item.path);
              const Icon = isActive ? item.iconSolid : item.icon;
              
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path} 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-orange-700 bg-orange-50 font-semibold shadow-sm border border-orange-200' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-3">
            
            {/* Botones de autenticación */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/auth/login" 
                className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-50 transition-all duration-200 font-medium"
              >
                <UserIcon className="h-4 w-4" />
                <span>Iniciar Sesión</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/auth/register" 
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg font-medium"
              >
                <span>Registrarse</span>
              </Link>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-orange-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = isActivePath(item.path);
                const Icon = isActive ? item.iconSolid : item.icon;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-orange-700 bg-orange-50 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile auth buttons */}
              <div className="pt-4 border-t border-orange-100 space-y-2">
                <Link
                  to="/auth/login"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserIcon className="h-5 w-5" />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link
                  to="/auth/register"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Registrarse</span>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 